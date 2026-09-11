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
      // Sprint 4 locale-split: this bypasses setLang(), so make sure the
      // locale file actually gets fetched if it isn't already loaded.
      if (window.ensureLocaleLoaded) window.ensureLocaleLoaded(localUser.lang).then(() => window.applyLang && window.applyLang());
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
    if (user.authProvider === 'local' || user.authProvider === 'local-dev') return true;
    return !user.authProvider && !String(user.un).startsWith('google_');
  }

  // ═══════════════════════════════════════════════════════════
  //  P0 SECURITY: username/password auth via Supabase Auth
  // ═══════════════════════════════════════════════════════════
  //  Passwords are NEVER stored by this app. `sb.auth.signUp` /
  //  `signInWithPassword` hand the password straight to Supabase's
  //  GoTrue service over TLS; only a session JWT comes back. See
  //  SECURITY.md for the full design and the one-time legacy
  //  migration this replaces.
  // ═══════════════════════════════════════════════════════════

  // Supabase Auth is email-based; the app's UI is username-based.
  // Resolve a username -> email first on this device's own local
  // profile list (fast path for the device that registered), then
  // fall back to the `resolve_username_email` RPC (see
  // supabase-migration/06_security_hardening.sql) which is the only
  // thing allowed to read that mapping cross-device.
  async function resolveEmailForUsername(username) {
    const local = getUsers().find((u) => u.un === username);
    if (local?.email) return local.email;

    const sb = getClient();
    if (!sb) return null;
    try {
      const { data, error } = await sb.rpc('resolve_username_email', { p_username: username });
      if (error) return null;
      return data || null;
    } catch {
      return null;
    }
  }

  // Placeholder email for users who don't want to share a real one.
  // They keep working exactly as before (login via username), they just
  // can't use Supabase's "forgot password" email flow unless they later
  // add a real email from Settings.
  function syntheticEmail(username) {
    return `${username}.local@users.englishflowmz.app`;
  }

  async function upsertUsernameHandle(username, supabaseId) {
    const sb = getClient();
    if (!sb) return;
    try {
      await sb.from('user_handles').upsert(
        { username, supabase_id: supabaseId },
        { onConflict: 'username' }
      );
    } catch (err) {
      console.warn('[Auth] user_handles upsert failed (non-fatal):', err.message);
    }
  }

  // Turn a freshly-created/authenticated Supabase Auth session into this
  // app's local profile object, preserving the CHOSEN username (unlike
  // syncSessionToLocalUser, which is Google-only and derives a
  // `google_<id>` handle).
  function syncPasswordSessionToLocalUser(session, { name, username } = {}) {
    if (!session?.user) return null;
    const su = session.user;
    const un = username || (getCU()?.un);
    if (!un) return null;

    const arr = getUsers();
    let localUser = arr.find((u) => u.un === un);

    if (!localUser) {
      localUser = mkUser(name || un, un);
      arr.push(localUser);
    }

    localUser.authProvider = 'supabase';
    localUser.supabaseId = su.id;
    delete localUser.pw; // belt-and-braces: never persist a plaintext password
    saveUsers(arr);
    saveCU(localUser);

    localStorage.setItem('ews4_cur', un);
    return localUser;
  }

  async function signUpWithPassword({ name, username, email, password }) {
    const sb = getClient();
    if (!sb) return { ok: false, error: 'not_configured' };

    const useEmail = email || syntheticEmail(username);
    const { data, error } = await sb.auth.signUp({
      email: useEmail,
      password,
      options: { data: { full_name: name, ews_username: username } },
    });
    if (error) return { ok: false, error: error.message };

    const session = data.session;
    const localUser = session
      ? syncPasswordSessionToLocalUser(session, { name, username })
      : (() => {
          // Email confirmation required before a session exists: still
          // create the local profile so the app is usable offline; it
          // will pick up authProvider/supabaseId for real once the user
          // confirms and signs in.
          const arr = getUsers();
          const u = mkUser(name, username);
          u.authProvider = 'supabase-pending';
          u.supabaseId = data.user?.id || null;
          arr.push(u);
          saveUsers(arr);
          localStorage.setItem('ews4_cur', username);
          return u;
        })();

    if (email) localUser.email = email; // kept locally only; never synced (see storage.js)
    saveCU(localUser);
    if (data.user?.id) await upsertUsernameHandle(username, data.user.id);

    return { ok: true, user: localUser, needsEmailConfirmation: !session };
  }

  async function signInWithPassword({ username, password }) {
    const sb = getClient();
    if (!sb) return { ok: false, error: 'not_configured' };

    const email = await resolveEmailForUsername(username);
    if (!email) return { ok: false, error: 'user_not_found' };

    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error || !data.session) return { ok: false, error: error?.message || 'invalid_credentials' };

    const localUser = syncPasswordSessionToLocalUser(data.session, { username });
    return { ok: true, user: localUser };
  }

  // One-time, transparent migration for accounts created before this P0
  // hardening pass, which still have a plaintext `pw` in localStorage.
  // Called ONLY after the app has already verified `password` matches
  // that stored plaintext value locally (see app.js doLogin) — i.e. this
  // never sends an unverified guess to Supabase, and it deletes the
  // plaintext field the moment migration succeeds either way.
  async function migrateLegacyLocalUser(user, password) {
    const sb = getClient();
    if (!sb || !user) return false;

    const email = user.email || syntheticEmail(user.un);
    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { full_name: user.name, ews_username: user.un } },
    });

    if (error) {
      // Most likely cause: this synthetic/real email is already registered
      // (e.g. migration already ran on another device). Try signing in
      // instead — if that also fails, leave `pw` in place so the user can
      // still log in locally and we can retry migration next time.
      const signIn = await sb.auth.signInWithPassword({ email, password }).catch(() => null);
      if (!signIn?.data?.session) return false;
      syncPasswordSessionToLocalUser(signIn.data.session, { username: user.un });
    } else if (data.session) {
      syncPasswordSessionToLocalUser(data.session, { username: user.un });
    } else {
      // Supabase project requires email confirmation — can't fully migrate
      // yet. Keep the account usable locally; don't delete `pw` until a
      // real Supabase session is established, or the person would be
      // locked out.
      return false;
    }

    const arr = getUsers();
    const idx = arr.findIndex((u) => u.un === user.un);
    if (idx >= 0) {
      delete arr[idx].pw;
      arr[idx].authProvider = 'supabase';
      saveUsers(arr);
    }
    if (user.supabaseId) await upsertUsernameHandle(user.un, user.supabaseId);
    return true;
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
    signUpWithPassword,
    signInWithPassword,
    migrateLegacyLocalUser,
    resolveEmailForUsername,
  };
})();

window.Auth = Auth;
window.signInWithGoogle = () => Auth.signInWithGoogle();