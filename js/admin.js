// ═══════════════════════════════════════════════════════════
//  admin.js — bootstrap, auth gate, nav + routing
// ═══════════════════════════════════════════════════════════

(function () {
  const gateEl = document.getElementById('gate');
  const appEl = document.getElementById('app');
  const navEl = document.getElementById('nav');
  const userBadgeEl = document.getElementById('user-badge');

  function showGate(message) {
    appEl.hidden = true;
    gateEl.hidden = false;
    if (message) document.getElementById('gate-message').textContent = message;
  }

  function showApp() {
    gateEl.hidden = true;
    appEl.hidden = false;
  }

  function buildNav() {
    const groups = {};
    Object.entries(ADMIN_TABLES).forEach(([key, cfg]) => {
      groups[cfg.group] = groups[cfg.group] || [];
      groups[cfg.group].push([key, cfg]);
    });

    let html = `<button class="nav-link" data-route="dashboard">📊 Dashboard</button>`;
    Object.entries(groups).forEach(([groupName, items]) => {
      html += `<div class="nav-group-label">${groupName}</div>`;
      items.forEach(([key, cfg]) => {
        html += `<button class="nav-link" data-route="table:${key}">${cfg.label}</button>`;
      });
    });
    navEl.innerHTML = html;

    navEl.querySelectorAll('.nav-link').forEach((btn) => {
      btn.addEventListener('click', () => navigate(btn.dataset.route));
    });
  }

  function setActiveNav(route) {
    navEl.querySelectorAll('.nav-link').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.route === route);
    });
  }

  function navigate(route) {
    setActiveNav(route);
    if (route === 'dashboard') {
      AdminUI.renderDashboard();
    } else if (route.startsWith('table:')) {
      AdminUI.renderList(route.slice('table:'.length));
    }
  }

  async function init() {
    if (!window.isSupabaseConfigured || !window.isSupabaseConfigured()) {
      showGate('Supabase is not configured (check js/supabase-config.js). The admin panel cannot start.');
      return;
    }

    const session = await AdminAPI.getSession();
    if (!session) {
      showGate('Please sign in with the Google account that has admin access.');
      return;
    }

    const isAdmin = await AdminAPI.checkIsAdmin();
    if (!isAdmin) {
      showGate(`Signed in as ${session.user.email}, but this account is not an admin. Ask an existing admin to add your email to public.admins.`);
      return;
    }

    userBadgeEl.textContent = session.user.email;
    buildNav();
    showApp();
    navigate('dashboard');
  }

  document.getElementById('btn-google-signin').addEventListener('click', async () => {
    try {
      await AdminAPI.signInWithGoogle();
    } catch (e) {
      showGate('Sign-in failed: ' + (e.message || 'unknown error'));
    }
  });

  document.getElementById('btn-signout').addEventListener('click', async () => {
    await AdminAPI.signOut();
    window.location.reload();
  });

  init();
})();
