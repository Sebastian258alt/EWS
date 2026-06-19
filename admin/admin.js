let sb = null;

async function initAdmin() {
  sb = getAdminSupabase();
  if (!sb) {
    document.getElementById('loginError').textContent = 'Supabase not configured.';
    return;
  }

  // Check existing session
  const { data: { session } } = await sb.auth.getSession();
  if (session && await isAdminUser()) {
    showDashboard();
  } else {
    document.getElementById('loginContainer').style.display = 'flex';
  }

  document.getElementById('loginBtn').onclick = async () => {
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      document.getElementById('loginError').textContent = error.message;
      return;
    }
    if (await isAdminUser()) {
      showDashboard();
    } else {
      await sb.auth.signOut();
      document.getElementById('loginError').textContent = 'You are not authorized as admin.';
    }
  };

  document.getElementById('logoutBtn').onclick = async () => {
    await sb.auth.signOut();
    location.reload();
  };
}

function showDashboard() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  // TODO: load units, grammar, translations (Step 3)
}

initAdmin();