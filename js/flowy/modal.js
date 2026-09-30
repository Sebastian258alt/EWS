// ═══════════════════════════════════════════════════════════
//  🐥 flowy/modal.js — Chat-invite modal: build, AI text, actions, open/close, labels
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  function buildModal() {
    if (document.getElementById('flowy-modal')) return;

    const overlay = document.createElement('div');
    overlay.id = 'flowy-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Flowy');

    overlay.innerHTML = `
      <div id="flowy-modal-inner">
        <button id="flowy-modal-close" aria-label="${K.isPT() ? 'Fechar' : 'Close'}">✕</button>
        <div id="flowy-modal-avatar">${K.FLOWY_SVG_LARGE}</div>
        <div id="flowy-modal-msg"></div>
        <div id="flowy-modal-actions">
          <button class="flowy-action-btn" data-action="lesson">${K.isPT() ? '📚 Iniciar Lição' : '📚 Start Lesson'}</button>
          <button class="flowy-action-btn" data-action="chat">${K.isPT() ? '💬 Falar com IA' : '💬 Chat with AI'}</button>
          <button class="flowy-action-btn" data-action="joke">${K.isPT() ? '😂 Conta uma piada' : '😂 Tell a joke'}</button>
          <button class="flowy-action-btn" data-action="tip">${K.isPT() ? '💡 Dá-me uma dica' : '💡 Give me a tip'}</button>
        </div>
        <div id="flowy-modal-joke-type" style="display:none">
          <button class="flowy-action-btn" data-action="joke-formal">${K.isPT() ? '🎩 Piada Formal' : '🎩 Formal Joke'}</button>
          <button class="flowy-action-btn" data-action="joke-informal">${K.isPT() ? '😜 Piada Informal' : '😜 Informal Joke'}</button>
          <button class="flowy-action-btn" data-action="back">← ${K.isPT() ? 'Voltar' : 'Back'}</button>
        </div>
      </div>`;

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    overlay.querySelector('#flowy-modal-close').addEventListener('click', closeModal);
    overlay.querySelectorAll('.flowy-action-btn').forEach(b => b.addEventListener('click', handleModalAction));

    document.body.appendChild(overlay);
  }
  function smartModalText(key, staticText, extra) {
    const msgEl = document.getElementById('flowy-modal-msg');
    if (msgEl) msgEl.textContent = staticText;
    S.modalGen++;
    if (!window.FlowyAI || !window.FlowyAI.isEnabled()) return;
    const gen  = S.modalGen;
    const lang = K.isPT() ? 'pt' : 'en';
    window.FlowyAI.getLine(key, { lang: lang, fallback: staticText, extra: extra || { tab: S.currentTab } })
      .then((aiLine) => {
        if (!aiLine || gen !== S.modalGen) return;
        const modal = document.getElementById('flowy-modal');
        const el = document.getElementById('flowy-modal-msg');
        if (!el || !modal || !modal.classList.contains('visible')) return;
        el.textContent = aiLine;
      });
  }

  function handleModalAction(e) {
    const action = e.currentTarget.dataset.action;
    const mainActions = document.getElementById('flowy-modal-actions');
    const jokeTypes   = document.getElementById('flowy-modal-joke-type');
    const msgEl       = document.getElementById('flowy-modal-msg');

    if (action === 'lesson') {
      closeModal();
      if (window.goTab) window.goTab('home');
    } else if (action === 'chat') {
      closeModal();
      const aiBtn = document.getElementById('bn-ai');
      if (window.goTab && aiBtn) window.goTab('ai', aiBtn);
      else if (window.goTab) window.goTab('ai');
      if (!window._chatInitDone && window.initChat) window.initChat();
    } else if (action === 'joke') {
      mainActions.style.display = 'none';
      jokeTypes.style.display   = 'flex';
      msgEl.textContent = K.isPT() ? 'Que tipo de piada preferes? 😄' : 'What type of joke? 😄';
    } else if (action === 'joke-formal') {
      const jArr = K.msgs('jokes_formal');
      const line = jArr[S.jokeIndex.formal % jArr.length];
      S.jokeIndex.formal++;
      smartModalText('joke_formal', line);
    } else if (action === 'joke-informal') {
      const jArr = K.msgs('jokes_informal');
      const line = jArr[S.jokeIndex.informal % jArr.length];
      S.jokeIndex.informal++;
      smartModalText('joke_informal', line);
    } else if (action === 'tip') {
      const tipData = K.tabTips(S.currentTab);
      const line = tipData
        ? K.rand([...tipData.entry, ...tipData.tips], 'modal_tip')
        : K.rand(K.msgs('idle'), 'modal_idle');
      smartModalText('tab_tip', line, { tab: S.currentTab });
    } else if (action === 'back') {
      smartModalText('wakeWord', K.rand(K.msgs('wakeWord'), 'wakeWord'));
    }
  }

  function openModal(msg, key) {
    S.modalVisible = true;
    K.wakeUpFromSleep();
    const modal = document.getElementById('flowy-modal');
    const mainActions = document.getElementById('flowy-modal-actions');
    const jokeTypes   = document.getElementById('flowy-modal-joke-type');
    if (!modal) return;
    if (mainActions) mainActions.style.display = 'flex';
    if (jokeTypes)   jokeTypes.style.display   = 'none';
    const staticText = msg || K.rand(K.msgs('wakeWord'), 'wakeWord');
    smartModalText(key || 'wakeWord', staticText);
    modal.classList.add('visible');
    K.setState('happy');
    const avatar = document.getElementById('flowy-modal-avatar');
    if (avatar) { avatar.style.animation = 'none'; requestAnimationFrame(() => { avatar.style.animation = ''; }); }
  }

  function closeModal() {
    S.modalVisible = false;
    const modal = document.getElementById('flowy-modal');
    if (modal) modal.classList.remove('visible');
    K.setState('idle');
    K.resetIdleTimer();
  }
  function updateModalLabels() {
    const modal = document.getElementById('flowy-modal');
    if (!modal) return;
    modal.remove();
    buildModal();
  }
  Object.assign(K, { buildModal, closeModal, openModal, updateModalLabels });
  K.loaded['modal'] = true;
}(window.FlowyKit));
