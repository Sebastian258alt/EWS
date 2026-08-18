// ═══════════════════════════════════════════════════════════
//  UI-DASHBOARD.JS — Student dashboard renderer  v4.0
//  English With Sebastian
//  Extracted from ui.js — edit here for dashboard changes.
//  Depends on: UNITS (data.js), window.getCU, window.getLevel,
//              window.t(), window.currentLang, window.SFX
//  Exposes: window.renderStudentDashboard
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

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

}());
