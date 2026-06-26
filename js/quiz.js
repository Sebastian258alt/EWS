// ═══════════════════════════════════════════════════════════
//  🎯 QUIZ.JS — Quiz Engine
//  English With Sebastian v3.0
// ═══════════════════════════════════════════════════════════

let Q = { qs:[], idx:0, score:0, combo:0, maxC:0, lessonId:null, unitId:null, xpR:0, gramMode:false, title:'' };

// ─── START ────────────────────────────────────────────────
function startLesson(unitId, lessonId) {
  const unit   = UNITS.find(u => u.id === unitId);
  const lesson = unit?.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  SFX.click();
  let u = getCU(); if (!u) return;
  if (u.hearts <= 0) { showToast(t('noHearts')); return; }
  const title = currentLang === 'pt' ? (lesson.titlePt || lesson.title) : lesson.title;
  Q = { qs: lesson.qs, idx: 0, score: 0, combo: 0, maxC: 0, lessonId, unitId, xpR: lesson.xp, gramMode: false, title };
  showQuiz();
}
window.startLesson = startLesson;

function startDailyChallenge() {
  SFX.click();
  let u = getCU(); if (!u) return;
  const today = new Date().toDateString();
  if (u.dailyChallengeDone === today) { showToast(t('alreadyDone')); return; }
  const allQs = UNITS.flatMap(u => u.lessons.flatMap(l => l.qs));
  const qs    = allQs.sort(() => Math.random() - 0.5).slice(0, 5);
  Q = { qs, idx: 0, score: 0, combo: 0, maxC: 0, lessonId: null, unitId: null, xpR: 10, gramMode: false, title: t('dailyChallenge') };
  showQuiz();
}

function startQuizFromData(title, qs, xp, gramMode = false) {
  Q = { qs, idx: 0, score: 0, combo: 0, maxC: 0, lessonId: null, unitId: null, xpR: xp, gramMode, title };
  showQuiz();
}
window.startQuizFromData = startQuizFromData;

function showQuiz() {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.getElementById('tab-quiz').classList.add('on');
  document.getElementById('fabContainer').style.display = 'none';
  renderQ();
}

function renderQ() {
  let u = getCU(); if (!u) return;
  const qd  = Q.qs[Q.idx];
  const pct = (Q.idx / Q.qs.length) * 100;
  const hearts = Array.from({length:5}, (_, i) =>
    `<span class="hrt${i >= u.hearts ? ' dead' : ''}" id="hrt${i}">❤️</span>`
  ).join('');

  document.getElementById('tab-quiz').innerHTML = `
  <div class="quiz-wrap">
    <div class="quiz-toprow">
      <button class="qclose" onclick="closeQuiz()" aria-label="Close">${t('close')}</button>
      <div class="qbar-bg" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemax="100">
        <div class="qbar-fill" style="width:${pct}%"></div>
        <div class="qbar-glow" style="left:${pct}%"></div>
      </div>
      <div class="hrow">${hearts}</div>
    </div>
    <div class="quiz-body">
      <div class="combo-ind" id="comboInd"></div>
      <div class="q-tag">📍 ${Q.idx + 1} / ${Q.qs.length} · ${Q.title}</div>
      <div class="q-text">${qd.q}</div>
      <div class="q-opts">
        ${qd.opts.map((o, i) => `
          <button class="qopt" id="qo${i}" onclick="selOpt(${i})">
            <span class="oletter">${['A','B','C','D'][i]}</span>
            <span class="otext">${o}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="fb-foot" id="fb" style="display:none"></div>
  </div>`;
}

async function selOpt(idx) {
  let u = getCU(); if (!u) return;
  const q  = Q.qs[Q.idx];
  const ok = idx === q.ans;
  document.querySelectorAll('.qopt').forEach(o => o.disabled = true);
  document.getElementById('qo' + idx).classList.add(ok ? 'ok' : 'no');
  if (!ok) document.getElementById('qo' + q.ans).classList.add('ok');

  const msgs = QUIZ_MSGS[currentLang] || QUIZ_MSGS.en;

  if (ok) {
    SFX.correct();
    Q.score++; Q.combo++; Q.maxC = Math.max(Q.maxC, Q.combo);
    if (Q.combo >= 3) {
      SFX.combo();
      const ci = document.getElementById('comboInd');
      ci.innerHTML = `🔥 ${Q.combo}x COMBO!`;
      ci.className = 'combo-ind on' + (Q.combo >= 5 ? ' mega' : '');
    }
    if (window.Progress) Progress.recordAnswer(u, true);
    else u.totalCor = (u.totalCor || 0) + 1;
    spawnEmojis('✨', 3);
  } else {
    SFX.wrong(); Q.combo = 0;
    document.getElementById('comboInd').className = 'combo-ind';
    if (window.Progress) {
      Progress.recordHeartLoss(u);
      // Refresh user after heart loss
      u = getCU();
    } else {
      u.hearts = Math.max(0, u.hearts - 1);
    }
    SFX.hLoss();
    if (u.hearts <= 0) {
      if (window.Progress) Progress.save(u);
      else saveCU(u);
      setTimeout(() => { showToast(t('noHearts')); closeQuiz(); }, 1500);
      return;
    }
    if (window.Progress) Progress.recordAnswer(u, false);
    else u.totalAns = (u.totalAns || 0) + 1;
  }
  if (!window.Progress) {
    u.totalAns = (u.totalAns || 0) + 1;
    saveCU(u);
  } else if (ok) {
    u = getCU(); // refresh after correct answer recorded
  }
  refreshUI();

  const isLast = Q.idx + 1 >= Q.qs.length;
  const fb = document.getElementById('fb');
  fb.className = `fb-foot fb-${ok ? 'ok' : 'no'}`;
  fb.innerHTML = `
    <div class="fb-inner">
      <div class="fb-icon">${ok ? '✅' : '❌'}</div>
      <div class="fb-content">
        <div class="fb-title">${ok ? t('correct') : t('incorrect')}</div>
        <div class="fb-roast">${ok ? msgs.correct[Math.floor(Math.random()*msgs.correct.length)] : msgs.wrong[Math.floor(Math.random()*msgs.wrong.length)]}</div>
        ${q.exp ? `<div class="fb-exp">${q.exp}</div>` : ''}
      </div>
    </div>
    <button class="fb-cont" onclick="nextQ()">${isLast ? t('seeResults') : t('continue')}</button>`;
  fb.style.display = 'flex';
}

function nextQ() {
  Q.idx++;
  if (Q.idx >= Q.qs.length) finishQ();
  else renderQ();
}

function finishQ() {
  const u = getCU(); if (!u) return;
  const perfect = Q.score === Q.qs.length;
  const ratio   = Q.score / Q.qs.length;
  const rawXp   = Math.round(Q.xpR * ratio * (perfect ? 1.5 : 1));
  const xpE     = Q.gramMode ? Q.xpR : (Q.score > 0 ? Math.max(1, rawXp) : 0);
  const acc     = Math.round(ratio * 100);

  const prevXp = u.xp || 0;
  const prevLv = getLevel(prevXp);

  if (window.Progress) {
    Progress.recordQuiz(u, {
      source: Q.lessonId ? 'lesson' : Q.gramMode ? 'grammar' : 'daily',
      lessonId: Q.lessonId,
      unitId: Q.unitId,
      title: Q.title,
      score: Q.score,
      total: Q.qs.length,
      xpEarned: xpE,
      perfect,
      maxCombo: Q.maxC,
      gramMode: Q.gramMode,
      markDailyDone: !Q.lessonId && !Q.gramMode,
    });
  } else {
    u.xp += xpE; u.todayXP = (u.todayXP || 0) + xpE;
    if (Q.maxC > (u.maxCombo || 0)) u.maxCombo = Q.maxC;
    if (perfect) u.hadPerfect = true;
    if (Q.lessonId && !u.done.includes(Q.lessonId)) u.done.push(Q.lessonId);
    if (!Q.lessonId && !Q.gramMode) { const today = new Date().toDateString(); u.dailyChallengeDone = today; }
    saveCU(u);
  }

  checkAchs(); refreshUI(); renderCurriculum();

  if (xpE > 0) { SFX.xp(); showXPPop('+' + xpE + ' XP!'); }
  if (perfect) { SFX.ach(); launchConfetti(); }

  const newLv = getLevel(u.xp);
  if (newLv.level > prevLv.level) {
    setTimeout(() => {
      const luText = document.getElementById('luText');
      const luBtn  = document.getElementById('luBtn');
      if (luText) luText.textContent = t('levelUpText', { n: newLv.level });
      if (luBtn)  luBtn.textContent  = t('letsGo');
      document.getElementById('luOverlay').classList.add('on');
      SFX.levelUp(); launchConfetti();
    }, 500);
  }

  const msgs = QUIZ_MSGS[currentLang] || QUIZ_MSGS.en;
  const rKey  = acc === 100 ? 'perfect' : acc >= 80 ? 'great' : acc >= 60 ? 'ok' : 'tryAgain';
  const [rTitle, rSub] = msgs.results[rKey];

  document.getElementById('tab-quiz').innerHTML = `
  <div class="res-screen on">
    <div class="res-emoji">${acc === 100 ? '🏆' : acc >= 80 ? '🎉' : acc >= 60 ? '💪' : '🤔'}</div>
    <div class="res-title">${rTitle}</div>
    <div class="res-sub">${rSub}</div>
    <div class="res-grid">
      <div class="res-stat">
        <div class="rs-num" style="color:var(--green)">${Q.score}/${Q.qs.length}</div>
        <div class="rs-lbl">${currentLang === 'pt' ? 'Correcto' : 'Correct'}</div>
      </div>
      <div class="res-stat">
        <div class="rs-num" style="color:var(--yellow)">+${xpE}</div>
        <div class="rs-lbl">XP Earned</div>
      </div>
      <div class="res-stat">
        <div class="rs-num" style="color:var(--orange)">${Q.maxC}x</div>
        <div class="rs-lbl">Best Combo</div>
      </div>
    </div>
    <div class="res-xp-bar-wrap">
      <div class="res-xp-label">${currentLang === 'pt' ? 'Progresso de XP' : 'XP Progress'}</div>
      <div class="bar-bg"><div class="bar-fill bar-xp" id="res-xp-bar" style="width:0%"></div></div>
    </div>
    <div class="res-btns">
      <button class="res-btn" onclick="closeQuiz()">🏠 ${t('backHome')}</button>
      ${Q.lessonId ? `<button class="res-btn res-btn-sec" onclick="retryLesson()">🔄 ${t('tryAgain')}</button>` : ''}
    </div>
  </div>`;

  setTimeout(() => {
    const lv = getLevel(u.xp);
    const pct = Math.max(0, Math.min(100, ((u.xp - lv.prev) / (lv.next - lv.prev)) * 100));
    const bar = document.getElementById('res-xp-bar');
    if (bar) bar.style.width = pct + '%';
  }, 100);
}

function retryLesson() {
  if (Q.unitId && Q.lessonId) startLesson(Q.unitId, Q.lessonId);
}

function closeQuiz() {
  SFX.click();
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.getElementById('tab-home').classList.add('on');
  document.querySelectorAll('.bn').forEach(b => b.classList.remove('on'));
  document.getElementById('bn-home').classList.add('on');
  document.getElementById('fabContainer').style.display = 'flex';
  renderCurriculum();
}

function resumeLesson() {
  SFX.click();
  const u = getCU();
  for (const unit of UNITS) {
    for (const lesson of unit.lessons) {
      if (!u.done.includes(lesson.id) && !unit.premium) {
        if (typeof openLesson === 'function') openLesson(unit.id, lesson.id);
        else startLesson(unit.id, lesson.id);
        return;
      }
    }
  }
  showToast(t('toastAllDone'));
}