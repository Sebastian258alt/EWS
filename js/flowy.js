// ═══════════════════════════════════════════════════════════
//  🐥 FLOWY.JS — Floating animated mascot for EWS
//  UI layer ONLY. All AI logic stays in chat.js / Gemini.
//  Hooks into existing: goTab(), showTypingIndicator(),
//                       hideTypingIndicator(), addMessage()
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── SVG mascot markup ─────────────────────────────────
  // Original design: round creature, two eyes, small beak/mouth,
  // wing-fins, glowing aura ring. Purely decorative, no brand copy.
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
    <filter id="flowy-soft">
      <feGaussianBlur stdDeviation="0.7"/>
    </filter>
  </defs>

  <!-- Outer glow ring -->
  <circle class="flowy-glow" cx="31" cy="33" r="26" fill="url(#flowy-glow-grad)"/>

  <!-- Body -->
  <ellipse class="flowy-body flowy-core" cx="31" cy="34" rx="19" ry="18" fill="url(#flowy-grad)"/>

  <!-- Wing left -->
  <ellipse cx="13" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75"
    transform="rotate(-30 13 37)"/>
  <!-- Wing right -->
  <ellipse cx="49" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75"
    transform="rotate(30 49 37)"/>

  <!-- Belly highlight -->
  <ellipse cx="31" cy="38" rx="10" ry="8" fill="rgba(255,255,255,0.13)"/>

  <!-- Eye white left -->
  <ellipse cx="24" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <!-- Pupil left -->
  <circle id="flowy-pupil-l" cx="24.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <!-- Shine left -->
  <circle cx="26" cy="29" r="1.1" fill="white"/>
  <!-- Eyelid left (for blink) -->
  <ellipse class="flowy-eye-lid" cx="24" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="24px 25px" style="transform:scaleY(0)"/>

  <!-- Eye white right -->
  <ellipse cx="38" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <!-- Pupil right -->
  <circle id="flowy-pupil-r" cx="38.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <!-- Shine right -->
  <circle cx="40" cy="29" r="1.1" fill="white"/>
  <!-- Eyelid right (for blink) -->
  <ellipse class="flowy-eye-lid right" cx="38" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="38px 25px" style="transform:scaleY(0)"/>

  <!-- Beak -->
  <ellipse cx="31" cy="38" rx="3.5" ry="2" fill="#ffc93d"/>

  <!-- Happy expression: little smile arc (shown in happy state via JS) -->
  <path id="flowy-smile" d="M27.5 39.5 Q31 43 34.5 39.5" stroke="#1a2a4a" stroke-width="1.5"
    fill="none" stroke-linecap="round" opacity="0"/>

  <!-- Thinking swirl above head -->
  <g id="flowy-think-swirl" opacity="0">
    <circle cx="38" cy="14" r="3.5" fill="none" stroke="#7eb0ff" stroke-width="1.5" opacity="0.8"/>
    <circle cx="43" cy="9" r="2.5" fill="none" stroke="#7eb0ff" stroke-width="1.2" opacity="0.6"/>
    <circle cx="47" cy="5" r="1.5" fill="#7eb0ff" opacity="0.4"/>
  </g>

  <!-- Antenna -->
  <line x1="31" y1="16" x2="31" y2="10" stroke="#5a9fff" stroke-width="1.5"
    stroke-linecap="round"/>
  <circle cx="31" cy="8.5" r="2.2" fill="#7eb0ff"/>
  <circle cx="31" cy="8.5" r="1" fill="white" opacity="0.6"/>
</svg>`;

  // ── State ────────────────────────────────────────────
  let currentState = 'idle';
  let bubbleTimer = null;
  let happyTimer = null;

  const BUBBLE_MESSAGES = {
    idle:     ['Ask me anything! 💬', 'Need help? Tap me!', 'English made fun 🎉'],
    happy:    ['Great chat! 😄', 'You\'re awesome! 🌟', 'Keep it up! 🚀'],
    thinking: null, // handled separately (dots)
    speaking: ['Here\'s what I found…', 'Check this out!'],
  };

  // ── Build DOM ────────────────────────────────────────
  function buildFlowy() {
    if (document.getElementById('flowy-wrap')) return;

    const wrap = document.createElement('div');
    wrap.id = 'flowy-wrap';
    wrap.setAttribute('role', 'complementary');
    wrap.setAttribute('aria-label', 'Flowy AI assistant');

    const bubble = document.createElement('div');
    bubble.id = 'flowy-bubble';

    const btn = document.createElement('button');
    btn.id = 'flowy-btn';
    btn.className = 'state-idle';
    btn.setAttribute('aria-label', 'Open AI Tutor');
    btn.innerHTML = FLOWY_SVG;

    btn.addEventListener('click', onFlowyClick);
    btn.addEventListener('mouseenter', onFlowyHover);

    wrap.appendChild(bubble);
    wrap.appendChild(btn);
    document.body.appendChild(wrap);

    // Pupil tracking on desktop
    document.addEventListener('mousemove', trackPupils, { passive: true });
  }

  // ── State machine ────────────────────────────────────
  function setState(state) {
    if (currentState === state) return;
    currentState = state;
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;
    btn.className = 'state-' + state;

    const smile = document.getElementById('flowy-smile');
    const swirl = document.getElementById('flowy-think-swirl');
    if (smile) smile.setAttribute('opacity', state === 'happy' ? '1' : '0');
    if (swirl) swirl.setAttribute('opacity', state === 'thinking' ? '1' : '0');

    // Sync bubble
    if (state === 'thinking') {
      showBubble('<span class="flowy-think-dot"></span><span class="flowy-think-dot"></span><span class="flowy-think-dot"></span>');
    } else if (state === 'speaking') {
      const msgs = BUBBLE_MESSAGES.speaking;
      showBubble(msgs[Math.floor(Math.random() * msgs.length)]);
      scheduleHide(3200);
    } else if (state === 'happy') {
      const msgs = BUBBLE_MESSAGES.happy;
      showBubble(msgs[Math.floor(Math.random() * msgs.length)]);
      scheduleHide(2800);
    } else {
      hideBubble();
    }
  }

  // ── Bubble helpers ───────────────────────────────────
  function showBubble(html) {
    clearTimeout(bubbleTimer);
    const el = document.getElementById('flowy-bubble');
    if (!el) return;
    el.innerHTML = html;
    requestAnimationFrame(() => el.classList.add('visible'));
  }
  function hideBubble() {
    const el = document.getElementById('flowy-bubble');
    if (el) el.classList.remove('visible');
  }
  function scheduleHide(ms) {
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(hideBubble, ms);
  }

  // ── Idle teaser ──────────────────────────────────────
  function scheduleIdleTeaser() {
    // Show a random idle message every ~18s when idle
    setTimeout(function tick() {
      if (currentState === 'idle') {
        const msgs = BUBBLE_MESSAGES.idle;
        showBubble(msgs[Math.floor(Math.random() * msgs.length)]);
        scheduleHide(3000);
      }
      setTimeout(tick, 18000 + Math.random() * 8000);
    }, 10000);
  }

  // ── Pupil tracking ───────────────────────────────────
  function trackPupils(e) {
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxOffset = 1.4;
    const ox = dist > 1 ? (dx / dist) * maxOffset : 0;
    const oy = dist > 1 ? (dy / dist) * maxOffset : 0;

    const pl = document.getElementById('flowy-pupil-l');
    const pr = document.getElementById('flowy-pupil-r');
    if (pl) { pl.setAttribute('cx', 24 + ox); pl.setAttribute('cy', 30.5 + oy); }
    if (pr) { pr.setAttribute('cx', 38 + ox); pr.setAttribute('cy', 30.5 + oy); }
  }

  // ── Interaction handlers ─────────────────────────────
  function onFlowyClick() {
    // Trigger happy bounce
    setState('happy');
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => setState('idle'), 1800);

    // Open existing AI Sebastian tab — exact function used by nav button
    const btn = document.getElementById('bn-ai');
    if (window.goTab && btn) {
      window.goTab('ai', btn);
    } else if (window.goTabFn) {
      window.goTabFn('ai');
    }

    // Init chat if not done yet
    if (!window._chatInitDone && window.initChat) {
      window.initChat();
    }
  }

  function onFlowyHover() {
    if (currentState !== 'idle') return;
    // Brief friendly bubble on hover
    const msgs = BUBBLE_MESSAGES.idle;
    showBubble(msgs[Math.floor(Math.random() * msgs.length)]);
    scheduleHide(2200);
  }

  // ── Hook into existing chat.js functions ─────────────
  // We wrap the existing showTypingIndicator / hideTypingIndicator
  // so Flowy reacts WITHOUT touching the AI logic at all.
  function hookChatFunctions() {
    const orig_show = window.showTypingIndicator;
    const orig_hide = window.hideTypingIndicator;
    const orig_add  = window.addMessage;

    if (orig_show) {
      window.showTypingIndicator = function () {
        setState('thinking');
        orig_show.apply(this, arguments);
      };
    }

    if (orig_hide) {
      window.hideTypingIndicator = function () {
        orig_hide.apply(this, arguments);
        setState('speaking');
        // After a moment settle to idle
        clearTimeout(happyTimer);
        happyTimer = setTimeout(() => {
          setState('happy');
          setTimeout(() => setState('idle'), 1800);
        }, 1200);
      };
    }
  }

  // ── Boot ─────────────────────────────────────────────
  function init() {
    buildFlowy();
    hookChatFunctions();
    scheduleIdleTeaser();

    // Hide Flowy when auth screen is visible, show on app screen
    const authScreen  = document.getElementById('screen-auth');
    const appScreen   = document.getElementById('screen-app');

    if (authScreen && appScreen) {
      const obs = new MutationObserver(() => {
        const wrap = document.getElementById('flowy-wrap');
        if (!wrap) return;
        const onAuth = authScreen.classList.contains('on') && !appScreen.classList.contains('on');
        wrap.style.display = onAuth ? 'none' : '';
      });
      obs.observe(authScreen,  { attributes: true, attributeFilter: ['class'] });
      obs.observe(appScreen,   { attributes: true, attributeFilter: ['class'] });
      // Initial state
      const wrap = document.getElementById('flowy-wrap');
      if (wrap) {
        const onApp = appScreen.classList.contains('on');
        wrap.style.display = onApp ? '' : 'none';
      }
    }
  }

  // Wait for DOM + app to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // App scripts load async; wait for goTab to be available
    const poll = setInterval(() => {
      if (window.goTab) { clearInterval(poll); init(); }
    }, 80);
  }

  // Expose for debugging
  window.Flowy = { setState };

}());
