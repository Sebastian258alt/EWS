// ═══════════════════════════════════════════════════════════
//  🐥 flowy/voice.js — Wake-word voice recognition + shout detection
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  function updateMicLabel() {
    const micBtn = document.getElementById('flowy-mic-btn');
    if (!micBtn) return;
    micBtn.setAttribute('aria-label', K.isPT() ? 'Ativar reconhecimento de voz' : 'Activate voice recognition');
    micBtn.title = K.isPT() ? 'Diz "Flowy" para me invocar!' : 'Say "Flowy" to summon me!';
  }

  // ── Wake word voice recognition ──────────────────────────
  function supportsWakeWord() {
    return ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }

  function toggleWakeListening() {
    if (!supportsWakeWord()) {
      const msg = K.isPT()
        ? '😔 O teu browser não suporta reconhecimento de voz. Tenta o Chrome!'
        : '😔 Your browser doesn\'t support speech recognition. Try Chrome!';
      K.showBubble(msg); K.scheduleHide(4000); return;
    }
    if (S.wakeListening) stopWakeListening();
    else { S.alwaysListening = true; startWakeListening(); }
  }

  function startWakeListening() {
    if (S.wakeListening) return;
    S.wakeListening = true;
    S.reconnectDelay = 1000; // reset backoff
    const micBtn = document.getElementById('flowy-mic-btn');
    if (micBtn) micBtn.classList.add('listening');
    K.showBubble(K.rand(K.msgs('listening'), 'listening'));
    K.scheduleHide(3000);

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    S.wakeRecognition = new SR();
    S.wakeRecognition.continuous     = true;
    S.wakeRecognition.interimResults = true;
    // IMPORTANT FIX: Always use en-US for wake word — "Flowy" is English
    // and en-US ASR recognises it far more reliably than any PT locale.
    S.wakeRecognition.lang           = 'en-US';
    S.wakeRecognition.maxAlternatives = 3;

    S.wakeRecognition.onresult = function(e) {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        for (let a = 0; a < e.results[i].length; a++) {
          const text = e.results[i][a].transcript.toLowerCase().trim();
          if (matchesWakeWord(text)) {
            const isLoud = detectLoudAudio();
            handleWakeWord(isLoud);
            return;
          }
        }
      }
    };

    S.wakeRecognition.onerror = function(e) {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        // User denied mic — stop permanently
        S.wakeListening = false;
        S.alwaysListening = false;
        const micBtn = document.getElementById('flowy-mic-btn');
        if (micBtn) micBtn.classList.remove('listening');
        return;
      }
      // For transient errors, let onend handle restart with backoff
    };

    S.wakeRecognition.onend = function() {
      if (!S.wakeListening) return;
      // Exponential backoff restart (caps at 8s)
      setTimeout(() => {
        if (S.wakeListening) {
          try { S.wakeRecognition.start(); }
          catch(err) { /* already running */ }
        }
      }, S.reconnectDelay);
      S.reconnectDelay = Math.min(S.reconnectDelay * 1.5, 8000);
    };

    try {
      S.wakeRecognition.start();
    } catch(err) {
      S.wakeListening = false;
    }

    startAudioMonitor();
  }

  function stopWakeListening() {
    S.wakeListening = false;
    S.alwaysListening = false;
    stopAudioMonitor();
    if (S.wakeRecognition) {
      try { S.wakeRecognition.stop(); } catch(err) {}
      S.wakeRecognition = null;
    }
    const micBtn = document.getElementById('flowy-mic-btn');
    if (micBtn) micBtn.classList.remove('listening');
    K.showBubble(K.isPT() ? '🎤 Microfone desligado.' : '🎤 Mic off.');
    K.scheduleHide(2000);
  }

  // ── Wake word matching (FIXED: no duplicates) ─────────────
  function matchesWakeWord(text) {
    const patterns = [
      'flowy', 'flowly', 'flow-y', 'flowi',
      'floui', 'flaui', 'flue', 'floue',
      // Portuguese phonetic approximations
      'flói', 'flôi', 'fló',
    ];
    return patterns.some(p => text.includes(p));
  }

  function startAudioMonitor() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(stream => {
        S.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        S.analyserNode = S.audioCtx.createAnalyser();
        S.analyserNode.fftSize = 256;
        S.audioSource = S.audioCtx.createMediaStreamSource(stream);
        S.audioSource.connect(S.analyserNode);
        const data = new Uint8Array(S.analyserNode.frequencyBinCount);
        S.volumeInterval = setInterval(() => {
          S.analyserNode.getByteFrequencyData(data);
          S.lastVolume = data.reduce((a, b) => a + b, 0) / data.length;
        }, 100);
      })
      .catch(() => {});
  }

  function stopAudioMonitor() {
    clearInterval(S.volumeInterval);
    S.volumeInterval = null;
    if (S.audioSource) { try { S.audioSource.disconnect(); } catch(e) {} S.audioSource = null; }
    if (S.audioCtx)    { try { S.audioCtx.close(); } catch(e) {} S.audioCtx = null; }
    S.analyserNode = null;
    S.lastVolume = 0;
  }

  function detectLoudAudio() { return S.lastVolume > 60; }

  function handleWakeWord(isShout) {
    if (S.wakeRecognition) {
      try { S.wakeRecognition.stop(); } catch(err) {}
    }
    setTimeout(() => {
      if (S.wakeListening && S.wakeRecognition) {
        try { S.wakeRecognition.start(); } catch(err) {}
      }
    }, 2500);

    K.wakeUpFromSleep();
    K.resetIdleTimer();

    const greeting = isShout
      ? K.rand(K.msgs('shout'), 'shout')
      : K.rand(K.msgs('wakeWord'), 'wakeWord');
    K.openModal(greeting);

    if (isShout) {
      K.setState('excited');
      K.spawnConfetti(25);
    } else {
      K.setState('happy');
    }
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => K.setState('idle'), 3500);
  }
  Object.assign(K, { startWakeListening, stopWakeListening, supportsWakeWord, toggleWakeListening, updateMicLabel });
  K.loaded['voice'] = true;
}(window.FlowyKit));
