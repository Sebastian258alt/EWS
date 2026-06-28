// ═══════════════════════════════════════════════════════════
//  🎯 QUIZ.JS — Quiz Engine v3.2 (Enhanced · Gamified · Power-ups)
//  English With Sebastian
// ═══════════════════════════════════════════════════════════
//
//  Question types:
//    mc       — multiple choice (A B C D)
//    drop     — word bank tap-to-fill blank
//    fill     — 2-chip quick fill
//    match    — match 4 pairs
//    reorder  — tap words in order
//    spell    — type the answer (keyboard)
//    speed    — MC with 10s countdown + XP bonus
//    emoji    — pick the word for an emoji clue
//
//  Power-ups (3 per session, Daily only):
//    💡 fifty  — eliminate 2 wrong MC options
//    ⏩ skip   — skip without penalty
//    🛡️ shield — protect 1 heart on next wrong answer
//
//  Badges per question type (tracked in localStorage)
//  Versus ghost mode (beat your last Daily score)
// ═══════════════════════════════════════════════════════════

let Q = {
  qs:[], idx:0, score:0, combo:0, maxC:0,
  lessonId:null, unitId:null, xpR:0,
  gramMode:false, title:'',
  powerups:{ fifty:3, skip:3, shield:3 },
  shieldActive:false,
  speedBonus:0,
  versusGhost:null,   // ghost best score for Versus mode
  versusMode:false,
};

// ─── BADGE TRACKING ──────────────────────────────────────
const BADGE_DEFS = [
  { id:'mc_master',     type:'mc',      needed:50,  icon:'🏅', label:'MC Master'      },
  { id:'drop_king',     type:'drop',    needed:20,  icon:'🎯', label:'Drop King'       },
  { id:'fill_flash',    type:'fill',    needed:20,  icon:'⚡', label:'Fill Flash'      },
  { id:'match_mind',    type:'match',   needed:10,  icon:'🔗', label:'Match Mind'      },
  { id:'reorder_ace',   type:'reorder', needed:15,  icon:'🔀', label:'Reorder Ace'     },
  { id:'spell_wizard',  type:'spell',   needed:15,  icon:'✍️', label:'Spell Wizard'   },
  { id:'speed_demon',   type:'speed',   needed:10,  icon:'⚡', label:'Speed Demon'     },
  { id:'emoji_reader',  type:'emoji',   needed:15,  icon:'🖼️', label:'Emoji Reader'   },
  { id:'combo_god',     combo:10,               icon:'🔥', label:'Combo God'       },
  { id:'perfect_daily', perfectDaily:true,      icon:'🏆', label:'Perfect Daily'   },
];

function _getBadges() {
  try { return JSON.parse(localStorage.getItem('ews_badges') || '{}'); } catch { return {}; }
}
function _saveBadges(b) {
  try { localStorage.setItem('ews_badges', JSON.stringify(b)); } catch {}
}
function _incBadgeStat(type) {
  const b = _getBadges();
  b['stat_'+type] = (b['stat_'+type]||0) + 1;
  _saveBadges(b);
  // check unlocks
  BADGE_DEFS.forEach(def => {
    if (def.type === type && b['stat_'+type] >= def.needed && !b[def.id]) {
      b[def.id] = Date.now();
      _saveBadges(b);
      _showBadgeToast(def);
    }
  });
}
function _checkComboBadge(combo) {
  const b = _getBadges();
  if (combo >= 10 && !b['combo_god']) {
    b['combo_god'] = Date.now(); _saveBadges(b);
    _showBadgeToast(BADGE_DEFS.find(d=>d.id==='combo_god'));
  }
}
function _checkPerfectDailyBadge() {
  const b = _getBadges();
  if (!b['perfect_daily']) {
    b['perfect_daily'] = Date.now(); _saveBadges(b);
    _showBadgeToast(BADGE_DEFS.find(d=>d.id==='perfect_daily'));
  }
}
function _showBadgeToast(def) {
  if (!def) return;
  const el = document.createElement('div');
  el.className = 'badge-toast';
  el.innerHTML = `<span class="bt-icon">${def.icon}</span><div><div class="bt-title">Badge Desbloqueado!</div><div class="bt-name">${def.label}</div></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add('on'), 50);
  setTimeout(() => { el.classList.remove('on'); setTimeout(()=>el.remove(),400); }, 3000);
}

// ─── QUESTION TYPE BUILDERS ───────────────────────────────
function _asMC(q) {
  return { type:'mc', q:q.q, opts:q.opts, ans:q.ans, exp:q.exp||'' };
}
function _buildDrop(q) {
  const answer = q.opts[q.ans];
  const sentence = q.q.includes('___') ? q.q : q.q;
  const bank = [answer, ...q.opts.filter((_,i)=>i!==q.ans).slice(0,3)].sort(()=>Math.random()-.5);
  return { type:'drop', q:sentence, answer, bank, exp:q.exp||'' };
}
function _buildFill(q) {
  const answer = q.opts[q.ans];
  const wrong  = q.opts.find((_,i)=>i!==q.ans) || q.opts[(q.ans+1)%q.opts.length];
  const chips  = Math.random()>.5 ? [answer,wrong] : [wrong,answer];
  return { type:'fill', q:q.q, answer, chips, exp:q.exp||'' };
}
function _buildReorder(q) {
  const answer = q.opts[q.ans];
  if (!answer.includes(' ')) return _asMC(q);
  const words = answer.split(' ');
  const shuffled = [...words].sort(()=>Math.random()-.5);
  let tries=0;
  while(shuffled.join(' ')===answer && tries<10){ shuffled.sort(()=>Math.random()-.5); tries++; }
  return { type:'reorder', q:q.q, words, shuffled, answer, exp:q.exp||'' };
}
function _buildMatch(qs4) {
  const pairs = qs4.map(q=>({ left: q.q.replace(/___/g,'...').substring(0,40), right: q.opts[q.ans] }));
  return { type:'match', pairs, exp:'' };
}
function _buildSpell(q) {
  return { type:'spell', q:q.q, answer:q.opts[q.ans], hint: q.opts[q.ans][0]+'___', exp:q.exp||'' };
}
function _buildSpeed(q) {
  return { type:'speed', q:q.q, opts:q.opts, ans:q.ans, exp:q.exp||'', timeLimit:10 };
}

// Emoji quiz: uses the correct answer as the "word to show with emoji"
const EMOJI_MAP = {
  // common English words → emoji clues
  'cat':'🐱','dog':'🐶','house':'🏠','car':'🚗','book':'📚','water':'💧',
  'sun':'☀️','rain':'🌧️','happy':'😊','sad':'😢','run':'🏃','eat':'🍽️',
  'sleep':'😴','work':'💼','school':'🏫','phone':'📱','music':'🎵','fire':'🔥',
  'heart':'❤️','star':'⭐','money':'💰','food':'🍕','tree':'🌳','fish':'🐟',
  'bird':'🐦','flower':'🌸','bus':'🚌','train':'🚂','plane':'✈️','swim':'🏊',
};
function _buildEmoji(q) {
  const answer = q.opts[q.ans].toLowerCase();
  const emoji  = EMOJI_MAP[answer];
  if (!emoji) return _asMC(q); // fallback
  return { type:'emoji', q:q.q, opts:q.opts, ans:q.ans, emoji, exp:q.exp||'' };
}

// ─── QUESTION MIXER ──────────────────────────────────────
function _mixQuestions(pool, count=10) {
  const shuffled = [...pool].sort(()=>Math.random()-.5);
  // grab enough for all types
  const picked = shuffled.slice(0, Math.min(count+10, shuffled.length));

  const result = [];
  let i = 0;

  // Plan: mc, speed, drop, fill, match(4qs), reorder, spell, emoji, mc, drop
  const plan = ['mc','speed','drop','fill','match','reorder','spell','emoji','mc','drop'];

  for (const type of plan) {
    if (result.length >= count) break;
    if (type === 'match') {
      const slice = picked.slice(i, i+4);
      if (slice.length >= 4) { result.push(_buildMatch(slice)); i+=4; }
      else i+=4;
      continue;
    }
    const q = picked[i]; if (!q) break;
    switch(type) {
      case 'speed':   result.push(_buildSpeed(q)); break;
      case 'drop':    result.push(q.q.includes('___') ? _buildDrop(q) : _asMC(q)); break;
      case 'fill':    result.push(q.q.includes('___') ? _buildFill(q) : _asMC(q)); break;
      case 'reorder': result.push(q.opts[q.ans].includes(' ') ? _buildReorder(q) : _asMC(q)); break;
      case 'spell':   result.push(_buildSpell(q)); break;
      case 'emoji':   result.push(_buildEmoji(q)); break;
      default:        result.push(_asMC(q));
    }
    i++;
  }
  return result;
}

// ─── START FUNCTIONS ─────────────────────────────────────
function startLesson(unitId, lessonId) {
  const unit   = UNITS.find(u=>u.id===unitId);
  const lesson = unit?.lessons.find(l=>l.id===lessonId);
  if (!lesson) return;
  SFX.click();
  let u = getCU(); if (!u) return;
  if (u.hearts<=0) { showToast(t('noHearts')); return; }
  const title = currentLang==='pt' ? (lesson.titlePt||lesson.title) : lesson.title;
  Q = { qs:lesson.qs.map(_asMC), idx:0, score:0, combo:0, maxC:0, lessonId, unitId, xpR:lesson.xp,
        gramMode:false, title, powerups:{fifty:0,skip:0,shield:0}, shieldActive:false, speedBonus:0, versusMode:false };
  showQuiz();
}
window.startLesson = startLesson;

function startDailyChallenge() {
  SFX.click();
  let u = getCU(); if (!u) return;
  const today = new Date().toDateString();
  if (u.dailyChallengeDone===today) { showToast(t('alreadyDone')); return; }
  const allQs = UNITS.flatMap(u=>u.lessons.flatMap(l=>l.qs));
  const mixed = _mixQuestions(allQs, 10);
  // Versus: load ghost
  let ghost = null;
  try { ghost = JSON.parse(localStorage.getItem('ews_daily_best')||'null'); } catch {}
  Q = { qs:mixed, idx:0, score:0, combo:0, maxC:0, lessonId:null, unitId:null, xpR:20,
        gramMode:false, title:t('dailyChallenge'),
        powerups:{fifty:3, skip:3, shield:3}, shieldActive:false, speedBonus:0,
        versusGhost:ghost, versusMode:!!ghost };
  showQuiz();
}

function startQuizFromData(title, qs, xp, gramMode=false) {
  Q = { qs:qs.map(_asMC), idx:0, score:0, combo:0, maxC:0, lessonId:null, unitId:null, xpR:xp,
        gramMode, title, powerups:{fifty:0,skip:0,shield:0}, shieldActive:false, speedBonus:0, versusMode:false };
  showQuiz();
}
window.startQuizFromData = startQuizFromData;

function showQuiz() {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('tab-quiz').classList.add('on');
  document.getElementById('fabContainer').style.display='none';
  renderQ();
}

// ─── SHELL RENDERER ──────────────────────────────────────
function renderQ() {
  let u = getCU(); if (!u) return;
  const qd  = Q.qs[Q.idx];
  const pct = (Q.idx/Q.qs.length)*100;
  const hearts = Array.from({length:5},(_,i)=>
    `<span class="hrt${i>=u.hearts?' dead':''}" id="hrt${i}">❤️</span>`
  ).join('');

  // power-ups bar (only in Daily / Versus mode)
  const puBar = (Q.powerups.fifty>=0 && !Q.gramMode && !Q.lessonId) ? `
    <div class="pu-bar">
      <button class="pu-btn" onclick="usePowerup('fifty')" title="50/50" ${Q.powerups.fifty<=0||qd.type!=='mc'&&qd.type!=='speed'?'disabled':''}>
        💡<span class="pu-count">${Q.powerups.fifty}</span>
      </button>
      <button class="pu-btn" onclick="usePowerup('skip')" title="Skip" ${Q.powerups.skip<=0?'disabled':''}>
        ⏩<span class="pu-count">${Q.powerups.skip}</span>
      </button>
      <button class="pu-btn ${Q.shieldActive?'pu-active':''}" onclick="usePowerup('shield')" title="Shield" ${Q.powerups.shield<=0&&!Q.shieldActive?'disabled':''}>
        🛡️<span class="pu-count">${Q.shieldActive?'ON':Q.powerups.shield}</span>
      </button>
    </div>` : '';

  // versus ghost HUD
  const ghostScore = Q.versusMode && Q.versusGhost
    ? `<div class="versus-hud">👻 Ghost: ${Q.versusGhost.score}/${Q.versusGhost.total} · You: ${Q.score}/${Q.idx}</div>`
    : '';

  const shell = `
  <div class="quiz-wrap">
    <div class="quiz-toprow">
      <button class="qclose" onclick="closeQuiz()" aria-label="Close">${t('close')}</button>
      <div class="qbar-bg" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemax="100">
        <div class="qbar-fill" style="width:${pct}%"></div>
        <div class="qbar-glow" style="left:${pct}%"></div>
      </div>
      <div class="hrow">${hearts}</div>
    </div>
    ${puBar}
    ${ghostScore}
    <div class="quiz-body">
      <div class="combo-ind" id="comboInd"></div>
      <div class="q-tag">📍 ${Q.idx+1} / ${Q.qs.length} · ${Q.title}</div>
      <div id="q-inner" class="q-inner-enter"></div>
    </div>
    <div class="fb-foot" id="fb" style="display:none"></div>
  </div>`;

  document.getElementById('tab-quiz').innerHTML = shell;
  // animate in
  requestAnimationFrame(()=>{
    const el = document.getElementById('q-inner');
    if(el) { el.classList.remove('q-inner-enter'); el.classList.add('q-inner-active'); }
  });

  const inner = document.getElementById('q-inner');
  if      (qd.type==='mc')      renderMC(qd,inner);
  else if (qd.type==='drop')    renderDrop(qd,inner);
  else if (qd.type==='fill')    renderFill(qd,inner);
  else if (qd.type==='match')   renderMatch(qd,inner);
  else if (qd.type==='reorder') renderReorder(qd,inner);
  else if (qd.type==='spell')   renderSpell(qd,inner);
  else if (qd.type==='speed')   renderSpeed(qd,inner);
  else if (qd.type==='emoji')   renderEmoji(qd,inner);
  else renderMC(qd,inner);
}

// ─── TYPE: MC ─────────────────────────────────────────────
function renderMC(qd, el) {
  el.innerHTML = `
    <div class="qt-badge qt-mc">🔤 Multiple Choice</div>
    <div class="q-text">${qd.q}</div>
    <div class="q-opts">
      ${qd.opts.map((o,i)=>`
        <button class="qopt" id="qo${i}" onclick="selOpt(${i})">
          <span class="oletter">${['A','B','C','D'][i]}</span>
          <span class="otext">${o}</span>
        </button>`).join('')}
    </div>`;
}

// ─── TYPE: SPEED ─────────────────────────────────────────
let _speedTimer = null;
function renderSpeed(qd, el) {
  clearInterval(_speedTimer);
  let remaining = qd.timeLimit || 10;
  el.innerHTML = `
    <div class="qt-badge qt-speed">⚡ Speed Round</div>
    <div class="speed-timer-wrap">
      <div class="speed-timer-ring">
        <svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="var(--surface3)" stroke-width="4"/><circle id="speedRingFill" cx="22" cy="22" r="18" fill="none" stroke="var(--yellow)" stroke-width="4" stroke-dasharray="113" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 22 22)"/></svg>
        <span class="speed-count" id="speedCount">${remaining}</span>
      </div>
      <div class="speed-bonus-hint">+5 XP if fast!</div>
    </div>
    <div class="q-text">${qd.q}</div>
    <div class="q-opts">
      ${qd.opts.map((o,i)=>`
        <button class="qopt" id="qo${i}" onclick="selOptSpeed(${i},${qd.ans})">
          <span class="oletter">${['A','B','C','D'][i]}</span>
          <span class="otext">${o}</span>
        </button>`).join('')}
    </div>`;

  const total = remaining;
  _speedTimer = setInterval(()=>{
    remaining--;
    const countEl = document.getElementById('speedCount');
    const ring    = document.getElementById('speedRingFill');
    if (!countEl) { clearInterval(_speedTimer); return; }
    countEl.textContent = remaining;
    if (ring) ring.style.strokeDashoffset = 113*(1-(remaining/total));
    if (remaining<=3) countEl.style.color='var(--red)';
    if (remaining<=0) {
      clearInterval(_speedTimer);
      document.querySelectorAll('.qopt').forEach(o=>o.disabled=true);
      document.getElementById('qo'+qd.ans)?.classList.add('ok');
      resolveAnswer(false, qd);
    }
  }, 1000);
}

window.selOptSpeed = function(idx, ans) {
  clearInterval(_speedTimer);
  const remaining = parseInt(document.getElementById('speedCount')?.textContent||'0');
  const ok = idx===ans;
  if (ok && remaining>5) Q.speedBonus += 5; // fast bonus
  document.querySelectorAll('.qopt').forEach(o=>o.disabled=true);
  document.getElementById('qo'+idx).classList.add(ok?'ok':'no');
  if (!ok) document.getElementById('qo'+ans)?.classList.add('ok');
  resolveAnswer(ok, Q.qs[Q.idx]);
};

// ─── TYPE: DROP ───────────────────────────────────────────
function renderDrop(qd, el) {
  window._dropSelected = null;
  const slotHTML = qd.q.replace('___','<span class="drop-slot" id="dropSlot">___</span>');
  el.innerHTML = `
    <div class="qt-badge qt-drop">🎯 Word Drop</div>
    <div class="q-text drop-sentence">${slotHTML}</div>
    <div class="drop-bank">
      ${qd.bank.map((w,i)=>`<button class="drop-chip" id="dchip${i}" onclick="dropSelect(${i},'${esc(w)}','${esc(qd.answer)}')">${w}</button>`).join('')}
    </div>
    <button class="drop-check" id="dropCheck" onclick="checkDrop('${esc(qd.answer)}','${esc(qd.exp)}')">✅ ${currentLang==='pt'?'Confirmar':'Check'}</button>`;
}
window.dropSelect = function(idx,word,answer) {
  document.querySelectorAll('.drop-chip').forEach(c=>c.classList.remove('selected'));
  document.getElementById('dchip'+idx).classList.add('selected');
  window._dropSelected = word;
  const slot = document.getElementById('dropSlot');
  if(slot){ slot.textContent=word; slot.classList.add('filled'); }
};
window.checkDrop = function(answer,exp) {
  const filled = window._dropSelected;
  if(!filled){ showToast(currentLang==='pt'?'Escolhe uma palavra!':'Pick a word first!'); return; }
  const ok = filled.trim().toLowerCase()===answer.trim().toLowerCase();
  document.querySelectorAll('.drop-chip').forEach(c=>c.disabled=true);
  document.getElementById('dropCheck').disabled=true;
  const slot = document.getElementById('dropSlot');
  if(slot) slot.className='drop-slot '+(ok?'drop-ok':'drop-no');
  resolveAnswer(ok,{exp});
};

// ─── TYPE: FILL ───────────────────────────────────────────
function renderFill(qd, el) {
  el.innerHTML = `
    <div class="qt-badge qt-fill">⚡ Quick Fill</div>
    <div class="q-text">${qd.q}</div>
    <div class="fill-chips">
      ${qd.chips.map((c,i)=>`
        <button class="fill-chip" id="fc${i}" onclick="selectFill(${i},'${esc(c)}','${esc(qd.answer)}','${esc(qd.exp)}')">
          ${c}
        </button>`).join('')}
    </div>`;
}
window.selectFill = function(idx,word,answer,exp) {
  document.querySelectorAll('.fill-chip').forEach(c=>c.disabled=true);
  const ok = word.trim().toLowerCase()===answer.trim().toLowerCase();
  document.getElementById('fc'+idx).classList.add(ok?'fc-ok':'fc-no');
  if(!ok) document.querySelectorAll('.fill-chip').forEach(c=>{ if(c.textContent.trim().toLowerCase()===answer.trim().toLowerCase()) c.classList.add('fc-ok'); });
  resolveAnswer(ok,{exp});
};

// ─── TYPE: MATCH ─────────────────────────────────────────
function renderMatch(qd, el) {
  const rights = [...qd.pairs.map(p=>p.right)].sort(()=>Math.random()-.5);
  window._matchState = { sel:null, done:0, total:qd.pairs.length, correct:0, pairs:qd.pairs, rights };
  el.innerHTML = `
    <div class="qt-badge qt-match">🔗 Match Pairs</div>
    <div class="q-text">${currentLang==='pt'?'Liga cada frase à resposta correcta:':'Match each phrase to its correct answer:'}</div>
    <div class="match-grid">
      <div class="match-col">${qd.pairs.map((p,i)=>`<button class="match-item match-left" id="ml${i}" onclick="matchClick('l',${i},'${esc(p.left)}','${esc(p.right)}')">${p.left}</button>`).join('')}</div>
      <div class="match-col">${rights.map((r,i)=>`<button class="match-item match-right" id="mr${i}" onclick="matchClick('r',${i},'${esc(r)}')">${r}</button>`).join('')}</div>
    </div>`;
}
window.matchClick = function(side,idx,text,expectedRight) {
  const s = window._matchState; if(!s) return;
  if(side==='l'){
    document.querySelectorAll('.match-left').forEach(e=>e.classList.remove('m-sel'));
    const el=document.getElementById('ml'+idx);
    if(el.classList.contains('m-matched')||el.classList.contains('m-wrong')) return;
    el.classList.add('m-sel');
    s.sel={side:'l',idx,text,expectedRight};
  } else {
    if(!s.sel||s.sel.side!=='l'){
      document.querySelectorAll('.match-right').forEach(e=>e.classList.remove('m-sel'));
      const el=document.getElementById('mr'+idx);
      if(el.classList.contains('m-matched')||el.classList.contains('m-wrong')) return;
      el.classList.add('m-sel');
      s.sel={side:'r',idx,text}; return;
    }
    const leftIdx=s.sel.idx; const leftPair=s.pairs[leftIdx];
    const ok=text.trim()===leftPair.right.trim();
    const lEl=document.getElementById('ml'+leftIdx), rEl=document.getElementById('mr'+idx);
    if(ok){
      lEl.classList.remove('m-sel'); lEl.classList.add('m-matched'); lEl.disabled=true;
      rEl.classList.add('m-matched'); rEl.disabled=true;
      s.correct++; SFX.correct&&SFX.correct(); spawnEmojis('✨',1);
    } else {
      lEl.classList.remove('m-sel'); lEl.classList.add('m-wrong'); rEl.classList.add('m-wrong');
      SFX.wrong&&SFX.wrong();
      setTimeout(()=>{ lEl.classList.remove('m-wrong'); rEl.classList.remove('m-wrong'); },600);
    }
    s.sel=null; s.done++;
    if(s.correct===s.total) setTimeout(()=>resolveAnswer(true,{exp:''}),400);
    else if(s.done>=s.total*2) setTimeout(()=>resolveAnswer(s.correct>=Math.ceil(s.total/2),{exp:''}),400);
  }
};

// ─── TYPE: REORDER ───────────────────────────────────────
function renderReorder(qd, el) {
  window._reorderChosen=[];
  el.innerHTML = `
    <div class="qt-badge qt-reorder">🔀 Reorder</div>
    <div class="q-text">${qd.q}</div>
    <div class="reorder-answer" id="reorderAnswer"><span class="reorder-placeholder">${currentLang==='pt'?'Toca nas palavras para ordenar...':'Tap words to build the sentence...'}</span></div>
    <div class="reorder-bank">
      ${qd.shuffled.map((w,i)=>`<button class="reorder-chip" id="rch${i}" onclick="reorderPick(${i},'${esc(w)}')">${w}</button>`).join('')}
    </div>
    <div style="display:flex;gap:.5rem;margin-top:.7rem">
      <button class="drop-check" style="flex:1" onclick="checkReorder('${esc(qd.answer)}','${esc(qd.exp)}')">✅ ${currentLang==='pt'?'Confirmar':'Check'}</button>
      <button class="drop-check" style="flex:0 0 auto;background:var(--surface3);color:var(--muted)" onclick="reorderClear()">↩</button>
    </div>`;
}
window.reorderPick = function(idx,word) {
  const btn=document.getElementById('rch'+idx); if(!btn||btn.disabled) return;
  btn.disabled=true; btn.style.opacity='0.3';
  window._reorderChosen.push({idx,word}); _refreshReorderAnswer();
};
window.reorderClear = function() {
  window._reorderChosen=[];
  document.querySelectorAll('.reorder-chip').forEach(b=>{b.disabled=false;b.style.opacity='1';});
  _refreshReorderAnswer();
};
function _refreshReorderAnswer() {
  const el=document.getElementById('reorderAnswer'); if(!el) return;
  el.innerHTML = window._reorderChosen.length===0
    ? `<span class="reorder-placeholder">${currentLang==='pt'?'Toca nas palavras para ordenar...':'Tap words to build the sentence...'}</span>`
    : window._reorderChosen.map(c=>`<span class="reorder-placed">${c.word}</span>`).join(' ');
}
window.checkReorder = function(answer,exp) {
  if(!window._reorderChosen.length){ showToast(currentLang==='pt'?'Ordena as palavras primeiro!':'Tap words first!'); return; }
  document.querySelectorAll('.reorder-chip, .drop-check').forEach(b=>b.disabled=true);
  const built=window._reorderChosen.map(c=>c.word).join(' ');
  const ok=built.trim().toLowerCase()===answer.trim().toLowerCase();
  const el=document.getElementById('reorderAnswer');
  if(el) el.className='reorder-answer '+(ok?'ro-ok':'ro-no');
  resolveAnswer(ok,{exp});
};

// ─── TYPE: SPELL ─────────────────────────────────────────
function renderSpell(qd, el) {
  el.innerHTML = `
    <div class="qt-badge qt-spell">✍️ Spell It</div>
    <div class="q-text">${qd.q}</div>
    <div class="spell-hint">💡 Starts with: <strong>${qd.hint}</strong></div>
    <div class="spell-wrap">
      <input class="spell-input" id="spellInput" type="text" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${currentLang==='pt'?'Escreve a resposta...':'Type your answer...'}">
      <button class="drop-check" onclick="checkSpell('${esc(qd.answer)}','${esc(qd.exp)}')">✅ ${currentLang==='pt'?'Confirmar':'Check'}</button>
    </div>`;
  setTimeout(()=>document.getElementById('spellInput')?.focus(),200);
  document.getElementById('spellInput')?.addEventListener('keydown', e=>{
    if(e.key==='Enter') checkSpell(qd.answer, qd.exp);
  });
}
window.checkSpell = function(answer,exp) {
  const inp=document.getElementById('spellInput'); if(!inp) return;
  const val=inp.value.trim();
  if(!val){ showToast(currentLang==='pt'?'Escreve algo!':'Type something!'); return; }
  const ok=val.toLowerCase()===answer.toLowerCase();
  inp.disabled=true;
  inp.className='spell-input '+(ok?'spell-ok':'spell-no');
  if(!ok){
    const hint=document.createElement('div');
    hint.className='spell-reveal';
    hint.textContent=`✅ ${answer}`;
    inp.parentNode.insertBefore(hint,inp.nextSibling);
  }
  resolveAnswer(ok,{exp});
};

// ─── TYPE: EMOJI ─────────────────────────────────────────
function renderEmoji(qd, el) {
  el.innerHTML = `
    <div class="qt-badge qt-emoji">🖼️ Emoji Pick</div>
    <div class="emoji-display">${qd.emoji}</div>
    <div class="q-text">${qd.q}</div>
    <div class="q-opts">
      ${qd.opts.map((o,i)=>`
        <button class="qopt" id="qo${i}" onclick="selOpt(${i})">
          <span class="oletter">${['A','B','C','D'][i]}</span>
          <span class="otext">${o}</span>
        </button>`).join('')}
    </div>`;
}

// ─── POWER-UPS ───────────────────────────────────────────
window.usePowerup = function(type) {
  const qd = Q.qs[Q.idx];
  if(type==='fifty'){
    if(Q.powerups.fifty<=0) return;
    if(qd.type!=='mc'&&qd.type!=='speed'&&qd.type!=='emoji') return;
    Q.powerups.fifty--;
    // eliminate 2 wrong options
    let removed=0;
    for(let i=0;i<4&&removed<2;i++){
      if(i===qd.ans) continue;
      const btn=document.getElementById('qo'+i);
      if(btn&&!btn.disabled){ btn.style.opacity='0.2'; btn.disabled=true; removed++; }
    }
    _refreshPUBar();
    showToast('💡 50/50 used!');
  } else if(type==='skip'){
    if(Q.powerups.skip<=0) return;
    Q.powerups.skip--;
    clearInterval(_speedTimer);
    showToast('⏩ Skipped!');
    setTimeout(()=>nextQ(),400);
  } else if(type==='shield'){
    if(Q.powerups.shield<=0&&!Q.shieldActive) return;
    if(!Q.shieldActive){ Q.powerups.shield--; Q.shieldActive=true; showToast('🛡️ Shield active!'); }
    else { Q.shieldActive=false; showToast('🛡️ Shield removed.'); }
    _refreshPUBar();
  }
};
function _refreshPUBar() {
  const qd=Q.qs[Q.idx];
  const bar=document.querySelector('.pu-bar');
  if(!bar) return;
  bar.innerHTML=`
    <button class="pu-btn" onclick="usePowerup('fifty')" title="50/50" ${Q.powerups.fifty<=0||qd.type!=='mc'&&qd.type!=='speed'?'disabled':''}>
      💡<span class="pu-count">${Q.powerups.fifty}</span>
    </button>
    <button class="pu-btn" onclick="usePowerup('skip')" title="Skip" ${Q.powerups.skip<=0?'disabled':''}>
      ⏩<span class="pu-count">${Q.powerups.skip}</span>
    </button>
    <button class="pu-btn ${Q.shieldActive?'pu-active':''}" onclick="usePowerup('shield')" title="Shield" ${Q.powerups.shield<=0&&!Q.shieldActive?'disabled':''}>
      🛡️<span class="pu-count">${Q.shieldActive?'ON':Q.powerups.shield}</span>
    </button>`;
}

// ─── RESOLVE ANSWER ──────────────────────────────────────
function resolveAnswer(ok, qd) {
  clearInterval(_speedTimer);
  let u = getCU(); if (!u) return;

  // track badge stat for question type
  const curType = Q.qs[Q.idx]?.type||'mc';
  if(ok) _incBadgeStat(curType);

  const msgs = QUIZ_MSGS[currentLang]||QUIZ_MSGS.en;

  if(ok){
    SFX.correct();
    if(window.FlowyReact) FlowyReact('correct');
    Q.score++; Q.combo++; Q.maxC=Math.max(Q.maxC,Q.combo);
    _checkComboBadge(Q.combo);
    if(Q.combo>=3){
      SFX.combo();
      if(window.FlowyReact) FlowyReact('combo');
      const ci=document.getElementById('comboInd');
      ci.innerHTML=`🔥 ${Q.combo}x COMBO!`;
      ci.className='combo-ind on'+(Q.combo>=5?' mega':'');
    }
    if(window.Progress) Progress.recordAnswer(u,true);
    else u.totalCor=(u.totalCor||0)+1;
    spawnEmojis('✨',3);
  } else {
    if(Q.shieldActive){
      Q.shieldActive=false;
      showToast('🛡️ Shield blocked!');
      SFX.wrong&&SFX.wrong();
      _refreshPUBar();
    } else {
      SFX.wrong();
      if(window.FlowyReact) FlowyReact('wrong');
      Q.combo=0;
      document.getElementById('comboInd').className='combo-ind';
      if(window.Progress){ Progress.recordHeartLoss(u); u=getCU(); }
      else u.hearts=Math.max(0,u.hearts-1);
      SFX.hLoss();
      if(u.hearts<=0){
        if(window.Progress) Progress.save(u); else saveCU(u);
        setTimeout(()=>{ showToast(t('noHearts')); closeQuiz(); },1500);
        return;
      }
      if(window.Progress) Progress.recordAnswer(u,false);
      else u.totalAns=(u.totalAns||0)+1;
    }
  }

  if(!window.Progress){ u.totalAns=(u.totalAns||0)+1; saveCU(u); }
  else if(ok){ u=getCU(); }
  refreshUI();

  const isLast = Q.idx+1>=Q.qs.length;
  const fb = document.getElementById('fb');
  fb.className=`fb-foot fb-${ok?'ok':'no'}`;
  fb.innerHTML=`
    <div class="fb-inner">
      <div class="fb-icon">${ok?'✅':'❌'}</div>
      <div class="fb-content">
        <div class="fb-title">${ok?t('correct'):t('incorrect')}</div>
        <div class="fb-roast">${ok?msgs.correct[Math.floor(Math.random()*msgs.correct.length)]:msgs.wrong[Math.floor(Math.random()*msgs.wrong.length)]}</div>
        ${qd.exp?`<div class="fb-exp">${qd.exp}</div>`:''}
      </div>
    </div>
    <button class="fb-cont" onclick="nextQ()">${isLast?t('seeResults'):t('continue')}</button>`;
  fb.style.display='flex';
}

// ─── SEL OPT (MC / Emoji) ────────────────────────────────
function selOpt(idx) {
  const q=Q.qs[Q.idx];
  const ok=idx===q.ans;
  document.querySelectorAll('.qopt').forEach(o=>o.disabled=true);
  document.getElementById('qo'+idx).classList.add(ok?'ok':'no');
  if(!ok) document.getElementById('qo'+q.ans)?.classList.add('ok');
  resolveAnswer(ok,q);
}

function nextQ() {
  Q.idx++;
  if(Q.idx>=Q.qs.length) finishQ();
  else renderQ();
}

// ─── FINISH ──────────────────────────────────────────────
function finishQ() {
  clearInterval(_speedTimer);
  const u=getCU(); if(!u) return;
  const perfect = Q.score===Q.qs.length;
  const ratio   = Q.score/Q.qs.length;
  const rawXp   = Math.round(Q.xpR*ratio*(perfect?1.5:1));
  const xpE     = Q.gramMode ? Q.xpR : (Q.score>0 ? Math.max(1,rawXp+Q.speedBonus) : 0);
  const acc     = Math.round(ratio*100);

  // Badge: perfect daily
  if(perfect && !Q.lessonId && !Q.gramMode) _checkPerfectDailyBadge();

  // Versus: save ghost if beat
  if(Q.versusMode || (!Q.lessonId && !Q.gramMode)){
    try {
      const prev = JSON.parse(localStorage.getItem('ews_daily_best')||'null');
      if(!prev || Q.score>prev.score) {
        localStorage.setItem('ews_daily_best', JSON.stringify({ score:Q.score, total:Q.qs.length, date:new Date().toDateString() }));
      }
    } catch {}
  }

  const prevXp=u.xp||0, prevLv=getLevel(prevXp);
  if(window.Progress){
    Progress.recordQuiz(u,{
      source: Q.lessonId?'lesson':Q.gramMode?'grammar':'daily',
      lessonId:Q.lessonId, unitId:Q.unitId, title:Q.title,
      score:Q.score, total:Q.qs.length, xpEarned:xpE,
      perfect, maxCombo:Q.maxC, gramMode:Q.gramMode,
      markDailyDone:!Q.lessonId&&!Q.gramMode,
    });
  } else {
    u.xp+=xpE; u.todayXP=(u.todayXP||0)+xpE;
    if(Q.maxC>(u.maxCombo||0)) u.maxCombo=Q.maxC;
    if(perfect) u.hadPerfect=true;
    if(Q.lessonId&&!u.done.includes(Q.lessonId)) u.done.push(Q.lessonId);
    if(!Q.lessonId&&!Q.gramMode){ const today=new Date().toDateString(); u.dailyChallengeDone=today; }
    saveCU(u);
  }

  checkAchs(); refreshUI(); renderCurriculum();
  if(xpE>0){ SFX.xp(); showXPPop('+'+xpE+' XP!'); if(window.FlowyReact&&!perfect) FlowyReact('correct'); }
  if(perfect){ SFX.perfect?SFX.perfect():SFX.ach(); launchConfetti(); if(window.FlowyReact) FlowyReact('perfect'); }

  const newLv=getLevel(u.xp);
  if(newLv.level>prevLv.level){
    setTimeout(()=>{
      const luText=document.getElementById('luText'), luBtn=document.getElementById('luBtn');
      if(luText) luText.textContent=t('levelUpText',{n:newLv.level});
      if(luBtn)  luBtn.textContent=t('letsGo');
      document.getElementById('luOverlay').classList.add('on');
      SFX.levelUp(); launchConfetti();
      if(window.FlowyReact) FlowyReact('levelUp');
    },500);
  }

  const msgs=QUIZ_MSGS[currentLang]||QUIZ_MSGS.en;
  const rKey=acc===100?'perfect':acc>=80?'great':acc>=60?'ok':'tryAgain';
  const [rTitle,rSub]=msgs.results[rKey];

  // versus result
  const ghostDiff = Q.versusMode && Q.versusGhost
    ? `<div class="versus-result ${Q.score>Q.versusGhost.score?'vs-win':'vs-loss'}">
        ${Q.score>Q.versusGhost.score?'👑 Beat your ghost!':'👻 Ghost wins this time ('+Q.versusGhost.score+'/'+Q.versusGhost.total+')'}
       </div>` : '';

  // badges earned this session
  const b=_getBadges();
  const earnedBadges=BADGE_DEFS.filter(d=>b[d.id]&&(Date.now()-b[d.id])<60000);
  const badgesHTML = earnedBadges.length ? `
    <div class="res-badges">
      ${earnedBadges.map(d=>`<div class="res-badge"><span>${d.icon}</span><span>${d.label}</span></div>`).join('')}
    </div>` : '';

  document.getElementById('tab-quiz').innerHTML=`
  <div class="res-screen on">
    <div class="res-emoji">${acc===100?'🏆':acc>=80?'🎉':acc>=60?'💪':'🤔'}</div>
    <div class="res-title">${rTitle}</div>
    <div class="res-sub">${rSub}</div>
    ${ghostDiff}
    ${badgesHTML}
    <div class="res-grid">
      <div class="res-stat"><div class="rs-num" style="color:var(--green)">${Q.score}/${Q.qs.length}</div><div class="rs-lbl">${currentLang==='pt'?'Correcto':'Correct'}</div></div>
      <div class="res-stat"><div class="rs-num" style="color:var(--yellow)">+${xpE}</div><div class="rs-lbl">XP Earned</div></div>
      <div class="res-stat"><div class="rs-num" style="color:var(--orange)">${Q.maxC}x</div><div class="rs-lbl">Best Combo</div></div>
    </div>
    <div class="res-xp-bar-wrap">
      <div class="res-xp-label">${currentLang==='pt'?'Progresso de XP':'XP Progress'}</div>
      <div class="bar-bg"><div class="bar-fill bar-xp" id="res-xp-bar" style="width:0%"></div></div>
    </div>
    <div class="res-btns">
      <button class="res-btn" onclick="closeQuiz()">🏠 ${t('backHome')}</button>
      ${Q.lessonId?`<button class="res-btn res-btn-sec" onclick="retryLesson()">🔄 ${t('tryAgain')}</button>`:''}
    </div>
  </div>`;

  setTimeout(()=>{
    const lv=getLevel(u.xp);
    const pct=Math.max(0,Math.min(100,((u.xp-lv.prev)/(lv.next-lv.prev))*100));
    const bar=document.getElementById('res-xp-bar');
    if(bar) bar.style.width=pct+'%';
  },100);
}

function retryLesson() { if(Q.unitId&&Q.lessonId) startLesson(Q.unitId,Q.lessonId); }

function closeQuiz() {
  clearInterval(_speedTimer);
  SFX.click();
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('tab-home').classList.add('on');
  document.querySelectorAll('.bn').forEach(b=>b.classList.remove('on'));
  document.getElementById('bn-home').classList.add('on');
  document.getElementById('fabContainer').style.display='flex';
  renderCurriculum();
}

function resumeLesson() {
  SFX.click();
  const u=getCU();
  for(const unit of UNITS){
    for(const lesson of unit.lessons){
      if(!u.done.includes(lesson.id)&&!unit.premium){
        if(typeof openLesson==='function') openLesson(unit.id,lesson.id);
        else startLesson(unit.id,lesson.id);
        return;
      }
    }
  }
  showToast(t('toastAllDone'));
}

// ─── UTIL ────────────────────────────────────────────────
function esc(s){ return (s||'').replace(/'/g,"\\'").replace(/"/g,'&quot;'); }
