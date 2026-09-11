-- ═══════════════════════════════════════════════════════════════
--  English With Sebastian — Supabase schema
--  Run this ONCE in Supabase → SQL Editor (whole file, top to bottom)
--
--  Covers every table in js/admin-tables.js:
--    Live content:  units, lessons, grammar, translations
--    Draft content: admin_content_units, admin_content_lessons,
--                    admin_content_grammar, admin_translations
--  Plus the admin gate: admins table + is_admin() RPC used by
--  js/admin-api.js and js/admin.js.
--
--  NOTE on `grammar`: js/admin-tables.js's live `grammar` entry only
--  lists (id, title, subtitle, formula, tip, examples, quiz). Your
--  actual GRAM data in data.js also carries cat, cc (colour), icon,
--  uses, signals and mistakes per rule. If you run ONLY section 3
--  below, those extra fields have nowhere to go and will be dropped
--  on migration. Section 3b adds the extra columns so nothing is
--  lost — recommended unless you deliberately want the slimmer
--  shape. See the note before section 3b for the tradeoff.
-- ═══════════════════════════════════════════════════════════════

-- ───────────────────────────────────────────────────────────────
-- 1. ADMIN GATE
-- ───────────────────────────────────────────────────────────────

create table if not exists public.admins (
  email       text primary key,
  created_at  timestamptz not null default now()
);

-- Locked down: no insert/update/delete policies at all, and no
-- select policy either. Only the SQL editor / service role can
-- read or write this table. is_admin() below is SECURITY DEFINER,
-- so it can still check membership regardless of RLS.
alter table public.admins enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admins
    where email = (auth.jwt() ->> 'email')
  );
$$;

-- anon needs execute so logged-out users get a clean `false`
-- instead of a permission error when the app checks admin status.
grant execute on function public.is_admin() to anon, authenticated;

-- Seed yourself as the first admin (edit the email, then run):
-- insert into public.admins (email) values ('you@example.com');


-- ───────────────────────────────────────────────────────────────
-- 2. LIVE CONTENT — units
-- ───────────────────────────────────────────────────────────────

create table if not exists public.units (
  id               text primary key,
  title            text not null,
  title_pt         text,
  description      text,
  description_pt   text,
  color            text,
  icon             text,
  premium          boolean not null default false,
  sort_order       integer not null default 0
);

-- RECOMMENDED: admin-tables.js's `units` entry has no column for CEFR
-- level (A0/A1/B1...), but js/ui-curriculum.js filters units by
-- unit.cefr. Without this column the level filter silently breaks
-- once content comes from Supabase. Add it (and expose it in
-- admin-tables.js) unless you're dropping that filter deliberately.
alter table public.units add column if not exists cefr text;

alter table public.units enable row level security;

create policy "units_public_read"   on public.units for select using (true);
create policy "units_admin_insert"  on public.units for insert with check (is_admin());
create policy "units_admin_update"  on public.units for update using (is_admin()) with check (is_admin());
create policy "units_admin_delete"  on public.units for delete using (is_admin());


-- ───────────────────────────────────────────────────────────────
-- 3. LIVE CONTENT — lessons
--    `questions` holds the WHOLE lesson payload as one JSON blob:
--    { "learn": { explanation, examples, practice } | null,
--      "qs": [ {q, opts, ans, exp}, ... ] }
-- ───────────────────────────────────────────────────────────────

create table if not exists public.lessons (
  id          text primary key,
  unit_id     text not null references public.units(id) on delete cascade,
  title       text not null,
  title_pt    text,
  icon        text,
  xp          integer default 0,
  questions   jsonb,
  sort_order  integer not null default 0
);

create index if not exists idx_lessons_unit_id on public.lessons (unit_id);

alter table public.lessons enable row level security;

create policy "lessons_public_read"   on public.lessons for select using (true);
create policy "lessons_admin_insert"  on public.lessons for insert with check (is_admin());
create policy "lessons_admin_update"  on public.lessons for update using (is_admin()) with check (is_admin());
create policy "lessons_admin_delete"  on public.lessons for delete using (is_admin());


-- ───────────────────────────────────────────────────────────────
-- 3a. LIVE CONTENT — grammar (SLIM shape, exactly as admin-tables.js
--     lists it today). Skip this and use 3b instead if you want the
--     fuller shape that matches your actual GRAM data.
-- ───────────────────────────────────────────────────────────────

create table if not exists public.grammar (
  id        text primary key,
  title     text not null,
  subtitle  text,
  formula   text,
  tip       text,
  examples  jsonb,
  quiz      jsonb
);

alter table public.grammar enable row level security;

create policy "grammar_public_read"   on public.grammar for select using (true);
create policy "grammar_admin_insert"  on public.grammar for insert with check (is_admin());
create policy "grammar_admin_update"  on public.grammar for update using (is_admin()) with check (is_admin());
create policy "grammar_admin_delete"  on public.grammar for delete using (is_admin());

-- ───────────────────────────────────────────────────────────────
-- 3b. RECOMMENDED: extend `grammar` so category/colour/icon/uses/
--     signals/mistakes survive migration. Run this right after 3a.
--     (If you'd rather keep the slim shape, don't run this block —
--     but then use seed_grammar_slim.sql instead of seed_grammar.sql
--     and expect to lose cat/cc/icon/uses/signals/mistakes.)
-- ───────────────────────────────────────────────────────────────

alter table public.grammar
  add column if not exists category text,
  add column if not exists country_code text,   -- was `cc` (hex colour) in the static data
  add column if not exists icon text,
  add column if not exists uses jsonb,
  add column if not exists signals jsonb,
  add column if not exists mistakes jsonb;


-- ───────────────────────────────────────────────────────────────
-- 4. LIVE CONTENT — translations
--    Natural key is (language, key_name); id stays DB-generated
--    per admin-tables.js's pkEditable:false + orderBy:'created_at'.
-- ───────────────────────────────────────────────────────────────

create table if not exists public.translations (
  id          bigint generated always as identity primary key,
  language    text not null,
  key_name    text not null,
  value       text not null,
  created_at  timestamptz not null default now(),
  unique (language, key_name)
);

create index if not exists idx_translations_language on public.translations (language);

alter table public.translations enable row level security;

create policy "translations_public_read"   on public.translations for select using (true);
create policy "translations_admin_insert"  on public.translations for insert with check (is_admin());
create policy "translations_admin_update"  on public.translations for update using (is_admin()) with check (is_admin());
create policy "translations_admin_delete"  on public.translations for delete using (is_admin());


-- ───────────────────────────────────────────────────────────────
-- 5. DRAFT / ADMIN CONTENT TABLES
--    These are a staging area only admins ever see — no public
--    read policy at all (unlike the live tables above).
-- ───────────────────────────────────────────────────────────────

create table if not exists public.admin_content_units (
  id               bigint generated always as identity primary key,
  title            text not null,
  title_pt         text,
  description      text,
  description_pt   text,
  color            text,
  icon             text,
  premium          boolean default false,
  order_index      integer default 0
);

alter table public.admin_content_units enable row level security;
create policy "acu_admin_all" on public.admin_content_units for all
  using (is_admin()) with check (is_admin());


create table if not exists public.admin_content_lessons (
  id           bigint generated always as identity primary key,
  unit_id      bigint references public.admin_content_units(id) on delete cascade,
  title        text not null,
  title_pt     text,
  icon         text,
  xp           integer default 0,
  order_index  integer default 0,
  questions    jsonb
);

create index if not exists idx_acl_unit_id on public.admin_content_lessons (unit_id);

alter table public.admin_content_lessons enable row level security;
create policy "acl_admin_all" on public.admin_content_lessons for all
  using (is_admin()) with check (is_admin());


create table if not exists public.admin_content_grammar (
  id           bigint generated always as identity primary key,
  cat          text,
  cc           text,
  icon         text,
  title        text not null,
  sub          text,
  formula      text,
  uses         jsonb,
  examples     jsonb,
  signals      jsonb,
  tip          text,
  mistakes     jsonb,
  quiz         jsonb,
  order_index  integer default 0
);

alter table public.admin_content_grammar enable row level security;
create policy "acg_admin_all" on public.admin_content_grammar for all
  using (is_admin()) with check (is_admin());


create table if not exists public.admin_translations (
  lang   text not null,
  key    text not null,
  value  text not null,
  primary key (lang, key)
);

alter table public.admin_translations enable row level security;
create policy "at_admin_all" on public.admin_translations for all
  using (is_admin()) with check (is_admin());

-- ═══════════════════════════════════════════════════════════════
--  End of schema. Next: run seed_units_lessons.sql, seed_grammar.sql
--  (or seed_grammar_slim.sql), and seed_translations.sql to migrate
--  the existing static content into these live tables.
-- ═══════════════════════════════════════════════════════════════
