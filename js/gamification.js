// ═══════════════════════════════════════════════════════════
//  🎮 GAMIFICATION.JS — EWS v3.4
//  Leagues · Missions · Shop · Avatars
// ═══════════════════════════════════════════════════════════

// ─── LEAGUES ─────────────────────────────────────────────
const LEAGUES = [
  { id:'bronze',   label:'Bronze',   labelPt:'Bronze',   icon:'🥉', min:0,    max:499,  color:'#cd7f32', glow:'rgba(205,127,50,.35)'  },
  { id:'silver',   label:'Silver',   labelPt:'Prata',    icon:'🥈', min:500,  max:1199, color:'#c0c0c0', glow:'rgba(192,192,192,.35)' },
  { id:'gold',     label:'Gold',     labelPt:'Ouro',     icon:'🥇', min:1200, max:2499, color:'#ffd700', glow:'rgba(255,215,0,.4)'    },
  { id:'diamond',  label:'Diamond',  labelPt:'Diamante', icon:'💎', min:2500, max:4999, color:'#b9f2ff', glow:'rgba(185,242,255,.4)'  },
  { id:'master',   label:'Master',   labelPt:'Mestre',   icon:'👑', min:5000, max:Infinity, color:'#ff6ec7', glow:'rgba(255,110,199,.45)' },
];

function getLeague(xp) {
  return LEAGUES.slice().reverse().find(l => xp >= l.min) || LEAGUES[0];
}
window.getLeague = getLeague;

function getLeagueProgress(xp) {
  const l = getLeague(xp);
  if (l.max === Infinity) return { league: l, pct: 100, current: xp - l.min, needed: null };
  const range = l.max - l.min;
  const pct   = Math.min(100, Math.round(((xp - l.min) / range) * 100));
  return { league: l, pct, current: xp - l.min, needed: l.max - xp };
}
window.getLeagueProgress = getLeagueProgress;

// ─── AVATARS ─────────────────────────────────────────────
const AVATARS = [
  '🦁','🐯','🦊','🐺','🦅','🦋','🐉','🦄',
  '🤖','👽','🧙','🕵️','🧑‍🚀','🦸','🧑‍💻','🎓',
];
window.AVATARS = AVATARS;

function getAvatar() {
  try { return localStorage.getItem('ews_avatar') || '🦁'; } catch { return '🦁'; }
}
function setAvatar(a) {
  try { localStorage.setItem('ews_avatar', a); } catch {}
  // sync to user profile if available
  const u = typeof getCU === 'function' ? getCU() : null;
  if (u) { u.avatar = a; if (typeof saveCU === 'function') saveCU(u); }
  window.dispatchEvent(new CustomEvent('ews:avatarChanged', { detail: a }));
}
window.getAvatar = getAvatar;
window.setAvatar  = setAvatar;

// ─── MISSIONS ────────────────────────────────────────────
// Mission definitions — generated fresh each day/week
const MISSION_DEFS = {
  daily: [
    { id:'d_quiz3',    icon:'🎯', xp:15, en:'Complete 3 quizzes',          pt:'Completa 3 quizzes',           check: s => s.quizzesCompleted >= 3 },
    { id:'d_correct10',icon:'✅', xp:10, en:'Get 10 correct answers',       pt:'Acerta 10 respostas',          check: s => s.correctToday >= 10 },
    { id:'d_combo5',   icon:'🔥', xp:20, en:'Get a 5x combo',               pt:'Faz um combo x5',              check: s => s.maxComboToday >= 5 },
    { id:'d_drop5',    icon:'🎯', xp:12, en:'Answer 5 Drop questions',       pt:'Responde 5 questões Drop',     check: s => (s.typeCount?.drop || 0) >= 5 },
    { id:'d_listen3',  icon:'🎧', xp:15, en:'Complete 3 Listening questions',pt:'Completa 3 questões Listening',check: s => (s.typeCount?.listen || 0) >= 3 },
    { id:'d_perfect',  icon:'🏆', xp:30, en:'Get a perfect quiz score',      pt:'Tira nota perfeita num quiz',  check: s => s.hadPerfectToday },
    { id:'d_spell5',   icon:'✍️', xp:12, en:'Spell 5 words correctly',       pt:'Soletra 5 palavras certo',     check: s => (s.typeCount?.spell || 0) >= 5 },
  ],
  weekly: [
    { id:'w_quiz10',   icon:'📚', xp:50, en:'Complete 10 quizzes this week', pt:'Completa 10 quizzes esta semana', check: s => s.quizzesWeek >= 10 },
    { id:'w_xp200',    icon:'⭐', xp:40, en:'Earn 200 XP this week',         pt:'Ganha 200 XP esta semana',        check: s => s.xpWeek >= 200 },
    { id:'w_combo10',  icon:'👑', xp:60, en:'Achieve a 10x combo',           pt:'Atinge um combo x10',             check: s => s.maxComboWeek >= 10 },
    { id:'w_types5',   icon:'🎲', xp:45, en:'Try 5 different question types',pt:'Experimenta 5 tipos de questão',  check: s => Object.keys(s.typeCount||{}).length >= 5 },
  ],
};

function _getMissionState() {
  try { return JSON.parse(localStorage.getItem('ews_mission_state') || '{}'); } catch { return {}; }
}
function _saveMissionState(s) {
  try { localStorage.setItem('ews_mission_state', JSON.stringify(s)); } catch {}
}
function _getActiveMissions() {
  try { return JSON.parse(localStorage.getItem('ews_active_missions') || 'null'); } catch { return null; }
}
function _saveActiveMissions(m) {
  try { localStorage.setItem('ews_active_missions', JSON.stringify(m)); } catch {}
}

function getOrCreateMissions() {
  const today    = new Date().toDateString();
  const weekKey  = _getWeekKey();
  let active     = _getActiveMissions();

  // Regenerate daily if stale
  if (!active || active.dailyDate !== today) {
    const shuffled = [...MISSION_DEFS.daily].sort(() => Math.random() - .5);
    const daily    = shuffled.slice(0, 3).map(d => ({ ...d, done: false }));
    active = { dailyDate: today, weekKey, daily, weekly: active?.weekKey === weekKey ? active.weekly : _genWeekly() };
    _saveActiveMissions(active);
  }
  if (active.weekKey !== weekKey) {
    active.weekKey = weekKey;
    active.weekly  = _genWeekly();
    _saveActiveMissions(active);
  }
  return active;
}

function _genWeekly() {
  const shuffled = [...MISSION_DEFS.weekly].sort(() => Math.random() - .5);
  return shuffled.slice(0, 2).map(d => ({ ...d, done: false }));
}

function _getWeekKey() {
  const d = new Date();
  const start = new Date(d); start.setDate(d.getDate() - d.getDay());
  return start.toDateString();
}

// Call after each quiz to check & award missions
function checkMissions(quizResult) {
  const s   = _getMissionState();
  const today = new Date().toDateString();
  if (s.date !== today) { s.date = today; s.quizzesCompleted = 0; s.correctToday = 0; s.maxComboToday = 0; s.hadPerfectToday = false; s.typeCount = {}; }

  s.quizzesCompleted  = (s.quizzesCompleted  || 0) + 1;
  s.correctToday      = (s.correctToday      || 0) + (quizResult.score || 0);
  s.maxComboToday     = Math.max(s.maxComboToday || 0, quizResult.maxCombo || 0);
  if (quizResult.perfect) s.hadPerfectToday = true;
  s.typeCount = s.typeCount || {};
  (quizResult.typesUsed || []).forEach(t => { s.typeCount[t] = (s.typeCount[t] || 0) + 1; });

  // weekly
  const wk = _getWeekKey();
  if (s.weekKey !== wk) { s.weekKey = wk; s.quizzesWeek = 0; s.xpWeek = 0; s.maxComboWeek = 0; }
  s.quizzesWeek  = (s.quizzesWeek  || 0) + 1;
  s.xpWeek       = (s.xpWeek       || 0) + (quizResult.xpEarned || 0);
  s.maxComboWeek = Math.max(s.maxComboWeek || 0, quizResult.maxCombo || 0);

  _saveMissionState(s);

  const active   = getOrCreateMissions();
  let   xpBonus  = 0;
  const newlyDone = [];

  [...active.daily, ...active.weekly].forEach(m => {
    if (!m.done && m.check(s)) {
      m.done  = true;
      xpBonus += m.xp;
      newlyDone.push(m);
    }
  });
  _saveActiveMissions(active);

  // Award XP bonus
  if (xpBonus > 0 && typeof getCU === 'function') {
    const u = getCU();
    if (u) { u.xp = (u.xp || 0) + xpBonus; if (typeof saveCU === 'function') saveCU(u); }
    if (typeof showXPPop === 'function') showXPPop(`+${xpBonus} XP (missions)`);
  }

  newlyDone.forEach(m => _showMissionToast(m));
  return newlyDone;
}
window.checkMissions = checkMissions;

function _showMissionToast(m) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const label = lang === 'pt' ? m.pt : m.en;
  const el = document.createElement('div');
  el.className = 'mission-toast';
  el.innerHTML = `<span class="mt-icon">${m.icon}</span><div><div class="mt-title">${lang === 'pt' ? 'Missão Completa!' : 'Mission Complete!'}</div><div class="mt-label">${label}</div><div class="mt-xp">+${m.xp} XP</div></div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('on'));
  setTimeout(() => { el.classList.remove('on'); setTimeout(() => el.remove(), 400); }, 3500);
}

window.getMissions = getOrCreateMissions;

// ─── SHOP ────────────────────────────────────────────────
const SHOP_ITEMS = [
  { id:'fifty_3',  icon:'💡', en:'3× 50/50',       pt:'3× 50/50',        cost:30,  gives:{ fifty:3  } },
  { id:'skip_3',   icon:'⏩', en:'3× Skip',         pt:'3× Skip',         cost:25,  gives:{ skip:3   } },
  { id:'shield_3', icon:'🛡️',en:'3× Shield',        pt:'3× Shield',       cost:35,  gives:{ shield:3 } },
  { id:'fifty_5',  icon:'💡', en:'5× 50/50',        pt:'5× 50/50',        cost:45,  gives:{ fifty:5  } },
  { id:'skip_5',   icon:'⏩', en:'5× Skip',          pt:'5× Skip',         cost:40,  gives:{ skip:5   } },
  { id:'shield_5', icon:'🛡️',en:'5× Shield',         pt:'5× Shield',       cost:55,  gives:{ shield:5 } },
  { id:'bundle',   icon:'🎁', en:'Full Bundle (5 each)',pt:'Bundle (5 cada)',cost:100, gives:{ fifty:5, skip:5, shield:5 } },
];
window.SHOP_ITEMS = SHOP_ITEMS;

function _getShopInventory() {
  try { return JSON.parse(localStorage.getItem('ews_shop_inv') || '{}'); } catch { return {}; }
}
function _saveShopInventory(s) {
  try { localStorage.setItem('ews_shop_inv', JSON.stringify(s)); } catch {}
}
function getInventory() { return _getShopInventory(); }
window.getInventory = getInventory;

function buyItem(itemId) {
  const item = SHOP_ITEMS.find(i => i.id === itemId);
  if (!item) return { ok: false, msg: 'Item not found' };
  const u = typeof getCU === 'function' ? getCU() : null;
  if (!u) return { ok: false, msg: 'Not logged in' };
  if ((u.xp || 0) < item.cost) return { ok: false, msg: 'not_enough_xp' };
  u.xp -= item.cost;
  if (typeof saveCU === 'function') saveCU(u);
  const inv = _getShopInventory();
  Object.keys(item.gives).forEach(k => { inv[k] = (inv[k] || 0) + item.gives[k]; });
  _saveShopInventory(inv);
  if (typeof refreshUI === 'function') refreshUI();
  if (typeof SFX !== 'undefined') SFX.xp();
  return { ok: true };
}
window.buyItem = buyItem;

// Consume shop inventory into Q.powerups at quiz start
function loadShopPowerups() {
  const inv = _getShopInventory();
  return { fifty: inv.fifty || 0, skip: inv.skip || 0, shield: inv.shield || 0 };
}
function deductShopPowerup(type, used) {
  const inv = _getShopInventory();
  inv[type] = Math.max(0, (inv[type] || 0) - used);
  _saveShopInventory(inv);
}
window.loadShopPowerups = loadShopPowerups;
window.deductShopPowerup = deductShopPowerup;

// ─── SHOP OVERLAY ────────────────────────────────────────
function showShop() {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const u = typeof getCU === 'function' ? getCU() : null;
  const xp = u?.xp || 0;
  const inv = _getShopInventory();

  const html = `
  <div class="shop-overlay" id="shopOverlay" onclick="if(event.target===this)closeShop()">
    <div class="shop-panel">
      <div class="shop-header">
        <div class="shop-title">🛒 ${lang === 'pt' ? 'Loja de Power-ups' : 'Power-up Shop'}</div>
        <div class="shop-xp">⭐ ${xp} XP</div>
        <button class="shop-close" onclick="closeShop()">✕</button>
      </div>
      <div class="shop-inv">
        <div class="inv-item">💡 <span>${inv.fifty || 0}</span></div>
        <div class="inv-item">⏩ <span>${inv.skip  || 0}</span></div>
        <div class="inv-item">🛡️ <span>${inv.shield|| 0}</span></div>
      </div>
      <div class="shop-grid">
        ${SHOP_ITEMS.map(item => `
          <div class="shop-item ${xp < item.cost ? 'shop-locked' : ''}">
            <div class="si-icon">${item.icon}</div>
            <div class="si-name">${lang === 'pt' ? item.pt : item.en}</div>
            <div class="si-cost">⭐ ${item.cost}</div>
            <button class="si-buy" onclick="shopBuy('${item.id}')" ${xp < item.cost ? 'disabled' : ''}>
              ${lang === 'pt' ? 'Comprar' : 'Buy'}
            </button>
          </div>`).join('')}
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  requestAnimationFrame(() => document.getElementById('shopOverlay')?.classList.add('on'));
}
window.showShop = showShop;

window.shopBuy = function(itemId) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const res = buyItem(itemId);
  if (res.ok) {
    closeShop();
    setTimeout(showShop, 200);
  } else if (res.msg === 'not_enough_xp') {
    if (typeof showToast === 'function') showToast(lang === 'pt' ? 'XP insuficiente!' : 'Not enough XP!');
  }
};

window.closeShop = function() {
  const el = document.getElementById('shopOverlay');
  if (!el) return;
  el.classList.remove('on');
  setTimeout(() => el.remove(), 300);
};

// ─── AVATAR PICKER ───────────────────────────────────────
function showAvatarPicker(onSelect) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const current = getAvatar();
  const html = `
  <div class="avatar-overlay" id="avatarOverlay" onclick="if(event.target===this)closeAvatarPicker()">
    <div class="avatar-panel">
      <div class="avatar-title">${lang === 'pt' ? 'Escolhe o teu Avatar' : 'Choose your Avatar'}</div>
      <div class="avatar-grid">
        ${AVATARS.map(a => `
          <button class="av-cell ${a === current ? 'av-selected' : ''}" onclick="pickAvatar('${a}')">
            ${a}
          </button>`).join('')}
      </div>
      <button class="av-close" onclick="closeAvatarPicker()">${lang === 'pt' ? 'Fechar' : 'Close'}</button>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
  requestAnimationFrame(() => document.getElementById('avatarOverlay')?.classList.add('on'));
  window._avatarCallback = onSelect || null;
}
window.showAvatarPicker = showAvatarPicker;

window.pickAvatar = function(a) {
  setAvatar(a);
  document.querySelectorAll('.av-cell').forEach(c => c.classList.remove('av-selected'));
  document.querySelectorAll('.av-cell').forEach(c => { if (c.textContent.trim() === a) c.classList.add('av-selected'); });
  if (window._avatarCallback) window._avatarCallback(a);
  if (typeof refreshUI === 'function') refreshUI();
  if (typeof SFX !== 'undefined') SFX.click();
  setTimeout(closeAvatarPicker, 300);
};

window.closeAvatarPicker = function() {
  const el = document.getElementById('avatarOverlay');
  if (!el) return;
  el.classList.remove('on');
  setTimeout(() => el.remove(), 300);
};

// ─── LEAGUE HUD (inject into profile/results) ────────────
function renderLeagueBadge(xp, container) {
  const { league, pct, needed } = getLeagueProgress(xp);
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const label = lang === 'pt' ? league.labelPt : league.label;
  const el = document.createElement('div');
  el.className = 'league-badge';
  el.innerHTML = `
    <div class="lb-icon" style="text-shadow:0 0 12px ${league.glow}">${league.icon}</div>
    <div class="lb-info">
      <div class="lb-name" style="color:${league.color}">${label}</div>
      <div class="lb-bar-wrap"><div class="lb-bar" style="width:${pct}%;background:${league.color}"></div></div>
      <div class="lb-sub">${needed !== null ? (lang === 'pt' ? `${needed} XP para próxima liga` : `${needed} XP to next league`) : (lang === 'pt' ? 'Liga Máxima!' : 'Max League!')}</div>
    </div>`;
  if (container) container.appendChild(el);
  return el;
}
window.renderLeagueBadge = renderLeagueBadge;

console.log('[EWS] gamification.js v3.4 loaded — Leagues · Missions · Shop · Avatars');
