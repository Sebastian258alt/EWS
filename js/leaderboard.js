// leaderboard.js – works with user_profiles OR user_progress
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

    // Use user_progress — the only table defined in this project's schema.
    // (user_profiles does not exist; querying it causes a PostgREST 404 that
    //  silently empties the leaderboard every time.)
    let data = null;

    try {
      const result = await sb
        .from('user_progress')
        .select('un, payload, updated_at')
        .limit(200);
      if (!result.error && result.data) {
        data = result.data.map(row => ({
          user_id: row.un,
          name: row.payload?.name || row.un,
          avatar: row.payload?.avatar || null,
          xp: row.payload?.xp || 0,
          updated_at: row.updated_at,
        }));
        // Sort by XP descending (cannot ORDER on a jsonb field via PostgREST)
        data.sort((a, b) => (b.xp || 0) - (a.xp || 0));
        log(`user_progress: ${data.length} records`);
      } else {
        throw new Error(result.error?.message || 'No data');
      }
    } catch (err) {
      log(`Failed to fetch leaderboard: ${err.message}`);
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

    const crown = ['🥇', '🥈', '🥉'];
    podEl.innerHTML = top3.map((r, i) => {
      const av = r.avatar?.startsWith('emoji:') ? r.avatar.slice(6) : (r.name[0] || '?');
      const avBg = r.avatar && !r.avatar.startsWith('emoji:') ? `background-image:url(${r.avatar});background-size:cover;` : '';
      return `
        <div class="lb-pod">
          <div class="lb-pod-crown">${crown[i]}</div>
          <div class="lb-pod-av" style="${avBg}">${avBg ? '' : av}</div>
          <div class="lb-pod-name">${r.name}${r.isMe ? ' 👤' : ''}</div>
          <div class="lb-pod-xp">${r.xp.toLocaleString()} XP</div>
          <div class="lb-pod-pedestal">${i + 1}</div>
        </div>`;
    }).join('');

    if (rest.length) {
      if (labelEl) labelEl.style.display = 'block';
      rowsEl.innerHTML = rest.map((r, i) => {
        const rank = i + 4;
        const av = r.avatar?.startsWith('emoji:') ? r.avatar.slice(6) : (r.name[0] || '?');
        const avBg = r.avatar && !r.avatar.startsWith('emoji:') ? `background-image:url(${r.avatar});background-size:cover;` : '';
        const xpInLevel = r.xp % 100;
        const rankClass = rank === 4 ? 'g' : rank === 5 ? 's' : rank === 6 ? 'b' : '';
        return `
          <div class="lb-row ${r.isMe ? 'you' : ''}">
            <div class="lb-rank ${rankClass}">${rank}</div>
            <div class="lb-av" style="${avBg}">${avBg ? '' : av}</div>
            <div class="lb-info">
              <div class="lb-nm">${r.name}${r.isMe ? '<span class="you-badge">YOU</span>' : ''}</div>
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