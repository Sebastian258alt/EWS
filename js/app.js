// ═══════════════════════════════════════════════════════════
//  🚀 APP.JS — Core: Storage, Auth, Theme, Lang, Nav, Utils
//  English With Sebastian v3.0 (Gemini AI + session tokens)
// ═══════════════════════════════════════════════════════════

// Guard: ensure data.js loaded
if (typeof UNITS === 'undefined' || typeof TRANSLATIONS === 'undefined') {
  console.error('CRITICAL: data.js failed to load. App cannot start.');
  document.body.innerHTML = '<div style="text-align:center;padding:2rem;background:#ffebee;color:#c62828;">Loading error – please refresh the page. If the problem persists, clear your browser cache.</div>';
  throw new Error('Missing required data.js');
}

// ─── AUDIO ENGINE ────────────────────────────────────────
const AC = window.AudioContext || window.webkitAudioContext;
let actx = null;
function ea() { if (!actx) try { actx = new AC(); } catch(e) {} }
function pt(notes, type = 'sine') {
  ea(); if (!actx) return;
  notes.forEach(([f, s, d, v = 0.4]) => {
    try {
      const o = actx.createOscillator(), g = actx.createGain();
      o.connect(g); g.connect(actx.destination);
      o.type = type; o.frequency.value = f;
      const t = actx.currentTime + s;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(v, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + d);
      o.start(t); o.stop(t + d + 0.05);
    } catch(e) {}
  });
}
const SFX = {
  correct:  () => pt([[523,0,.12],[659,.08,.12],[784,.16,.2,.5]], 'triangle'),
  wrong:    () => pt([[300,0,.15],[220,.1,.15],[180,.22,.3,.4]], 'sawtooth'),
  levelUp:  () => pt([[523,0,.1],[659,.12,.1],[784,.24,.1],[1047,.36,.4,.6]], 'triangle'),
  combo:    () => pt([[880,0,.08],[1047,.06,.1,.3]], 'sine'),
  ach:      () => pt([[784,0,.08],[880,.1,.08],[1047,.2,.15,.5]], 'triangle'),
  click:    () => pt([[600,0,.04,.2]], 'square'),
  xp:       () => pt([[440,0,.06,.2],[554,.05,.08]], 'sine'),
  gWrong:   () => pt([[200,0,.15],[150,.12,.2],[100,.28,.4,.5]], 'sawtooth'),
  hLoss:    () => pt([[220,0,.08,.3],[180,.06,.15,.3]], 'sawtooth'),
};


// ─── STORAGE / USER ───────────────────────────────────────
// Moved to js/user.js — edit that file for user model changes
// Exposes: getUsers, saveUsers, getCU, saveCU, mkUser, ensureDemo, updStreak, getLevel, generateSessionToken

// ─── i18n ─────────────────────────────────────────────────
// Moved to js/i18n.js — edit that file for translation changes
// Exposes: window.t(), window.setLang(), window.applyLang(), window.currentLang

// ─── THEME ────────────────────────────────────────────────
function initTheme() { if (localStorage.getItem('ews4_theme') === 'light') document.body.classList.add('light'); }
function toggleTheme() {
  document.body.classList.toggle('light');
  const l = document.body.classList.contains('light');
  localStorage.setItem('ews4_theme', l ? 'light' : 'dark');
  showToast(l ? t('toastLight') : t('toastDark'));
  // Keep the Settings ▸ Appearance switch in sync, whichever way theme was toggled from
  const sw = document.getElementById('set-theme-switch');
  if (sw) sw.checked = l;
}
initTheme();

let discoMode = false, discoInterval;
function toggleDisco() {
  discoMode = !discoMode;
  if (discoMode) {
    document.body.classList.add('disco');
    showToast(t('toastDisco'));
    SFX.levelUp(); launchConfetti();
    discoInterval = setInterval(launchConfetti, 2000);
  } else {
    document.body.classList.remove('disco');
    clearInterval(discoInterval);
    showToast(t('toastDiscoOff'));
  }
  // Keep the Settings ▸ Fun Stuff switch in sync (disco can also be triggered
  // by clicking the logo 5x — see overlays.js)
  const sw = document.getElementById('set-disco-switch');
  if (sw) sw.checked = discoMode;
}

// ─── AUTH ─────────────────────────────────────────────────
function authTab(pane, btn) {
  SFX.click();
  document.querySelectorAll('.atab').forEach(t => t.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pane-login').style.display = pane === 'login' ? 'block' : 'none';
  document.getElementById('pane-reg').style.display   = pane === 'reg'   ? 'block' : 'none';
}

async function doLogin() {
  SFX.click();
  if (window.Auth?.isGoogleSession()) {
    await window.Auth.signOut();
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  const un   = document.getElementById('l-user').value.trim();
  const pw   = document.getElementById('l-pass').value;
  const err  = document.getElementById('l-err');
  const user = getUsers().find(u => u.un === un && u.pw === pw);
  if (!user) {
    err.style.display = 'block';
    document.getElementById('l-user').classList.add('shake');
    setTimeout(() => document.getElementById('l-user').classList.remove('shake'), 500);
    return;
  }
  err.style.display = 'none';
  
  if (!user.authProvider || user.authProvider === 'local') {
    user.sessionToken = generateSessionToken();
    user.tokenExpiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
    saveCU(user);
  }
  
  localStorage.setItem('ews4_cur', un);
  if (user.lang) {
    window.currentLang = user.lang;
    localStorage.setItem('ews4_lang', user.lang);
    // Sprint 4 locale-split: this bypasses setLang(), so make sure the
    // locale file actually gets fetched if it isn't already loaded.
    if (window.ensureLocaleLoaded) window.ensureLocaleLoaded(user.lang).then(() => window.applyLang && window.applyLang());
  }
  if (typeof pullUserFromSupabase === 'function') await pullUserFromSupabase(un);
  const freshUser = getCU() || user;
  updStreak(freshUser); saveCU(freshUser); launchApp();
}

async function doReg() {
  SFX.click();
  if (window.Auth?.isGoogleSession()) await window.Auth.signOut();
  const name = document.getElementById('r-name').value.trim();
  const un   = document.getElementById('r-user').value.trim();
  const pw   = document.getElementById('r-pass').value;
  const err  = document.getElementById('r-err');
  if (!name || !un || pw.length < 8) { err.style.display = 'block'; return; }
  const pwStrong = /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw);
  if (!pwStrong) { err.textContent = t('weakPass'); err.style.display = 'block'; return; }
  const arr = getUsers();
  if (arr.find(u => u.un === un)) { err.textContent = t('userTaken'); err.style.display = 'block'; return; }
  err.style.display = 'none';
  const newU = mkUser(name, un, pw);
  newU.lang = currentLang;
  newU.sessionToken = generateSessionToken();
  newU.tokenExpiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
  arr.push(newU); saveUsers(arr);
  localStorage.setItem('ews4_cur', un);
  updStreak(newU); saveCU(newU); launchApp();
}

async function doLogout() {
  if (window.Auth?.isGoogleSession()) {
    await window.Auth.signOut();
  }
  localStorage.removeItem('ews4_cur');
  window.SEARCH_INDEX = [];
  window.currentLang = localStorage.getItem('ews4_lang') ||
    (navigator.language && navigator.language.startsWith('pt') ? 'mz' : 'en');
  // Sprint 4 locale-split: this bypasses setLang(), so make sure the
  // locale file actually gets fetched if it isn't already loaded.
  if (window.ensureLocaleLoaded) window.ensureLocaleLoaded(window.currentLang).then(() => window.applyLang && window.applyLang());
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-auth').classList.add('active');
  document.getElementById('fabContainer').style.display = 'none';
  window._chatInitDone = false;
  showToast('👋 ' + (currentLang === 'pt' ? 'Até já! Não te esqueças de voltar!' : "See you soon! Don't forget to come back!"));
}

// ─── ADMIN PANEL ──────────────────────────────────────────
// Just a doorway — admin.html itself checks the signed-in user
// against Postgres (is_admin() RPC) and bounces anyone who isn't
// on the list. This button doesn't grant access, it just navigates.
function goToAdminPanel() {
  window.location.href = 'admin.html';
}

// ─── APP LAUNCH ───────────────────────────────────────────
// Safari/older browsers don't support requestIdleCallback — fall back to a
// short timeout so deferred work still runs off the critical path.
const _ric = window.requestIdleCallback || function (cb) { return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 1); };

function launchApp() {
  SFX.click();
  document.getElementById('screen-auth').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  document.getElementById('fabContainer').style.display = 'flex';
  applyLang();
  // Render what's needed for the first paint (home tab) immediately.
  if (window.refreshUI) window.refreshUI();
  goTab('home', document.getElementById('bn-home'));
  // Everything below is only needed for other tabs / search / chat, so defer
  // it off the initial render path to cut down the launchApp blocking task.
  _ric(() => {
    // rebuild index after language is set
    window.SEARCH_INDEX = window.buildSearchIndex ? window.buildSearchIndex() : [];
    if (window.renderGram) window.renderGram();
    if (window.renderLB) window.renderLB();
    // gamification.js (~16.3KB) — Step 2.2: moved out of Phase 7's eager
    // batch. Its only two callers (quiz.js's loadShopPowerups/checkMissions)
    // are already typeof-guarded, so fetching it here (after first paint,
    // off the critical path) is safe: those guards simply no-op on any
    // quiz answered before this idle callback finishes, same as the
    // FlowyReact/SFX.combo pattern already in quiz.js.
    if (window.EWSLoadFeature) {
      // ui-curriculum.js (~4.4KB) — Step 3.1: moved out of Phase 7's eager
      // batch. Unlike flowy.js, renderCurriculum() must actually run (it's
      // not self-initializing), so this is load-then-call rather than a
      // bare guard: the curriculum tab pre-warms as soon as the module
      // lands, same net timing as before since this whole block already
      // only runs at idle, after first paint.
      window.EWSLoadFeature('ui-curriculum', 'js/ui-curriculum.js')
        .then(() => { if (window.renderCurriculum) window.renderCurriculum(); })
        .catch(err => {
          console.error('[EnglishFlow] Failed to load ui-curriculum.js:', err);
        });
      window.EWSLoadFeature('gamification', 'js/gamification.js').catch(err => {
        console.error('[EnglishFlow] Failed to load gamification.js:', err);
      });
      // sounds.js (~20.8KB) — Step 2.2: also moved out of Phase 7. The
      // basic SFX object above (line 32) covers every bare SFX.xxx() call
      // in the app until this finishes loading, so there's no functional
      // gap during the defer window — just quieter/simpler synth sounds
      // for the first few interactions each session.
      window.EWSLoadFeature('sounds', 'js/sounds.js').catch(err => {
        console.error('[EnglishFlow] Failed to load sounds.js:', err);
      });
      // flowy.js (~1,757 lines, the floating mascot assistant) — Step 3.1:
      // moved out of Phase 7's eager batch. It's fully self-initializing:
      // its own init() polls for window.goTab (up to 3s) before mounting,
      // and every other module's call into it (FlowyReact, from
      // quiz.js/game.js) is already `if (window.FlowyReact)` guarded. So
      // nothing on the critical path needs it, and no shim was required —
      // it just appears (mascot fades in) a moment after first paint
      // instead of blocking Phase 7's Promise.all.
      window.EWSLoadFeature('flowy', 'js/flowy.js').catch(err => {
        console.error('[EnglishFlow] Failed to load flowy.js:', err);
      });
      // chat.js (~9.7KB, the AI tutor tab) — Step 3.1: moved out of Phase 7's
      // eager batch. Like ui-curriculum.js, initChat() must actually run (it
      // sets window._chatInitDone = true and renders the quick-prompt chips
      // + history), so this is load-then-call. Note nav.js's goTab() has NO
      // chat-tab branch at all (unlike grammar/sounds/settings) — the chat
      // tab's markup is static and just becomes visible; nothing calls
      // initChat() on tab switch. Its only two callers are i18n.js's
      // language-switch re-render (`if (window._chatInitDone && window.initChat)`)
      // and flowy.js's mascot greeting (`if (!window._chatInitDone &&
      // window.initChat)`) — both already guarded, so they simply no-op
      // until this load completes, same reasoning as ui-curriculum.js above.
      // chat-data.js (AI_QUICK_PROMPTS, ~1.9KB) — Step 3.1 data-side
      // follow-up: chat.js reads this global directly, so it must resolve
      // BEFORE chat.js's own load, not just alongside it.
      window.EWSLoadFeature('chat-data', 'js/data/chat-data.js')
        .then(() => window.EWSLoadFeature('chat', 'js/chat.js'))
        .then(() => { if (window.initChat) window.initChat(); })
        .catch(err => {
          console.error('[EnglishFlow] Failed to load chat.js:', err);
        });
      // ui-sounds.js (~7.8KB, the Sounds/Pronunciation tab) — Step 3.1:
      // moved out of Phase 7's eager batch. Like ui-curriculum.js/chat.js,
      // renderPron() must actually run (it's not self-initializing), so
      // this is load-then-call. Its other two callers — i18n.js's
      // language-switch re-render and nav.js's `tab === 'sounds'` branch —
      // are already `if (window.renderPron)` guarded, so they simply no-op
      // until this load completes, same reasoning as above.
      // sounds-data.js (PRON_WORDS/MINIMAL_PAIRS/TONGUE_TWISTERS/
      // DIFFICULT_SOUNDS, ~15.7KB) — Step 3.1 data-side follow-up: loaded
      // first so ui-sounds.js's render functions never read an undefined
      // global. Once it lands, also rebuild SEARCH_INDEX so pronunciation
      // words join search — they were skipped on the first build above
      // (this data hadn't loaded yet at that point; see data.js's
      // buildSearchIndex() typeof guard).
      window.EWSLoadFeature('sounds-data', 'js/data/sounds-data.js')
        .then(() => {
          if (window.buildSearchIndex) window.SEARCH_INDEX = window.buildSearchIndex();
          return window.EWSLoadFeature('ui-sounds', 'js/ui-sounds.js');
        })
        .then(() => { if (window.renderPron) window.renderPron(); })
        .catch(err => {
          console.error('[EnglishFlow] Failed to load ui-sounds.js:', err);
        });
    }
  });
}

// ─── REFRESH UI ───────────────────────────────────────────
function refreshUI() {
  const u = getCU(); if (!u) return;
  if (window.Progress) Progress.ensureUser(u);
  const tpStr = document.getElementById('tp-str');
  const tpXP  = document.getElementById('tp-xp');
  const tpHrt = document.getElementById('tp-hrt');
  const tpGem = document.getElementById('tp-gem');
  if (tpStr) animateNum(tpStr, u.streak);
  if (tpXP)  animateNum(tpXP, u.xp);
  if (tpHrt) tpHrt.textContent = u.hearts;
  if (tpGem) tpGem.textContent = u.gems;
  if (u.streak > 1) {
    document.getElementById('str-title').textContent = t('streakActive', { n: u.streak });
    document.getElementById('str-desc').textContent  = t('streakActiveDesc');
  } else {
    document.getElementById('str-title').textContent = t('streakTitle');
    document.getElementById('str-desc').textContent  = t('streakDesc');
  }
  const pct = Math.min(100, (u.todayXP || 0) / 50 * 100);
  const bar  = document.getElementById('daily-bar');
  if (bar) bar.style.width = pct + '%';
  const dd = document.getElementById('daily-done');
  if (dd) dd.textContent = t('xpToday', { n: u.todayXP || 0 });
  const today = new Date().toDateString();
  const dcCard = document.getElementById('dcCard');
  if (dcCard) {
    if (u.dailyChallengeDone === today) {
      dcCard.classList.add('done');
      document.getElementById('dcTitle').textContent = t('dailyDone');
      document.getElementById('dcDesc').textContent  = t('dailyDoneDesc');
    } else {
      dcCard.classList.remove('done');
      document.getElementById('dcTitle').textContent = t('dailyChallenge');
      document.getElementById('dcDesc').textContent  = t('dailyChallengeDesc');
    }
  }
  const lv = getLevel(u.xp);
  const homeName = document.getElementById('home-hero-name');
  if (homeName) homeName.textContent = u.name;
  const homeLvl = document.getElementById('home-hero-lvl');
  if (homeLvl) homeLvl.textContent = lv.level;
  const homeStr = document.getElementById('home-hero-streak');
  if (homeStr) homeStr.textContent = u.streak;
  const homeXP = document.getElementById('home-hero-xp');
  if (homeXP) homeXP.textContent = u.xp;
  const pAv = document.getElementById('p-av');
  const pAvText = document.getElementById('p-av-text');
  if (pAv) {
    if (u.avatar && u.avatar.startsWith('emoji:')) {
      const em = u.avatar.replace('emoji:', '');
      pAv.style.backgroundImage = 'none';
      pAv.style.fontSize = '2.4rem';
      if (pAvText) pAvText.textContent = em;
    } else if (u.avatar && !u.avatar.startsWith('emoji:')) {
      pAv.style.backgroundImage = `url(${u.avatar})`;
      pAv.style.backgroundSize = 'cover';
      pAv.style.backgroundPosition = 'center';
      if (pAvText) pAvText.textContent = '';
    } else {
      pAv.style.backgroundImage = 'none';
      pAv.style.fontSize = '';
      if (pAvText) pAvText.textContent = u.name[0].toUpperCase();
    }
  }
  const pName = document.getElementById('p-name');
  if (pName) pName.textContent = u.name;
  const pLvl = document.getElementById('p-lvl');
  if (pLvl) pLvl.textContent = `Level ${lv.level} · ${currentLang === 'pt' ? lv.titlePt : lv.title}`;
  const pXPCur = document.getElementById('p-xp-cur');
  if (pXPCur) pXPCur.textContent = u.xp + ' XP';
  const pXPNxt = document.getElementById('p-xp-nxt');
  if (pXPNxt) pXPNxt.textContent = (lv.next - u.xp) + ' XP to next level';
  const xpPct = Math.max(0, Math.min(100, ((u.xp - lv.prev) / (lv.next - lv.prev)) * 100));
  const pXPBar = document.getElementById('p-xp-bar');
  if (pXPBar) pXPBar.style.width = xpPct + '%';
  const psStr = document.getElementById('ps-str');
  if (psStr) psStr.textContent = u.streak;
  const psXP = document.getElementById('ps-xp');
  if (psXP) psXP.textContent = u.xp;
  const psCor = document.getElementById('ps-cor');
  if (psCor) psCor.textContent = u.totalCor || 0;
  const psLes = document.getElementById('ps-les');
  if (psLes) psLes.textContent = u.done.length;
  if (window.renderStudentDashboard) window.renderStudentDashboard();
  if (window.renderAchs) window.renderAchs(u);
}

function animateNum(el, target) {
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;
  if (el._animTimer) { clearInterval(el._animTimer); el._animTimer = null; }
  const step = Math.ceil(Math.abs(target - current) / 8);
  el._animTimer = setInterval(() => {
    const val = parseInt(el.textContent) || 0;
    if (val === target) { clearInterval(el._animTimer); el._animTimer = null; return; }
    el.textContent = val < target ? Math.min(val + step, target) : Math.max(val - step, target);
  }, 40);
}


// ─── NAVIGATION ───────────────────────────────────────────
// Moved to js/nav.js
// Exposes: goTab, goTabFn, checkAchs, renderAchs, openLB, closeLB, closeLBEv

// ─── OVERLAYS / SEARCH / TOAST / EFFECTS ──────────────────
// Moved to js/overlays.js
// Exposes: openPM, closePM, showPmStep, selectPlan, selectPayment,
//          copyPayNumber, openWhatsApp, closeLU, openSrch, closeSrch,
//          closeSrchEv, doSearch, showToast, showXPPop,
//          launchConfetti, spawnEmojis, logoClick, mascotTalk

// ─── ABOUT PAGE ───────────────────────────────────────────
// Moved to js/profile.js
// Exposes: renderAbout, downloadCV

// ─── PROFILE EDIT ─────────────────────────────────────────
// Moved to js/profile.js
// Exposes: openEditProfile, closeEditProfile, closeEditProfileEv,
//          selectAvatar, saveEditProfile

// ─── INIT (called after DOMContentLoaded in index.html)
// ─── APP INIT ─────────────────────────────────────────────────────────────────
// app.js é carregado DINAMICAMENTE pelo loader do index.html.
// Quando app.js executa, window.load já disparou — qualquer
// window.addEventListener('load', ...) aqui NUNCA executaria.
// Solução: expor window.ewsInit, que o index.html chama directamente
// no final da cadeia de carregamento (Phase 8).
window.ewsInit = async function () {
  // NOTA: O Service Worker é registado no index.html, não aqui.

  ensureDemo();
  if (window.Auth) await window.Auth.init();
  if (typeof flushSyncQueue === 'function') flushSyncQueue();
  window.addEventListener('online', () => {
    if (typeof flushSyncQueue === 'function') flushSyncQueue();
  });
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    if (ls) {
      ls.classList.add('out');
      ls.addEventListener('transitionend', () => { ls.style.display = 'none'; }, { once: true });
    }
    const u = getCU();
    if (u) { updStreak(u); saveCU(u); launchApp(); }
    else applyLang();
  }, 300);
};

// ── app.js owns these ──────────────────────────────────
window.doLogin     = doLogin;
window.doReg       = doReg;
window.doLogout    = doLogout;
window.toggleTheme = toggleTheme;
window.toggleDisco = toggleDisco;
window.refreshUI   = refreshUI;
window.goToAdminPanel = goToAdminPanel;
// Exported by their own modules (do not re-export here):
// js/i18n.js     → setLang, applyLang, t, currentLang
// js/user.js     → getCU, saveCU, mkUser, updStreak, getLevel
// js/nav.js      → goTab, goTabFn, checkAchs, renderAchs, openLB, closeLB, closeLBEv
// js/overlays.js → openPM, closePM, showPmStep, selectPlan, selectPayment,
//                  copyPayNumber, openWhatsApp, closeLU, openSrch, closeSrch,
//                  closeSrchEv, doSearch, showToast, showXPPop,
//                  launchConfetti, spawnEmojis, logoClick, mascotTalk
// js/profile.js  → renderAbout, downloadCV, openEditProfile, closeEditProfile,
//                  closeEditProfileEv, selectAvatar, saveEditProfile
