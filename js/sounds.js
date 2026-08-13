// ═══════════════════════════════════════════════════════════
//  🔊 SOUNDS.JS — EWS Gamified Audio Engine v2.0
//  English With Sebastian
//
//  Features:
//  • Rich Web Audio API sound effects (Candy Crush / CoC style)
//  • Procedural ambient music loop (classroom + game vibe)
//  • Flowy voice reactions via SpeechSynthesis (wow, ohh, yay…)
//  • Volume control + mute, persisted in localStorage
//  • Replaces the basic SFX object in app.js
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Audio context (lazy init on first user gesture) ──────
  let ctx = null;
  let masterGain = null;
  let sfxGain = null;
  let ambientGain = null;
  let ambientPlaying = false;
  let ambientNodes = [];

  function initCtx() {
    if (ctx) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain  = ctx.createGain();
      sfxGain     = ctx.createGain();
      ambientGain = ctx.createGain();
      sfxGain.connect(masterGain);
      ambientGain.connect(masterGain);
      masterGain.connect(ctx.destination);
      applyVolume();
    } catch(e) { ctx = null; }
  }

  // ── Persistence ──────────────────────────────────────────
  const STORAGE_KEY = 'ews4_audio_prefs';
  function getPrefs() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch(e) { return {}; }
  }
  function savePrefs(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }

  function applyVolume() {
    if (!masterGain) return;
    const p = getPrefs();
    const muted   = p.muted   || false;
    const sfxVol  = p.sfxVol  !== undefined ? p.sfxVol  : 0.8;
    const ambVol  = p.ambVol  !== undefined ? p.ambVol  : 0.18;
    masterGain.gain.setTargetAtTime(muted ? 0 : 1, ctx.currentTime, 0.05);
    sfxGain.gain.setTargetAtTime(sfxVol, ctx.currentTime, 0.05);
    ambientGain.gain.setTargetAtTime(muted ? 0 : ambVol, ctx.currentTime, 0.05);
  }

  // ── Low-level helpers ────────────────────────────────────
  function osc(freq, type, start, dur, vol, dest) {
    if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(dest || sfxGain);
    o.type = type; o.frequency.value = freq;
    const t = ctx.currentTime + start;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.02);
  }

  // Noise burst (for percussive/punch sounds)
  function noise(start, dur, vol, freq, dest) {
    if (!ctx) return;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    const flt = ctx.createBiquadFilter();
    const g   = ctx.createGain();
    src.buffer = buf;
    flt.type = 'bandpass'; flt.frequency.value = freq || 400; flt.Q.value = 0.5;
    src.connect(flt); flt.connect(g); g.connect(dest || sfxGain);
    const t = ctx.currentTime + start;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.start(t); src.stop(t + dur + 0.01);
  }

  // ── SFX Definitions ─────────────────────────────────────

  // 🎯 CORRECT — Candy Crush 3-note sparkle with shimmer
  function sfxCorrect() {
    osc(523,  'triangle', 0,    0.12, 0.5);
    osc(659,  'triangle', 0.08, 0.12, 0.55);
    osc(784,  'triangle', 0.16, 0.18, 0.6);
    osc(1047, 'sine',     0.26, 0.25, 0.4);
    // sparkle shimmer
    [0.1, 0.18, 0.26, 0.34].forEach((t, i) => osc(2093 + i*200, 'sine', t, 0.06, 0.12));
  }

  // ❌ WRONG — Deep thud + sad trombone
  function sfxWrong() {
    osc(220,  'sawtooth', 0,    0.08, 0.5);
    osc(180,  'sawtooth', 0.07, 0.12, 0.5);
    osc(147,  'sawtooth', 0.17, 0.18, 0.45);
    osc(110,  'sawtooth', 0.28, 0.25, 0.4);
    noise(0, 0.06, 0.3, 200);
  }

  // 🏆 LEVEL UP — Fanfare (CoC-style triumphant)
  function sfxLevelUp() {
    // Main fanfare melody
    const m = [
      [523, 0, 0.1], [659, 0.1, 0.1], [784, 0.2, 0.1],
      [880, 0.3, 0.1], [1047, 0.4, 0.35]
    ];
    m.forEach(([f, s, d]) => osc(f, 'triangle', s, d, 0.55));
    // Harmony layer
    const h = [
      [392, 0, 0.1], [494, 0.1, 0.1], [587, 0.2, 0.1],
      [698, 0.3, 0.1], [784, 0.4, 0.35]
    ];
    h.forEach(([f, s, d]) => osc(f, 'sine', s, d, 0.3));
    // Finale shimmer
    for (let i = 0; i < 6; i++) osc(1200 + i*180, 'sine', 0.5 + i*0.04, 0.12, 0.15);
    // Drum kick
    noise(0, 0.12, 0.6, 80);
    noise(0.4, 0.18, 0.5, 80);
  }

  // 🔥 COMBO — Quick ascending ping
  function sfxCombo() {
    osc(659,  'sine', 0,    0.07, 0.4);
    osc(880,  'sine', 0.06, 0.07, 0.45);
    osc(1174, 'sine', 0.12, 0.1,  0.5);
    osc(1397, 'sine', 0.18, 0.12, 0.35);
  }

  // 🏅 ACHIEVEMENT — Nintendo-style jingle
  function sfxAchievement() {
    const notes = [[784,0,.08],[880,.09,.08],[988,.18,.08],[1047,.27,.08],[1175,.36,.08],[1319,.45,.2,.6]];
    notes.forEach(([f, s, d, v=0.45]) => osc(f, 'triangle', s, d, v));
    osc(392, 'sine', 0, 0.55, 0.2);
    for (let i = 0; i < 5; i++) osc(1600+i*120, 'sine', 0.45+i*0.03, 0.07, 0.15);
  }

  // 👆 CLICK — Satisfying plastic pop (CoC button)
  function sfxClick() {
    osc(800,  'square', 0,     0.025, 0.25);
    osc(1200, 'square', 0,     0.018, 0.18);
    osc(600,  'sine',   0.015, 0.03,  0.15);
    noise(0, 0.025, 0.2, 1200);
  }

  // ⭐ XP GAIN — Coin collect (Mario-ish)
  function sfxXP() {
    osc(1047, 'sine', 0,    0.06, 0.35);
    osc(1319, 'sine', 0.05, 0.09, 0.4);
    osc(1568, 'sine', 0.12, 0.06, 0.3);
  }

  // 💀 GAME WRONG — Low buzzer
  function sfxGameWrong() {
    osc(150, 'sawtooth', 0,    0.1, 0.6);
    osc(120, 'sawtooth', 0.08, 0.15, 0.55);
    osc(100, 'square',   0.2,  0.2,  0.45);
    noise(0, 0.08, 0.4, 150);
  }

  // ❤️ HEART LOSS — Descending drama
  function sfxHeartLoss() {
    osc(440, 'sawtooth', 0,    0.08, 0.4);
    osc(370, 'sawtooth', 0.07, 0.1,  0.4);
    osc(311, 'sawtooth', 0.16, 0.15, 0.45);
    osc(262, 'sine',     0.28, 0.2,  0.35);
    noise(0, 0.06, 0.35, 250);
  }

  // 🔔 STREAK — Bell chime
  function sfxStreak() {
    osc(1047, 'sine', 0,    0.3,  0.5);
    osc(1319, 'sine', 0.02, 0.25, 0.35);
    osc(1568, 'sine', 0.04, 0.2,  0.25);
    osc(2093, 'sine', 0.06, 0.15, 0.15);
  }

  // 🎲 GAME START — Drum roll + reveal
  function sfxGameStart() {
    for (let i = 0; i < 8; i++) noise(i * 0.06, 0.04, 0.3 + i*0.04, 200);
    osc(523,  'triangle', 0.52, 0.08, 0.4);
    osc(659,  'triangle', 0.60, 0.08, 0.45);
    osc(784,  'triangle', 0.68, 0.08, 0.5);
    osc(1047, 'triangle', 0.76, 0.3,  0.6);
  }

  // 🎉 PERFECT — Candy Crush special explosion
  function sfxPerfect() {
    sfxLevelUp();
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        osc(800 + i*150, 'sine', i*0.04, 0.1, 0.2);
      }
    }, 200);
  }

  // 📚 LESSON COMPLETE — Warm resolution
  function sfxLessonComplete() {
    const chord = [523, 659, 784, 1047];
    chord.forEach((f, i) => osc(f, 'triangle', i*0.04, 0.5, 0.35));
    osc(1568, 'sine', 0.3, 0.4, 0.25);
    for (let i = 0; i < 5; i++) osc(1200+i*200, 'sine', 0.4+i*0.05, 0.1, 0.18);
  }

  // 🌊 WHOOSH — Tab navigation
  function sfxWhoosh() {
    const start = ctx.currentTime;
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.18, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i/d.length);
    const src = ctx.createBufferSource();
    const flt = ctx.createBiquadFilter();
    const g   = ctx.createGain();
    src.buffer = buf;
    flt.type = 'highpass'; flt.frequency.value = 800;
    src.connect(flt); flt.connect(g); g.connect(sfxGain);
    g.gain.setValueAtTime(0.25, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
    src.start(start);
    osc(300, 'sine', 0, 0.15, 0.1);
    osc(600, 'sine', 0.05, 0.1, 0.08);
  }

  // ── Ambient music engine ─────────────────────────────────
  // Procedural classroom-meets-game ambient loop
  // Inspired by Candy Crush / Clash of Clans background music
  // Uses Web Audio: simple arpeggios + pad + subtle rhythm

  const AMBIENT_BPM = 90;
  const AMBIENT_BEAT = 60 / AMBIENT_BPM;

  // C Major pentatonic scale (friendly, happy)
  const SCALE = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];

  function startAmbient() {
    if (!ctx || ambientPlaying) return;
    ambientPlaying = true;
    scheduleAmbient();
  }

  function stopAmbient() {
    ambientPlaying = false;
    ambientNodes.forEach(n => { try { n.stop(); } catch(e) {} });
    ambientNodes = [];
  }

  let ambientStep = 0;
  let ambientTimer = null;

  // Arpeggio patterns (indices into SCALE)
  const PATTERNS = [
    [0,2,4,7, 1,3,5,7], // C-E-G-C ascending playful
    [4,2,0,2, 4,5,4,2], // wave pattern
    [0,4,7,4, 0,2,4,2], // jump pattern (CoC vibe)
  ];
  let patternIdx = 0;
  let noteCount = 0;

  function scheduleAmbient() {
    if (!ambientPlaying || !ctx) return;

    const beat = AMBIENT_BEAT;
    const now  = ctx.currentTime;
    const pat  = PATTERNS[patternIdx];
    const noteIdx = pat[ambientStep % pat.length];
    const freq = SCALE[noteIdx];

    // Main melodic note (soft marimba-ish via triangle)
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const t = now;
    o.type = 'triangle';
    o.frequency.setValueAtTime(freq, t);
    o.connect(g); g.connect(ambientGain);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.35, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + beat * 0.8);
    o.start(t); o.stop(t + beat);
    ambientNodes.push(o);

    // Harmony note (fifth above, quieter)
    if (ambientStep % 2 === 0) {
      const freq2 = freq * 1.5;
      const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
      o2.type = 'sine'; o2.frequency.value = freq2;
      o2.connect(g2); g2.connect(ambientGain);
      g2.gain.setValueAtTime(0, t);
      g2.gain.linearRampToValueAtTime(0.12, t + 0.03);
      g2.gain.exponentialRampToValueAtTime(0.0001, t + beat * 0.6);
      o2.start(t); o2.stop(t + beat);
      ambientNodes.push(o2);
    }

    // Pad chord every 8 beats (lush background warmth)
    if (ambientStep % 8 === 0) {
      [1, 1.25, 1.5].forEach((ratio, i) => {
        const op = ctx.createOscillator(); const gp = ctx.createGain();
        op.type = 'sine'; op.frequency.value = SCALE[0] * 0.5 * ratio;
        op.connect(gp); gp.connect(ambientGain);
        gp.gain.setValueAtTime(0, t);
        gp.gain.linearRampToValueAtTime(0.08, t + 0.1);
        gp.gain.exponentialRampToValueAtTime(0.0001, t + beat * 7);
        op.start(t); op.stop(t + beat * 8);
        ambientNodes.push(op);
      });
    }

    // Light rhythmic tick on beats (hi-hat vibe)
    if (ambientStep % 2 === 0) noise(0, 0.03, 0.08, 6000, ambientGain);

    // Bass kick on beat 1 and 3
    if (ambientStep % 4 === 0) {
      const kb = ctx.createOscillator(); const kg = ctx.createGain();
      kb.type = 'sine'; kb.frequency.setValueAtTime(120, now); kb.frequency.exponentialRampToValueAtTime(40, now + 0.12);
      kb.connect(kg); kg.connect(ambientGain);
      kg.gain.setValueAtTime(0.4, now); kg.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      kb.start(now); kb.stop(now + 0.2);
      ambientNodes.push(kb);
    }

    ambientStep++;
    noteCount++;

    // Rotate pattern every 16 notes for variety
    if (noteCount % 16 === 0) {
      patternIdx = (patternIdx + 1) % PATTERNS.length;
    }

    // Keep array lean — remove stopped nodes
    if (ambientNodes.length > 40) ambientNodes = ambientNodes.slice(-20);

    ambientTimer = setTimeout(scheduleAmbient, beat * 1000 - 10);
  }

  // ── Flowy Voice Reactions ────────────────────────────────
  // Uses SpeechSynthesis with a fun energetic voice
  // Short emotional exclamations only (wow, ohh, yay, etc.)

  let voiceReady = false;
  let flowyVoice = null;
  let lastReaction = 0;
  const REACTION_COOLDOWN = 3000; // min 3s between voice reactions

  function initVoice() {
    if (!window.speechSynthesis) return;
    // Wait for voices to load
    const load = () => {
      const voices = window.speechSynthesis.getVoices();
      // Prefer fun/child-like voices: Google UK English Female, Samantha, etc.
      const preferred = ['Google UK English Female', 'Samantha', 'Karen', 'Moira',
                         'Google US English', 'Microsoft Zira', 'Alex'];
      flowyVoice = voices.find(v => preferred.some(p => v.name.includes(p)))
                || voices.find(v => v.lang.startsWith('en'))
                || voices[0]
                || null;
      voiceReady = true;
    };
    if (window.speechSynthesis.getVoices().length > 0) load();
    else window.speechSynthesis.addEventListener('voiceschanged', load);
  }

  // Reaction banks — short, punchy, expressive
  const REACTIONS = {
    correct: [
      'Yesss!', 'Wohoo!', 'Amazing!', 'Oh yeah!', 'Nailed it!',
      'Boom!', 'Correct!', 'Fantastic!', 'You got it!', 'Oh wow!',
      'Incredible!', 'Yes yes yes!', 'Perfect!',
    ],
    wrong: [
      'Ohh!', 'Oops!', 'So close!', 'Hmm!', 'Oh no!',
      'Try again!', 'Not quite!', 'Ohhhh!', 'Aw!',
    ],
    levelUp: [
      'Level up! Wohoo!', 'Oh my! Level up!', 'Yeaaah! New level!',
      'Amazing! You leveled up!', 'Wow wow wow! Level up!',
    ],
    combo: [
      'Combo!', 'On fire!', 'Keep going!', 'Yes yes!', 'Unstoppable!',
    ],
    achievement: [
      'Oh wow! Achievement!', 'Incredible! Badge unlocked!',
      'You did it! Amazing!', 'Legendary!',
    ],
    streak: [
      'Streak! Awesome!', 'Keep the streak alive!', 'Oh yeah! Streak!',
    ],
    perfect: [
      'Perfect score! Oh my goodness!', 'One hundred percent! Wohoo!',
      'Absolutely perfect! Yes!',
    ],
  };

  function flowySpeak(text, pitch = 1.4, rate = 1.1) {
    if (!voiceReady || !window.speechSynthesis) return;
    const p = getPrefs();
    if (p.muted || p.voiceMuted) return;
    const now = Date.now();
    if (now - lastReaction < REACTION_COOLDOWN) return;
    lastReaction = now;

    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    if (flowyVoice) utt.voice = flowyVoice;
    utt.pitch = pitch;
    utt.rate  = rate;
    utt.volume = p.voiceVol !== undefined ? p.voiceVol : 0.85;
    utt.lang  = 'en-US';
    window.speechSynthesis.speak(utt);
  }

  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function flowyReact(type) {
    flowySpeak(rand(REACTIONS[type] || REACTIONS.correct));
  }

  // ── Public SFX API (replaces app.js SFX object) ─────────
  function withCtx(fn) {
    return function() {
      initCtx();
      if (!ctx) return;
      try { fn.apply(this, arguments); } catch(e) {}
    };
  }

  const SFX = {
    correct:        withCtx(sfxCorrect),
    wrong:          withCtx(sfxWrong),
    levelUp:        withCtx(sfxLevelUp),
    combo:          withCtx(sfxCombo),
    ach:            withCtx(sfxAchievement),
    click:          withCtx(sfxClick),
    xp:             withCtx(sfxXP),
    gWrong:         withCtx(sfxGameWrong),
    hLoss:          withCtx(sfxHeartLoss),
    streak:         withCtx(sfxStreak),
    gameStart:      withCtx(sfxGameStart),
    perfect:        withCtx(sfxPerfect),
    lessonComplete: withCtx(sfxLessonComplete),
    whoosh:         withCtx(sfxWhoosh),
  };

  // ── Bootstrap ────────────────────────────────────────────
  // Replace the global SFX object from app.js
  window.SFX = SFX;

  // Expose Flowy reaction API
  window.FlowyReact = flowyReact;
  window.FlowySpeak = flowySpeak;

  // Expose audio controls — consumed by the Settings tab (js/settings.js).
  // All setters persist to localStorage via savePrefs() AND apply the
  // change live (no floating panel needed anymore — everything lives in
  // Settings ▸ Sound & Music now).
  window.EWSAudio = {
    startAmbient, stopAmbient,
    getPrefs, savePrefs,
    mute:   () => { const p = getPrefs(); p.muted = true;  savePrefs(p); applyVolume(); },
    unmute: () => { const p = getPrefs(); p.muted = false; savePrefs(p); applyVolume(); },
    setMuted: (on) => {
      initCtx();
      const p = getPrefs(); p.muted = !!on; savePrefs(p); applyVolume();
    },
    setVoiceMuted: (on) => {
      const p = getPrefs(); p.voiceMuted = !!on; savePrefs(p);
    },
    setAmbientOn: (on) => {
      initCtx();
      const p = getPrefs(); p.ambientOff = !on; savePrefs(p);
      if (p.ambientOff) stopAmbient(); else startAmbient();
    },
    setSfxVolume: (pct) => {
      initCtx();
      const p = getPrefs(); p.sfxVol = Math.max(0, Math.min(100, pct)) / 100; savePrefs(p); applyVolume();
    },
    setAmbientVolume: (pct) => {
      initCtx();
      const p = getPrefs(); p.ambVol = Math.max(0, Math.min(100, pct)) / 100; savePrefs(p); applyVolume();
    },
    setVoiceVolume: (pct) => {
      const p = getPrefs(); p.voiceVol = Math.max(0, Math.min(100, pct)) / 100; savePrefs(p);
    },
  };

  // Init voice on load
  initVoice();

  // Start ambient when user first interacts (browser autoplay policy)
  function onFirstInteraction() {
    initCtx();
    const p = getPrefs();
    if (!p.ambientOff) startAmbient();
    document.removeEventListener('click', onFirstInteraction);
    document.removeEventListener('keydown', onFirstInteraction);
    document.removeEventListener('touchstart', onFirstInteraction);
  }
  document.addEventListener('click',      onFirstInteraction);
  document.addEventListener('keydown',    onFirstInteraction);
  document.addEventListener('touchstart', onFirstInteraction);

}());

// ── Type-specific confirm sounds (injected by gamification v3.4) ─────────
(function() {
  function withCtxSafe(fn) {
    return function() {
      if (!window.SFX) return;
      try { fn.apply(this, arguments); } catch(e) {}
    };
  }

  // We hook into the existing audio context via SFX internals
  // Since ctx is private, we use AudioContext directly
  let _ctx = null;
  function gc() {
    if (_ctx) return _ctx;
    try { _ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    return _ctx;
  }
  function tone(freq, type, start, dur, vol) {
    const c = gc(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = type; o.frequency.value = freq;
    const t = c.currentTime + start;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol * 0.4, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.02);
  }

  const TYPE_SFX = {
    drop:     () => { tone(880,'triangle',0,.08,.6); tone(1108,'triangle',.07,.08,.5); },
    fill:     () => { tone(1174,'sine',0,.05,.5); tone(1480,'sine',.04,.05,.45); },
    match:    () => { tone(659,'triangle',0,.06,.4); tone(784,'triangle',.05,.06,.4); tone(988,'triangle',.10,.07,.45); },
    reorder:  () => { [0,.05,.10,.15].forEach((s,i)=>tone(523+i*80,'triangle',s,.06,.35)); },
    spell:    () => { tone(1047,'sine',0,.06,.4); tone(1319,'sine',.05,.06,.45); tone(1568,'sine',.10,.08,.5); },
    speed:    () => { tone(1568,'square',0,.04,.3); tone(1976,'square',.03,.04,.3); tone(2093,'square',.06,.05,.35); },
    emoji:    () => { tone(784,'triangle',0,.07,.4); tone(1047,'triangle',.06,.07,.45); },
    listen:   () => { tone(523,'sine',0,.04,.35); tone(659,'sine',.04,.04,.35); tone(784,'sine',.08,.06,.4); tone(1047,'sine',.13,.08,.3); },
    truefalse:() => { tone(880,'triangle',0,.06,.4); tone(1108,'sine',.05,.08,.5); },
    imgword:  () => { tone(659,'triangle',0,.05,.35); tone(880,'triangle',.04,.05,.4); tone(1108,'triangle',.08,.07,.45); },
  };

  window.SFX_TYPE = function(type) {
    const fn = TYPE_SFX[type];
    if (fn) try { fn(); } catch(e) {}
  };
}());
