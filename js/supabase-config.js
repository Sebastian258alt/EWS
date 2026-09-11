// ═══════════════════════════════════════════════════════════
//  supabase-config.js — Supabase project credentials
//  Replace placeholders with your Project URL + anon public key
//  (Supabase Dashboard → Project Settings → API)
// ═══════════════════════════════════════════════════════════
//
//  ── REQUIRED SUPABASE SETUP ──────────────────────────────
//  Run, in order, in Supabase → SQL Editor:
//    1. supabase-migration/01_schema.sql
//    2. supabase-migration/06_security_hardening.sql   <- REQUIRED (P0)
//
//  P0 SECURITY NOTE (read this if this project was set up before the
//  P0 hardening pass): the "owner write" policy that used to be
//  documented here —
//    using (supabase_id = auth.uid()::text OR supabase_id IS NULL)
//  — let ANY client with just this public anon key overwrite ANY
//  local-password user's row (xp, streak, achievements, name...),
//  because the "OR supabase_id IS NULL" clause had no real ownership
//  check. 06_security_hardening.sql replaces it with a policy that
//  requires supabase_id = auth.uid()::text, no exceptions. Run it.
//
//  ── NOTES ────────────────────────────────────────────────
//  • The anon key is intentionally public — RLS protects the data,
//    not secrecy of this key. Never put a service_role key here or
//    anywhere else in frontend code.
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