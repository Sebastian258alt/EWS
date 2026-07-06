// ═══════════════════════════════════════════════════════════
//  admin-api.js — data access layer
//
//  Every call here goes through the SAME Supabase client the main
//  app uses (anon key only), so every request runs as the signed-in
//  user and is enforced by Postgres RLS — there is no service-role
//  key anywhere in this panel. If someone who is not in public.admins
//  reaches this code, every read/write below simply returns 0 rows /
//  a permission error, because the DB — not this JS — is the gate.
// ═══════════════════════════════════════════════════════════

const AdminAPI = (function () {
  let client = null;

  function getClient() {
    if (!client) client = window.createSupabaseClient();
    return client;
  }

  // ── Session / admin gate ────────────────────────────────────
  async function getSession() {
    const sb = getClient();
    if (!sb) return null;
    const { data, error } = await sb.auth.getSession();
    if (error) {
      console.error('getSession error', error);
      return null;
    }
    return data.session;
  }

  async function signInWithGoogle() {
    const sb = getClient();
    if (!sb) throw new Error('Supabase is not configured.');
    const redirectTo = new URL('index.html', window.location.href).href;
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    });
    if (error) throw error;
  }

  async function signOut() {
    const sb = getClient();
    if (sb) await sb.auth.signOut();
  }

  // Admin status is decided by Postgres, not by this function's return
  // value alone — this just surfaces the DB's answer to the UI so we can
  // show/hide the panel. Every actual query below is still enforced by RLS
  // regardless of what this returns.
  async function checkIsAdmin() {
    const sb = getClient();
    if (!sb) return false;
    const { data, error } = await sb.rpc('is_admin');
    if (error) {
      console.error('is_admin() rpc error', error);
      return false;
    }
    return data === true;
  }

  // ── Generic CRUD ────────────────────────────────────────────
  async function list(tableName, { orderBy, ascending = true } = {}) {
    const sb = getClient();
    let q = sb.from(tableName).select('*');
    if (orderBy) q = q.order(orderBy, { ascending, nullsFirst: false });
    const { data, error } = await q;
    if (error) throw error;
    return data || [];
  }

  async function listAll(tableName) {
    // used for populating foreign-key <select> dropdowns — no ordering requirement
    const sb = getClient();
    const { data, error } = await sb.from(tableName).select('*');
    if (error) throw error;
    return data || [];
  }

  async function insertRow(tableName, row) {
    const sb = getClient();
    const { data, error } = await sb.from(tableName).insert(row).select();
    if (error) throw error;
    return data?.[0];
  }

  async function updateRow(tableName, matchObj, patch) {
    const sb = getClient();
    let q = sb.from(tableName).update(patch);
    Object.entries(matchObj).forEach(([col, val]) => {
      q = q.eq(col, val);
    });
    const { data, error } = await q.select();
    if (error) throw error;
    return data?.[0];
  }

  async function deleteRow(tableName, matchObj) {
    const sb = getClient();
    let q = sb.from(tableName).delete();
    Object.entries(matchObj).forEach(([col, val]) => {
      q = q.eq(col, val);
    });
    const { error } = await q;
    if (error) throw error;
    return true;
  }

  async function count(tableName) {
    const sb = getClient();
    const { count: n, error } = await sb
      .from(tableName)
      .select('*', { count: 'exact', head: true });
    if (error) throw error;
    return n || 0;
  }

  return {
    getSession,
    signInWithGoogle,
    signOut,
    checkIsAdmin,
    list,
    listAll,
    insertRow,
    updateRow,
    deleteRow,
    count,
  };
})();

window.AdminAPI = AdminAPI;
