// ═══════════════════════════════════════════════════════════
//  🎮 GAME.JS — Word Scramble
//  English With Sebastian v3.0
// ═══════════════════════════════════════════════════════════

let gameData = { active:false, word:'', score:0, combo:0, timer:null, timeLeft:30 };

function openGame() {
  SFX.click();
  document.getElementById('gameModal').classList.add('on');
  gameData = { active:true, word:'', score:0, combo:0, timer:null, timeLeft:30 };
  const scoreLabel = currentLang === 'pt' ? 'Pontos: 0' : 'Score: 0';
  document.getElementById('gameScore').textContent = scoreLabel;
  document.getElementById('gameCombo').textContent = '';
  document.getElementById('gameTimer').className = 'game-timer';
  document.getElementById('gameTimer').textContent = '⏳ 30';
  const inp = document.getElementById('gameInput');
  if (inp) { inp.value = ''; inp.classList.remove('shake'); }
  nextWord();
  startGameTimer();
}

function closeGame() {
  clearInterval(gameData.timer);
  gameData.active = false;
  document.getElementById('gameModal').classList.remove('on');
}

function endGame() {
  if (gameData.timer) clearInterval(gameData.timer);
  gameData.active = false;
  const u = getCU();
  if (u && gameData.score > 0) {
    if (window.Progress) {
      Progress.recordGame(u, { gameId: 'scramble', score: gameData.score });
    } else {
      u.xp += gameData.score;
      u.todayXP = (u.todayXP || 0) + gameData.score;
      if (gameData.score > (u.scrambleScore || 0)) u.scrambleScore = gameData.score;
      saveCU(u);
    }
    checkAchs(); refreshUI();
  }
  document.getElementById('gameModal').classList.remove('on');
  const msg = currentLang === 'pt'
    ? `🎮 Jogo terminado! ${gameData.score} pontos · +${gameData.score} XP!`
    : `🎮 Game over! Score: ${gameData.score} · +${gameData.score} XP!`;
  showToast(msg);
  SFX.gWrong();
}

function nextWord() {
  const words = WORDS_FOR_GAME;
  const entry = words[Math.floor(Math.random() * words.length)];
  gameData.word = entry.w;
  document.getElementById('scrambledWord').textContent = scramble(entry.w);
  document.getElementById('gameHint').textContent = '💡 ' + entry.h;
  document.getElementById('gameInput').value = '';
  document.getElementById('gameInput').focus();
}

function scramble(w) {
  let s = w.split('');
  // Fisher‑Yates shuffle
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  // Ensure it's not identical to original (for length >=2)
  if (s.join('') === w && w.length > 1) {
    [s[0], s[1]] = [s[1], s[0]];
  }
  return s.join('');
}

function startGameTimer() {
  clearInterval(gameData.timer);
  gameData.timeLeft = 30;
  const timerEl = document.getElementById('gameTimer');
  timerEl.className = 'game-timer';
  timerEl.textContent = '⏳ 30';
  gameData.timer = setInterval(() => {
    if (!gameData.active) return;
    gameData.timeLeft--;
    timerEl.textContent = `⏳ ${gameData.timeLeft}`;
    if (gameData.timeLeft <= 10) timerEl.className = 'game-timer urgent';
    if (gameData.timeLeft <= 0) { clearInterval(gameData.timer); endGame(); }
  }, 1000);
}

function checkWord() {
  if (!gameData.active) return;
  const input = document.getElementById('gameInput').value.trim().toUpperCase();
  if (input === gameData.word) {
    SFX.correct();
    gameData.score += 10 + (gameData.combo * 2);
    gameData.combo++;
    const scoreLabel = currentLang === 'pt' ? 'Pontos: ' : 'Score: ';
    document.getElementById('gameScore').textContent = scoreLabel + gameData.score;
    document.getElementById('gameCombo').textContent = gameData.combo > 1
      ? `🔥 ${currentLang === 'pt' ? 'Combo' : 'Combo'} x${gameData.combo}!` : '';
    gameData.timeLeft = Math.min(30, gameData.timeLeft + 5);
    spawnEmojis('⭐', 3);
    nextWord();
  } else {
    SFX.wrong();
    gameData.combo = 0;
    document.getElementById('gameCombo').textContent = '';
    document.getElementById('gameInput').value = '';
    const inp = document.getElementById('gameInput');
    inp.classList.add('shake');
    setTimeout(() => inp.classList.remove('shake'), 500);
  }
}

function skipWord() {
  SFX.click();
  gameData.combo = 0;
  nextWord();
}

// Enter key inside game
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && gameData.active && document.getElementById('gameModal').classList.contains('on')) {
    checkWord();
  }
});

// Close modal when clicking on overlay
document.getElementById('gameModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeGame();
});