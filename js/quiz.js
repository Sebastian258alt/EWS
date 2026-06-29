// ═══════════════════════════════════════════════════════════
//  🎯 QUIZ.JS — Quiz Engine v3.3
//  English With Sebastian
// ═══════════════════════════════════════════════════════════
//
//  Question types:
//    mc        — multiple choice (A B C D)
//    drop      — word bank tap-to-fill blank
//    fill      — 2-chip quick fill
//    match     — match 4 pairs
//    reorder   — tap words in order
//    spell     — type the answer
//    speed     — MC with 10s countdown + XP bonus
//    emoji     — pick word for emoji clue
//    listen    — hear sentence via TTS, pick what you heard
//    truefalse — true or false statement
//    imgword   — 4-emoji grid, pick the matching word
//
//  Power-ups (Daily only): 💡 fifty · ⏩ skip · 🛡️ shield
//  Badges per type · Versus ghost · Contextual feedback
//  Live XP bar · Milestone celebrations · Heart pulse
// ═══════════════════════════════════════════════════════════

let Q = {
  qs:[], idx:0, score:0, combo:0, maxC:0,
  lessonId:null, unitId:null, xpR:0,
  gramMode:false, title:'',
  powerups:{ fifty:3, skip:3, shield:3 },
  shieldActive:false, speedBonus:0,
  versusGhost:null, versusMode:false,
  wrongStreak:{},   // track repeated wrong answers by question idx
  liveXP:0,         // accumulates during quiz for live bar
};

// ─── EMOJI MAPS ──────────────────────────────────────────
const EMOJI_MAP = {
  'cat':'🐱','dog':'🐶','house':'🏠','car':'🚗','book':'📚','water':'💧',
  'sun':'☀️','rain':'🌧️','happy':'😊','sad':'😢','run':'🏃','eat':'🍽️',
  'sleep':'😴','work':'💼','school':'🏫','phone':'📱','music':'🎵','fire':'🔥',
  'heart':'❤️','star':'⭐','money':'💰','food':'🍕','tree':'🌳','fish':'🐟',
  'bird':'🐦','flower':'🌸','bus':'🚌','train':'🚂','plane':'✈️','swim':'🏊',
  'pen':'🖊️','clock':'🕐','ball':'⚽','key':'🔑','door':'🚪','chair':'🪑',
  'cup':'☕','hat':'🎩','bag':'👜','shoe':'👟','hand':'✋','eye':'👁️',
};

// Thematic emoji sets for imgword (word → [correct_emoji, wrong1, wrong2, wrong3])
const IMGWORD_SETS = {
  'cat':    ['🐱','🐶','🐟','🐦'],
  'dog':    ['🐶','🐱','🐺','🦊'],
  'house':  ['🏠','🏫','🏢','🏪'],
  'car':    ['🚗','🚌','🚂','✈️'],
  'book':   ['📚','📱','💻','🎵'],
  'water':  ['💧','🔥','🌳','⭐'],
  'sun':    ['☀️','🌧️','❄️','🌙'],
  'school': ['🏫','🏠','🏢','⛪'],
  'phone':  ['📱','💻','📺','📷'],
  'music':  ['🎵','📚','🎨','🏆'],
  'heart':  ['❤️','⭐','💰','🔥'],
  'plane':  ['✈️','🚗','🚌','🚂'],
  'train':  ['🚂','🚗','✈️','🚌'],
  'bus':    ['🚌','🚗','🚂','✈️'],
};

// ─── BADGE SYSTEM ─────────────────────────────────────────
const BADGE_DEFS = [
  { id:'mc_master',     type:'mc',        needed:50,  icon:'🏅', label:'MC Master'      },
  { id:'drop_king',     type:'drop',      needed:20,  icon:'🎯', label:'Drop King'       },
  { id:'fill_flash',    type:'fill',      needed:20,  icon:'⚡', label:'Fill Flash'      },
  { id:'match_mind',    type:'match',     needed:10,  icon:'🔗', label:'Match Mind'      },
  { id:'reorder_ace',   type:'reorder',   needed:15,  icon:'🔀', label:'Reorder Ace'     },
  { id:'spell_wizard',  type:'spell',     needed:15,  icon:'✍️', label:'Spell Wizard'   },
  { id:'speed_demon',   type:'speed',     needed:10,  icon:'⚡', label:'Speed Demon'     },
  { id:'emoji_reader',  type:'emoji',     needed:15,  icon:'🖼️', label:'Emoji Reader'   },
  { id:'ear_training',  type:'listen',    needed:10,  icon:'🎧', label:'Ear Training'    },
  { id:'truth_seeker',  type:'truefalse', needed:15,  icon:'✅', label:'Truth Seeker'    },
  { id:'img_genius',    type:'imgword',   needed:10,  icon:'🖼️', label:'Image Genius'   },
  { id:'combo_god',     combo:10,                     icon:'🔥', label:'Combo God'       },
  { id:'perfect_daily', perfectDaily:true,            icon:'🏆', label:'Perfect Daily'   },
];
function _getBadges(){ try{ return JSON.parse(localStorage.getItem('ews_badges')||'{}'); }catch{ return {}; } }
function _saveBadges(b){ try{ localStorage.setItem('ews_badges',JSON.stringify(b)); }catch{} }
function _incBadgeStat(type){
  const b=_getBadges();
  b['stat_'+type]=(b['stat_'+type]||0)+1; _saveBadges(b);
  BADGE_DEFS.forEach(def=>{
    if(def.type===type && b['stat_'+type]>=def.needed && !b[def.id]){
      b[def.id]=Date.now(); _saveBadges(b); _showBadgeToast(def);
    }
  });
}
function _checkComboBadge(c){ const b=_getBadges(); if(c>=10&&!b.combo_god){ b.combo_god=Date.now(); _saveBadges(b); _showBadgeToast(BADGE_DEFS.find(d=>d.id==='combo_god')); } }
function _checkPerfectDailyBadge(){ const b=_getBadges(); if(!b.perfect_daily){ b.perfect_daily=Date.now(); _saveBadges(b); _showBadgeToast(BADGE_DEFS.find(d=>d.id==='perfect_daily')); } }
function _showBadgeToast(def){
  if(!def) return;
  const el=document.createElement('div');
  el.className='badge-toast';
  el.innerHTML=`<span class="bt-icon">${def.icon}</span><div><div class="bt-title">${currentLang==='pt'?'Badge Desbloqueado!':'Badge Unlocked!'}</div><div class="bt-name">${def.label}</div></div>`;
  document.body.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
  setTimeout(()=>{ el.classList.remove('on'); setTimeout(()=>el.remove(),400); },3000);
}

// ─── CONTEXTUAL FEEDBACK MESSAGES ────────────────────────
const CTX_MSGS = {
  en: {
    mc:      { ok:['Nailed it! 🎯','Correct!','You know your stuff!','On point! ✅'], wrong:['Not quite, check the explanation!','Keep it up, you\'ll get it!','Close! Review and retry.'] },
    drop:    { ok:['Perfect drop! 🎯','Right in the slot!','Word dropped perfectly!'], wrong:['Wrong word! Try again next time.','Almost! Check the blank context.'] },
    fill:    { ok:['Quick and correct! ⚡','Filled it right!'], wrong:['Oops! Wrong fill.','Think about the context!'] },
    match:   { ok:['All pairs matched! 🔗','Connections made!'], wrong:['Some pairs were wrong.','Study the patterns!'] },
    reorder: { ok:['Sentence built! 🔀','Word order is perfect!'], wrong:['Word order was off.','Think about subject → verb → object!'] },
    spell:   { ok:['Spelled it right! ✍️','Dictionary perfect!'], wrong:['Check the spelling!','English spelling is tricky — practice!'] },
    speed:   { ok:['Fast AND correct! ⚡','Speed champion!'], wrong:['Ran out of time!','Too slow — practice makes perfect!'] },
    emoji:   { ok:['You read the emoji! 🖼️','Image-word match!'], wrong:['Wrong image pick.','Look at the emoji again!'] },
    listen:  { ok:['Great listening! 🎧','Your ears are sharp!','Heard it correctly!'], wrong:['Missed that one.','Listen again carefully next time!'] },
    truefalse:{ ok:['Correct judgement! ✅','Truth detected!'], wrong:['That statement was '+  '','Check the facts!'] },
    imgword: { ok:['Image matched! 🖼️','Visual vocab win!'], wrong:['Wrong image.','Study the visual associations!'] },
    combo:   { c3:'🔥 Combo x3! You\'re on fire!', c5:'💥 MEGA COMBO x5! Unstoppable!', c10:'👑 LEGENDARY x10! You\'re a beast!' },
    streak2wrong: 'Erring twice here — pay attention to the explanation! 👀',
    milestone3:  '🔥 3 correct! Keep the streak!',
    milestone5:  '🚀 Halfway there! Amazing!',
    milestone8:  '⭐ Almost done! Don\'t stop now!',
  },
  pt: {
    mc:      { ok:['Certíssimo! 🎯','Correcto!','Sabes mesmo bem!','Em cheio! ✅'], wrong:['Não é bem isso, vê a explicação!','Continua, vais conseguir!','Quase! Revê e tenta outra vez.'] },
    drop:    { ok:['Drop perfeito! 🎯','Caiu no lugar certo!'], wrong:['Palavra errada!','Atenção ao contexto do espaço!'] },
    fill:    { ok:['Rápido e certeiro! ⚡','Preenchido correctamente!'], wrong:['Ops! Escolha errada.','Pensa no contexto da frase!'] },
    match:   { ok:['Todos os pares ligados! 🔗'], wrong:['Alguns pares estavam errados.','Estuda os padrões!'] },
    reorder: { ok:['Frase montada! 🔀','Ordem perfeita!'], wrong:['A ordem estava errada.','Pensa: sujeito → verbo → complemento!'] },
    spell:   { ok:['Escrito correctamente! ✍️','Perfeito!'], wrong:['Verifica a ortografia!','O inglês tem ortografia traiçoeira — pratica!'] },
    speed:   { ok:['Rápido E correcto! ⚡','Campeão de velocidade!'], wrong:['Tempo esgotado!','Demasiado lento — a prática faz a perfeição!'] },
    emoji:   { ok:['Leste o emoji! 🖼️','Correspondência perfeita!'], wrong:['Escolha errada.','Olha bem para o emoji!'] },
    listen:  { ok:['Bom ouvido! 🎧','Os teus ouvidos são afiados!'], wrong:['Não apanhaste.','Ouve com mais atenção na próxima!'] },
    truefalse:{ ok:['Julgamento correcto! ✅','Verdade detectada!'], wrong:['Errado!','Verifica os factos!'] },
    imgword: { ok:['Imagem correcta! 🖼️','Vocabulário visual!'], wrong:['Imagem errada.','Estuda as associações visuais!'] },
    combo:   { c3:'🔥 Combo x3! Estás em chama!', c5:'💥 MEGA COMBO x5! Imparável!', c10:'👑 LENDÁRIO x10! És uma besta!' },
    streak2wrong: 'Dois erros aqui — presta atenção à explicação! 👀',
    milestone3:  '🔥 3 certas! Mantém o ritmo!',
    milestone5:  '🚀 A meio! Continua assim!',
    milestone8:  '⭐ Quase no fim! Não pares agora!',
  }
};
function _ctxMsg(type, ok){
  const m=(CTX_MSGS[currentLang]||CTX_MSGS.en)[type]||CTX_MSGS.en.mc;
  const arr=ok?m.ok:m.wrong;
  return arr[Math.floor(Math.random()*arr.length)];
}

// ─── PARTICLES PER TYPE ───────────────────────────────────
const TYPE_PARTICLES = {
  mc:'✨', drop:'💧', fill:'⚡', match:'🔗', reorder:'🔀',
  spell:'✍️', speed:'⚡', emoji:'🌟', listen:'🎵', truefalse:'✅', imgword:'🖼️',
};

// ─── QUESTION BUILDERS ───────────────────────────────────
function _asMC(q){ return { type:'mc', q:q.q, opts:q.opts, ans:q.ans, exp:q.exp||'' }; }

function _buildDrop(q){
  const answer=q.opts[q.ans];
  const bank=[answer,...q.opts.filter((_,i)=>i!==q.ans).slice(0,3)].sort(()=>Math.random()-.5);
  return { type:'drop', q:q.q, answer, bank, exp:q.exp||'' };
}

function _buildFill(q){
  const answer=q.opts[q.ans];
  const wrong=q.opts.find((_,i)=>i!==q.ans)||q.opts[(q.ans+1)%q.opts.length];
  const chips=Math.random()>.5?[answer,wrong]:[wrong,answer];
  return { type:'fill', q:q.q, answer, chips, exp:q.exp||'' };
}

function _buildReorder(q){
  const answer=q.opts[q.ans];
  if(!answer.includes(' ')) return _asMC(q);
  const words=answer.split(' ');
  const shuffled=[...words].sort(()=>Math.random()-.5);
  let tries=0;
  while(shuffled.join(' ')===answer&&tries<10){ shuffled.sort(()=>Math.random()-.5); tries++; }
  return { type:'reorder', q:q.q, words, shuffled, answer, exp:q.exp||'' };
}

function _buildMatch(qs4){
  const pairs=qs4.map(q=>({ left:q.q.replace(/___/g,'...').substring(0,40), right:q.opts[q.ans] }));
  return { type:'match', pairs, exp:'' };
}

function _buildSpell(q){
  return { type:'spell', q:q.q, answer:q.opts[q.ans], hint:q.opts[q.ans][0]+'___', exp:q.exp||'' };
}

function _buildSpeed(q){
  return { type:'speed', q:q.q, opts:q.opts, ans:q.ans, exp:q.exp||'', timeLimit:10 };
}

function _buildEmoji(q){
  const answer=q.opts[q.ans].toLowerCase();
  const emoji=EMOJI_MAP[answer];
  if(!emoji) return _asMC(q);
  return { type:'emoji', q:q.q, opts:q.opts, ans:q.ans, emoji, exp:q.exp||'' };
}

function _buildListen(q){
  // uses Web Speech API to read the correct answer aloud; player picks which option they heard
  const answer=q.opts[q.ans];
  // Sentence to speak: if q has ___, speak the full answer; else speak q itself
  const toSpeak = q.q.includes('___') ? q.q.replace('___', answer) : answer;
  return { type:'listen', toSpeak, opts:q.opts, ans:q.ans, exp:q.exp||'' };
}

function _buildTrueFalse(q){
  // Make a true/false from an MC: statement is correct answer embedded into sentence
  const answer=q.opts[q.ans];
  const wrong=q.opts.find((_,i)=>i!==q.ans)||'incorrect';
  // 50% chance: show correct statement (answer=true) or wrong statement (answer=false)
  const showTrue=Math.random()>.5;
  const statement = showTrue
    ? q.q.replace('___', answer)
    : q.q.replace('___', wrong);
  return { type:'truefalse', statement, correct:showTrue, exp:q.exp||'' };
}

function _buildImgWord(q){
  const answer=q.opts[q.ans].toLowerCase();
  const set=IMGWORD_SETS[answer];
  if(!set) return _asMC(q);
  const emojis=[...set].sort(()=>Math.random()-.5);
  return { type:'imgword', q:q.q, answer, emojis, correctEmoji:set[0], exp:q.exp||'' };
}

// ─── QUESTION MIXER ──────────────────────────────────────
function _mixQuestions(pool, count=10){
  const shuffled=[...pool].sort(()=>Math.random()-.5);
  const picked=shuffled.slice(0, Math.min(count+12, shuffled.length));
  const result=[]; let i=0;
  // Plan: spread all 11 types across 10 slots (match eats 4 qs)
  const plan=['speed','listen','drop','fill','match','truefalse','reorder','spell','imgword','mc'];
  for(const type of plan){
    if(result.length>=count) break;
    if(type==='match'){
      const s=picked.slice(i,i+4);
      if(s.length>=4){ result.push(_buildMatch(s)); } i+=4; continue;
    }
    const q=picked[i]; if(!q) break;
    switch(type){
      case 'speed':     result.push(_buildSpeed(q)); break;
      case 'listen':    result.push(q.q.includes('___')?_buildListen(q):_asMC(q)); break;
      case 'drop':      result.push(q.q.includes('___')?_buildDrop(q):_asMC(q)); break;
      case 'fill':      result.push(q.q.includes('___')?_buildFill(q):_asMC(q)); break;
      case 'truefalse': result.push(q.q.includes('___')?_buildTrueFalse(q):_asMC(q)); break;
      case 'reorder':   result.push(q.opts[q.ans].includes(' ')?_buildReorder(q):_asMC(q)); break;
      case 'spell':     result.push(_buildSpell(q)); break;
      case 'imgword':   result.push(_buildImgWord(q)); break;
      case 'emoji':     result.push(_buildEmoji(q)); break;
      default:          result.push(_asMC(q));
    }
    i++;
  }
  return result;
}

// ─── START ───────────────────────────────────────────────
function startLesson(unitId, lessonId){
  const unit=UNITS.find(u=>u.id===unitId);
  const lesson=unit?.lessons.find(l=>l.id===lessonId);
  if(!lesson) return;
  SFX.click(); let u=getCU(); if(!u) return;
  if(u.hearts<=0){ showToast(t('noHearts')); return; }
  const title=currentLang==='pt'?(lesson.titlePt||lesson.title):lesson.title;
  Q={ qs:lesson.qs.map(_asMC), idx:0, score:0, combo:0, maxC:0, lessonId, unitId,
      xpR:lesson.xp, gramMode:false, title, powerups:{fifty:0,skip:0,shield:0},
      shieldActive:false, speedBonus:0, versusMode:false, wrongStreak:{}, liveXP:0 };
  showQuiz();
}
window.startLesson=startLesson;

function startDailyChallenge(){
  SFX.click(); let u=getCU(); if(!u) return;
  const today=new Date().toDateString();
  if(u.dailyChallengeDone===today){ showToast(t('alreadyDone')); return; }
  const allQs=UNITS.flatMap(u=>u.lessons.flatMap(l=>l.qs));
  const mixed=_mixQuestions(allQs,10);
  let ghost=null;
  try{ ghost=JSON.parse(localStorage.getItem('ews_daily_best')||'null'); }catch{}
  Q={ qs:mixed, idx:0, score:0, combo:0, maxC:0, lessonId:null, unitId:null,
      xpR:20, gramMode:false, title:t('dailyChallenge'),
      powerups:(function(){ const inv=typeof loadShopPowerups==="function"?loadShopPowerups():{fifty:0,skip:0,shield:0}; return {fifty:3+inv.fifty,skip:3+inv.skip,shield:3+inv.shield}; }()), shieldActive:false, speedBonus:0,
      versusGhost:ghost, versusMode:!!ghost, wrongStreak:{}, liveXP:0 };
  showQuiz();
}

function startQuizFromData(title, qs, xp, gramMode=false){
  Q={ qs:qs.map(_asMC), idx:0, score:0, combo:0, maxC:0, lessonId:null, unitId:null,
      xpR:xp, gramMode, title, powerups:{fifty:0,skip:0,shield:0},
      shieldActive:false, speedBonus:0, versusMode:false, wrongStreak:{}, liveXP:0 };
  showQuiz();
}
window.startQuizFromData=startQuizFromData;

function showQuiz(){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('tab-quiz').classList.add('on');
  document.getElementById('fabContainer').style.display='none';
  renderQ();
}

// ─── SHELL ───────────────────────────────────────────────
function renderQ(){
  let u=getCU(); if(!u) return;
  const qd=Q.qs[Q.idx];
  const pct=(Q.idx/Q.qs.length)*100;
  const liveXPpct=Math.min(100, Math.round((Q.liveXP/Q.xpR)*100));

  // hearts with pulse on 1 remaining
  const hearts=Array.from({length:5},(_,i)=>{
    const dead=i>=u.hearts;
    const pulse=u.hearts===1&&i===0;
    return `<span class="hrt${dead?' dead':''}${pulse?' hrt-pulse':''}" id="hrt${i}">❤️</span>`;
  }).join('');

  const puBar=(!Q.gramMode&&!Q.lessonId)?`
    <div class="pu-bar">
      <button class="pu-btn" onclick="usePowerup('fifty')" title="50/50" ${Q.powerups.fifty<=0||!['mc','speed','emoji','truefalse'].includes(qd.type)?'disabled':''}>
        💡<span class="pu-count">${Q.powerups.fifty}</span>
      </button>
      <button class="pu-btn" onclick="usePowerup('skip')" title="Skip" ${Q.powerups.skip<=0?'disabled':''}>
        ⏩<span class="pu-count">${Q.powerups.skip}</span>
      </button>
      <button class="pu-btn ${Q.shieldActive?'pu-active':''}" onclick="usePowerup('shield')" title="Shield" ${Q.powerups.shield<=0&&!Q.shieldActive?'disabled':''}>
        🛡️<span class="pu-count">${Q.shieldActive?'ON':Q.powerups.shield}</span>
      </button>
      <div class="pu-xp-live" title="XP earned so far">⭐ ${Q.liveXP} XP</div>
    </div>` : '';

  const ghostHUD=Q.versusMode&&Q.versusGhost
    ?`<div class="versus-hud">👻 ${Q.versusGhost.score}/${Q.versusGhost.total} · ${currentLang==='pt'?'Tu':'You'}: ${Q.score}/${Q.idx}</div>`:'';

  // type-specific body class for subtle bg tint
  const typeClass=`qbody-${qd.type}`;

  document.getElementById('tab-quiz').innerHTML=`
  <div class="quiz-wrap ${window._quizTheme||''}">
    <div class="quiz-toprow">
      <button class="qclose" onclick="closeQuiz()">${t('close')}</button>
      <div class="qbar-bg">
        <div class="qbar-fill" style="width:${pct}%"></div>
        <div class="qbar-glow" style="left:${pct}%"></div>
      </div>
      <div class="hrow">${hearts}</div>
    </div>
    ${puBar}
    ${ghostHUD}
    <div class="quiz-body ${typeClass}">
      <div class="combo-ind" id="comboInd"></div>
      <div class="q-tag">📍 ${Q.idx+1}/${Q.qs.length} · ${Q.title}</div>
      <div id="q-inner" class="q-inner-enter"></div>
    </div>
    <div class="fb-foot" id="fb" style="display:none"></div>
  </div>`;

  requestAnimationFrame(()=>{
    const el=document.getElementById('q-inner');
    if(el){ el.classList.remove('q-inner-enter'); el.classList.add('q-inner-active'); }
  });

  const inner=document.getElementById('q-inner');
  const renderers={
    mc:renderMC, drop:renderDrop, fill:renderFill, match:renderMatch,
    reorder:renderReorder, spell:renderSpell, speed:renderSpeed,
    emoji:renderEmoji, listen:renderListen, truefalse:renderTrueFalse, imgword:renderImgWord
  };
  (renderers[qd.type]||renderMC)(qd,inner);
}

// ─── TYPE: MC ────────────────────────────────────────────
function renderMC(qd,el){
  el.innerHTML=`
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
let _speedTimer=null;
function renderSpeed(qd,el){
  clearInterval(_speedTimer);
  let remaining=qd.timeLimit||10;
  el.innerHTML=`
    <div class="qt-badge qt-speed">⚡ Speed Round</div>
    <div class="speed-timer-wrap">
      <div class="speed-timer-ring">
        <svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="var(--surface3)" stroke-width="4"/>
        <circle id="speedRingFill" cx="22" cy="22" r="18" fill="none" stroke="var(--yellow)" stroke-width="4" stroke-dasharray="113" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 22 22)"/></svg>
        <span class="speed-count" id="speedCount">${remaining}</span>
      </div>
      <div class="speed-bonus-hint">⚡ +5 XP ${currentLang==='pt'?'se rápido':'if fast'}!</div>
    </div>
    <div class="q-text">${qd.q}</div>
    <div class="q-opts">
      ${qd.opts.map((o,i)=>`
        <button class="qopt" id="qo${i}" onclick="selOptSpeed(${i},${qd.ans})">
          <span class="oletter">${['A','B','C','D'][i]}</span>
          <span class="otext">${o}</span>
        </button>`).join('')}
    </div>`;
  const total=remaining;
  _speedTimer=setInterval(()=>{
    remaining--;
    const ce=document.getElementById('speedCount'), ring=document.getElementById('speedRingFill');
    if(!ce){ clearInterval(_speedTimer); return; }
    ce.textContent=remaining;
    if(ring) ring.style.strokeDashoffset=113*(1-(remaining/total));
    if(remaining<=3) ce.style.color='var(--red)';
    if(remaining<=0){
      clearInterval(_speedTimer);
      document.querySelectorAll('.qopt').forEach(o=>o.disabled=true);
      document.getElementById('qo'+qd.ans)?.classList.add('ok');
      resolveAnswer(false,qd);
    }
  },1000);
}
window.selOptSpeed=function(idx,ans){
  clearInterval(_speedTimer);
  const remaining=parseInt(document.getElementById('speedCount')?.textContent||'0');
  const ok=idx===ans;
  if(ok&&remaining>5) Q.speedBonus+=5;
  document.querySelectorAll('.qopt').forEach(o=>o.disabled=true);
  document.getElementById('qo'+idx).classList.add(ok?'ok':'no');
  if(!ok) document.getElementById('qo'+ans)?.classList.add('ok');
  resolveAnswer(ok,Q.qs[Q.idx]);
};

// ─── TYPE: LISTEN ─────────────────────────────────────────
function renderListen(qd,el){
  window._listenPlayed=false;
  el.innerHTML=`
    <div class="qt-badge qt-listen">🎧 Listening</div>
    <div class="listen-center">
      <button class="listen-btn" id="listenBtn" onclick="playListenAudio('${esc(qd.toSpeak)}')">
        <span class="listen-icon">🔊</span>
        <span>${currentLang==='pt'?'Ouvir':'Listen'}</span>
      </button>
      <div class="listen-hint" id="listenHint">${currentLang==='pt'?'Toca para ouvir, depois escolhe':'Tap to listen, then choose'}</div>
    </div>
    <div class="q-opts" id="listenOpts" style="opacity:.35;pointer-events:none">
      ${qd.opts.map((o,i)=>`
        <button class="qopt" id="qo${i}" onclick="selOpt(${i})">
          <span class="oletter">${['A','B','C','D'][i]}</span>
          <span class="otext">${o}</span>
        </button>`).join('')}
    </div>`;
}
window.playListenAudio=function(text){
  if(!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(text);
  utt.lang='en-US'; utt.rate=0.9; utt.pitch=1;
  // try to get a good English voice
  const voices=speechSynthesis.getVoices();
  const pick=voices.find(v=>v.lang==='en-US'&&v.name.includes('Google'))||voices.find(v=>v.lang==='en-US')||voices[0];
  if(pick) utt.voice=pick;
  const btn=document.getElementById('listenBtn');
  if(btn){ btn.classList.add('listening'); btn.disabled=true; }
  utt.onend=()=>{
    if(btn){ btn.classList.remove('listening'); btn.disabled=false; }
    const opts=document.getElementById('listenOpts');
    if(opts){ opts.style.opacity='1'; opts.style.pointerEvents='auto'; }
    const hint=document.getElementById('listenHint');
    if(hint) hint.textContent=currentLang==='pt'?'Escolhe o que ouviste:':'Choose what you heard:';
    window._listenPlayed=true;
  };
  speechSynthesis.speak(utt);
};

// ─── TYPE: TRUE/FALSE ────────────────────────────────────
function renderTrueFalse(qd,el){
  el.innerHTML=`
    <div class="qt-badge qt-tf">✅ True or False</div>
    <div class="tf-statement">${qd.statement}</div>
    <div class="tf-btns">
      <button class="tf-btn tf-true" onclick="checkTF(true,${qd.correct},'${esc(qd.exp)}')">
        ✅ <span>${currentLang==='pt'?'Verdadeiro':'True'}</span>
      </button>
      <button class="tf-btn tf-false" onclick="checkTF(false,${qd.correct},'${esc(qd.exp)}')">
        ❌ <span>${currentLang==='pt'?'Falso':'False'}</span>
      </button>
    </div>`;
}
window.checkTF=function(answer,correct,exp){
  const ok=answer===correct;
  document.querySelectorAll('.tf-btn').forEach(b=>b.disabled=true);
  const sel=document.querySelector(answer?'.tf-true':'.tf-false');
  const cor=document.querySelector(correct?'.tf-true':'.tf-false');
  if(sel) sel.classList.add(ok?'tf-ok':'tf-no');
  if(!ok&&cor) cor.classList.add('tf-ok');
  resolveAnswer(ok,{exp});
};

// ─── TYPE: IMG WORD ──────────────────────────────────────
function renderImgWord(qd,el){
  el.innerHTML=`
    <div class="qt-badge qt-imgword">🖼️ Image Pick</div>
    <div class="q-text">${qd.q}</div>
    <div class="imgword-word">Which image means: <strong>${qd.answer}</strong>?</div>
    <div class="imgword-grid">
      ${qd.emojis.map((e,i)=>`
        <button class="imgword-cell" id="iw${i}" onclick="checkImgWord('${esc(e)}','${esc(qd.correctEmoji)}','${esc(qd.exp)}')">
          <span class="imgword-emoji">${e}</span>
        </button>`).join('')}
    </div>`;
}
window.checkImgWord=function(picked,correct,exp){
  document.querySelectorAll('.imgword-cell').forEach(b=>b.disabled=true);
  const ok=picked===correct;
  document.querySelectorAll('.imgword-cell').forEach(b=>{
    if(b.querySelector('.imgword-emoji').textContent===picked) b.classList.add(ok?'iw-ok':'iw-no');
    if(!ok && b.querySelector('.imgword-emoji').textContent===correct) b.classList.add('iw-ok');
  });
  resolveAnswer(ok,{exp});
};

// ─── TYPE: DROP ──────────────────────────────────────────
function renderDrop(qd,el){
  window._dropSelected=null;
  const slotHTML=qd.q.replace('___','<span class="drop-slot" id="dropSlot">___</span>');
  el.innerHTML=`
    <div class="qt-badge qt-drop">🎯 Word Drop</div>
    <div class="q-text drop-sentence">${slotHTML}</div>
    <div class="drop-bank">
      ${qd.bank.map((w,i)=>`<button class="drop-chip" id="dchip${i}" onclick="dropSelect(${i},'${esc(w)}','${esc(qd.answer)}')">${w}</button>`).join('')}
    </div>
    <button class="drop-check" id="dropCheck" onclick="checkDrop('${esc(qd.answer)}','${esc(qd.exp)}')">✅ ${currentLang==='pt'?'Confirmar':'Check'}</button>`;
}
window.dropSelect=function(idx,word){
  document.querySelectorAll('.drop-chip').forEach(c=>c.classList.remove('selected'));
  document.getElementById('dchip'+idx).classList.add('selected');
  window._dropSelected=word;
  const slot=document.getElementById('dropSlot');
  if(slot){ slot.textContent=word; slot.classList.add('filled'); }
};
window.checkDrop=function(answer,exp){
  const filled=window._dropSelected;
  if(!filled){ showToast(currentLang==='pt'?'Escolhe uma palavra!':'Pick a word first!'); return; }
  const ok=filled.trim().toLowerCase()===answer.trim().toLowerCase();
  document.querySelectorAll('.drop-chip').forEach(c=>c.disabled=true);
  document.getElementById('dropCheck').disabled=true;
  const slot=document.getElementById('dropSlot');
  if(slot) slot.className='drop-slot '+(ok?'drop-ok':'drop-no');
  resolveAnswer(ok,{exp});
};

// ─── TYPE: FILL ──────────────────────────────────────────
function renderFill(qd,el){
  el.innerHTML=`
    <div class="qt-badge qt-fill">⚡ Quick Fill</div>
    <div class="q-text">${qd.q}</div>
    <div class="fill-chips">
      ${qd.chips.map((c,i)=>`
        <button class="fill-chip" id="fc${i}" onclick="selectFill(${i},'${esc(c)}','${esc(qd.answer)}','${esc(qd.exp)}')">
          ${c}
        </button>`).join('')}
    </div>`;
}
window.selectFill=function(idx,word,answer,exp){
  document.querySelectorAll('.fill-chip').forEach(c=>c.disabled=true);
  const ok=word.trim().toLowerCase()===answer.trim().toLowerCase();
  document.getElementById('fc'+idx).classList.add(ok?'fc-ok':'fc-no');
  if(!ok) document.querySelectorAll('.fill-chip').forEach(c=>{
    if(c.textContent.trim().toLowerCase()===answer.trim().toLowerCase()) c.classList.add('fc-ok');
  });
  resolveAnswer(ok,{exp});
};

// ─── TYPE: MATCH ─────────────────────────────────────────
function renderMatch(qd,el){
  const rights=[...qd.pairs.map(p=>p.right)].sort(()=>Math.random()-.5);
  window._matchState={sel:null,done:0,total:qd.pairs.length,correct:0,pairs:qd.pairs,rights};
  el.innerHTML=`
    <div class="qt-badge qt-match">🔗 Match Pairs</div>
    <div class="q-text">${currentLang==='pt'?'Liga cada frase à resposta correcta:':'Match each phrase to its correct answer:'}</div>
    <div class="match-grid">
      <div class="match-col">${qd.pairs.map((p,i)=>`<button class="match-item match-left" id="ml${i}" onclick="matchClick('l',${i},'${esc(p.left)}','${esc(p.right)}')">${p.left}</button>`).join('')}</div>
      <div class="match-col">${rights.map((r,i)=>`<button class="match-item match-right" id="mr${i}" onclick="matchClick('r',${i},'${esc(r)}')">${r}</button>`).join('')}</div>
    </div>`;
}
window.matchClick=function(side,idx,text,expectedRight){
  const s=window._matchState; if(!s) return;
  if(side==='l'){
    document.querySelectorAll('.match-left').forEach(e=>e.classList.remove('m-sel'));
    const el=document.getElementById('ml'+idx);
    if(el.classList.contains('m-matched')||el.classList.contains('m-wrong')) return;
    el.classList.add('m-sel'); s.sel={side:'l',idx,text,expectedRight};
  } else {
    if(!s.sel||s.sel.side!=='l'){
      document.querySelectorAll('.match-right').forEach(e=>e.classList.remove('m-sel'));
      const el=document.getElementById('mr'+idx);
      if(el.classList.contains('m-matched')||el.classList.contains('m-wrong')) return;
      el.classList.add('m-sel'); s.sel={side:'r',idx,text}; return;
    }
    const li=s.sel.idx, lp=s.pairs[li];
    const ok=text.trim()===lp.right.trim();
    const lEl=document.getElementById('ml'+li), rEl=document.getElementById('mr'+idx);
    if(ok){ lEl.classList.remove('m-sel'); lEl.classList.add('m-matched'); lEl.disabled=true; rEl.classList.add('m-matched'); rEl.disabled=true; s.correct++; SFX.correct&&SFX.correct(); spawnEmojis('✨',1); }
    else { lEl.classList.remove('m-sel'); lEl.classList.add('m-wrong'); rEl.classList.add('m-wrong'); SFX.wrong&&SFX.wrong(); setTimeout(()=>{ lEl.classList.remove('m-wrong'); rEl.classList.remove('m-wrong'); },600); }
    s.sel=null; s.done++;
    if(s.correct===s.total) setTimeout(()=>resolveAnswer(true,{exp:''}),400);
    else if(s.done>=s.total*2) setTimeout(()=>resolveAnswer(s.correct>=Math.ceil(s.total/2),{exp:''}),400);
  }
};

// ─── TYPE: REORDER ───────────────────────────────────────
function renderReorder(qd,el){
  window._reorderChosen=[];
  el.innerHTML=`
    <div class="qt-badge qt-reorder">🔀 Reorder</div>
    <div class="q-text">${qd.q}</div>
    <div class="reorder-answer" id="reorderAnswer"><span class="reorder-placeholder">${currentLang==='pt'?'Toca nas palavras para ordenar...':'Tap words to build the sentence...'}</span></div>
    <div class="reorder-bank">${qd.shuffled.map((w,i)=>`<button class="reorder-chip" id="rch${i}" onclick="reorderPick(${i},'${esc(w)}')">${w}</button>`).join('')}</div>
    <div style="display:flex;gap:.5rem;margin-top:.7rem">
      <button class="drop-check" style="flex:1" onclick="checkReorder('${esc(qd.answer)}','${esc(qd.exp)}')">✅ ${currentLang==='pt'?'Confirmar':'Check'}</button>
      <button class="drop-check" style="flex:0 0 auto;background:var(--surface3);color:var(--muted)" onclick="reorderClear()">↩</button>
    </div>`;
}
window.reorderPick=function(idx,word){ const b=document.getElementById('rch'+idx); if(!b||b.disabled) return; b.disabled=true; b.style.opacity='0.3'; window._reorderChosen.push({idx,word}); _refreshReorderAnswer(); };
window.reorderClear=function(){ window._reorderChosen=[]; document.querySelectorAll('.reorder-chip').forEach(b=>{b.disabled=false;b.style.opacity='1';}); _refreshReorderAnswer(); };
function _refreshReorderAnswer(){ const el=document.getElementById('reorderAnswer'); if(!el) return; el.innerHTML=window._reorderChosen.length===0?`<span class="reorder-placeholder">${currentLang==='pt'?'Toca nas palavras para ordenar...':'Tap words to build the sentence...'}</span>`:window._reorderChosen.map(c=>`<span class="reorder-placed">${c.word}</span>`).join(' '); }
window.checkReorder=function(answer,exp){ if(!window._reorderChosen.length){ showToast(currentLang==='pt'?'Ordena as palavras primeiro!':'Tap words first!'); return; } document.querySelectorAll('.reorder-chip,.drop-check').forEach(b=>b.disabled=true); const built=window._reorderChosen.map(c=>c.word).join(' '); const ok=built.trim().toLowerCase()===answer.trim().toLowerCase(); const el=document.getElementById('reorderAnswer'); if(el) el.className='reorder-answer '+(ok?'ro-ok':'ro-no'); resolveAnswer(ok,{exp}); };

// ─── TYPE: SPELL ─────────────────────────────────────────
function renderSpell(qd,el){
  el.innerHTML=`
    <div class="qt-badge qt-spell">✍️ Spell It</div>
    <div class="q-text">${qd.q}</div>
    <div class="spell-hint">💡 ${currentLang==='pt'?'Começa com':'Starts with'}: <strong>${qd.hint}</strong></div>
    <div class="spell-wrap">
      <input class="spell-input" id="spellInput" type="text" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${currentLang==='pt'?'Escreve a resposta...':'Type your answer...'}">
      <button class="drop-check" onclick="checkSpell('${esc(qd.answer)}','${esc(qd.exp)}')">✅ ${currentLang==='pt'?'Confirmar':'Check'}</button>
    </div>`;
  setTimeout(()=>{
    const inp=document.getElementById('spellInput');
    inp?.focus();
    inp?.addEventListener('keydown',e=>{ if(e.key==='Enter') checkSpell(qd.answer,qd.exp); });
  },200);
}
window.checkSpell=function(answer,exp){ const inp=document.getElementById('spellInput'); if(!inp) return; const val=inp.value.trim(); if(!val){ showToast(currentLang==='pt'?'Escreve algo!':'Type something!'); return; } const ok=val.toLowerCase()===answer.toLowerCase(); inp.disabled=true; inp.className='spell-input '+(ok?'spell-ok':'spell-no'); if(!ok){ const h=document.createElement('div'); h.className='spell-reveal'; h.textContent='✅ '+answer; inp.parentNode.insertBefore(h,inp.nextSibling); } resolveAnswer(ok,{exp}); };

// ─── TYPE: EMOJI ─────────────────────────────────────────
function renderEmoji(qd,el){
  el.innerHTML=`
    <div class="qt-badge qt-emoji">🖼️ Emoji Pick</div>
    <div class="emoji-display">${qd.emoji}</div>
    <div class="q-text">${qd.q}</div>
    <div class="q-opts">${qd.opts.map((o,i)=>`<button class="qopt" id="qo${i}" onclick="selOpt(${i})"><span class="oletter">${['A','B','C','D'][i]}</span><span class="otext">${o}</span></button>`).join('')}</div>`;
}

// ─── POWER-UPS ───────────────────────────────────────────
window.usePowerup=function(type){
  const qd=Q.qs[Q.idx];
  if(type==='fifty'){
    if(Q.powerups.fifty<=0) return;
    if(!['mc','speed','emoji','truefalse'].includes(qd.type)) return;
    Q.powerups.fifty--;
    let removed=0;
    for(let i=0;i<4&&removed<2;i++){ if(i===qd.ans) continue; const b=document.getElementById('qo'+i); if(b&&!b.disabled){ b.style.opacity='0.2'; b.disabled=true; removed++; } }
    _refreshPUBar(); showToast('💡 50/50!');
  } else if(type==='skip'){
    if(Q.powerups.skip<=0) return; Q.powerups.skip--; clearInterval(_speedTimer);
    showToast('⏩ '+(currentLang==='pt'?'Saltado!':'Skipped!')); setTimeout(()=>nextQ(),400);
  } else if(type==='shield'){
    if(!Q.shieldActive){ if(Q.powerups.shield<=0) return; Q.powerups.shield--; Q.shieldActive=true; showToast('🛡️ '+(currentLang==='pt'?'Escudo activo!':'Shield active!')); }
    else { Q.shieldActive=false; showToast('🛡️ '+(currentLang==='pt'?'Escudo removido.':'Shield removed.')); }
    _refreshPUBar();
  }
};
function _refreshPUBar(){
  const qd=Q.qs[Q.idx], bar=document.querySelector('.pu-bar'); if(!bar) return;
  bar.innerHTML=`
    <button class="pu-btn" onclick="usePowerup('fifty')" ${Q.powerups.fifty<=0||!['mc','speed','emoji','truefalse'].includes(qd.type)?'disabled':''}>💡<span class="pu-count">${Q.powerups.fifty}</span></button>
    <button class="pu-btn" onclick="usePowerup('skip')" ${Q.powerups.skip<=0?'disabled':''}>⏩<span class="pu-count">${Q.powerups.skip}</span></button>
    <button class="pu-btn ${Q.shieldActive?'pu-active':''}" onclick="usePowerup('shield')" ${Q.powerups.shield<=0&&!Q.shieldActive?'disabled':''}>🛡️<span class="pu-count">${Q.shieldActive?'ON':Q.powerups.shield}</span></button>
    <div class="pu-xp-live">⭐ ${Q.liveXP} XP</div>`;
}

// ─── selOpt (MC / Emoji) ─────────────────────────────────
function selOpt(idx){ const q=Q.qs[Q.idx]; const ok=idx===q.ans; document.querySelectorAll('.qopt').forEach(o=>o.disabled=true); document.getElementById('qo'+idx).classList.add(ok?'ok':'no'); if(!ok) document.getElementById('qo'+q.ans)?.classList.add('ok'); resolveAnswer(ok,q); }

// ─── RESOLVE ANSWER ──────────────────────────────────────
function resolveAnswer(ok, qd){
  clearInterval(_speedTimer);
  let u=getCU(); if(!u) return;
  const curType=Q.qs[Q.idx]?.type||'mc';
  const msgs=CTX_MSGS[currentLang]||CTX_MSGS.en;

  if(ok){
    _incBadgeStat(curType); Q.typesUsed.add(curType);
    SFX.correct(); if(window.FlowyReact) FlowyReact('correct');
    Q.score++; Q.combo++; Q.maxC=Math.max(Q.maxC,Q.combo);
    _checkComboBadge(Q.combo);

    // live XP increment
    const xpPerQ=Math.round(Q.xpR/Q.qs.length);
    Q.liveXP=Math.min(Q.xpR, Q.liveXP+xpPerQ+(Q.speedBonus?5:0));

    // combo feedback
    if(Q.combo===3){ SFX.combo&&SFX.combo(); _showComboFlash(msgs.combo.c3); if(window.FlowyReact) FlowyReact('combo'); }
    else if(Q.combo===5){ SFX.combo&&SFX.combo(); _showComboFlash(msgs.combo.c5); if(window.FlowyReact) FlowyReact('combo'); }
    else if(Q.combo>=10){ _showComboFlash(msgs.combo.c10); if(window.FlowyReact) FlowyReact('perfect'); }
    else if(Q.combo>=3){ const ci=document.getElementById('comboInd'); if(ci){ ci.innerHTML=`🔥 ${Q.combo}x COMBO!`; ci.className='combo-ind on'+(Q.combo>=5?' mega':''); } }

    // milestone celebrations
    const milestones={3:msgs.milestone3, 5:msgs.milestone5, 8:msgs.milestone8};
    if(milestones[Q.score]) _showMilestone(milestones[Q.score]);

    if(window.Progress) Progress.recordAnswer(u,true); else u.totalCor=(u.totalCor||0)+1;
    // type-specific particles
    spawnEmojis(TYPE_PARTICLES[curType]||'✨', 3);
    if(typeof SFX_TYPE==='function') SFX_TYPE(curType);

  } else {
    // wrong streak tracking
    Q.wrongStreak[Q.idx]=(Q.wrongStreak[Q.idx]||0)+1;
    const doubleWrong=Q.wrongStreak[Q.idx]>=2;

    if(Q.shieldActive){
      Q.shieldActive=false; showToast('🛡️ '+(currentLang==='pt'?'Escudo bloqueou!':'Shield blocked!')); SFX.wrong&&SFX.wrong(); _refreshPUBar();
    } else {
      SFX.wrong(); if(window.FlowyReact) FlowyReact('wrong');
      Q.combo=0; const ci=document.getElementById('comboInd'); if(ci) ci.className='combo-ind';
      if(window.Progress){ Progress.recordHeartLoss(u); u=getCU(); }
      else u.hearts=Math.max(0,u.hearts-1);
      SFX.hLoss();
      if(u.hearts<=0){ if(window.Progress) Progress.save(u); else saveCU(u); setTimeout(()=>{ showToast(t('noHearts')); closeQuiz(); },1500); return; }
      if(window.Progress) Progress.recordAnswer(u,false); else u.totalAns=(u.totalAns||0)+1;
    }
  }

  if(!window.Progress){ u.totalAns=(u.totalAns||0)+1; saveCU(u); }
  else if(ok){ u=getCU(); }
  refreshUI();

  // contextual feedback roast
  const ctxRoast = ok ? _ctxMsg(curType,true) : (Q.wrongStreak[Q.idx]>=2 ? msgs.streak2wrong : _ctxMsg(curType,false));

  const isLast=Q.idx+1>=Q.qs.length;
  const fb=document.getElementById('fb');
  fb.className=`fb-foot fb-${ok?'ok':'no'}`;
  fb.innerHTML=`
    <div class="fb-inner">
      <div class="fb-icon">${ok?'✅':'❌'}</div>
      <div class="fb-content">
        <div class="fb-title">${ok?t('correct'):t('incorrect')}</div>
        <div class="fb-roast">${ctxRoast}</div>
        ${qd.exp?`<div class="fb-exp">${qd.exp}</div>`:''}
      </div>
    </div>
    <button class="fb-cont" onclick="nextQ()">${isLast?t('seeResults'):t('continue')}</button>`;
  fb.style.display='flex';
}

function _showComboFlash(msg){
  const ci=document.getElementById('comboInd'); if(!ci) return;
  ci.innerHTML=msg; ci.className='combo-ind on mega'; ci.style.fontSize='1.1rem';
  setTimeout(()=>{ ci.style.fontSize=''; },1500);
}
function _showMilestone(msg){
  const el=document.createElement('div');
  el.className='milestone-toast'; el.textContent=msg;
  document.querySelector('.quiz-body')?.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));
  setTimeout(()=>{ el.classList.remove('on'); setTimeout(()=>el.remove(),400); },2000);
}

// ─── NEXT / FINISH ───────────────────────────────────────
function nextQ(){ Q.idx++; if(Q.idx>=Q.qs.length) finishQ(); else renderQ(); }

function finishQ(){
  clearInterval(_speedTimer);
  const u=getCU(); if(!u) return;
  const perfect=Q.score===Q.qs.length;
  const ratio=Q.score/Q.qs.length;
  const rawXp=Math.round(Q.xpR*ratio*(perfect?1.5:1));
  const xpE=Q.gramMode?Q.xpR:(Q.score>0?Math.max(1,rawXp+Q.speedBonus):0);
  const acc=Math.round(ratio*100);
  if(perfect&&!Q.lessonId&&!Q.gramMode) _checkPerfectDailyBadge();
  if(!Q.lessonId&&!Q.gramMode){ try{ const prev=JSON.parse(localStorage.getItem('ews_daily_best')||'null'); if(!prev||Q.score>prev.score) localStorage.setItem('ews_daily_best',JSON.stringify({score:Q.score,total:Q.qs.length,date:new Date().toDateString()})); }catch{} }
  const prevXp=u.xp||0, prevLv=getLevel(prevXp);
  if(window.Progress){ Progress.recordQuiz(u,{ source:Q.lessonId?'lesson':Q.gramMode?'grammar':'daily', lessonId:Q.lessonId, unitId:Q.unitId, title:Q.title, score:Q.score, total:Q.qs.length, xpEarned:xpE, perfect, maxCombo:Q.maxC, gramMode:Q.gramMode, markDailyDone:!Q.lessonId&&!Q.gramMode }); }
  else { u.xp+=xpE; u.todayXP=(u.todayXP||0)+xpE; if(Q.maxC>(u.maxCombo||0)) u.maxCombo=Q.maxC; if(perfect) u.hadPerfect=true; if(Q.lessonId&&!u.done.includes(Q.lessonId)) u.done.push(Q.lessonId); if(!Q.lessonId&&!Q.gramMode){ const today=new Date().toDateString(); u.dailyChallengeDone=today; } saveCU(u); }
  checkAchs(); refreshUI(); renderCurriculum();
  if(typeof checkMissions==="function") checkMissions({ score:Q.score, total:Q.qs.length, maxCombo:Q.maxC, xpEarned:xpE, perfect, typesUsed:Array.from(Q.typesUsed||[]) });
  if(xpE>0){ SFX.xp(); showXPPop('+'+xpE+' XP!'); if(window.FlowyReact&&!perfect) FlowyReact('correct'); }
  if(perfect){ SFX.perfect?SFX.perfect():SFX.ach(); launchConfetti(); if(window.FlowyReact) FlowyReact('perfect'); }
  const newLv=getLevel(u.xp);
  if(newLv.level>prevLv.level){ setTimeout(()=>{ const lt=document.getElementById('luText'),lb=document.getElementById('luBtn'); if(lt) lt.textContent=t('levelUpText',{n:newLv.level}); if(lb) lb.textContent=t('letsGo'); document.getElementById('luOverlay').classList.add('on'); SFX.levelUp(); launchConfetti(); if(window.FlowyReact) FlowyReact('levelUp'); },500); }
  const msgs=QUIZ_MSGS[currentLang]||QUIZ_MSGS.en;
  const rKey=acc===100?'perfect':acc>=80?'great':acc>=60?'ok':'tryAgain';
  const [rTitle,rSub]=msgs.results[rKey];
  const ghostDiff=Q.versusMode&&Q.versusGhost?`<div class="versus-result ${Q.score>Q.versusGhost.score?'vs-win':'vs-loss'}">${Q.score>Q.versusGhost.score?'👑 '+(currentLang==='pt'?'Bateste o teu ghost!':'Beat your ghost!'):'👻 Ghost: '+Q.versusGhost.score+'/'+Q.versusGhost.total}</div>`:'';
  const b=_getBadges();
  const earned=BADGE_DEFS.filter(d=>b[d.id]&&(Date.now()-b[d.id])<90000);
  const badgesHTML=earned.length?`<div class="res-badges">${earned.map(d=>`<div class="res-badge"><span>${d.icon}</span><span>${d.label}</span></div>`).join('')}</div>`:'';
  document.getElementById('tab-quiz').innerHTML=`
  <div class="res-screen on">
    <div class="res-emoji">${acc===100?'🏆':acc>=80?'🎉':acc>=60?'💪':'🤔'}</div>
    <div class="res-title">${rTitle}</div>
    <div class="res-sub">${rSub}</div>
    ${ghostDiff}${badgesHTML}
    <div class="res-grid">
      <div class="res-stat"><div class="rs-num" style="color:var(--green)">${Q.score}/${Q.qs.length}</div><div class="rs-lbl">${currentLang==='pt'?'Correcto':'Correct'}</div></div>
      <div class="res-stat"><div class="rs-num" style="color:var(--yellow)">+${xpE}</div><div class="rs-lbl">XP</div></div>
      <div class="res-stat"><div class="rs-num" style="color:var(--orange)">${Q.maxC}x</div><div class="rs-lbl">Combo</div></div>
    </div>
    <div class="res-xp-bar-wrap"><div class="res-xp-label">${currentLang==='pt'?'Progresso de XP':'XP Progress'}</div><div class="bar-bg"><div class="bar-fill bar-xp" id="res-xp-bar" style="width:0%"></div></div></div>
    <div class="res-btns">
      <button class="res-btn" onclick="closeQuiz()">🏠 ${t('backHome')}</button>
      ${Q.lessonId?`<button class="res-btn res-btn-sec" onclick="retryLesson()">🔄 ${t('tryAgain')}</button>`:''}
    </div>
  </div>`;
  setTimeout(()=>{ const lv=getLevel(u.xp); const pct=Math.max(0,Math.min(100,((u.xp-lv.prev)/(lv.next-lv.prev))*100)); const bar=document.getElementById('res-xp-bar'); if(bar) bar.style.width=pct+'%'; },100);
}

function retryLesson(){ if(Q.unitId&&Q.lessonId) startLesson(Q.unitId,Q.lessonId); }

function closeQuiz(){
  clearInterval(_speedTimer);
  if(window.speechSynthesis) speechSynthesis.cancel();
  SFX.click();
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('tab-home').classList.add('on');
  document.querySelectorAll('.bn').forEach(b=>b.classList.remove('on'));
  document.getElementById('bn-home').classList.add('on');
  document.getElementById('fabContainer').style.display='flex';
  renderCurriculum();
}

function resumeLesson(){
  SFX.click(); const u=getCU();
  for(const unit of UNITS){ for(const lesson of unit.lessons){ if(!u.done.includes(lesson.id)&&!unit.premium){ if(typeof openLesson==='function') openLesson(unit.id,lesson.id); else startLesson(unit.id,lesson.id); return; } } }
  showToast(t('toastAllDone'));
}

function esc(s){ return (s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;'); }
