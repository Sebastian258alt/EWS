// ═══════════════════════════════════════════════════════════
//  🐥 flowy/build.js — Builds the floating mascot DOM
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // ── Build DOM ─────────────────────────────────────────────
  function buildFlowy() {
    if (document.getElementById('flowy-wrap')) return;

    const wrap = document.createElement('div');
    wrap.id = 'flowy-wrap';
    wrap.setAttribute('role', 'complementary');
    wrap.setAttribute('aria-label', K.isPT() ? 'Assistente Flowy' : 'Flowy AI assistant');
    wrap.classList.add('flowy-entering');
    setTimeout(() => wrap.classList.remove('flowy-entering'), 700);

    const bubble = document.createElement('div');
    bubble.id = 'flowy-bubble';
    const arrow = document.createElement('div');
    arrow.id = 'flowy-bubble-arrow';
    bubble.appendChild(arrow);
    const bubbleText = document.createElement('span');
    bubbleText.id = 'flowy-bubble-text';
    bubble.appendChild(bubbleText);

    const btn = document.createElement('button');
    btn.id = 'flowy-btn';
    btn.className = 'state-idle';
    btn.setAttribute('aria-label', K.isPT() ? 'Abrir Tutor IA' : 'Open AI Tutor');
    btn.innerHTML = K.FLOWY_SVG;
    btn.addEventListener('click', K.onFlowyClick);
    btn.addEventListener('mouseenter', K.onFlowyHover);

    // Mic button — only build if voice is supported and not iOS
    const micBtn = document.createElement('button');
    micBtn.id = 'flowy-mic-btn';
    micBtn.setAttribute('aria-label', K.isPT() ? 'Ativar reconhecimento de voz' : 'Activate voice recognition');
    micBtn.innerHTML = '🎤';
    micBtn.title = K.isPT() ? 'Diz "Flowy" para me invocar!' : 'Say "Flowy" to summon me!';
    if (K.isIOS()) {
      micBtn.classList.add('flowy-mic-unsupported');
      micBtn.title = K.isPT() ? 'Voz não suportada no iOS Safari' : 'Voice not supported on iOS Safari';
    } else {
      micBtn.addEventListener('click', K.toggleWakeListening);
    }

    wrap.appendChild(bubble);
    wrap.appendChild(btn);
    wrap.appendChild(micBtn);
    document.body.appendChild(wrap);

    K.buildModal();

    document.addEventListener('mousemove', K.trackPupils, { passive: true });

    // Auto-start wake listening on non-iOS
    if (!K.isIOS()) {
      setTimeout(() => {
        if (K.supportsWakeWord()) {
          S.alwaysListening = true;
          K.startWakeListening();
        }
      }, 2000);
    }
  }
  Object.assign(K, { buildFlowy });
  K.loaded['build'] = true;
}(window.FlowyKit));
