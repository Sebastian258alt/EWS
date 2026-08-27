// ═══════════════════════════════════════════════════════════
//  storage.js — localStorage helpers + Supabase write-through sync
//  Architecture: localStorage = fast read layer (always used)
//                Supabase     = durable backup (write-through, silent fail)
// ═══════════════════════════════════════════════════════════

const EWS_STORAGE_KEYS = {
  authProfile:   'ews4_auth_profile',
  progressIndex: 'ews4_progress',
  syncQueue:     'ews4_sync_queue',
  lastSyncAt:    'ews4_last_sync',
};

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function saveAuthProfile(profile) { saveData(EWS_STORAGE_KEYS.authProfile, profile); }
function loadAuthProfile()        { return loadData(EWS_STORAGE_KEYS.authProfile); }
function clearAuthCache()         { localStorage.removeItem(EWS_STORAGE_KEYS.authProfile); }

// ─── Supabase write-through sync ─────────────────────────
// ALLOWLIST: only these fields are ever sent to Supabase
const SYNC_ALLOW = new Set([
  'name', 'xp', 'streak', 'lastActive', 'todayXP', 'todayDate',
  'hearts', 'gems', 'done', 'achs', 'totalCor', 'totalAns', 'hadPerfect', 'maxCombo',
  'scrambleScore', 'dailyChallengeDone', 'aiChats', 'pronP', 'gramR', 'lang',
  'createdAt', 'updatedAt', 'quizScores', 'gameHistory', 'authProvider', 'supabaseId',
  'email', 'avatar', 'un'
]);

function _buildSyncPayload(user) {
  const payload = {};
  for (const [k, v] of Object.entries(user)) {
    if (SYNC_ALLOW.has(k)) payload[k] = v;
  }
  if (Array.isArray(payload.quizScores))  payload.quizScores  = payload.quizScores.slice(0, 50);
  if (Array.isArray(payload.gameHistory)) payload.gameHistory = payload.gameHistory.slice(0, 30);
  return payload;
}

const _syncDebounce = {};
const SYNC_DELAY_MS = 400;

function syncUserToSupabase(user) {
  if (!user?.un) return;
  if (!window.isSupabaseConfigured || !window.isSupabaseConfigured()) return;

  clearTimeout(_syncDebounce[user.un]);
  _syncDebounce[user.un] = setTimeout(async () => {
    delete _syncDebounce[user.un];
    try {
      const sb = window.createSupabaseClient();
      if (!sb) return;

      const payload  = _buildSyncPayload(user);
      const now      = new Date().toISOString();
      const row = {
        un:          user.un,
        supabase_id: user.supabaseId || null,
        payload,
        updated_at:  now,
        online_at:   now,
      };

      const { error } = await sb
        .from('user_progress')
        .upsert(row, { onConflict: 'un' });

      if (error) {
        _queueSync(user.un);
        console.warn('[EWS sync] upsert failed, queued:', error.message);
      } else {
        _dequeueSync(user.un);
        const syncMap = loadData(EWS_STORAGE_KEYS.lastSyncAt) || {};
        syncMap[user.un] = now;
        saveData(EWS_STORAGE_KEYS.lastSyncAt, syncMap);
      }
    } catch (err) {
      _queueSync(user.un);
      console.warn('[EWS sync] network error, queued:', err.message);
    }
  }, SYNC_DELAY_MS);
}

async function pullUserFromSupabase(un) {
  if (!un) return null;
  if (!window.isSupabaseConfigured || !window.isSupabaseConfigured()) return null;
  try {
    const sb = window.createSupabaseClient();
    if (!sb) return null;

    const { data, error } = await sb
      .from('user_progress')
      .select('payload, updated_at')
      .eq('un', un)
      .maybeSingle();

    if (error || !data) return null;

    const remote    = data.payload || {};
    const localRaw  = localStorage.getItem('ews4_u');
    const localArr  = localRaw ? JSON.parse(localRaw) : [];
    const localUser = localArr.find(u => u.un === un);

    const remoteTs = new Date(data.updated_at).getTime();
    const syncMap  = loadData(EWS_STORAGE_KEYS.lastSyncAt) || {};
    const lastPush = syncMap[un] ? new Date(syncMap[un]).getTime() : 0;
    const localTs  = localUser?.updatedAt || localUser?.createdAt || 0;

    // Only pull if remote is newer than both the last successful push AND the local update time
    if (!localUser || (remoteTs > lastPush && remoteTs > localTs)) {
      const merged = { ...(localUser || {}), ...remote, un };
      if (localUser?.pw) merged.pw = localUser.pw;

      const newArr = localUser
        ? localArr.map(u => (u.un === un ? merged : u))
        : [...localArr, merged];

      localStorage.setItem('ews4_u', JSON.stringify(newArr));

      syncMap[un] = data.updated_at;
      saveData(EWS_STORAGE_KEYS.lastSyncAt, syncMap);
      return merged;
    }
    return localUser;
  } catch (err) {
    console.warn('[EWS sync] pull failed:', err.message);
    return null;
  }
}

function _queueSync(un) {
  const q = loadData(EWS_STORAGE_KEYS.syncQueue) || [];
  if (!q.includes(un)) { q.push(un); saveData(EWS_STORAGE_KEYS.syncQueue, q); }
}

function _dequeueSync(un) {
  const q = (loadData(EWS_STORAGE_KEYS.syncQueue) || []).filter(u => u !== un);
  saveData(EWS_STORAGE_KEYS.syncQueue, q);
}

async function flushSyncQueue() {
  if (!window.isSupabaseConfigured || !window.isSupabaseConfigured()) return;
  const q = loadData(EWS_STORAGE_KEYS.syncQueue) || [];
  if (!q.length) return;

  const localArr = (() => {
    try { return JSON.parse(localStorage.getItem('ews4_u') || '[]'); } catch { return []; }
  })();

  for (const un of [...q]) {
    const user = localArr.find(u => u.un === un);
    if (user) {
      clearTimeout(_syncDebounce[un]);
      delete _syncDebounce[un];
      try {
        const sb = window.createSupabaseClient();
        if (!sb) break;
        const now = new Date().toISOString();
        const { error } = await sb
          .from('user_progress')
          .upsert({
            un,
            supabase_id: user.supabaseId || null,
            payload: _buildSyncPayload(user),
            updated_at: now,
            online_at:  now,
          }, { onConflict: 'un' });
        if (!error) {
          _dequeueSync(un);
          const syncMap = loadData(EWS_STORAGE_KEYS.lastSyncAt) || {};
          syncMap[un] = now;
          saveData(EWS_STORAGE_KEYS.lastSyncAt, syncMap);
        }
      } catch { break; }
    }
  }
}

window.syncUserToSupabase = syncUserToSupabase;
window.pullUserFromSupabase = pullUserFromSupabase;
window.flushSyncQueue = flushSyncQueue;
window.saveData = saveData;
window.loadData = loadData;