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

// ─── STORAGE ─────────────────────────────────────────────
const getUsers   = () => { try { return JSON.parse(localStorage.getItem('ews4_u') || '[]'); } catch { return []; } };
const saveUsers  = u  => localStorage.setItem('ews4_u', JSON.stringify(u));
const getCU      = () => { const n = localStorage.getItem('ews4_cur'); return n ? getUsers().find(u => u.un === n) || null : null; };
const saveCU     = user => {
  user.updatedAt = Date.now();
  if (window.Progress) Progress.ensureUser(user);
  const arr = getUsers();
  const i = arr.findIndex(u => u.un === user.un);
  if (i >= 0) arr[i] = user; else arr.push(user);
  saveUsers(arr);
  if (typeof syncUserToSupabase === 'function') syncUserToSupabase(user);
};

const mkUser = (name, un, pw) => {
  const user = {
    name, un, pw, xp: 0, level: 1, streak: 0, lastActive: null,
    todayXP: 0, todayDate: null, hearts: 5, gems: 20, done: [], achs: [],
    totalCor: 0, totalAns: 0, hadPerfect: false, maxCombo: 0,
    scrambleScore: 0, dailyChallengeDone: null, aiChats: 0, pronP: 0, gramR: 0,
    chatHistory: [], lang: 'en', createdAt: Date.now(),
    quizScores: [], gameHistory: [],
    authProvider: 'local'
  };
  return window.Progress ? Progress.initNewUser(user) : user;
};

function ensureDemo() {
  const arr = getUsers();
  if (!arr.find(u => u.un === 'test')) {
    const d = mkUser('Sebastian', 'test', '1234');
    d.xp = 85; d.streak = 2; d.gems = 15; d.totalCor = 12; d.totalAns = 15;
    d.done = ['l1', 'l2'];
    d.sessionToken = generateSessionToken();
    d.tokenExpiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
    arr.push(d); saveUsers(arr);
  }
}

function updStreak(u) {
  if (window.Progress) return Progress.touchActivity(u);
  const today = new Date().toDateString();
  const yest  = new Date(Date.now() - 86400000).toDateString();
  if (u.lastActive === today) return;
  u.streak = u.lastActive === yest ? u.streak + 1 : 1;
  u.lastActive = today;
  if (u.todayDate !== today) { u.todayXP = 0; u.todayDate = today; u.dailyChallengeDone = null; }
}

function getLevel(xp) {
  return LEVELS.reduce((acc, l) => xp >= l.prev ? l : acc, LEVELS[0]);
}

// ─── SESSION TOKEN GENERATION ────────────────────────────
function generateSessionToken() {
  return Math.random().toString(36).substring(2, 22) + Date.now().toString(36);
}

// ─── i18n ─────────────────────────────────────────────────
let currentLang = localStorage.getItem('ews4_lang') ||
  (navigator.language && navigator.language.startsWith('pt') ? 'mz' : 'en');

function t(key, vars = {}) {
  const fallbacks = { 'mz': 'pt', 'pt-pt': 'pt', 'en-gb': 'en' };
  const lang = TRANSLATIONS[currentLang] ? currentLang : (fallbacks[currentLang] || 'en');
  let str = (TRANSLATIONS[lang] || TRANSLATIONS.en)[key] || key;
  Object.entries(vars).forEach(([k, v]) => { str = str.replaceAll(`{${k}}`, v); });
  return str;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ews4_lang', lang);
  const u = getCU();
  if (u) { u.lang = lang; saveCU(u); }
  applyLang();
  // 🔁 Rebuild search index for new language (titles/subtitles change)
  window.SEARCH_INDEX = window.buildSearchIndex ? window.buildSearchIndex() : [];
  const toasts = {
    'en':    '🇺🇸 English (US) activated!',
    'en-gb': '🇬🇧 English (UK) activated!',
    'mz':    '🇲🇿 Português moçambicano activado!',
    'pt':    '🇧🇷 Português (Brasil) activado!',
    'pt-pt': '🇵🇹 Português (Portugal) activado!',
  };
  showToast(toasts[lang] || '🌐 Language changed!');
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      el.placeholder = t(key);
    } else if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  if (document.getElementById('screen-app')?.classList.contains('active')) {
    const activeTab = document.querySelector('.tab.on')?.id?.replace('tab-', '');
    if (window.refreshUI) window.refreshUI();
    if (activeTab === 'home') {
      if (window.renderCurriculum) window.renderCurriculum();
      if (window.renderStudentDashboard) window.renderStudentDashboard();
    } else if (activeTab === 'grammar') {
      if (window.renderGram) window.renderGram();
    } else if (activeTab === 'profile') {
      if (window.renderAchs) window.renderAchs(getCU());
    } else if (activeTab === 'ai') {
      if (window._chatInitDone && window.initChat) window.initChat();
    } else if (activeTab === 'about') {
      if (window.renderAbout) window.renderAbout();
    }
  }
}

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
  if (user.lang) { currentLang = user.lang; localStorage.setItem('ews4_lang', user.lang); }
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
  currentLang = localStorage.getItem('ews4_lang') ||
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
window.goTabFn = function(tab) {
  const btn = document.getElementById('bn-' + tab);
  if (btn) goTab(tab, btn);
};

function goTab(tab, btn) {
  SFX.click();
  document.querySelectorAll('.tab:not(#tab-quiz)').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.bn').forEach(b => b.classList.remove('on'));
  const tabEl = document.getElementById('tab-' + tab);
  if (tabEl) tabEl.classList.add('on');
  if (btn) btn.classList.add('on');
  document.getElementById('fabContainer').style.display = tab === 'home' ? 'flex' : 'none';
  if (tab === 'about' && window.renderAbout) window.renderAbout();
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────
function checkAchs() {
  const u = getCU(); if (!u) return;
  let newAch = false;
  ACHS.forEach(a => {
    if (!u.achs.includes(a.id) && a.c(u)) {
      u.achs.push(a.id); newAch = true;
      const achName = currentLang === 'pt' ? a.namePt : a.name;
      showToast(`🏅 ${currentLang === 'pt' ? 'Conquista desbloqueada' : 'Achievement unlocked'}: ${achName}!`);
      SFX.ach(); launchConfetti(); spawnEmojis('🏅', 5);
    }
  });
  if (newAch) saveCU(u);
}

function renderAchs(u) {
  const el = document.getElementById('achGrid');
  if (!el || !u) return;
  el.innerHTML = ACHS.map(a => {
    const lit = u.achs.includes(a.id);
    const name = currentLang === 'pt' ? a.namePt : a.name;
    return `<div class="ach ${lit ? 'lit' : 'dim'}" title="${name}">
      <div class="ach-ic">${a.icon}</div>
      <div class="ach-nm ${lit ? 'lit' : ''}">${name}</div>
    </div>`;
  }).join('');
}

// ─── LEADERBOARD ──────────────────────────────────────────
function renderLB() {}
function openLB()  {
  const m = document.getElementById('lb-modal');
  if (m) { m.classList.add('on'); if (window.Leaderboard) Leaderboard.open(); }
}
function closeLB() {
  const m = document.getElementById('lb-modal');
  if (m) { m.classList.remove('on'); if (window.Leaderboard) Leaderboard.close(); }
}
function closeLBEv(e) { if (e.target === document.getElementById('lb-modal')) closeLB(); }

// ─── OVERLAYS ─────────────────────────────────────────────
function openPM()    { SFX.click(); document.getElementById('pmOverlay').classList.add('on'); }
function closePM()   { document.getElementById('pmOverlay').classList.remove('on'); }
function closeLU()   { document.getElementById('luOverlay').classList.remove('on'); }
function closeSrch() { document.getElementById('srchOverlay').classList.remove('on'); document.getElementById('srchInput').value = ''; }
function closeSrchEv(e) { if (e.target === document.getElementById('srchOverlay')) closeSrch(); }

function openSrch() {
  SFX.click();
  const overlay = document.getElementById('srchOverlay');
  if (!overlay) return;
  overlay.classList.add('on');
  setTimeout(() => {
    const input = document.getElementById('srchInput');
    if (input) {
      input.value = '';
      input.focus();
      doSearch(); // refresh empty state message
    }
  }, 50);
}

// ─── SEARCH ───────────────────────────────────────────────
function doSearch() {
  // Rebuild index if missing (safety net)
  if (!window.SEARCH_INDEX || window.SEARCH_INDEX.length === 0) {
    window.SEARCH_INDEX = window.buildSearchIndex ? window.buildSearchIndex() : [];
  }
  const q = document.getElementById('srchInput')?.value.toLowerCase().trim() || '';
  const el = document.getElementById('srchResults');
  if (!el) return;
  if (!q) {
    el.innerHTML = `<div class="srch-empty">${t('searchEmpty')}</div>`;
    return;
  }
  const res = (window.SEARCH_INDEX || []).filter(r =>
    r.title.toLowerCase().includes(q) || r.sub.toLowerCase().includes(q)
  ).slice(0, 12);
  if (!res.length) {
    el.innerHTML = `<div class="srch-empty">${t('searchNone')}</div>`;
    return;
  }
  el.innerHTML = res.map((r, i) =>
    `<div class="srch-item" id="sri-${i}">
      <div class="srch-item-icon">${r.icon}</div>
      <div><div class="srch-item-title">${r.title}</div><div class="srch-item-sub">${r.sub}</div></div>
      <span class="srch-tag" style="background:${r.tagColor}22;color:${r.tagColor}">${r.tag}</span>
    </div>`
  ).join('');
  res.forEach((r, i) => {
    const elItem = document.getElementById('sri-' + i);
    if (elItem) {
      elItem.onclick = () => {
        SFX.click();
        closeSrch();
        if (typeof r.action === 'function') r.action();
      };
    }
  });
}

// ─── TOAST & EFFECTS ──────────────────────────────────────
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

function showXPPop(msg) {
  const p = document.getElementById('xppop');
  p.textContent = msg; p.className = 'xppop';
  void p.offsetWidth; p.className = 'xppop go';
}

function launchConfetti() {
  const colors = ['#ff4081','#ffd740','#00e676','#2979ff','#1de9b6','#bc8cff'];
  for (let i = 0; i < 22; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.cssText = `left:${Math.random()*100}%;top:-10px;width:${Math.random()*8+4}px;height:${Math.random()*8+4}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-delay:${Math.random()}s;animation-duration:${1.2+Math.random()*.8}s;`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2200);
  }
}

function spawnEmojis(emoji, count) {
  for (let i = 0; i < count; i++) {
    const e = document.createElement('div');
    e.className = 'emoji-pop'; e.textContent = emoji;
    const dx = (Math.random() - 0.5) * 100, dy = -Math.random() * 120 - 40;
    e.style.cssText = `left:${Math.random()*80+10}%;top:${Math.random()*50+20}%;--dx:${dx}px;--dy:${dy}px;animation-delay:${Math.random()*.3}s;`;
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 2000);
  }
}

// ─── MISC / EASTER EGGS ───────────────────────────────────
let logoClicks = 0, logoTimer;
function logoClick() {
  SFX.click(); logoClicks++;
  clearTimeout(logoTimer);
  logoTimer = setTimeout(() => logoClicks = 0, 2000);
  if (logoClicks >= 5) toggleDisco();
}

let mascotIdx = 0;
function mascotTalk() {
  SFX.click();
  const msgs = MASCOT_MSGS[currentLang] || MASCOT_MSGS.en;
  showToast(msgs[mascotIdx % msgs.length]); mascotIdx++;
  const m = document.getElementById('mascotEmoji');
  if (m) { m.style.transform = 'scale(1.5) rotate(20deg)'; setTimeout(() => m.style.transform = '', 300); }
}

// Konami Code
let konamiSeq = [], konamiCode = [38,38,40,40,37,39,37,39,66,65];
document.addEventListener('keydown', e => {
  konamiSeq.push(e.keyCode);
  if (konamiSeq.length > 10) konamiSeq.shift();
  if (konamiSeq.toString() === konamiCode.toString()) {
    showToast(t('toastKonami')); SFX.levelUp(); launchConfetti();
    const u = getCU();
    if (u) {
      if (window.Progress) Progress.addXP(u, 100, { source: 'easter-egg' });
      else { u.xp += 100; saveCU(u); }
      refreshUI();
    }
    spawnEmojis('🎮', 10);
  }
  // Escape key closes search
  if (e.key === 'Escape') {
    const overlay = document.getElementById('srchOverlay');
    if (overlay && overlay.classList.contains('on')) {
      closeSrch();
    }
  }
});

// Enter key for auth
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const pl = document.getElementById('pane-login');
    if (pl && pl.style.display !== 'none' && document.getElementById('l-pass') === document.activeElement) doLogin();
    const pr = document.getElementById('pane-reg');
    if (pr && pr.style.display !== 'none' && document.getElementById('r-pass') === document.activeElement) doReg();
  }
});

// Heart regeneration — every 5 minutes
setInterval(() => {
  const u = getCU();
  if (u && u.hearts < 5) { u.hearts++; saveCU(u); refreshUI(); showToast(t('toastHeart')); }
}, 300000);

// Random tips every 3 minutes
setInterval(() => {
  const u = getCU();
  if (u && document.getElementById('screen-app')?.classList.contains('active')) {
    const tips = TIPS[currentLang] || TIPS.en;
    showToast(tips[Math.floor(Math.random() * tips.length)]);
  }
}, 180000);

// ─── ABOUT ME PAGE ────────────────────────────────────────
window.renderAbout = function() {
  const el = document.getElementById('tab-about');
  if (!el) return;
  const d = ABOUT_DATA;
  const lang = currentLang;
  const skillsHTML = d.skills.map(s =>
    `<div class="skill-pill"><span>${s.icon}</span>${lang === 'pt' ? s.pt : s.en}</div>`
  ).join('');
  const statsHTML = d.stats.map(s =>
    `<div class="about-stat">
      <div class="about-stat-icon">${s.icon}</div>
      <div class="about-stat-num" data-target="${s.n}">0</div>
      <div class="about-stat-lbl">${lang === 'pt' ? s.pt : s.en}</div>
    </div>`
  ).join('');
  const eduHTML = d.education.map(e => {
    const info = lang === 'pt' ? e.pt : e.en;
    return `<div class="timeline-item">
      <div class="tl-dot"></div>
      <div class="tl-content">
        <div class="tl-title">${info.degree}</div>
        <div class="tl-org">${info.school}</div>
        <div class="tl-period">${info.year}</div>
        <div class="tl-note">${info.note}</div>
      </div>
    </div>`;
  }).join('');
  const expHTML = d.experience.map(ex => {
    const info = lang === 'pt' ? ex.pt : ex.en;
    return `<div class="timeline-item">
      <div class="tl-dot tl-dot-blue"></div>
      <div class="tl-content">
        <div class="tl-title">${info.title}</div>
        <div class="tl-org">${info.org}</div>
        <div class="tl-period">${info.period}</div>
        <div class="tl-desc">${info.desc}</div>
      </div>
    </div>`;
  }).join('');
  el.innerHTML = `
  <div class="about-wrap">
    <div class="about-hero-card">
      <div class="about-hero-bg"></div>
      <div class="about-avatar-ring">
        <div class="about-avatar">SJ</div>
        <div class="about-avatar-badge">🎓</div>
      </div>
      <h1 class="about-name">${d.name}</h1>
      <div class="about-role">${lang === 'pt' ? d.role.pt : d.role.en}</div>
      <div class="about-location"><span>📍</span> ${d.location}</div>
      <div class="about-bio">${t('aboutBio')}</div>
      <div class="about-actions">
        <a href="mailto:${d.email}" class="about-action-btn about-action-email"><span>✉️</span> Email</a>
        <a href="https://wa.me/${d.whatsapp}" target="_blank" class="about-action-btn about-action-wa"><span>💬</span> WhatsApp</a>
        <button class="about-action-btn about-action-cv" onclick="downloadCV()"><span>📄</span> ${t('aboutDownloadCV')}</button>
      </div>
    </div>
    <div class="about-stats-grid">${statsHTML}</div>
    <div class="about-section">
      <div class="about-section-title">${t('aboutSkills')}</div>
      <div class="skills-wrap">${skillsHTML}</div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${t('aboutEducation')}</div>
      <div class="timeline">${eduHTML}</div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${t('aboutExperience')}</div>
      <div class="timeline">${expHTML}</div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${t('aboutContact')}</div>
      <div class="social-grid">
        <a href="${d.socials.instagram}" target="_blank" class="social-card social-ig"><span class="social-icon">📸</span><span>Instagram</span></a>
        <a href="${d.socials.facebook}" target="_blank" class="social-card social-fb"><span class="social-icon">👥</span><span>Facebook</span></a>
        <a href="${d.socials.tiktok}" target="_blank" class="social-card social-tt"><span class="social-icon">🎵</span><span>TikTok</span></a>
        <a href="${d.socials.linkedin}" target="_blank" class="social-card social-li"><span class="social-icon">💼</span><span>LinkedIn</span></a>
        <a href="${d.socials.youtube}" target="_blank" class="social-card social-yt"><span class="social-icon">▶️</span><span>YouTube</span></a>
        <a href="${d.socials.github}" target="_blank" class="social-card social-gh"><span class="social-icon">💻</span><span>GitHub</span></a>
      </div>
      <div class="contact-cards">
        <div class="contact-card" onclick="navigator.clipboard.writeText('${d.email}').then(()=>showToast('📋 Email copied!'))">
          <span>✉️</span>
          <div><div class="contact-label">Email</div><div class="contact-val">${d.email}</div></div>
          <span class="contact-copy">📋</span>
        </div>
        <div class="contact-card" onclick="navigator.clipboard.writeText('${d.phone}').then(()=>showToast('📋 Number copied!'))">
          <span>📞</span>
          <div><div class="contact-label">Phone / WhatsApp</div><div class="contact-val">${d.phone}</div></div>
          <span class="contact-copy">📋</span>
        </div>
      </div>
    </div>
  </div>`;
  setTimeout(() => {
    document.querySelectorAll('.about-stat-num[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      let count = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count = Math.min(count + increment, target);
        el.textContent = count + (target >= 100 ? '+' : '');
        if (count >= target) clearInterval(timer);
      }, 35);
    });
  }, 100);
};

function downloadCV() {
  showToast('📄 ' + (currentLang === 'pt' ? 'CV em breve disponível!' : 'CV download coming soon!'));
  SFX.click();
}

// ─── PROFILE EDIT ─────────────────────────────────────────
const AVATAR_LIST = [
  '😎','🦁','🐯','🦊','🐺','🐻','🐼','🦝','🐸','🦋',
  '🦄','🐉','🦅','🦚','🐬','🐋','🦈','🦖','🌟','🔥',
  '⚡','🎯','🏆','🎓','🚀','🌈','💎','🎮','🎸','🥷',
  '🧙','🧜','🧛','🤖','👽','🎃','🦸','🕵️','🧑‍🎤','🧑‍🚀',
];

let _editSelectedAvatar = null;

function openEditProfile() {
  SFX.click();
  const u = getCU(); if (!u) return;
  _editSelectedAvatar = null;
  const nameInput = document.getElementById('editNameInput');
  if (nameInput) nameInput.value = u.name || '';
  _buildAvPicker(u);
  _updateEditPreview(u.avatar, u.name);
  document.getElementById('editProfileOverlay').classList.add('on');
}

function closeEditProfile() {
  document.getElementById('editProfileOverlay').classList.remove('on');
  _editSelectedAvatar = null;
}

function closeEditProfileEv(e) {
  if (e.target === document.getElementById('editProfileOverlay')) closeEditProfile();
}

function _buildAvPicker(u) {
  const grid = document.getElementById('avPickerGrid');
  if (!grid) return;
  const current = u.avatar || '';
  grid.innerHTML = AVATAR_LIST.map(em => {
    const key = 'emoji:' + em;
    const sel = current === key ? ' selected' : '';
    return `<div class="av-item${sel}" data-av="${key}" onclick="selectAvatar('${key}',this)">${em}</div>`;
  }).join('');
}

function selectAvatar(key, el) {
  SFX.click();
  _editSelectedAvatar = key;
  document.querySelectorAll('.av-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  const u = getCU();
  _updateEditPreview(key, u ? u.name : '?');
}

function _updateEditPreview(avatar, name) {
  const prev = document.getElementById('editAvPreview');
  if (!prev) return;
  if (avatar && avatar.startsWith('emoji:')) {
    prev.style.backgroundImage = 'none';
    prev.style.fontSize = '2.2rem';
    prev.textContent = avatar.replace('emoji:', '');
  } else if (avatar && !avatar.startsWith('emoji:')) {
    prev.style.backgroundImage = `url(${avatar})`;
    prev.style.backgroundSize = 'cover';
    prev.style.backgroundPosition = 'center';
    prev.textContent = '';
  } else {
    prev.style.backgroundImage = 'none';
    prev.style.fontSize = '1.8rem';
    prev.textContent = (name || '?')[0].toUpperCase();
  }
}

function saveEditProfile() {
  SFX.click();
  const u = getCU(); if (!u) return;
  const nameInput = document.getElementById('editNameInput');
  const newName = (nameInput ? nameInput.value.trim() : '') || u.name;
  if (!newName) { showToast('❌ Name cannot be empty!'); return; }
  if (newName.length > 32) { showToast('❌ Name too long (max 32 chars)'); return; }
  u.name = newName;
  if (_editSelectedAvatar !== null) u.avatar = _editSelectedAvatar;
  saveCU(u);
  refreshUI();
  closeEditProfile();
  showToast('✅ Profile updated!');
  SFX.ach();
  spawnEmojis('✨', 3);
}

// Additional event listeners for search input (fallback)
document.addEventListener('DOMContentLoaded', () => {
  const srchInput = document.getElementById('srchInput');
  if (srchInput) {
    srchInput.removeEventListener('input', doSearch);
    srchInput.addEventListener('input', doSearch);
  }
});

window.openEditProfile  = openEditProfile;
window.closeEditProfile = closeEditProfile;
window.closeEditProfileEv = closeEditProfileEv;
window.selectAvatar     = selectAvatar;
window.saveEditProfile  = saveEditProfile;

// ─── INIT (called after DOMContentLoaded in index.html)
window.addEventListener('load', async () => {
  // ─── Registo do Service Worker (PWA) ───
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/service-worker.js');
      console.log('[PWA] Service Worker registado com sucesso! Scope:', reg.scope);
    } catch (err) {
      console.warn('[PWA] Falha no registo do Service Worker:', err);
    }
  }

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
      setTimeout(() => { if(ls) ls.style.display = 'none'; }, 500);
    }
    const u = getCU();
    if (u) { updStreak(u); saveCU(u); launchApp(); }
    else applyLang();
  }, 1900);
});

window.doLogin = doLogin;
window.doReg = doReg;
window.doLogout = doLogout;
window.toggleTheme = toggleTheme;
window.toggleDisco = toggleDisco;
window.openPM = openPM;
window.closePM = closePM;
window.closeLU = closeLU;
window.openSrch = openSrch;
window.closeSrch = closeSrch;
window.closeSrchEv = closeSrchEv;
window.doSearch = doSearch;
window.logoClick = logoClick;
window.mascotTalk = mascotTalk;
window.setLang = setLang;
window.goTab = goTab;
window.resumeLesson = window.resumeLesson;
window.downloadCV = downloadCV;
