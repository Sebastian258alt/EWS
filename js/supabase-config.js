// ═══════════════════════════════════════════════════════════
//  supabase-config.js — Supabase project credentials
//  Replace placeholders with your Project URL + anon public key
//  (Supabase Dashboard → Project Settings → API)
// ═══════════════════════════════════════════════════════════
//
//  ── REQUIRED SUPABASE TABLE ─────────────────────────────
//  Run this SQL once in Supabase → SQL Editor:
//
//  create table if not exists public.user_progress (
//    un           text primary key,
//    supabase_id  text,
//    payload      jsonb not null default '{}'::jsonb,
//    updated_at   timestamptz not null default now()
//  );
//
//  -- Row-Level Security: allow public reads for leaderboard
//  alter table public.user_progress enable row level security;
//
//  create policy "public leaderboard read" on public.user_progress
//    for select using (true);
//
//  create policy "owner write" on public.user_progress
//    for all using (supabase_id = auth.uid()::text OR supabase_id IS NULL)
//    with check (supabase_id = auth.uid()::text OR supabase_id IS NULL);
//
//  -- Index for fast lookups
//  create index if not exists idx_up_supabase_id
//    on public.user_progress (supabase_id);
//
//  ── NOTES ────────────────────────────────────────────────
//  • The anon key is intentionally public — RLS above protects the data.
//  • Local-password users (no supabase_id) are synced anonymously.
// ═══════════════════════════════════════════════════════════

const SUPABASE_URL = 'https://xlpwrwourxcanpyfnivz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscHdyd291cnhjYW5weWZuaXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNjIxNjEsImV4cCI6MjA5NTYzODE2MX0.nPWZLnhodrNbwarx2SFKRvLoLnE-G3BCmcYXWQ1qApU';

function isSupabaseConfigured() {
  return Boolean(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes('YOUR_SUPABASE') &&
    !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE')
  );
}

let _supabaseClient = null;

function createSupabaseClient() {
  if (!isSupabaseConfigured() || typeof supabase === 'undefined') return null;
  if (!_supabaseClient) {
    _supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storage: window.localStorage,
        storageKey: 'ews4_supabase_auth',
      },
    });
  }
  return _supabaseClient;
}

window.isSupabaseConfigured = isSupabaseConfigured;
window.createSupabaseClient = createSupabaseClient;