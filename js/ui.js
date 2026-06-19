// ═══════════════════════════════════════════════════════════
//  🎨 UI.JS — Curriculum, Grammar, Pronunciation Renderers
//  English With Sebastian v3.0
// ═══════════════════════════════════════════════════════════

// ─── STUDENT DASHBOARD ────────────────────────────────────
function getTotalLessons() {
  return (typeof UNITS !== 'undefined' ? UNITS : []).reduce((n, u) => n + u.lessons.length, 0);
}

function animateDashBars(root) {
  if (!root) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('[data-bar]').forEach(bar => {
    const pct = bar.getAttribute('data-bar') || '0';
    if (reduced) {
      bar.style.width = pct + '%';
      return;
    }
    bar.style.width = '0%';
    bar.style.transition = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = '';
        bar.style.width = pct + '%';
      });
    });
  });
}

function renderStudentDashboard() {
  const el = document.getElementById('studentDashboard');
  if (!el) return;
  const u = getCU();
  if (!u) { el.innerHTML = ''; return; }

  if (window.Progress) Progress.ensureUser(u);

  const totalLessons = getTotalLessons();
  const doneCount    = (u.done || []).length;
  const lessonPct    = totalLessons ? Math.round(doneCount / totalLessons * 100) : 0;
  const lv           = getLevel(u.xp || 0);
  const xpPct        = Math.max(0, Math.min(100, ((u.xp - lv.prev) / (lv.next - lv.prev)) * 100));
  const dailyPct     = Math.min(100, Math.round((u.todayXP || 0) / 50 * 100));
  const quiz         = window.Progress
    ? Progress.getQuizStats(u)
    : { count: 0, avgAccuracy: 0, bestAccuracy: 0, perfects: 0 };
  const streak       = u.streak || 0;
  const streakHot    = streak >= 7 ? 'sdash-streak-hot' : streak >= 3 ? 'sdash-streak-warm' : '';

  el.innerHTML = `
    <header class="sdash-hdr">
      <div>
        <h2 class="sdash-title" id="sdash-title">${t('dashTitle')}</h2>
        <p class="sdash-sub">${t('dashSubtitle')}</p>
      </div>
      <div class="sdash-lvl-badge" aria-label="Level ${lv.level}">
        <span class="sdash-lvl-num">${lv.level}</span>
        <span class="sdash-lvl-lbl">${t('homeHeroLevel')}</span>
      </div>
    </header>

    <div class="sdash-stats" role="list">
      <article class="sdash-stat sdash-stat-xp" role="listitem">
        <div class="sdash-stat-ic" aria-hidden="true">⚡</div>
        <div class="sdash-stat-body">
          <span class="sdash-stat-val" id="sdash-xp">${u.xp || 0}</span>
          <span class="sdash-stat-lbl">${t('dashXP')}</span>
        </div>
      </article>
      <article class="sdash-stat sdash-stat-streak ${streakHot}" role="listitem">
        <div class="sdash-stat-ic sdash-fire" aria-hidden="true">🔥</div>
        <div class="sdash-stat-body">
          <span class="sdash-stat-val" id="sdash-streak">${streak}</span>
          <span class="sdash-stat-lbl">${t('dashStreak')}</span>
        </div>
      </article>
      <article class="sdash-stat sdash-stat-lessons" role="listitem">
        <div class="sdash-stat-ic" aria-hidden="true">📚</div>
        <div class="sdash-stat-body">
          <span class="sdash-stat-val" id="sdash-lessons">${doneCount}</span>
          <span class="sdash-stat-lbl">${t('dashLessons')}</span>
          <span class="sdash-stat-meta">${t('dashOf', { done: doneCount, total: totalLessons })}</span>
        </div>
      </article>
    </div>

    <section class="sdash-panel sdash-quiz" aria-labelledby="sdash-quiz-title">
      <h3 class="sdash-panel-title" id="sdash-quiz-title">${t('dashQuizzes')}</h3>
      <div class="sdash-quiz-grid">
        <div class="sdash-qstat">
          <span class="sdash-qval" id="sdash-q-count">${quiz.count}</span>
          <span class="sdash-qlbl">${t('dashQuizTaken')}</span>
        </div>
        <div class="sdash-qstat">
          <span class="sdash-qval" id="sdash-q-avg">${quiz.avgAccuracy}%</span>
          <span class="sdash-qlbl">${t('dashAvgAccuracy')}</span>
        </div>
        <div class="sdash-qstat">
          <span class="sdash-qval" id="sdash-q-best">${quiz.bestAccuracy}%</span>
          <span class="sdash-qlbl">${t('dashBestScore')}</span>
        </div>
        <div class="sdash-qstat">
          <span class="sdash-qval" id="sdash-q-perfect">${quiz.perfects}</span>
          <span class="sdash-qlbl">${t('dashPerfects')}</span>
        </div>
      </div>
      <div class="sdash-prog-row">
        <div class="sdash-prog-meta">
          <span>${t('dashAvgAccuracy')}</span>
          <span id="sdash-q-acc-lbl">${quiz.avgAccuracy}%</span>
        </div>
        <div class="bar-bg sdash-bar-bg">
          <div class="bar-fill sdash-bar-fill sdash-bar-teal" data-bar="${quiz.avgAccuracy}" role="progressbar" aria-valuenow="${quiz.avgAccuracy}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </section>

    <section class="sdash-panel sdash-progress" aria-labelledby="sdash-prog-title">
      <h3 class="sdash-panel-title" id="sdash-prog-title">${t('dashLevelProgress')}</h3>
      <div class="sdash-prog-row">
        <div class="sdash-prog-meta">
          <span>${t('dashLevelProgress')}</span>
          <span>${t('dashToNext', { n: Math.max(0, lv.next - u.xp), lvl: lv.level + 1 })}</span>
        </div>
        <div class="bar-bg sdash-bar-bg">
          <div class="bar-fill sdash-bar-fill sdash-bar-xp" data-bar="${Math.round(xpPct)}" role="progressbar" aria-valuenow="${Math.round(xpPct)}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="sdash-prog-row">
        <div class="sdash-prog-meta">
          <span>${t('dashDailyProgress')}</span>
          <span>${u.todayXP || 0} / 50 XP</span>
        </div>
        <div class="bar-bg sdash-bar-bg">
          <div class="bar-fill sdash-bar-fill sdash-bar-green" data-bar="${dailyPct}" role="progressbar" aria-valuenow="${dailyPct}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="sdash-prog-row">
        <div class="sdash-prog-meta">
          <span>${t('dashCourseProgress')}</span>
          <span>${t('dashOf', { done: doneCount, total: totalLessons })} · ${lessonPct}%</span>
        </div>
        <div class="bar-bg sdash-bar-bg">
          <div class="bar-fill sdash-bar-fill sdash-bar-blue" data-bar="${lessonPct}" role="progressbar" aria-valuenow="${lessonPct}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </section>`;

  animateDashBars(el);

  const xpEl = document.getElementById('sdash-xp');
  const strEl = document.getElementById('sdash-streak');
  const lesEl = document.getElementById('sdash-lessons');
  if (xpEl && typeof animateNum === 'function') animateNum(xpEl, u.xp || 0);
  if (strEl && typeof animateNum === 'function') animateNum(strEl, streak);
  if (lesEl && typeof animateNum === 'function') animateNum(lesEl, doneCount);
}

window.renderStudentDashboard = renderStudentDashboard;

// ─── CURRICULUM ───────────────────────────────────────────
function renderCurriculum() {
  const u  = getCU(); if (!u) return;
  const el = document.getElementById('curriculum');
  if (!el) return;
  el.innerHTML = '';

  UNITS.forEach((unit, ui) => {
    const done = unit.lessons.filter(l => u.done.includes(l.id)).length;
    const pct  = Math.round(done / unit.lessons.length * 100);
    const wrap = document.createElement('div');
    wrap.className = 'unit-wrap';
    wrap.style.animationDelay = (ui * 0.07) + 's';
    const title = currentLang === 'pt' ? (unit.titlePt || unit.title) : unit.title;
    const desc  = currentLang === 'pt' ? (unit.descPt  || unit.desc)  : unit.desc;
    const badge = unit.premium ? t('premium') : t('free');
    wrap.innerHTML = `
      <div class="unit-hdr" style="background:linear-gradient(135deg,${unit.color}18,${unit.color}08);border-color:${unit.color}33">
        <div class="u-icon">${unit.icon}</div>
        <div class="u-info">
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
        <span class="u-badge ${unit.premium ? 'ub-prem' : 'ub-free'}">${badge}</span>
      </div>
      <div class="unit-prog">
        <div class="bar-bg"><div class="bar-fill" style="width:${pct}%;background:${unit.color};box-shadow:0 0 8px ${unit.color}66"></div></div>
        <span>${pct}%</span>
      </div>
      <div class="lpath">${unit.lessons.map(l => lnode(l, u, unit)).join('')}</div>`;
    el.appendChild(wrap);
  });
}

function lnode(l, u, unit) {
  const done       = u.done.includes(l.id);
  const allBefore  = unit.lessons.slice(0, unit.lessons.indexOf(l)).every(p => u.done.includes(p.id));
  const isCurr     = !done && allBefore;
  const isLocked   = !done && !allBefore && !unit.premium;
  const cls        = unit.premium ? 'prem' : done ? 'done' : isCurr ? 'curr' : isLocked ? 'lock' : 'curr';
  const action     = unit.premium ? 'openPM()' : (isLocked ? '' : `startLesson('${unit.id}','${l.id}')`);
  const title      = currentLang === 'pt' ? (l.titlePt || l.title) : l.title;
  const tickMark   = done ? '<div class="lnode-tick">✓</div>' : '';
  const premCrown  = unit.premium ? '<div class="lnode-crown">👑</div>' : '';
  return `<div class="lnode-wrap">
    <div class="lnode ${cls}" onclick="${action}" title="${title}" role="button" aria-label="${title}">
      ${l.icon}${tickMark}${premCrown}
    </div>
    <div class="lnode-lbl">${title}</div>
    <div class="lnode-xp">+${l.xp} XP</div>
  </div>`;
}

// ─── GRAMMAR QUIZ REGISTRY ────────────────────────────────
// Stores quiz data keyed by gram id so onclick never embeds raw JSON in HTML
// (raw JSON breaks on apostrophes: don't, I'm, she's, etc.)
const _gramQuizRegistry = {};

function _launchGramQuiz(gramId) {
  const entry = _gramQuizRegistry[gramId];
  if (!entry) return;
  startQuizFromData(entry.title, entry.quiz, 15, true);
}
window._launchGramQuiz = _launchGramQuiz;

// ─── GRAMMAR LAB ──────────────────────────────────────────
let gramCatFilter = 'all';

function renderGram() {
  const cats = ['all', ...new Set(GRAM.map(g => g.cat))];
  const el   = document.getElementById('gramCats');
  if (!el) return;
  el.innerHTML = cats.map(c =>
    `<button class="gram-chip ${c === 'all' ? 'on' : ''}" onclick="setGramCat('${c}',this)">
      ${c === 'all' ? (currentLang === 'pt' ? '📚 Todos' : '📚 All') : c}
    </button>`
  ).join('');
  filterGram();
}

function setGramCat(cat, btn) {
  gramCatFilter = cat;
  document.querySelectorAll('.gram-chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
  filterGram();
}

function filterGram() {
  const q   = (document.getElementById('gramSrch')?.value || '').toLowerCase();
  const f   = GRAM.filter(g => {
    const mc = gramCatFilter === 'all' || g.cat === gramCatFilter;
    const ms = !q || g.title.toLowerCase().includes(q) || g.sub.toLowerCase().includes(q) || g.uses.some(u => u.toLowerCase().includes(q));
    return mc && ms;
  });
  const list = document.getElementById('gramList');
  if (!list) return;
  list.innerHTML = f.length
    ? f.map(g => gramCard(g)).join('')
    : `<div class="srch-empty">${currentLang === 'pt' ? 'Sem resultados 🤷' : 'No results 🤷'}</div>`;
  // Update grammar reads stat
  const u = getCU();
  if (u) { u.gramR = (u.gramR || 0) + 1; saveCU(u); }
}

function gramCard(g) {
  // Register quiz data safely — avoids apostrophes breaking inline onclick HTML
  _gramQuizRegistry[g.id] = { title: g.title, quiz: g.quiz };
  const usesHTML = g.uses.map(u => `<div class="gram-use-item">→ ${u}</div>`).join('');
  const exHTML   = g.examples.map(e =>
    `<div class="gram-ex">
      <div class="gram-ex-en">🇬🇧 ${e.en}</div>
      <div class="gram-ex-pt">🇲🇿 ${e.pt}</div>
    </div>`
  ).join('');
  const sigHTML  = g.signals.map(s => `<span class="gram-sig">${s}</span>`).join('');
  const mistHTML = g.mistakes.map(m =>
    `<div class="gram-mistake">
      <div class="gram-wrong">❌ ${m.w}</div>
      <div class="gram-right">✅ ${m.r}</div>
    </div>`
  ).join('');
  return `<div class="gram-card" id="gc-${g.id}">
    <div class="gc-hdr" onclick="toggleGC('${g.id}')">
      <div class="gc-icon">${g.icon}</div>
      <div class="gc-meta">
        <div class="gc-title">${g.title}</div>
        <div class="gc-sub">
          ${g.sub}
          <span class="gc-cat-badge" style="background:${g.cc}22;color:${g.cc}">${g.cat}</span>
        </div>
      </div>
      <div class="gc-arrow" id="gca-${g.id}">›</div>
    </div>
    <div class="gc-body" id="gcb-${g.id}" style="display:none">
      <div class="gram-rtitle">📐 ${currentLang === 'pt' ? 'Estrutura' : 'Structure'}</div>
      <div class="gram-formula">${g.formula}</div>
      <div class="gram-rtitle">✅ ${currentLang === 'pt' ? 'Usos' : 'Uses'}</div>
      <div class="gram-uses">${usesHTML}</div>
      <div class="gram-rtitle">💬 ${currentLang === 'pt' ? 'Exemplos' : 'Examples'}</div>
      <div class="gram-examples">${exHTML}</div>
      <div class="gram-rtitle">🏷️ ${currentLang === 'pt' ? 'Palavras-Chave' : 'Signal Words'}</div>
      <div class="gram-sigs">${sigHTML}</div>
      <div class="gram-tip">${g.tip}</div>
      <div class="gram-rtitle">⚠️ ${currentLang === 'pt' ? 'Erros Comuns' : 'Common Mistakes'}</div>
      <div class="gram-mistakes">${mistHTML}</div>
      <button class="gram-quiz-btn" onclick="_launchGramQuiz('${g.id}')">
        🎯 ${currentLang === 'pt' ? 'Praticar com Quiz' : 'Practice Quiz'} (+15 XP)
      </button>
    </div>
  </div>`;
}

function toggleGC(id) {
  SFX.click();
  const body  = document.getElementById('gcb-' + id);
  const arrow = document.getElementById('gca-' + id);
  const isOpen = body.style.display !== 'none';
  body.style.display  = isOpen ? 'none' : 'block';
  arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
}

// ─── PRONUNCIATION LAB ────────────────────────────────────
let pronIdx = 0;
let recognition = null;

function renderPron() {
  renderPairs();
  renderTwisters();
  renderDifficult();
  showPronWord();
  document.getElementById('pronCtr').textContent = `1 / ${PRON_WORDS.length}`;
}

function showPronWord() {
  const pw = PRON_WORDS[pronIdx];
  if (!pw) return;
  const wordEl    = document.getElementById('pronWord');
  const ipaEl     = document.getElementById('pronIpa');
  const meaningEl = document.getElementById('pronMeaning');
  if (wordEl)    { wordEl.style.opacity = 0; setTimeout(() => { wordEl.textContent = pw.w; wordEl.style.opacity = 1; }, 150); }
  if (ipaEl)     ipaEl.textContent = pw.ipa;
  if (meaningEl) meaningEl.textContent = pw.m;
  document.getElementById('pronCtr').textContent = `${pronIdx + 1} / ${PRON_WORDS.length}`;
}

function nextPW() {
  SFX.click();
  pronIdx = (pronIdx + 1) % PRON_WORDS.length;
  showPronWord();
}

function prevPW() {
  SFX.click();
  pronIdx = (pronIdx - 1 + PRON_WORDS.length) % PRON_WORDS.length;
  showPronWord();
}

function hearWord() {
  SFX.click();
  const pw = PRON_WORDS[pronIdx];
  if (!pw || !window.speechSynthesis) return;
  const utt = new SpeechSynthesisUtterance(pw.w);
  utt.lang = 'en-US'; utt.rate = 1.0;
  window.speechSynthesis.speak(utt);
  trackPronPractice();
}

function hearWordSlow() {
  SFX.click();
  const pw = PRON_WORDS[pronIdx];
  if (!pw || !window.speechSynthesis) return;
  const utt = new SpeechSynthesisUtterance(pw.w);
  utt.lang = 'en-US'; utt.rate = 0.5;
  window.speechSynthesis.speak(utt);
  trackPronPractice();
}

function trackPronPractice() {
  const u = getCU();
  if (u) { u.pronP = (u.pronP || 0) + 1; saveCU(u); checkAchs(); }
}

function toggleRecord() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById('speechWarn').style.display = 'block'; return;
  }
  const btn = document.getElementById('recBtn');
  if (recognition && recognition._active) {
    recognition.stop(); return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition._active = true;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  btn.textContent = '⏹ Stop'; btn.style.background = 'var(--red)';

  recognition.onresult = e => {
    const spoken = e.results[0][0].transcript.trim().toLowerCase();
    const target = PRON_WORDS[pronIdx].w.toLowerCase();
    const fb     = document.getElementById('pronFb');
    recognition._active = false;
    btn.textContent = '🎤 Record'; btn.style.background = '';
    if (spoken === target || target.includes(spoken) || spoken.includes(target)) {
      fb.textContent  = `✅ "${e.results[0][0].transcript}" — ${currentLang === 'pt' ? 'Excelente pronúncia!' : 'Excellent pronunciation!'}`;
      fb.className    = 'pron-fb ok'; SFX.correct(); spawnEmojis('⭐', 3);
    } else {
      fb.textContent  = `🎤 ${currentLang === 'pt' ? 'Disseste' : 'You said'}: "${e.results[0][0].transcript}" · ${currentLang === 'pt' ? 'Tenta novamente!' : 'Try again!'}`;
      fb.className    = 'pron-fb no'; SFX.wrong();
    }
  };

  recognition.onerror = () => {
    recognition._active = false;
    btn.textContent = '🎤 Record'; btn.style.background = '';
  };
  recognition.onend = () => {
    recognition._active = false;
    btn.textContent = '🎤 Record'; btn.style.background = '';
  };
  recognition.start();
}

function renderPairs() {
  const el = document.getElementById('pairsList');
  if (!el) return;
  el.innerHTML = MINIMAL_PAIRS.map(p => `
    <div class="pair-card">
      <button class="pair-btn" onclick="speakText('${p.a}')">
        <div class="pair-word">${p.a}</div>
        <div class="pair-ipa">${p.pa}</div>
        <div class="pair-hear">🔊</div>
      </button>
      <div class="pair-vs">VS</div>
      <button class="pair-btn" onclick="speakText('${p.b}')">
        <div class="pair-word">${p.b}</div>
        <div class="pair-ipa">${p.pb}</div>
        <div class="pair-hear">🔊</div>
      </button>
      <div class="pair-note">${p.note}</div>
    </div>`
  ).join('');
}

function renderTwisters() {
  const el = document.getElementById('twistersList');
  if (!el) return;
  el.innerHTML = TONGUE_TWISTERS.map((tw, i) => `
    <div class="twister-card" onclick="speakText('${tw.text.replace(/'/g,"\\'")}')">
      <div class="tw-num">${i + 1}</div>
      <div class="tw-body">
        <div class="tw-text">${tw.text}</div>
        <div class="tw-note">💡 ${tw.note}</div>
      </div>
      <div class="tw-play">▶</div>
    </div>`
  ).join('');
}

function renderDifficult() {
  const el = document.getElementById('diffList');
  if (!el) return;
  el.innerHTML = DIFFICULT_SOUNDS.map(s => `
    <div class="diff-card">
      <div class="diff-sound">${s.sound}</div>
      <div class="diff-eg">${currentLang === 'pt' ? 'Exemplos' : 'Examples'}: <strong>${s.eg}</strong></div>
      <div class="diff-tip">✅ ${s.tip}</div>
      <div class="diff-wrong">⚠️ ${s.wrong}</div>
    </div>`
  ).join('');
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US'; utt.rate = 0.9;
  window.speechSynthesis.speak(utt);
  SFX.click(); trackPronPractice();
}

function showSP(panel, btn) {
  SFX.click();
  document.querySelectorAll('.spanel').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('on'));
  document.getElementById('sp-' + panel).classList.add('on');
  btn.classList.add('on');
}
