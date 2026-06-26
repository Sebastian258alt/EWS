// ═══════════════════════════════════════════════════════════
//  🐥 FLOWY.JS — Floating animated mascot (TURBO EDITION v3.2)
//  EnglishFlow
//  NEW: screen roaming, sad state, 40+ funny messages,
//       emotional reactions for correct/wrong answers,
//       CONTEXT-AWARE TIPS per screen/tab
//  UI layer ONLY. All AI logic stays in chat.js / Gemini.
//  Hooks: goTab(), showTypingIndicator(), hideTypingIndicator()
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── SVG mascot markup ─────────────────────────────────
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
  <circle class="flowy-glow" cx="31" cy="33" r="26" fill="url(#flowy-glow-grad)"/>
  <ellipse class="flowy-body flowy-core" cx="31" cy="34" rx="19" ry="18" fill="url(#flowy-grad)"/>
  <ellipse cx="13" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75" transform="rotate(-30 13 37)"/>
  <ellipse cx="49" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75" transform="rotate(30 49 37)"/>
  <ellipse cx="31" cy="38" rx="10" ry="8" fill="rgba(255,255,255,0.13)"/>
  <ellipse cx="24" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <circle id="flowy-pupil-l" cx="24.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <circle cx="26" cy="29" r="1.1" fill="white"/>
  <ellipse class="flowy-eye-lid" cx="24" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="24px 25px" style="transform:scaleY(0)"/>
  <ellipse cx="38" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <circle id="flowy-pupil-r" cx="38.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <circle cx="40" cy="29" r="1.1" fill="white"/>
  <ellipse class="flowy-eye-lid right" cx="38" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="38px 25px" style="transform:scaleY(0)"/>
  <ellipse cx="31" cy="38" rx="3.5" ry="2" fill="#ffc93d"/>
  <path id="flowy-smile" d="M27 39.5 Q31 44 35 39.5" stroke="#1a2a4a" stroke-width="1.8"
    fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-frown" d="M27 43 Q31 39 35 43" stroke="#1a2a4a" stroke-width="1.8"
    fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-brow-l" d="M20 25 Q24 22.5 27 24.5" stroke="#1a2a4a" stroke-width="1.4"
    fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-brow-r" d="M35 24.5 Q38 22.5 42 25" stroke="#1a2a4a" stroke-width="1.4"
    fill="none" stroke-linecap="round" opacity="0"/>
  <ellipse class="flowy-tear" id="flowy-tear-l" cx="22" cy="36" rx="1.3" ry="2" fill="#aad4ff" opacity="0"/>
  <ellipse class="flowy-tear" id="flowy-tear-r" cx="40" cy="36" rx="1.3" ry="2" fill="#aad4ff" opacity="0"/>
  <g class="flowy-star" style="--sx:-8px;--sy:-8px;transform-origin:20px 20px">
    <text x="12" y="20" font-size="8" fill="#ffd700">★</text>
  </g>
  <g class="flowy-star" style="--sx:8px;--sy:-10px;transform-origin:42px 18px">
    <text x="38" y="18" font-size="6" fill="#ffd700">✦</text>
  </g>
  <g class="flowy-star" style="--sx:4px;--sy:-6px;transform-origin:50px 24px">
    <text x="46" y="24" font-size="7" fill="#ffec6e">★</text>
  </g>
  <g id="flowy-think-swirl" opacity="0">
    <circle cx="38" cy="14" r="3.5" fill="none" stroke="#7eb0ff" stroke-width="1.5" opacity="0.8"/>
    <circle cx="43" cy="9" r="2.5" fill="none" stroke="#7eb0ff" stroke-width="1.2" opacity="0.6"/>
    <circle cx="47" cy="5" r="1.5" fill="#7eb0ff" opacity="0.4"/>
  </g>
  <line x1="31" y1="16" x2="31" y2="10" stroke="#5a9fff" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="31" cy="8.5" r="2.2" fill="#7eb0ff"/>
  <circle cx="31" cy="8.5" r="1" fill="white" opacity="0.6"/>
</svg>`;

  // ── State ────────────────────────────────────────────
  let currentState = 'idle';
  let currentTab   = 'home';
  let bubbleTimer  = null;
  let happyTimer   = null;
  let roamTimer    = null;
  let tipTimer     = null;
  let roaming      = false;

  // ── General message banks ────────────────────────────
  const MSGS = {
    idle: [
      'Psst… need help? 👀',
      'Still here! Tap me 😏',
      'Don\'t leave me hanging… 🥺',
      'HELP. I\'m bored. 😩',
      'Learning is cool. I promise. 🤓',
      'Tap me! I\'m not just decoration! 🎨',
      'Your brain called. It wants XP. 🧠',
      'I believe in you! (tap me) 🤏',
      'Free lesson? Free lesson! 🎁',
      'I\'ve been floating here for ages 😅',
      'Grammar won\'t learn itself 😤',
      'Oi! Oi! Oiii! 👋',
      'One lesson a day keeps failure away 📚',
      '…you gonna tap me or what? 🐥',
      'My wings are tired. Help me. 😂',
    ],
    help: [
      'NEED HELP?? TAP ME!! 🚨',
      'I know the answer. Do you? 😈',
      'Stuck? I\'ve got you! 💪',
      'Click me before you guess wrong 😬',
      'My brain is FULL of answers 🧠✨',
      'I can whisper the answer… 🤫 (jk, tap me)',
      'Don\'t panic! I\'m here! 🆘',
      'S.O.S — Student Overwhelmed? Solved! 😎',
    ],
    happy: [
      'YESSS!! 🎉 You nailed it!',
      'WOW. I\'m impressed! 🌟',
      'That\'s my student!! 🥹',
      'Correct!! Give me a high five ✋',
      'You\'re basically fluent now 😭🔥',
      'BOOM. Easy. 💥',
      'I knew you could do it! 🫶',
      '10/10 no notes 👌',
      'The English gods are pleased 🏆',
      'Chef\'s kiss. Perfecto. 😘✨',
    ],
    sad: [
      'Oops… we\'ll get it next time 😢',
      'Nooo… my heart 💔',
      'That hurt me more than you 😭',
      'It\'s fine. I\'m not crying. 😭 (I am)',
      'Wrong! ...but I still love you 🥺',
      'My disappointment is immeasurable 😔',
      'BRUH 😞 c\'mon!',
      'Errors = learning! (I\'m telling myself that too) 😅',
      'Even Shakespeare made mistakes. Probably. 📜',
      'Deep breath. Try again. I believe in us 🫂',
    ],
    speaking: [
      'Processing big brain thoughts… 🤔',
      'Hang on, consulting my wisdom 🧠',
      'Almost there! Don\'t go anywhere!',
      'Here\'s what I found! 📖',
      'Check this out!',
    ],
    roaming: [
      'Wheeeee!! 🛸',
      'Just flying around! 🐥💨',
      'Don\'t mind me, just vibing ✈️',
      'Zoom zoom! 💨',
      'I\'m FREE!! 🦅',
      'Catch me if you can! 😜',
      'No destination, just vibes 🌈',
      '*makes flying noises* 🚀',
    ],
  };

  // ── Context-aware tips per tab ───────────────────────
  // entry[] = shown once when user arrives on that tab
  // tips[]  = cycled periodically while user stays on tab
  const TAB_TIPS = {
    home: {
      entry: [
        'Welcome back! 🏠 Ready to level up today?',
        'Home sweet home! 🎉 Let\'s get some XP!',
        'Ooh you\'re here! Daily challenge is waiting 👀',
      ],
      tips: [
        'Your streak won\'t protect itself 🔥 Do a lesson!',
        'Daily challenge = free XP 🎁 Don\'t be lazy!',
        'The leaderboard isn\'t going to top itself 🏆',
        'One lesson = happy Flowy. Zero lessons = sad Flowy 🥺',
        '50 XP a day keeps the failure away 💪',
        'Click "Continue learning" — I dare you 😏',
        'Your XP bar is looking… hungry 🍽️',
        'Did you do today\'s challenge? NO?! 😤 GO!',
        'Streaks are like plants 🌱 water them daily!',
        'That "level up" feeling won\'t come alone 🚀',
      ],
    },
    grammar: {
      entry: [
        'Grammar time! 📖 My favourite! (not really 😅)',
        'Ooh grammar lab! Try not to cry 😬',
        'Grammar! The fun never ends… 📝 (it does, I promise)',
      ],
      tips: [
        '"I am" not "I is". Write that down. ✍️',
        'Past simple vs Present perfect? Ask me! 🤯',
        'Articles (a/an/the) — the eternal struggle 😩',
        'Pro tip: read your sentence out loud 🗣️',
        'If it sounds weird, it probably IS weird 👂',
        'Confused? Tap me! I explain things nicely 😇',
        '"Their", "there", "they\'re" — three different words, people! 😤',
        'Third-person "s": she walk❌ she walks✅ 🎯',
        'Conditionals are scary but I believe in you 💪',
        'You\'re doing grammar. That\'s already impressive 👏',
        'Past tense rule: add -ed… unless English disagrees 😂',
        'Modal verbs: can, could, would, should — tap me to learn! 🧠',
      ],
    },
    sounds: {
      entry: [
        'Sound Lab! 🔊 Your ears are about to get educated!',
        'Pronunciation time! Don\'t be scared 😬🎤',
        'Ooh sounds! This is where the REAL magic happens 🎙️',
      ],
      tips: [
        'The "TH" sound: tongue between teeth, not behind! 👅',
        '"Ship" vs "Sheep" — your teacher can hear the difference 😂',
        'Slow practice first, speed comes later 🐌→🐇',
        'Record yourself! It\'s awkward but it works 🎤',
        'The schwa (ə) is in EVERY English word. Sneaky! 🕵️',
        '"Comfortable" = COM-fter-bull. Yes really. 🤯',
        'Stress the RIGHT syllable or people look confused 😅',
        '"W" is NOT a "V"! "Wine" ≠ "Vine" 🍷',
        'Tongue twisters = secret weapon for fluency 🌀',
        'Watch native speakers\' mouths. Creepy? Yes. Helpful? YES. 👄',
        'The "R" sound: American R is wild 🎢 practice daily!',
        '"Colonel" is pronounced "kernel". English is a crime. 🫠',
      ],
    },
    ai: {
      entry: [
        'AI Tutor! 🤖 Ask me ANYTHING — no judgement!',
        'Oh hello! 👋 I\'m ready to answer your questions!',
        'AI mode activated! 🚀 What\'s confusing you today?',
      ],
      tips: [
        'Ask me to explain any grammar rule! 📚',
        'Paste a sentence and ask me to fix it! ✏️',
        'I can quiz you! Just say "Quiz me on past tense" 🎯',
        'Try: "Translate this to formal English" 🎩',
        'Ask me to write an example sentence! 💡',
        'I can help with pronunciation too! 🎤',
        'Stuck on vocabulary? Describe the word, I\'ll find it! 🔍',
        'Ask me: "What\'s the difference between X and Y?" 🤔',
        'I don\'t judge bad grammar. I fix it kindly 😇',
        'Try: "Check my English: [your sentence]" ✅',
        'Ask me anything in Portuguese, I\'ll answer! 🇲🇿',
        'I\'m smarter than autocorrect. Promise. 🧠',
      ],
    },
    profile: {
      entry: [
        'Profile time! 😎 Let\'s check those stats!',
        'Ooh checking yourself out? I respect it 🪞',
        'Your stats are here! Brace yourself 📊',
      ],
      tips: [
        'Those XP points represent real effort! Be proud 💪',
        'Your streak is your commitment meter 🔥 keep it!',
        'Achievements unlock with more lessons — keep going! 🏅',
        'More lessons = more badges to flex on the leaderboard 😏',
        'That accuracy % tells the real story 🎯',
        'Low streak? It resets at midnight ⏰ quick, do a lesson!',
        'Share your stats with friends — flex respectfully 😄',
        'Dark mode or light mode? VERY important life choice 🌓',
        'Disco mode exists and it is spectacular 🕺',
        'Level {n}? You\'re doing better than you think! 🌟',
      ],
    },
    about: {
      entry: [
        'The About page! 🎓 Sebastian built this whole thing!',
        'Learning about the creator? Respect! 🙌',
        'This page is basically a CV. Impressive one though! 📄',
      ],
      tips: [
        'Sebastian has 4+ years of teaching experience 🏆',
        'UEM student AND app creator? Overachiever! 😤',
        'This app was built with love ❤️ and probably no sleep 😴',
        'Mozambique\'s English is about to level up 🇲🇿🚀',
        'Want to reach Sebastian? Hit that contact button! 📬',
        'Fun fact: this mascot (me!) was coded, not drawn 🤯',
        'M-Pesa payments = 100% local tech 🙌 love it!',
        'Translation + Interpretation student AND teacher. Busy! 📚',
      ],
    },
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
    const frown = document.getElementById('flowy-frown');
    const browL = document.getElementById('flowy-brow-l');
    const browR = document.getElementById('flowy-brow-r');
    const tearL = document.getElementById('flowy-tear-l');
    const tearR = document.getElementById('flowy-tear-r');
    const swirl = document.getElementById('flowy-think-swirl');

    if (smile) smile.setAttribute('opacity', state === 'happy'    ? '1' : '0');
    if (frown) frown.setAttribute('opacity', state === 'sad'      ? '1' : '0');
    if (browL) browL.setAttribute('opacity', state === 'sad'      ? '1' : '0');
    if (browR) browR.setAttribute('opacity', state === 'sad'      ? '1' : '0');
    if (tearL) tearL.setAttribute('opacity', state === 'sad'      ? '1' : '0');
    if (tearR) tearR.setAttribute('opacity', state === 'sad'      ? '1' : '0');
    if (swirl) swirl.setAttribute('opacity', state === 'thinking' ? '1' : '0');

    if (state === 'thinking') {
      showBubble('<span class="flowy-think-dot"></span><span class="flowy-think-dot"></span><span class="flowy-think-dot"></span>');
    } else if (state === 'speaking') {
      showBubble(rand(MSGS.speaking));
      scheduleHide(3200);
    } else if (state === 'happy') {
      showBubble(rand(MSGS.happy));
      scheduleHide(3000);
    } else if (state === 'sad') {
      showBubble(rand(MSGS.sad));
      scheduleHide(3500);
    } else if (state === 'roaming') {
      showBubble(rand(MSGS.roaming));
      scheduleHide(2000);
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

  // ── Random helper ────────────────────────────────────
  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ── Context-aware tips ───────────────────────────────
  // Called when the user switches to a new tab.
  function onTabChange(tabId) {
    const prev = currentTab;
    currentTab = tabId || 'home';

    // Clear any pending tip cycle
    clearTimeout(tipTimer);

    const tipData = TAB_TIPS[currentTab];
    if (!tipData) return;

    // Show entry message after a short delay (let page settle)
    const entryDelay = 1200;
    setTimeout(() => {
      if (currentState === 'idle' || currentState === 'roaming') {
        showBubble(rand(tipData.entry));
        scheduleHide(3800);
      }
    }, entryDelay);

    // Start periodic tip cycle for this tab
    scheduleTipCycle();
  }

  // Keeps cycling tips every 20–35s while user stays on the same tab.
  function scheduleTipCycle() {
    clearTimeout(tipTimer);
    tipTimer = setTimeout(function cycle() {
      if (currentState === 'idle') {
        const tipData = TAB_TIPS[currentTab];
        if (tipData && tipData.tips.length) {
          showBubble(rand(tipData.tips));
          scheduleHide(4000);
        }
      }
      // Re-schedule
      tipTimer = setTimeout(cycle, 20000 + Math.random() * 15000);
    }, 20000 + Math.random() * 15000);
  }

  // Hook into the app's goTab() so we detect tab changes automatically.
  function hookTabSystem() {
    const origGoTab = window.goTab;
    if (origGoTab) {
      window.goTab = function (tabId) {
        onTabChange(tabId);
        return origGoTab.apply(this, arguments);
      };
    }

    // Also watch nav buttons directly as a fallback
    document.addEventListener('click', function (e) {
      const navBtn = e.target.closest('[id^="bn-"], [data-tab]');
      if (!navBtn) return;
      // bn-home, bn-grammar, bn-sounds, bn-ai, bn-profile, bn-about
      const id = navBtn.id || '';
      const tab = id.replace('bn-', '') || navBtn.dataset.tab || '';
      if (tab && tab !== currentTab) onTabChange(tab);
    }, { passive: true });
  }

  // ── Screen roaming ───────────────────────────────────
  function getRandomPosition() {
    const margin  = 80;
    const btnSize = 80;
    const maxX = window.innerWidth  - btnSize - margin;
    const maxY = window.innerHeight - btnSize - margin;
    return {
      x: margin + Math.random() * maxX,
      y: margin + Math.random() * maxY,
    };
  }

  function moveTo(x, y) {
    const wrap = document.getElementById('flowy-wrap');
    if (!wrap) return;
    wrap.style.bottom = 'auto';
    wrap.style.right  = 'auto';
    wrap.style.left   = x + 'px';
    wrap.style.top    = y + 'px';
  }

  function roamStep() {
    if (!roaming) return;
    const pos = getRandomPosition();
    setState('roaming');
    moveTo(pos.x, pos.y);

    // Mix roaming + help + current tab tip message while flying
    const tipData = TAB_TIPS[currentTab];
    const pools   = [MSGS.roaming, MSGS.help];
    if (tipData && Math.random() < 0.3) pools.push(tipData.tips);
    const pool = pools[Math.floor(Math.random() * pools.length)];
    clearTimeout(bubbleTimer);
    showBubble(rand(pool));
    scheduleHide(2400);

    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => {
      if (currentState === 'roaming') {
        currentState = 'idle';
        const btn = document.getElementById('flowy-btn');
        if (btn) btn.className = 'state-idle';
      }
    }, 600);

    roamTimer = setTimeout(roamStep, 10000 + Math.random() * 12000);
  }

  function startRoaming() {
    roaming = true;
    roamTimer = setTimeout(roamStep, 14000 + Math.random() * 6000);
  }

  function stopRoaming() {
    roaming = false;
    clearTimeout(roamTimer);
  }

  // ── Idle teaser (fallback when no tab tip fires) ─────
  function scheduleIdleTeaser() {
    setTimeout(function tick() {
      if (currentState === 'idle') {
        // 50% chance of tab tip, 30% help msg, 20% generic idle
        const roll = Math.random();
        const tipData = TAB_TIPS[currentTab];
        if (roll < 0.5 && tipData) {
          showBubble(rand(tipData.tips));
        } else if (roll < 0.8) {
          showBubble(rand(MSGS.help));
        } else {
          showBubble(rand(MSGS.idle));
        }
        scheduleHide(3400);
      }
      setTimeout(tick, 12000 + Math.random() * 8000);
    }, 8000);
  }

  // ── Pupil tracking ───────────────────────────────────
  function trackPupils(e) {
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
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
    setState('happy');
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => setState('idle'), 2000);

    const btn = document.getElementById('bn-ai');
    if (window.goTab && btn) {
      window.goTab('ai', btn);
    } else if (window.goTabFn) {
      window.goTabFn('ai');
    }

    if (!window._chatInitDone && window.initChat) {
      window.initChat();
    }
  }

  function onFlowyHover() {
    if (currentState !== 'idle') return;
    // On hover: show a tip from the current tab 60% of the time
    const tipData = TAB_TIPS[currentTab];
    const roll = Math.random();
    if (roll < 0.6 && tipData) {
      showBubble(rand(tipData.tips));
    } else if (roll < 0.8) {
      showBubble(rand(MSGS.help));
    } else {
      showBubble(rand(MSGS.idle));
    }
    scheduleHide(2800);
  }

  // ── Public: correct / wrong reactions ────────────────
  function triggerCorrect() {
    clearTimeout(happyTimer);
    setState('happy');
    happyTimer = setTimeout(() => setState('idle'), 2500);
  }

  function triggerWrong() {
    clearTimeout(happyTimer);
    setState('sad');
    happyTimer = setTimeout(() => setState('idle'), 3000);
  }

  // ── Auto-detect quiz answer events ───────────────────
  function hookAnswerEvents() {
    ['showCorrect', 'onCorrect', 'markCorrect', 'answerCorrect'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { triggerCorrect(); return orig.apply(this, arguments); };
      }
    });
    ['showWrong', 'onWrong', 'markWrong', 'answerWrong', 'showIncorrect'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { triggerWrong(); return orig.apply(this, arguments); };
      }
    });

    const xppop = document.getElementById('xppop');
    const toast = document.getElementById('toast');
    if (xppop || toast) {
      const obs = new MutationObserver((mutations) => {
        mutations.forEach(m => {
          const text = (m.target.textContent || '').toLowerCase();
          if (m.target.id === 'xppop' && m.target.style.display !== 'none' && text.includes('xp')) {
            triggerCorrect();
          }
          if (m.target.id === 'toast') {
            if (text.includes('correct') || text.includes('✅') || text.includes('🎉')) triggerCorrect();
            else if (text.includes('wrong') || text.includes('❌') || text.includes('incorrect')) triggerWrong();
          }
        });
      });
      if (xppop) obs.observe(xppop, { attributes: true, attributeFilter: ['style'], childList: true, subtree: true });
      if (toast) obs.observe(toast, { attributes: true, attributeFilter: ['style', 'class'], childList: true, subtree: true });
    }

    const feedbackObs = new MutationObserver(() => {
      if (document.querySelector('.feedback-correct, .answer-correct, [data-correct="true"]')) triggerCorrect();
      if (document.querySelector('.feedback-wrong, .answer-wrong, [data-correct="false"]'))    triggerWrong();
    });
    feedbackObs.observe(document.body, { childList: true, subtree: true, attributeFilter: ['class', 'data-correct'] });
  }

  // ── Hook into existing chat.js functions ─────────────
  function hookChatFunctions() {
    const orig_show = window.showTypingIndicator;
    const orig_hide = window.hideTypingIndicator;

    if (orig_show) {
      window.showTypingIndicator = function () {
        setState('thinking');
        return orig_show.apply(this, arguments);
      };
    }
    if (orig_hide) {
      window.hideTypingIndicator = function () {
        const r = orig_hide.apply(this, arguments);
        setState('speaking');
        clearTimeout(happyTimer);
        happyTimer = setTimeout(() => {
          setState('happy');
          setTimeout(() => setState('idle'), 2000);
        }, 1400);
        return r;
      };
    }
  }

  // ── Boot ─────────────────────────────────────────────
  function init() {
    buildFlowy();
    hookChatFunctions();
    hookAnswerEvents();
    hookTabSystem();
    scheduleIdleTeaser();
    scheduleTipCycle();
    startRoaming();

    const authScreen = document.getElementById('screen-auth');
    const appScreen  = document.getElementById('screen-app');

    if (authScreen && appScreen) {
      const obs = new MutationObserver(() => {
        const wrap = document.getElementById('flowy-wrap');
        if (!wrap) return;
        const onAuth = authScreen.classList.contains('on') && !appScreen.classList.contains('on');
        if (onAuth) {
          wrap.style.display = 'none';
          stopRoaming();
          clearTimeout(tipTimer);
        } else {
          wrap.style.display = '';
          if (!roaming) startRoaming();
          scheduleTipCycle();
        }
      });
      obs.observe(authScreen, { attributes: true, attributeFilter: ['class'] });
      obs.observe(appScreen,  { attributes: true, attributeFilter: ['class'] });

      const wrap = document.getElementById('flowy-wrap');
      if (wrap) wrap.style.display = appScreen.classList.contains('on') ? '' : 'none';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    const poll = setInterval(() => {
      if (window.goTab) { clearInterval(poll); init(); }
    }, 80);
    setTimeout(() => { clearInterval(poll); if (!document.getElementById('flowy-wrap')) init(); }, 3000);
  }

  // ── Public API ───────────────────────────────────────
  window.Flowy = {
    setState,
    correct:   triggerCorrect,
    wrong:     triggerWrong,
    say:       function (msg) { showBubble(msg); scheduleHide(3500); },
    setTab:    onTabChange,        // call Flowy.setTab('grammar') manually if needed
    tip:       function () {       // call Flowy.tip() to force a tip for current tab
      const tipData = TAB_TIPS[currentTab];
      if (tipData) { showBubble(rand(tipData.tips)); scheduleHide(4000); }
    },
  };

}());
