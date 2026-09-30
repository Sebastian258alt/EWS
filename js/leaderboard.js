// leaderboard.js – reads from the public leaderboard_public table only
// (never from the private user_progress table — see migration 07)
const Leaderboard = (function () {
  let _isOpen = false;
  let _rows = [];
  let _loading = false;
  let _refreshTimer = null;

  function log(msg) { console.log('[Leaderboard]', msg); }

  async function fetchFromSupabase() {
    if (!window.isSupabaseConfigured?.()) {
      log('Supabase not configured');
      return [];
    }
    const sb = window.createSupabaseClient?.();
    if (!sb) {
      log('Supabase client not available');
      return [];
    }

    // SECURITY (migration 07): `user_progress` now has an owner-or-admin-only
    // SELECT policy — it holds private data (quiz scores, game history, AI
    // chat log, streak, hearts, internal supabase_id, etc.) and is no longer
    // publicly readable. The leaderboard reads from `leaderboard_public`
    // instead: a separate table containing ONLY name/avatar/xp/level, kept
    // in sync by a database trigger every time user_progress is written.
    // See supabase-migration/07_private_progress_public_leaderboard.sql.
    let data = null;
    let usedTable = 'leaderboard_public';

    try {
      const result = await sb
        .from('leaderboard_public')
        .select('un, name, avatar, xp, updated_at')
        .order('xp', { ascending: false })
        .limit(200);
      if (result.error) throw result.error;
      data = (result.data || []).map(row => ({
        user_id: row.un,
        name: row.name || row.un,
        avatar: row.avatar || null,
        xp: row.xp || 0,
        updated_at: row.updated_at,
      }));
      log(`Using leaderboard_public table, ${data.length} records`);
    } catch (err) {
      log(`Failed to fetch leaderboard_public: ${err.message}`);
      return [];
    }

    if (!data || data.length === 0) {
      log('No data in table');
      return [];
    }

    const curKey = localStorage.getItem('ews4_cur');
    const now = Date.now();
    return data.map(row => {
      const xp = row.xp || 0;
      const level = Math.floor(xp / 100) + 1;
      return {
        name: row.name,
        key: row.user_id,
        xp: xp,
        level: level,
        label: `Level ${level}`,
        avatar: row.avatar,
        online: row.updated_at ? (now - new Date(row.updated_at).getTime() < 300000) : false,
        isMe: (row.user_id === curKey),
      };
    });
  }

  function renderModalShell() {
    const modal = document.getElementById('lb-modal');
    if (!modal) return;
    modal.innerHTML = `
      <div class="lb-box">
        <div class="lb-hdr">
          <span class="lb-ttl">Top Learners</span>
          <div style="display:flex;align-items:center;gap:.7rem">
            <span id="lb-live-dot" class="lb-live-dot">LIVE</span>
            <button class="lb-close" onclick="closeLB()">✕</button>
          </div>
        </div>
        <div id="lb-source-badge">🌍 SUPABASE · LIVE</div>
        <div class="lb-scroll-body">
          <div id="lb-spin-wrap" style="display:flex;align-items:center;gap:.6rem;padding:.9rem 1.25rem;">
            <span class="lb-spinner-dot"></span> Loading…
          </div>
          <div id="lb-podium"></div>
          <div id="lb-rows-label" class="lb-rows-title" style="display:none">More Players</div>
          <div id="lb-rows"></div>
        </div>
        <div class="lb-footer">
          <span id="lb-your-rank"></span>
          <button class="lb-refresh-btn" onclick="Leaderboard.refresh()">⟳ Refresh</button>
        </div>
      </div>`;
  }

  function setLoading(on) {
    const el = document.getElementById('lb-spin-wrap');
    if (el) el.style.display = on ? 'flex' : 'none';
  }

  function renderRows(rows) {
    const podEl = document.getElementById('lb-podium');
    const rowsEl = document.getElementById('lb-rows');
    const labelEl = document.getElementById('lb-rows-label');
    const liveDot = document.getElementById('lb-live-dot');
    if (liveDot) liveDot.classList.add('lb-live-active');

    if (!rows.length) {
      podEl.innerHTML = '';
      rowsEl.innerHTML = '<div style="text-align:center;padding:2.5rem 1rem;color:var(--muted);font-weight:800;">No players yet. Be the first! 🚀</div>';
      if (labelEl) labelEl.style.display = 'none';
      return;
    }

    rows.sort((a, b) => b.xp - a.xp);
    const top3 = rows.slice(0, 3);
    const rest = rows.slice(3);

    // SECURITY: r.name and r.avatar come from Supabase `leaderboard_public`,
    // which is populated by a trigger from each user's own user_progress
    // payload — still ultimately author-controlled by that user, so treat
    // both as fully untrusted. Names are HTML-escaped; avatars are resolved
    // through safeAvatarUrl() which only allows http(s) URLs (or null), so a
    // crafted avatar/name value can never break out of the markup or the
    // inline style attribute. See SECURITY.md.
    const esc = window.escapeHtml || ((s) => String(s ?? ''));
    const safeUrl = window.safeAvatarUrl || (() => null);

    const crown = ['🥇', '🥈', '🥉'];
    podEl.innerHTML = top3.map((r, i) => {
      const safeName = esc(r.name);
      const initial = esc((r.name || '?')[0] || '?');
      const isEmoji = r.avatar?.startsWith('emoji:');
      const emojiChar = isEmoji ? esc(r.avatar.slice(6)) : '';
      const url = !isEmoji ? safeUrl(r.avatar) : null;
      const av = isEmoji ? emojiChar : (url ? '' : initial);
      const avBg = url ? `background-image:url(${url});background-size:cover;` : '';
      return `
        <div class="lb-pod">
          <div class="lb-pod-crown">${crown[i]}</div>
          <div class="lb-pod-av" style="${avBg}">${av}</div>
          <div class="lb-pod-name">${safeName}${r.isMe ? ' 👤' : ''}</div>
          <div class="lb-pod-xp">${r.xp.toLocaleString()} XP</div>
          <div class="lb-pod-pedestal">${i + 1}</div>
        </div>`;
    }).join('');

    if (rest.length) {
      if (labelEl) labelEl.style.display = 'block';
      rowsEl.innerHTML = rest.map((r, i) => {
        const rank = i + 4;
        const safeName = esc(r.name);
        const initial = esc((r.name || '?')[0] || '?');
        const isEmoji = r.avatar?.startsWith('emoji:');
        const emojiChar = isEmoji ? esc(r.avatar.slice(6)) : '';
        const url = !isEmoji ? safeUrl(r.avatar) : null;
        const av = isEmoji ? emojiChar : (url ? '' : initial);
        const avBg = url ? `background-image:url(${url});background-size:cover;` : '';
        const xpInLevel = r.xp % 100;
        const rankClass = rank === 4 ? 'g' : rank === 5 ? 's' : rank === 6 ? 'b' : '';
        return `
          <div class="lb-row ${r.isMe ? 'you' : ''}">
            <div class="lb-rank ${rankClass}">${rank}</div>
            <div class="lb-av" style="${avBg}">${av}</div>
            <div class="lb-info">
              <div class="lb-nm">${safeName}${r.isMe ? '<span class="you-badge">YOU</span>' : ''}</div>
              <div class="lb-xp">
                Lv ${r.level}
                <div class="lb-xp-mini-bar"><div class="lb-xp-mini-fill" style="width:${xpInLevel}%"></div></div>
                ${r.online ? '<span class="lb-online-dot"></span>' : ''}
              </div>
            </div>
            <div class="lb-xp-badge">${r.xp.toLocaleString()} XP</div>
          </div>`;
      }).join('');
    } else {
      if (labelEl) labelEl.style.display = 'none';
      rowsEl.innerHTML = '';
    }

    const myIdx = rows.findIndex(r => r.isMe);
    const rankSpan = document.getElementById('lb-your-rank');
    if (rankSpan) {
      rankSpan.textContent = myIdx >= 0 ? `Your rank: #${myIdx + 1} of ${rows.length}` : `${rows.length} players`;
    }
  }

  async function loadData() {
    if (_loading) return;
    _loading = true;
    setLoading(true);
    const rows = await fetchFromSupabase();
    _rows = rows;
    renderRows(rows);
    setLoading(false);
    _loading = false;
  }

  async function open() {
    if (_isOpen) return;
    _isOpen = true;
    renderModalShell();
    await loadData();
    if (_refreshTimer) clearInterval(_refreshTimer);
    _refreshTimer = setInterval(() => { if (_isOpen) loadData(); }, 15000);
  }

  function close() {
    _isOpen = false;
    if (_refreshTimer) { clearInterval(_refreshTimer); _refreshTimer = null; }
  }

  async function refresh() {
    if (typeof SFX !== 'undefined') SFX.click();
    await loadData();
  }

  return { open, close, refresh, loadData };
})();

window.Leaderboard = Leaderboard;

window.openLB = function () {
  const modal = document.getElementById('lb-modal');
  if (!modal) return;
  if (typeof SFX !== 'undefined') SFX.click();
  modal.classList.add('on');
  Leaderboard.open();
};

window.closeLB = function () {
  const modal = document.getElementById('lb-modal');
  if (!modal) return;
  modal.classList.remove('on');
  Leaderboard.close();
};

window.closeLBEv = function (e) {
  if (e.target === document.getElementById('lb-modal')) window.closeLB();
};