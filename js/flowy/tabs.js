// ═══════════════════════════════════════════════════════════
//  🐥 flowy/tabs.js — Tab awareness: tab-change reactions + tip cycle
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // ── Tab system ────────────────────────────────────────────
  function onTabChange(tabId) {
    S.currentTab = tabId || 'home';
    clearTimeout(S.tipTimer);
    K.wakeUpFromSleep();
    K.resetIdleTimer();
    const tipData = K.tabTips(S.currentTab);
    if (!tipData) return;
    setTimeout(() => {
      if (S.currentState === 'idle' || S.currentState === 'roaming') {
        K.showBubble(K.rand(tipData.entry, 'tab_entry'));
        K.scheduleHide(3800);
      }
    }, 1200);
    scheduleTipCycle();
  }

  function scheduleTipCycle() {
    clearTimeout(S.tipTimer);
    S.tipTimer = setTimeout(function cycle() {
      if (S.currentState === 'idle') {
        const tipData = K.tabTips(S.currentTab);
        if (tipData && tipData.tips.length) { K.showBubble(K.rand(tipData.tips, 'tab_tip')); K.scheduleHide(4000); }
      }
      S.tipTimer = setTimeout(cycle, 22000 + Math.random() * 13000);
    }, 22000 + Math.random() * 13000);
  }

  function hookTabSystem() {
    const origGoTab = window.goTab;
    if (origGoTab) {
      window.goTab = function (tabId) { onTabChange(tabId); return origGoTab.apply(this, arguments); };
    }
    document.addEventListener('click', (e) => {
      const navBtn = e.target.closest('[id^="bn-"], [data-tab]');
      if (!navBtn) return;
      const id  = navBtn.id || '';
      const tab = id.replace('bn-', '') || navBtn.dataset.tab || '';
      if (tab && tab !== S.currentTab) onTabChange(tab);
    }, { passive: true });
  }
  Object.assign(K, { hookTabSystem, onTabChange, scheduleTipCycle });
  K.loaded['tabs'] = true;
}(window.FlowyKit));
