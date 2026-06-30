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

// ── lang helper (uses LS.lang when in a lesson, falls back to app global) ──
function ll() { return (LS && LS.lang) ? LS.lang : (typeof currentLang !== 'undefined' ? currentLang : 'en'); }
function ispt() { return ll() === 'pt'; }

// ─── ENTRY POINT ───────────────────────────────────────────
function openLesson(unitId, lessonId) {
  const unit   = UNITS.find(u => u.id === unitId);
  const lesson = unit?.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  // Legacy lessons (no learn block) go straight to quiz — zero behaviour change
  if (!lesson.learn) { startLesson(unitId, lessonId); return; }

  SFX.click();
  LS = {
    unitId, lessonId, lesson, unit,
    step : 'explain',
    pIdx : 0,
    pScore: 0,
    lang : (typeof currentLang !== 'undefined' ? currentLang : 'en'),
  };
  showLessonTab();
  renderLessonScreen();
}
window.openLesson = openLesson;

// ─── LANG TOGGLE ───────────────────────────────────────────
function toggleLessonLang() {
  if (!LS) return;
  SFX.click();
  LS.lang = LS.lang === 'pt' ? 'en' : 'pt';
  renderLessonScreen();
}
window.toggleLessonLang = toggleLessonLang;

// ─── TAB MANAGEMENT ────────────────────────────────────────
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
  document.querySelectorAll('.mn').forEach(b => b.classList.remove('on'));
  document.getElementById('bn-home').classList.add('on');
  document.getElementById('fabContainer').style.display = 'flex';
  renderCurriculum();
}
window.closeLessonScreen = closeLessonScreen;

// ─── STEP DISPATCH ─────────────────────────────────────────
function renderLessonScreen() {
  if (!LS) return;
  if (LS.step === 'explain')  return renderExplain();
  if (LS.step === 'examples') return renderExamples();
  if (LS.step === 'practice') return renderPractice();
}

// ─── SHARED HEADER ─────────────────────────────────────────
function lessonHeader() {
  const title     = ispt() ? (LS.lesson.titlePt || LS.lesson.title) : LS.lesson.title;
  const flagLabel = ispt() ? '🇲🇿 PT' : '🇬🇧 EN';
  const tipLabel  = ispt() ? 'Ver em inglês' : 'Ver em português';
  const labels    = ispt()
    ? ['Explicação', 'Exemplos', 'Prática', 'Quiz']
    : ['Learn', 'Examples', 'Practice', 'Quiz'];
  const stepIdx   = ['explain','examples','practice'].indexOf(LS.step);

  const dots = `<div class="lstep-bar">${labels.map((lbl, i) => `
    <div class="lstep-dot ${i <= stepIdx ? 'on' : ''} ${i === stepIdx ? 'curr' : ''}">
      <span class="lstep-num">${i + 1}</span>
      <span class="lstep-lbl">${lbl}</span>
    </div>`).join('')}</div>`;

  return `
    <div class="quiz-toprow">
      <button class="qclose" onclick="closeLessonScreen()" aria-label="Close">${t('close')}</button>
      <div class="ltitle">${LS.lesson.icon} ${title}</div>
      <button class="llang-btn" onclick="toggleLessonLang()" title="${tipLabel}">${flagLabel}</button>
    </div>
    ${dots}`;
}

// ─── STEP 1: EXPLANATION ───────────────────────────────────
function renderExplain() {
  const ex   = LS.lesson.learn.explanation || {};
  const text = ispt() ? (ex.pt || ex.en) : (ex.en || ex.pt);
  const flag = ispt() ? '🇲🇿' : '🇬🇧';

  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body">
        <div class="lesson-section">
          <div class="gram-rtitle">📖 ${ispt() ? 'Explicação Simples' : 'Simple Explanation'}</div>
          <div class="lexp-block ${ispt() ? 'lexp-pt' : ''}">
            <span class="lexp-flag">${flag} ${ispt() ? 'PT' : 'EN'}</span>
            <p>${text}</p>
          </div>
          ${ispt() && ex.en ? `<details class="lexp-also">
            <summary>🇬🇧 See in English</summary>
            <div class="lexp-block" style="margin-top:.5rem"><span class="lexp-flag">🇬🇧 EN</span><p>${ex.en}</p></div>
          </details>` : ''}
          ${!ispt() && ex.pt ? `<details class="lexp-also">
            <summary>🇲🇿 Ver em Português</summary>
            <div class="lexp-block lexp-pt" style="margin-top:.5rem"><span class="lexp-flag">🇲🇿 PT</span><p>${ex.pt}</p></div>
          </details>` : ''}
        </div>
      </div>
      <div class="lesson-foot">
        <button class="fb-cont" onclick="goLessonStep('examples')">${ispt() ? 'Continuar' : 'Continue'} ›</button>
      </div>
    </div>`;
}

// ─── STEP 2: EXAMPLES ──────────────────────────────────────
function renderExamples() {
  const exs      = LS.lesson.learn.examples || [];
  const hasPractice = LS.lesson.learn.practice?.length > 0;
  const nextFn   = hasPractice ? `goLessonStep('practice')` : `startLesson('${LS.unitId}','${LS.lessonId}')`;
  const nextLbl  = hasPractice
    ? (ispt() ? 'Continuar' : 'Continue')
    : (ispt() ? 'Começar Quiz' : 'Start Quiz');

  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body">
        <div class="lesson-section">
          <div class="gram-rtitle">💬 ${ispt() ? 'Exemplos (linha a linha)' : 'Examples (line by line)'}</div>
          ${exs.map(e => `
            <div class="gram-ex">
              <div class="gram-ex-en ${ispt() ? 'lang-fade' : ''}">🇬🇧 ${e.en}</div>
              <div class="gram-ex-pt ${!ispt() ? 'lang-fade' : ''}">🇲🇿 ${e.pt}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="lesson-foot">
        <button class="fb-cont" onclick="${nextFn}">${nextLbl} ›</button>
      </div>
    </div>`;
}

// ─── STEP 3: PRACTICE ──────────────────────────────────────
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
        <div class="gram-rtitle">✏️ ${ispt() ? 'Prática Rápida' : 'Quick Practice'} · ${LS.pIdx + 1}/${items.length}</div>
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
  ok ? SFX.correct() : SFX.wrong();

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
    <button class="fb-cont" onclick="nextPractice()">
      ${isLast ? (ispt() ? 'Continuar' : 'Continue') : t('continue')}
    </button>`;
  fb.style.display = 'flex';
}
window.selPractice = selPractice;

function nextPractice() { LS.pIdx++; renderLessonScreen(); }
window.nextPractice = nextPractice;

function renderPracticeDone() {
  const items = LS.lesson.learn.practice || [];
  document.getElementById('tab-lesson').innerHTML = `
    <div class="quiz-wrap">
      ${lessonHeader()}
      <div class="lesson-body lesson-pdone">
        <div class="res-emoji">🙌</div>
        <div class="res-title">${ispt() ? 'Boa! Praticaste.' : 'Nice! You practiced.'}</div>
        <div class="res-sub">${ispt()
          ? `Acertaste ${LS.pScore}/${items.length} — agora o quiz oficial para ganhares XP!`
          : `You got ${LS.pScore}/${items.length} — now the real quiz to earn XP!`}</div>
      </div>
      <div class="lesson-foot">
        <button class="fb-cont" onclick="startLesson('${LS.unitId}','${LS.lessonId}')">
          🎯 ${ispt() ? 'Começar Quiz' : 'Start Quiz'}
        </button>
      </div>
    </div>`;
}

// ─── STEP NAVIGATION ───────────────────────────────────────
function goLessonStep(step) {
  SFX.click();
  LS.step = step;
  if (step === 'practice') { LS.pIdx = 0; LS.pScore = 0; }
  renderLessonScreen();
}
window.goLessonStep = goLessonStep;
