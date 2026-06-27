// ═══════════════════════════════════════════════════════════
//  UI-GRAMMAR.JS — Grammar Lab renderer  v4.0
//  English With Sebastian
//  Extracted from ui.js — edit here for grammar lab changes.
//  Depends on: GRAM_DATA (data.js), window.getCU,
//              window.t(), window.currentLang, window.SFX
//  Exposes: window.renderGram, window.setGramCat,
//           window.filterGram, window.toggleGC
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

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

  window.renderGram  = renderGram;
  window.setGramCat  = setGramCat;
  window.filterGram  = filterGram;
  window.toggleGC    = toggleGC;

}());
