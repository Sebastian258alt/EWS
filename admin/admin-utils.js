// Supabase client helper
let _adminSupabase = null;

function getAdminSupabase() {
  if (!_adminSupabase && window.createSupabaseClient) {
    _adminSupabase = window.createSupabaseClient();
  }
  return _adminSupabase;
}

async function isAdminUser() {
  const sb = getAdminSupabase();
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return false;
  const { data, error } = await sb
    .from('admins')
    .select('email')
    .eq('email', user.email)
    .maybeSingle();
  return !error && !!data;
}