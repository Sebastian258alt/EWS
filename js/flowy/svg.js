// ═══════════════════════════════════════════════════════════
//  🐥 flowy/svg.js — Mascot SVG artwork (small + modal size)
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';

  // ── SVG mascot ───────────────────────────────────────────
  const FLOWY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62" width="62" height="62" aria-hidden="true">
  <defs>
    <radialGradient id="flowy-grad" cx="42%" cy="36%" r="62%">
      <stop offset="0%" stop-color="#6ab0ff"/>
      <stop offset="100%" stop-color="#3d7eff"/>
    </radialGradient>
    <radialGradient id="flowy-glow-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3d7eff" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#3d7eff" stop-opacity="0"/>
    </radialGradient>
    <filter id="flowy-soft"><feGaussianBlur stdDeviation="0.7"/></filter>
  </defs>
  <!-- Glow -->
  <circle class="flowy-glow" cx="31" cy="33" r="26" fill="url(#flowy-glow-grad)"/>
  <!-- Body -->
  <ellipse class="flowy-body flowy-core" cx="31" cy="34" rx="19" ry="18" fill="url(#flowy-grad)"/>
  <!-- Wings -->
  <ellipse class="flowy-wing-l" cx="13" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75" transform="rotate(-30 13 37)"/>
  <ellipse class="flowy-wing-r" cx="49" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75" transform="rotate(30 49 37)"/>
  <!-- Belly -->
  <ellipse cx="31" cy="38" rx="10" ry="8" fill="rgba(255,255,255,0.13)"/>
  <!-- Left eye -->
  <ellipse cx="24" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <circle id="flowy-pupil-l" cx="24.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <circle cx="26" cy="29" r="1.1" fill="white"/>
  <ellipse class="flowy-eye-lid" cx="24" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="24px 25px" style="transform:scaleY(0)"/>
  <!-- Right eye -->
  <ellipse cx="38" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <circle id="flowy-pupil-r" cx="38.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <circle cx="40" cy="29" r="1.1" fill="white"/>
  <ellipse class="flowy-eye-lid right" cx="38" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="38px 25px" style="transform:scaleY(0)"/>
  <!-- Beak -->
  <ellipse cx="31" cy="38" rx="3.5" ry="2" fill="#ffc93d"/>
  <!-- Expressions -->
  <path id="flowy-smile"  d="M27 39.5 Q31 44 35 39.5" stroke="#1a2a4a" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-frown"  d="M27 43 Q31 39 35 43"     stroke="#1a2a4a" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-brow-l" d="M20 25 Q24 22.5 27 24.5" stroke="#1a2a4a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-brow-r" d="M35 24.5 Q38 22.5 42 25" stroke="#1a2a4a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0"/>
  <!-- Excited open mouth -->
  <ellipse id="flowy-mouth-o" cx="31" cy="40" rx="3" ry="2.5" fill="#1a2a4a" opacity="0"/>
  <!-- Confused brow (one up) -->
  <path id="flowy-brow-c" d="M35 23 Q38 20 42 23" stroke="#1a2a4a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0"/>
  <!-- Love heart eyes overlay -->
  <g id="flowy-hearts" opacity="0">
    <text x="20" y="34" font-size="10" fill="#ff6b9d" text-anchor="middle">♥</text>
    <text x="39" y="34" font-size="10" fill="#ff6b9d" text-anchor="middle">♥</text>
  </g>
  <!-- Sleeping zzz eyes (closed) -->
  <ellipse id="flowy-sleep-l" cx="24" cy="30" rx="5.5" ry="2.5" fill="#4a8fff" opacity="0"/>
  <ellipse id="flowy-sleep-r" cx="38" cy="30" rx="5.5" ry="2.5" fill="#4a8fff" opacity="0"/>
  <!-- Tears -->
  <ellipse class="flowy-tear" id="flowy-tear-l" cx="22" cy="36" rx="1.3" ry="2" fill="#aad4ff" opacity="0"/>
  <ellipse class="flowy-tear" id="flowy-tear-r" cx="40" cy="36" rx="1.3" ry="2" fill="#aad4ff" opacity="0"/>
  <!-- Stars (happy / excited) -->
  <g class="flowy-star" style="--sx:-8px;--sy:-8px;transform-origin:20px 20px">
    <text x="12" y="20" font-size="8" fill="#ffd700">★</text>
  </g>
  <g class="flowy-star" style="--sx:8px;--sy:-10px;transform-origin:42px 18px">
    <text x="38" y="18" font-size="6" fill="#ffd700">✦</text>
  </g>
  <g class="flowy-star" style="--sx:4px;--sy:-6px;transform-origin:50px 24px">
    <text x="46" y="24" font-size="7" fill="#ffec6e">★</text>
  </g>
  <!-- Thinking swirl -->
  <g id="flowy-think-swirl" opacity="0">
    <circle cx="38" cy="14" r="3.5" fill="none" stroke="#7eb0ff" stroke-width="1.5" opacity="0.8"/>
    <circle cx="43" cy="9"  r="2.5" fill="none" stroke="#7eb0ff" stroke-width="1.2" opacity="0.6"/>
    <circle cx="47" cy="5"  r="1.5" fill="#7eb0ff" opacity="0.4"/>
  </g>
  <!-- Antenna -->
  <line x1="31" y1="16" x2="31" y2="10" stroke="#5a9fff" stroke-width="1.5" stroke-linecap="round"/>
  <circle class="flowy-antenna-dot" cx="31" cy="8.5" r="2.2" fill="#7eb0ff"/>
  <circle cx="31" cy="8.5" r="1" fill="white" opacity="0.6"/>
  <!-- Sunglasses (easter egg, hidden by default) -->
  <g id="flowy-shades" opacity="0">
    <rect x="16" y="26" width="13" height="9" rx="4.5" fill="#1a1a2e" stroke="#ffd700" stroke-width="1.2"/>
    <rect x="33" y="26" width="13" height="9" rx="4.5" fill="#1a1a2e" stroke="#ffd700" stroke-width="1.2"/>
    <line x1="29" y1="30.5" x2="33" y2="30.5" stroke="#ffd700" stroke-width="1.2"/>
    <line x1="16" y1="30.5" x2="13" y2="30.5" stroke="#ffd700" stroke-width="1.2"/>
    <line x1="46" y1="30.5" x2="49" y2="30.5" stroke="#ffd700" stroke-width="1.2"/>
  </g>
</svg>`;

  // ── SVG large (modal) ─────────────────────────────────────
  const FLOWY_SVG_LARGE = FLOWY_SVG.replace('width="62" height="62"', 'width="100" height="100"');
  Object.assign(K, { FLOWY_SVG, FLOWY_SVG_LARGE });
  K.loaded['svg'] = true;
}(window.FlowyKit));
