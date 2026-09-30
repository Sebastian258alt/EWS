// ═══════════════════════════════════════════════════════════
//  progress.js — User progress (XP, lessons, streak, quizzes)
//  Syncs with existing ews4_u user records via saveCU / getCU.
// ═══════════════════════════════════════════════════════════

const Progress = (function () {
  const VERSION = 1;
  const MAX_QUIZ_HISTORY = 50;
  const MAX_GAME_HISTORY = 30;

  const KEYS = {
    index:
      typeof EWS_STORAGE_KEYS !== 'undefined' && EWS_STORAGE_KEYS.progressIndex
        ? EWS_STORAGE_KEYS.progressIndex
        : 'ews4_progress',
  };

  let _indexCache = null;

  function todayKey() {
    return new Date().toDateString();
  }

  function yesterdayKey() {
    return new Date(Date.now() - 86400000).toDateString();
  }

  function uid() {
    return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
  }

  function defaultExtended() {
    return {
      version: VERSION,
      quizScores: [],
      gameHistory: [],
    };
  }

  function loadIndex() {
    if (_indexCache !== null) return _indexCache;
    if (typeof loadData === 'function') {
      _indexCache = loadData(KEYS.index) || {};
    } else {
      try {
        _indexCache = JSON.parse(localStorage.getItem(KEYS.index) || '{}');
      } catch {
        _indexCache = {};
      }
    }
    return _indexCache;
  }

  function saveIndex(index) {
    _indexCache = index;
    if (typeof saveData === 'function') {
      saveData(KEYS.index, index);
      return;
    }
    localStorage.setItem(KEYS.index, JSON.stringify(index));
  }

  function ensureUser(user) {
    if (!user) return null;
    if (!Array.isArray(user.done)) user.done = [];
    if (typeof user.xp !== 'number') user.xp = 0;
    if (typeof user.streak !== 'number') user.streak = 0;
    if (typeof user.todayXP !== 'number') user.todayXP = 0;
    if (!Array.isArray(user.quizScores)) user.quizScores = [];
    if (!Array.isArray(user.gameHistory)) user.gameHistory = [];

    const index = loadIndex();
    const ext = index[user.un];
    if (ext) {
      if (!user.quizScores.length && Array.isArray(ext.quizScores)) {
        user.quizScores = ext.quizScores;
      }
      if (!user.gameHistory.length && Array.isArray(ext.gameHistory)) {
        user.gameHistory = ext.gameHistory;
      }
    }
    return user;
  }

  function persistExtended(user) {
    if (!user?.un) return;
    const index = loadIndex();
    index[user.un] = {
      version: VERSION,
      quizScores: user.quizScores || [],
      gameHistory: user.gameHistory || [],
      updatedAt: Date.now(),
    };
    saveIndex(index);
  }

  function save(user) {
    if (!user) return null;
    ensureUser(user);
    if (typeof saveCU === 'function') saveCU(user);
    persistExtended(user);
    return user;
  }

  function get() {
    const u = typeof getCU === 'function' ? getCU() : null;
    return ensureUser(u);
  }

  function touchActivity(user) {
    if (!user) return user;
    ensureUser(user);
    const today = todayKey();
    const yest = yesterdayKey();

    if (user.lastActive !== today) {
      user.streak = user.lastActive === yest ? (user.streak || 0) + 1 : 1;
      user.lastActive = today;
    }
    if (user.todayDate !== today) {
      user.todayXP = 0;
      user.todayDate = today;
      user.dailyChallengeDone = null;
    }
    return user;
  }

  function addXP(user, amount, meta = {}) {
    if (!user || amount <= 0) return { user, earned: 0, prevLevel: null, newLevel: null };
    ensureUser(user);
    touchActivity(user);

    const prevXp = user.xp || 0;
    const prevLevel = typeof getLevel === 'function' ? getLevel(prevXp) : null;

    user.xp = prevXp + amount;
    user.todayXP = (user.todayXP || 0) + amount;

    const newLevel = typeof getLevel === 'function' ? getLevel(user.xp) : null;
    save(user);

    return {
      user,
      earned: amount,
      prevLevel,
      newLevel,
      leveledUp: prevLevel && newLevel ? newLevel.level > prevLevel.level : false,
      meta,
    };
  }

  function isLessonComplete(user, lessonId) {
    return !!user && Array.isArray(user.done) && user.done.includes(lessonId);
  }

  function completeLesson(user, lessonId) {
    if (!user || !lessonId) return false;
    ensureUser(user);
    if (user.done.includes(lessonId)) return false;
    user.done.push(lessonId);
    save(user);
    return true;
  }

  function recordQuiz(user, payload) {
    if (!user) return null;
    ensureUser(user);
    touchActivity(user);

    const {
      source = 'custom',
      lessonId = null,
      unitId = null,
      title = '',
      score = 0,
      total = 0,
      xpEarned = 0,
      perfect = false,
      maxCombo = 0,
      gramMode = false,
      markDailyDone = false,
    } = payload;

    const totalN = Math.max(1, total);
    const accuracy = Math.round((score / totalN) * 100);

    if (xpEarned > 0) addXP(user, xpEarned, { source: 'quiz', lessonId });

    if (lessonId) completeLesson(user, lessonId);
    if (markDailyDone) user.dailyChallengeDone = todayKey();

    if (maxCombo > (user.maxCombo || 0)) user.maxCombo = maxCombo;
    if (perfect) user.hadPerfect = true;

    const entry = {
      id: uid(),
      at: Date.now(),
      source,
      lessonId,
      unitId,
      title,
      score,
      total: totalN,
      accuracy,
      xpEarned,
      perfect,
      maxCombo,
      gramMode,
    };

    user.quizScores = [entry, ...(user.quizScores || [])].slice(0, MAX_QUIZ_HISTORY);
    save(user);
    return { entry, accuracy, xpEarned };
  }

  function getQuizStats(user) {
    if (!user) return { count: 0, avgAccuracy: 0, bestAccuracy: 0, perfects: 0 };
    const scores = user.quizScores || [];
    if (!scores.length) {
      return { count: 0, avgAccuracy: 0, bestAccuracy: 0, perfects: 0 };
    }
    const sum = scores.reduce((a, q) => a + (q.accuracy || 0), 0);
    const best = Math.max(...scores.map((q) => q.accuracy || 0));
    const perfects = scores.filter((q) => q.perfect).length;
    return {
      count: scores.length,
      avgAccuracy: Math.round(sum / scores.length),
      bestAccuracy: best,
      perfects,
    };
  }

  function getRecentQuizzes(user, limit = 5) {
    return (user?.quizScores || []).slice(0, limit);
  }

  function recordGame(user, payload) {
    if (!user) return null;
    ensureUser(user);
    touchActivity(user);

    const {
      gameId = 'scramble',
      score = 0,
      xpEarned = null,
    } = payload;

    const xp = xpEarned != null ? xpEarned : score;
    if (xp > 0) addXP(user, xp, { source: 'game', gameId });

    if (gameId === 'scramble' && score > (user.scrambleScore || 0)) {
      user.scrambleScore = score;
    }

    const entry = {
      id: uid(),
      at: Date.now(),
      gameId,
      score,
      xpEarned: xp,
    };
    user.gameHistory = [entry, ...(user.gameHistory || [])].slice(0, MAX_GAME_HISTORY);
    save(user);
    return entry;
  }

  function recordAnswer(user, correct) {
    if (!user) return user;
    ensureUser(user);
    user.totalAns = (user.totalAns || 0) + 1;
    if (correct) user.totalCor = (user.totalCor || 0) + 1;
    save(user);
    return user;
  }

  function recordHeartLoss(user) {
    if (!user) return user;
    user.hearts = Math.max(0, (user.hearts || 0) - 1);
    save(user);
    return user;
  }

  function getSnapshot(user) {
    user = ensureUser(user || get());
    if (!user) return null;
    const lv = typeof getLevel === 'function' ? getLevel(user.xp || 0) : { level: 1 };
    const quiz = getQuizStats(user);
    return {
      xp: user.xp || 0,
      level: lv.level,
      streak: user.streak || 0,
      todayXP: user.todayXP || 0,
      completedLessons: [...(user.done || [])],
      completedCount: (user.done || []).length,
      hearts: user.hearts,
      gems: user.gems,
      quiz,
      recentQuizzes: getRecentQuizzes(user, 5),
      bestScramble: user.scrambleScore || 0,
    };
  }

  function initNewUser(user) {
    return ensureUser(user);
  }

  function completeQuiz(payload) {
    const u = get();
    return u ? recordQuiz(u, payload) : null;
  }

  function completeGame(payload) {
    const u = get();
    return u ? recordGame(u, payload) : null;
  }

  return {
    VERSION,
    KEYS,
    ensureUser,
    get,
    save,
    touchActivity,
    addXP,
    isLessonComplete,
    completeLesson,
    recordQuiz,
    recordGame,
    recordAnswer,
    recordHeartLoss,
    getQuizStats,
    getRecentQuizzes,
    getSnapshot,
    initNewUser,
    completeQuiz,
    completeGame,
  };
})();

window.Progress = Progress;