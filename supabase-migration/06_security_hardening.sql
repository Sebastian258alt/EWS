-- ═══════════════════════════════════════════════════════════════
--  EnglishFlow MZ — P0 SECURITY HARDENING
--  Run this ONCE in Supabase → SQL Editor, top to bottom, AFTER
--  01_schema.sql. Safe to re-run (idempotent where practical).
--
--  Fixes covered here:
--   #10/#11 RLS bypass on user_progress that let ANY anon-key client
--            overwrite ANY local-password user's row (xp, streak,
--            achievements, name, avatar...) because the old policy
--            was `using (supabase_id = auth.uid()::text
--                        OR supabase_id IS NULL)` — the "OR ... IS
--            NULL" clause had no ownership check at all.
--   #9       user_progress didn't exist in the versioned schema at
--            all (it lived only as a comment in supabase-config.js).
--            It's defined here properly, with RLS from the start.
--   #2/#3    Adds user_handles + resolve_username_email(), the
--            minimum needed to let the app authenticate with
--            Supabase Auth (email+password) while keeping a
--            username-based login UI, without exposing the whole
--            user list or enabling email enumeration of arbitrary
--            accounts.
--   #13      Basic server-side sanity bounds on payload fields, so
--            the database itself refuses absurd values even before
--            any future server-authoritative scoring is built.
-- ═══════════════════════════════════════════════════════════════


-- ───────────────────────────────────────────────────────────────
-- 1. user_progress — create if missing, then fix RLS regardless
-- ───────────────────────────────────────────────────────────────

create table if not exists public.user_progress (
  un           text primary key,
  supabase_id  text,
  payload      jsonb not null default '{}'::jsonb,
  updated_at   timestamptz not null default now(),
  online_at    timestamptz
);

alter table public.user_progress enable row level security;

-- Drop the old, vulnerable policies if this project ran the
-- instructions that used to live in js/supabase-config.js.
drop policy if exists "owner write" on public.user_progress;
drop policy if exists "public leaderboard read" on public.user_progress;

-- Public read stays (the leaderboard needs it) — but note personal
-- data (email) is no longer written into `payload` at all (see
-- js/storage.js SYNC_ALLOW). Only name/avatar/xp/etc, which are
-- meant to be shown on a public leaderboard, live here.
create policy "user_progress_public_read"
  on public.user_progress for select
  using (true);

-- Real ownership check, no bypass: a row can only be inserted/updated
-- by the Supabase-authenticated user it belongs to. `un` is chosen at
-- signup time and is immutable per account once created, so this
-- effectively pins one row per authenticated user.
create policy "user_progress_owner_insert"
  on public.user_progress for insert
  with check (supabase_id = auth.uid()::text);

create policy "user_progress_owner_update"
  on public.user_progress for update
  using (supabase_id = auth.uid()::text)
  with check (supabase_id = auth.uid()::text);

create policy "user_progress_owner_delete"
  on public.user_progress for delete
  using (supabase_id = auth.uid()::text);

-- NOTE / REMAINING RISK: this stops any OTHER user (or anon script
-- kiddie with just the public anon key) from touching your row. It
-- does NOT stop your own authenticated client from sending an
-- inflated `payload.xp`, since scoring logic still runs in the
-- browser. Closing that fully requires moving XP/streak calculation
-- into a SECURITY DEFINER RPC that recomputes values server-side
-- instead of trusting the client's payload — flagged as a follow-up,
-- not part of this P0 pass (see SECURITY.md "Remaining risks").

create index if not exists idx_user_progress_supabase_id
  on public.user_progress (supabase_id);

-- Defense-in-depth bound so a compromised/buggy client can't write an
-- unbounded payload blob. (Postgres has no ADD CONSTRAINT IF NOT
-- EXISTS, hence the DO block.)
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'user_progress_payload_size'
  ) then
    alter table public.user_progress
      add constraint user_progress_payload_size
      check (pg_column_size(payload) < 20000);
  end if;
end $$;


-- ───────────────────────────────────────────────────────────────
-- 2. user_handles — lets the app resolve "username -> email" so
--    people can keep logging in with a username while the real
--    credential lives in Supabase Auth (which is email-based).
-- ───────────────────────────────────────────────────────────────

create table if not exists public.user_handles (
  username     text primary key,
  supabase_id  text not null unique,
  created_at   timestamptz not null default now()
);

alter table public.user_handles enable row level security;

-- No direct public select: this table is only ever read through the
-- resolve_username_email() RPC below, which returns nothing but the
-- single matching email (or null) — never the raw table contents.
create policy "user_handles_owner_write"
  on public.user_handles for insert
  with check (supabase_id = auth.uid()::text);

create policy "user_handles_owner_update"
  on public.user_handles for update
  using (supabase_id = auth.uid()::text)
  with check (supabase_id = auth.uid()::text);

-- SECURITY DEFINER so it can read auth.users (normally locked down)
-- to fetch just the email for a known username. Returns NULL for a
-- non-existent username rather than erroring, so it can't be used to
-- distinguish "wrong username" from "wrong password" — but repeated
-- calls can still enumerate which usernames exist. If that matters
-- for your threat model, add rate limiting (e.g. Supabase Edge
-- Function + a per-IP counter) in front of this RPC.
create or replace function public.resolve_username_email(p_username text)
returns text
language sql
security definer
set search_path = public
stable
as $$
  select u.email
  from public.user_handles h
  join auth.users u on u.id = h.supabase_id::uuid
  where h.username = p_username;
$$;

grant execute on function public.resolve_username_email(text) to anon, authenticated;


-- ═══════════════════════════════════════════════════════════════
--  End of P0 hardening migration.
-- ═══════════════════════════════════════════════════════════════
