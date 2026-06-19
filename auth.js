// ═══════════════════════════════════════════════════════════
//  auth.js — Supabase Google OAuth (popup) + local user bridge
// ═══════════════════════════════════════════════════════════

const Auth = (function () {
  const PROVIDER_KEY = 'ews4_auth_provider';
  let client = null;
  let popupRef = null;
  let popupPollId = null;

  function getClient() {
    if (!window.isSupabaseConfigured()) return null;
    if (!client) client = window.createSupabaseClient();
    return client;
  }

  function isGoogleSession() {
    return localStorage.getItem(PROVIDER_KEY) === 'google';
  }

  function setGoogleProviderFlag(on) {
    if (on) localStorage.setItem(PROVIDER_KEY, 'google');
    else localStorage.removeItem(PROVIDER_KEY);
  }

  function syncSessionToLocalUser(session) {
    if (!session?.user) return null;

    const su = session.user;
    const meta = su.user_metadata || {};
    const name =
      meta.full_name ||
      meta.name ||
      (su.email ? su.email.split('@')[0] : 'Learner');
    const un = 'google_' + su.id.replace(/-/g, '').slice(0, 28);
    const avatar = meta.avatar_url || meta.picture || null;

    const arr = getUsers();
    let localUser = arr.find((u) => u.un === un);

    if (!localUser) {
      localUser = mkUser(name, un, '');
      localUser.authProvider = 'google';
      localUser.supabaseId = su.id;
      localUser.email = su.email || '';
      localUser.avatar = avatar;
      arr.push(localUser);
      saveUsers(arr);
    } else {
      localUser.name = name;
      localUser.authProvider = 'google';
      localUser.supabaseId = su.id;
      if (su.email) localUser.email = su.email;
      if (avatar) localUser.avatar = avatar;
      saveCU(localUser);
    }

    localStorage.setItem('ews4_cur', un);
    setGoogleProviderFlag(true);

    if (typeof saveAuthProfile === 'function') {
      saveAuthProfile({
        id: su.id,
        email: su.email,
        name,
        avatar,
        updatedAt: Date.now(),
      });
    }

    if (localUser.lang) {
      currentLang = localUser.lang;
      localStorage.setItem('ews4_lang', localUser.lang);
    }

    updStreak(localUser);
    saveCU(localUser);
    return localUser;
  }

  function showGoogleError(msg) {
    const el = document.getElementById('g-err');
    if (el) {
      el.textContent = msg;
      el.style.display = 'block';
    } else if (typeof showToast === 'function') {
      showToast(msg);
    }
  }

  function hideGoogleError() {
    const el = document.getElementById('g-err');
    if (el) el.style.display = 'none';
  }

  function stopPopupWatch() {
    if (popupPollId) {
      clearInterval(popupPollId);
      popupPollId = null;
    }
    popupRef = null;
  }

  function onPopupClosed() {
    stopPopupWatch();
    getClient()
      ?.auth.getSession()
      .then(({ data: { session } }) => {
        if (session) completeSignIn(session);
      });
  }

  function completeSignIn(session) {
    hideGoogleError();
    const user = syncSessionToLocalUser(session);
    if (!user) return;
    if (typeof launchApp === 'function') launchApp();
    else if (typeof showToast === 'function') {
      showToast('✅ ' + (currentLang === 'pt' ? 'Sessão iniciada!' : 'Signed in!'));
    }
  }

  async function signInWithGoogle() {
    if (typeof SFX !== 'undefined' && SFX.click) SFX.click();
    hideGoogleError();

    const sb = getClient();
    if (!sb) {
      showGoogleError(typeof t === 'function' ? t('googleNotConfigured') : 'Google login is not configured.');
      return;
    }

    const btn = document.getElementById('btn-google-login');
    if (btn) btn.disabled = true;

    const callbackUrl = new URL('auth-callback.html', window.location.href).href;

    const { data, error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: callbackUrl,
        skipBrowserRedirect: true,
        queryParams: { prompt: 'select_account' },
      },
    });

    if (btn) btn.disabled = false;

    if (error || !data?.url) {
      showGoogleError(error?.message || (typeof t === 'function' ? t('googleError') : 'Google sign-in failed.'));
      return;
    }

    if (typeof showToast === 'function') {
      showToast(typeof t === 'function' ? t('googleSigningIn') : 'Opening Google sign-in…');
    }

    const w = 500;
    const h = 640;
    const left = window.screenX + Math.max(0, (window.outerWidth - w) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - h) / 2);

    popupRef = window.open(
      data.url,
      'ews-google-auth',
      `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );

    if (!popupRef) {
      showGoogleError(
        typeof t === 'function'
          ? t('googlePopupBlocked')
          : 'Popup blocked. Allow popups for this site.'
      );
      return;
    }

    stopPopupWatch();
    popupPollId = setInterval(() => {
      if (popupRef && popupRef.closed) onPopupClosed();
    }, 400);
  }

  async function signOut() {
    stopPopupWatch();
    const sb = getClient();
    if (sb) await sb.auth.signOut();
    setGoogleProviderFlag(false);
    if (typeof clearAuthCache === 'function') clearAuthCache();
  }

  function handleAuthMessage(event) {
    if (event.origin !== window.location.origin) return;
    if (event.data?.type !== 'EWS_SUPABASE_AUTH') return;

    stopPopupWatch();
    if (popupRef && !popupRef.closed) popupRef.close();

    if (!event.data.ok) {
      const key =
        event.data.error === 'not_configured' ? 'googleNotConfigured' : 'googleError';
      showGoogleError(typeof t === 'function' ? t(key) : 'Sign-in failed.');
      return;
    }

    getClient()
      ?.auth.getSession()
      .then(({ data: { session } }) => {
        if (session) completeSignIn(session);
      });
  }

  function isLocalPasswordUser(user) {
    if (!user) return false;
    if (user.authProvider === 'local') return true;
    return !user.authProvider && !String(user.un).startsWith('google_');
  }

  async function tryRestoreSession() {
    const sb = getClient();
    if (!sb) return false;

    const { data: { session } } = await sb.auth.getSession();
    if (!session) {
      if (isGoogleSession()) setGoogleProviderFlag(false);
      return false;
    }

    const curKey = localStorage.getItem('ews4_cur');
    const curUser = typeof getCU === 'function' ? getCU() : null;
    if (curKey && isLocalPasswordUser(curUser)) {
      return false;
    }

    syncSessionToLocalUser(session);
    return true;
  }

  async function init() {
    window.addEventListener('message', handleAuthMessage);

    const googleBtn = document.getElementById('btn-google-login');
    if (googleBtn && !window.isSupabaseConfigured()) {
      googleBtn.setAttribute('aria-disabled', 'true');
      googleBtn.title =
        typeof t === 'function' ? t('googleNotConfigured') : 'Supabase not configured';
    }

    const sb = getClient();
    if (!sb) return;

    sb.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        syncSessionToLocalUser(session);
      }
      if (event === 'SIGNED_OUT') {
        setGoogleProviderFlag(false);
        if (typeof clearAuthCache === 'function') clearAuthCache();
      }
      if (event === 'TOKEN_REFRESHED' && session && typeof saveAuthProfile === 'function') {
        const meta = session.user?.user_metadata || {};
        saveAuthProfile({
          id: session.user.id,
          email: session.user.email,
          name: meta.full_name || meta.name,
          avatar: meta.avatar_url || meta.picture,
          updatedAt: Date.now(),
        });
      }
    });

    await tryRestoreSession();
  }

  return {
    init,
    signInWithGoogle,
    signOut,
    tryRestoreSession,
    isGoogleSession,
    syncSessionToLocalUser,
  };
})();

window.Auth = Auth;
window.signInWithGoogle = () => Auth.signInWithGoogle();