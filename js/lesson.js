// ═══════════════════════════════════════════════════════════
//  📘 LESSON.JS — Lesson Learn Flow Engine
//  English With Sebastian v2.0
//
//  Flow: Explanation → Examples → Practice (ungraded) → Quiz
//  Backward compatible: lessons without `learn` data jump
//  straight to the existing quiz (startLesson), so nothing
//  written before v2.0 breaks.
// ═══════════════════════════════════════════════════════════

let LS = null; // current Lesson Screen state

// ─── ENTRY POINT (replaces direct startLesson() calls from lnode) ──
function openLesson(unitId, lessonId) {
  const unit   = UNITS.find(u => u.id === unitId);
  const lesson = unit?.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  // Legacy lessons with no `learn` content go straight to the quiz —
  // zero behaviour change for existing content.
  if (!lesson.learn) { startLesson(unitId, lessonId); return; }

  SFX.click();
  const title = currentLang === 'pt' ? (lesson.titlePt || lesson.title) : lesson.title;
  LS = { unitId, lessonId, lesson, unit, title, step: 'explain', pIdx: 0, pScore: 0 };
  showLessonTab();
  renderLessonScreen();
}
window.openLesson = openLesson;

function showLessonTab() {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.getElementById('tab-lesson').classList.add('on');
  document.getElementById('fabContainer').style.display = 'none';
}

function closeLessonScreen() {
  SFX.click();
  LS = null;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  document.getElementById('tab-home').classList.add('on');
  document.querySelectorAll('.bn').forEach(b => b.classList.remove('on'));
  document.getElementById('bn-home').classList.add('on');
  document.getElementById('fabContainer').style.display = 'flex';
  renderCurriculum();
}
window.closeLessonScreen = closeLessonScreen;

// ─── STEP DISPATCH ───────────────────────────────────────
const LESSON_STEPS = ['explain', 'examples', 'practice'];

function lessonStepIndex() {
  return LESSON_STEPS.indexOf(LS.step);
}

function stepDots() {
  const labels = currentLang === 'pt'
    ? ['Explicação', 'Exemplos', 'Prática', 'Quiz']
    : ['Learn', 'Examples', 'Practice', 'Quiz'];
  const curr = lessonStepIndex();
  return `<div class="lstep-bar">${labels.map((lbl, i) => `
    <div class="lstep-dot ${i <= curr ? 'on' : ''} ${i === curr ? 'curr' : ''}">
      <span class="lstep-num">${i + 1}</span><span class="lstep-lbl">${lbl}</span>
    </div>`).join('')}</div>`;
}

function lessonHeader() {
  return `
    <div class="quiz-toprow">
      <button class="qclose" onclick="closeLessonScreen()" aria-label="Close">${t('close')}</button>
      <div class="ltitle">${LS.lesson.icon} ${LS.title}</div>
    </div>
    ${stepDots()}`;
}

function renderLessonScreen() {
  if (!LS) return;
  if (LS.step === 'explain')  return renderExplain();
  if (LS.step === 'examples') return renderExamples();
  if (LS.step === 'practice') return renderPractice();
}

// ─── STEP 1: EXPLANATION ─────────────────────────────────
function renderExplain() {
  const ex = LS.lesson.learn.explanation || {};
  const hasEn = !!ex.en, hasPt = !!ex.pt;
  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body">
        <div class="lesson-section">
          <div class="gram-rtitle">📖 ${currentLang === 'pt' ? 'Explicação Simples' : 'Simple Explanation'}</div>
          ${hasEn ? `<div class="lexp-block"><span class="lexp-flag">🇬🇧 EN</span><p>${ex.en}</p></div>` : ''}
          ${hasPt ? `<div class="lexp-block lexp-pt"><span class="lexp-flag">🇲🇿 PT</span><p>${ex.pt}</p></div>` : ''}
        </div>
      </div>
      <div class="lesson-foot">
        <button class="fb-cont" onclick="goLessonStep('examples')">${currentLang === 'pt' ? 'Continuar' : 'Continue'} ›</button>
      </div>
    </div>`;
}

// ─── STEP 2: EXAMPLES ────────────────────────────────────
function renderExamples() {
  const exs = LS.lesson.learn.examples || [];
  const next = (LS.lesson.learn.practice && LS.lesson.learn.practice.length)
    ? () => `goLessonStep('practice')`
    : () => `startLesson('${LS.unitId}','${LS.lessonId}')`;
  const nextLabel = (LS.lesson.learn.practice && LS.lesson.learn.practice.length)
    ? (currentLang === 'pt' ? 'Continuar' : 'Continue')
    : (currentLang === 'pt' ? 'Começar Quiz' : 'Start Quiz');

  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body">
        <div class="lesson-section">
          <div class="gram-rtitle">💬 ${currentLang === 'pt' ? 'Exemplos (linha a linha)' : 'Examples (line by line)'}</div>
          ${exs.map(e => `
            <div class="gram-ex">
              <div class="gram-ex-en">🇬🇧 ${e.en}</div>
              <div class="gram-ex-pt">🇲🇿 ${e.pt}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="lesson-foot">
        <button class="fb-cont" onclick="${next()}">${nextLabel} ›</button>
      </div>
    </div>`;
}

// ─── STEP 3: PRACTICE (ungraded warm-up, no hearts/XP) ───
function renderPractice() {
  const items = LS.lesson.learn.practice || [];
  if (!items.length) { startLesson(LS.unitId, LS.lessonId); return; }
  if (LS.pIdx >= items.length) return renderPracticeDone();

  const item = items[LS.pIdx];
  const pct  = (LS.pIdx / items.length) * 100;

  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body">
        <div class="gram-rtitle">✏️ ${currentLang === 'pt' ? 'Prática Rápida' : 'Quick Practice'} · ${LS.pIdx + 1}/${items.length}</div>
        <div class="qbar-bg" style="margin-bottom:1rem"><div class="qbar-fill" style="width:${pct}%"></div></div>
        <div class="q-text">${item.q}</div>
        <div class="q-opts" id="pOpts">
          ${item.opts.map((o, i) => `
            <button class="qopt" id="po${i}" onclick="selPractice(${i})">
              <span class="oletter">${['A','B','C','D'][i]}</span>
              <span class="otext">${o}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="fb-foot" id="pfb" style="display:none"></div>
    </div>`;
}

function selPractice(idx) {
  const items = LS.lesson.learn.practice;
  const item  = items[LS.pIdx];
  const ok    = idx === item.ans;
  document.querySelectorAll('#pOpts .qopt').forEach(o => o.disabled = true);
  document.getElementById('po' + idx).classList.add(ok ? 'ok' : 'no');
  if (!ok) document.getElementById('po' + item.ans).classList.add('ok');
  if (ok) { SFX.correct(); LS.pScore++; } else { SFX.wrong(); }

  const isLast = LS.pIdx + 1 >= items.length;
  const fb = document.getElementById('pfb');
  fb.className = `fb-foot fb-${ok ? 'ok' : 'no'}`;
  fb.innerHTML = `
    <div class="fb-inner">
      <div class="fb-icon">${ok ? '✅' : '❌'}</div>
      <div class="fb-content">
        <div class="fb-title">${ok ? t('correct') : t('incorrect')}</div>
        ${item.exp ? `<div class="fb-exp">${item.exp}</div>` : ''}
      </div>
    </div>
    <button class="fb-cont" onclick="nextPractice()">${isLast ? (currentLang === 'pt' ? 'Continuar' : 'Continue') : t('continue')}</button>`;
  fb.style.display = 'flex';
}
window.selPractice = selPractice;

function nextPractice() {
  LS.pIdx++;
  renderLessonScreen();
}
window.nextPractice = nextPractice;

function renderPracticeDone() {
  const items = LS.lesson.learn.practice || [];
  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body lesson-pdone">
        <div class="res-emoji">🙌</div>
        <div class="res-title">${currentLang === 'pt' ? 'Boa! Praticaste.' : 'Nice! You practiced.'}</div>
        <div class="res-sub">${currentLang === 'pt'
          ? `Acertaste ${LS.pScore}/${items.length} — agora vamos ao quiz oficial para ganhares XP!`
          : `You got ${LS.pScore}/${items.length} — now let's do the real quiz to earn XP!`}</div>
      </div>
      <div class="lesson-foot">
        <button class="fb-cont" onclick="startLesson('${LS.unitId}','${LS.lessonId}')">🎯 ${currentLang === 'pt' ? 'Começar Quiz' : 'Start Quiz'}</button>
      </div>
    </div>`;
}

// ─── STEP NAVIGATION ──────────────────────────────────────
function goLessonStep(step) {
  SFX.click();
  LS.step = step;
  if (step === 'practice') { LS.pIdx = 0; LS.pScore = 0; }
  renderLessonScreen();
}
window.goLessonStep = goLessonStep;
