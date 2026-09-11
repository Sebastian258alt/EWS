// ═══════════════════════════════════════════════════════════
//  USER.JS — User storage, model, streak, level  v4.0
//  English With Sebastian
//  Extracted from app.js for independent updates.
//  Depends on: LEVELS (data.js), Progress (progress.js)
//  Exposes: window.getUsers, window.saveUsers, window.getCU,
//           window.saveCU, window.mkUser, window.ensureDemo,
//           window.updStreak, window.getLevel,
//           window.generateSessionToken
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── localStorage helpers ─────────────────────────────────
  const getUsers  = () => { try { return JSON.parse(localStorage.getItem('ews4_u') || '[]'); } catch { return []; } };
  const saveUsers = u  => localStorage.setItem('ews4_u', JSON.stringify(u));

  const getCU = () => {
    const n = localStorage.getItem('ews4_cur');
    return n ? getUsers().find(u => u.un === n) || null : null;
  };

  const saveCU = user => {
    user.updatedAt = Date.now();
    if (window.Progress) window.Progress.ensureUser(user);
    const arr = getUsers();
    const i = arr.findIndex(u => u.un === user.un);
    if (i >= 0) arr[i] = user; else arr.push(user);
    saveUsers(arr);
    if (typeof window.syncUserToSupabase === 'function') window.syncUserToSupabase(user);
  };

  // ── User factory ─────────────────────────────────────────
  // SECURITY (P0): `mkUser` used to accept a plaintext password and store
  // it verbatim in localStorage (`user.pw`). Passwords are now handled
  // exclusively by Supabase Auth (see js/auth.js: signUpWithPassword /
  // signInWithPassword) — this local profile object never carries a
  // credential. The `pw` parameter is still accepted (and ignored) so any
  // legacy caller doesn't crash; real callers should stop passing it.
  const mkUser = (name, un, _pwIgnored) => {
    const user = {
      name, un, xp: 0, level: 1, streak: 0, lastActive: null,
      todayXP: 0, todayDate: null, hearts: 5, gems: 20, done: [], achs: [],
      totalCor: 0, totalAns: 0, hadPerfect: false, maxCombo: 0,
      scrambleScore: 0, dailyChallengeDone: null, aiChats: 0, pronP: 0, gramR: 0,
      chatHistory: [], lang: 'en', createdAt: Date.now(),
      quizScores: [], gameHistory: [],
      authProvider: 'local',
    };
    return window.Progress ? window.Progress.initNewUser(user) : user;
  };

  // ── Demo seed (DEV-ONLY, opt-in) ───────────────────────────
  // SECURITY (P0): this used to run unconditionally on every app boot,
  // silently creating a well-known `test` / `1234` account with a
  // plaintext password in EVERY visitor's browser, including production.
  // It is now a no-op unless a developer explicitly opts in the same way
  // js/debug-panel.js already does (?debug=1 or localStorage 'ews_debug'),
  // and it never sets a plaintext password — the resulting account is
  // local-only (authProvider: 'local-dev') and is not synced to Supabase.
  function _devModeOn() {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('debug') === '1') return true;
      return window.localStorage.getItem('ews_debug') === '1';
    } catch { return false; }
  }

  function ensureDemo() {
    if (!_devModeOn()) return;
    const arr = getUsers();
    if (!arr.find(u => u.un === 'test')) {
      const d = mkUser('Sebastian (dev)', 'test');
      d.authProvider = 'local-dev';
      d.xp = 85; d.streak = 2; d.gems = 15; d.totalCor = 12; d.totalAns = 15;
      d.done = ['l1', 'l2'];
      d.sessionToken = generateSessionToken();
      d.tokenExpiry  = Date.now() + 7 * 24 * 60 * 60 * 1000;
      arr.push(d); saveUsers(arr);
      console.warn('[EWS] Dev demo account "test" created because dev mode is on. This never happens for real visitors.');
    }
  }

  // ── Streak ───────────────────────────────────────────────
  function updStreak(u) {
    if (window.Progress) return window.Progress.touchActivity(u);
    const today = new Date().toDateString();
    const yest  = new Date(Date.now() - 86400000).toDateString();
    if (u.lastActive === today) return;
    u.streak = u.lastActive === yest ? u.streak + 1 : 1;
    u.lastActive = today;
    if (u.todayDate !== today) { u.todayXP = 0; u.todayDate = today; u.dailyChallengeDone = null; }
  }

  // ── Level ────────────────────────────────────────────────
  function getLevel(xp) {
    return LEVELS.reduce((acc, l) => xp >= l.prev ? l : acc, LEVELS[0]);
  }

  // ── Session token ─────────────────────────────────────────
  // SECURITY (P0): was Math.random()-based (predictable). Now backed by
  // crypto.getRandomValues via security-utils.js. This is only ever used
  // as a local "am I plausibly still logged in" flag for local-only
  // accounts — the real, unforgeable session for Supabase-authenticated
  // users is the JWT that supabase-js manages itself.
  function generateSessionToken() {
    return window.secureToken ? window.secureToken(24) : (Math.random().toString(36).substring(2, 22) + Date.now().toString(36));
  }

  // ── Expose globally ──────────────────────────────────────
  window.getUsers            = getUsers;
  window.saveUsers           = saveUsers;
  window.getCU               = getCU;
  window.saveCU              = saveCU;
  window.mkUser              = mkUser;
  window.ensureDemo          = ensureDemo;
  window.updStreak           = updStreak;
  window.getLevel            = getLevel;
  window.generateSessionToken = generateSessionToken;

}());
