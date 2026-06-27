// ═══════════════════════════════════════════════════════════
//  UI-SOUNDS.JS — Sound / Pronunciation Lab renderer  v4.0
//  English With Sebastian
//  Extracted from ui.js — edit here for sounds tab changes.
//  Depends on: PRON_DATA (data.js), window.getCU, window.saveCU,
//              window.t(), window.currentLang, window.SFX,
//              window.showToast
//  Exposes: window.renderPron, window.showPronWord,
//           window.nextPW, window.prevPW, window.hearWord,
//           window.hearWordSlow, window.trackPronPractice,
//           window.toggleRecord, window.renderPairs,
//           window.renderTwisters, window.renderDifficult,
//           window.speakText, window.showSP
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';


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

  window.renderPron        = renderPron;
  window.showPronWord      = showPronWord;
  window.nextPW            = nextPW;
  window.prevPW            = prevPW;
  window.hearWord          = hearWord;
  window.hearWordSlow      = hearWordSlow;
  window.trackPronPractice = trackPronPractice;
  window.toggleRecord      = toggleRecord;
  window.renderPairs       = renderPairs;
  window.renderTwisters    = renderTwisters;
  window.renderDifficult   = renderDifficult;
  window.speakText         = speakText;
  window.showSP            = showSP;

}());
