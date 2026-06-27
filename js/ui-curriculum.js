// ═══════════════════════════════════════════════════════════
//  UI-CURRICULUM.JS — Curriculum path renderer  v4.0
//  English With Sebastian
//  Extracted from ui.js — edit here for curriculum changes.
//  Depends on: UNITS (data.js), window.getCU, window.t(),
//              window.currentLang, window.SFX
//  Exposes: window.renderCurriculum, window.setCefrFilter,
//           window._launchGramQuiz
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

// ─── CEFR FILTER ──────────────────────────────────────────
let cefrFilter = 'all';

function setCefrFilter(level) {
  cefrFilter = level;
  renderCurriculum();
}
window.setCefrFilter = setCefrFilter;

function renderCurriculum() {
  const u  = getCU(); if (!u) return;
  const el = document.getElementById('curriculum');
  if (!el) return;
  el.innerHTML = '';

  // ── Filter bar ──────────────────────────────────────────
  const levels = ['all','A0','A1','A2','B1','B2'];
  const labels = { all: currentLang === 'pt' ? 'Todos' : 'All', A0:'A0', A1:'A1', A2:'A2', B1:'B1', B2:'B2' };
  const bar = document.createElement('div');
  bar.className = 'cefr-bar';
  bar.innerHTML = levels.map(lv => `
    <button class="cefr-pill ${cefrFilter === lv ? 'on' : ''} ${lv !== 'all' ? 'cefr-'+lv.toLowerCase() : ''}"
            onclick="setCefrFilter('${lv}')">${labels[lv]}</button>`
  ).join('');
  el.appendChild(bar);

  UNITS.forEach((unit, ui) => {
    // Skip units that don't match the active CEFR filter
    if (cefrFilter !== 'all' && unit.cefr !== cefrFilter) return;

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
  const action     = unit.premium ? 'openPM()' : (isLocked ? '' : `openLesson('${unit.id}','${l.id}')`);
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

  window.renderCurriculum = renderCurriculum;
  window.setCefrFilter    = setCefrFilter;
  window._launchGramQuiz  = _launchGramQuiz;

}());
