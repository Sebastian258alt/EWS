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
  if (user.lang) { window.currentLang = user.lang; localStorage.setItem('ews4_lang', user.lang); }
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
    (navigator.language && navigator.language.startsWith('pt') ? 'pt' : 'en');
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-auth').classList.add('active');
  document.getElementById('fabContainer').style.display = 'none';
  window._chatInitDone = false;
  showToast('👋 ' + (currentLang === 'pt' ? 'Até já! Não te esqueças de voltar!' : "See you soon! Don't forget to come back!"));
}

// ─── APP LAUNCH ───────────────────────────────────────────
function launchApp() {
  SFX.click();
  document.getElementById('screen-auth').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  document.getElementById('fabContainer').style.display = 'flex';
  applyLang();
  // ✅ rebuild index after language is set
  window.SEARCH_INDEX = window.buildSearchIndex ? window.buildSearchIndex() : [];
  if (window.renderCurriculum) window.renderCurriculum();
  if (window.renderGram) window.renderGram();
  if (window.renderPron) window.renderPron();
  if (window.renderLB) window.renderLB();
  if (window.initChat) window.initChat();
  if (window.refreshUI) window.refreshUI();
  goTab('home', document.getElementById('bn-home'));
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
window.addEventListener('load', async () => {
  // NOTE: Service Worker is registered in index.html — not here — to avoid duplicate registration.

  ensureDemo();
  if (window.Auth) await window.Auth.init();
  if (typeof flushSyncQueue === 'function') flushSyncQueue();
  window.addEventListener('online', () => {
    if (typeof flushSyncQueue === 'function') flushSyncQueue();
  });
  // App scripts are fully loaded before this 'load' listener fires.
  // Short delay is only for the loading screen fade animation.
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    if (ls) {
      ls.classList.add('out');
      setTimeout(() => { if(ls) ls.style.display = 'none'; }, 500);
    }
    const u = getCU();
    if (u) { updStreak(u); saveCU(u); launchApp(); }
    else applyLang();
  }, 300);
});

// ── app.js owns these ──────────────────────────────────
window.doLogin     = doLogin;
window.doReg       = doReg;
window.doLogout    = doLogout;
window.toggleTheme = toggleTheme;
window.toggleDisco = toggleDisco;
window.refreshUI   = refreshUI;
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
