// ═══════════════════════════════════════════════════════════
//  SETTINGS.JS — Settings tab renderer  v1.0
//  English With Sebastian
//  Every setting in the app lives here now: Appearance,
//  Language, Sound & Music, Fun Stuff, Account.
//  Depends on: window.EWSAudio (sounds.js), window.toggleTheme /
//              window.toggleDisco (app.js), window.setLang (i18n.js)
//  Exposes: window.renderSettings, window.onMuteToggle,
//           window.onAmbientToggle, window.onVoiceMuteToggle
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Populate the tab with current state ──────────────────
  // Called every time the user opens Settings (see nav.js), so it
  // always reflects reality even if something changed elsewhere
  // (e.g. the quick theme toggle in the topbar, or the 5x-logo-click
  // disco easter egg).
  function renderSettings() {
    // Appearance
    const themeSwitch = document.getElementById('set-theme-switch');
    if (themeSwitch) themeSwitch.checked = document.body.classList.contains('light');

    // Fun Stuff
    const discoSwitch = document.getElementById('set-disco-switch');
    if (discoSwitch) discoSwitch.checked = document.body.classList.contains('disco');

    // Sound & Music
    const audio = window.EWSAudio;
    const p = audio ? audio.getPrefs() : {};
    setChecked('set-mute',    !!p.muted);
    setChecked('set-ambient', !p.ambientOff);
    setChecked('set-vmute',   !!p.voiceMuted);
    setValue('set-sfxvol',   Math.round((p.sfxVol   !== undefined ? p.sfxVol   : 0.8)  * 100));
    setValue('set-ambvol',   Math.round((p.ambVol    !== undefined ? p.ambVol   : 0.18) * 100));
    setValue('set-voicevol', Math.round((p.voiceVol !== undefined ? p.voiceVol : 0.85) * 100));

    updateSliderState('set-sfx-row',   !!p.muted);
    updateSliderState('set-amb-row',   !!p.ambientOff);
    updateSliderState('set-voice-row', !!p.voiceMuted);

    renderAccountEmailCard();
  }

  function setChecked(id, val) { const el = document.getElementById(id); if (el) el.checked = val; }
  function setValue(id, val)   { const el = document.getElementById(id); if (el) el.value = val; }
  function updateSliderState(rowId, disabled) {
    const row = document.getElementById(rowId);
    if (row) row.classList.toggle('set-disabled', disabled);
  }

  // ── Wrapper handlers (persist + apply live + grey out dependents) ──
  function onMuteToggle(checked) {
    if (window.EWSAudio) window.EWSAudio.setMuted(checked);
    updateSliderState('set-sfx-row', checked);
  }

  function onAmbientToggle(checked) {
    if (window.EWSAudio) window.EWSAudio.setAmbientOn(checked);
    updateSliderState('set-amb-row', !checked);
  }

  function onVoiceMuteToggle(checked) {
    if (window.EWSAudio) window.EWSAudio.setVoiceMuted(checked);
    updateSliderState('set-voice-row', checked);
  }

  // ── Account: recovery email status/update ─────────────────
  // Shown only for accounts that can actually use it (real Supabase
  // session). Local/legacy/offline-hashed accounts get a message
  // telling them to log in normally, which is what triggers their
  // one-time migration to a real Supabase account (see js/auth.js).
  function renderAccountEmailCard() {
    const box = document.getElementById('set-email-card');
    if (!box) return;

    const cu = typeof getCU === 'function' ? getCU() : null;
    const pt = currentLang && currentLang.startsWith('pt');
    if (!cu) { box.innerHTML = ''; return; }

    const canUseSupabaseAuth = cu.authProvider === 'supabase' || cu.authProvider === 'google';

    if (!canUseSupabaseAuth) {
      box.innerHTML = `<p class="set-hint">${
        pt
          ? 'Faz login normalmente uma vez para poderes adicionar um email de recuperação.'
          : 'Log in normally once to unlock adding a recovery email.'
      }</p>`;
      return;
    }

    const synthetic = window.Auth?.hasSyntheticEmail?.(cu) ?? !cu.email;

    if (!synthetic) {
      box.innerHTML = `
        <p class="set-hint">✅ ${pt ? 'Email de recuperação:' : 'Recovery email:'} <strong>${window.escapeHtml(cu.email)}</strong></p>
        <input class="edit-input" id="set-email-input" type="email" placeholder="${pt ? 'Novo email' : 'New email'}">
        <button class="prof-edit-btn" onclick="saveAccountEmail()">${pt ? '💾 Actualizar email' : '💾 Update email'}</button>
        <p class="set-hint" id="set-email-msg"></p>`;
    } else {
      box.innerHTML = `
        <p class="set-hint">⚠️ ${pt
          ? 'Ainda não tens um email para recuperar a conta se esqueceres a password.'
          : "You don't have a recovery email set — if you forget your password, you can't reset it yet."}</p>
        <input class="edit-input" id="set-email-input" type="email" placeholder="${pt ? 'O teu email' : 'Your email'}">
        <button class="prof-edit-btn" onclick="saveAccountEmail()">${pt ? '✉️ Adicionar email' : '✉️ Add email'}</button>
        <p class="set-hint" id="set-email-msg"></p>`;
    }
  }

  async function saveAccountEmail() {
    const input = document.getElementById('set-email-input');
    const msg = document.getElementById('set-email-msg');
    const pt = currentLang && currentLang.startsWith('pt');
    if (!input || !msg) return;
    const email = input.value.trim();

    if (!window.isReasonableEmail?.(email)) {
      msg.textContent = pt ? '❌ Email inválido.' : '❌ Invalid email.';
      return;
    }
    if (!window.Auth?.updateAccountEmail) return;

    msg.textContent = pt ? 'A actualizar…' : 'Updating…';
    const result = await window.Auth.updateAccountEmail(email);
    if (!result.ok) {
      msg.textContent = pt ? '❌ Não foi possível actualizar. Tenta novamente.' : "❌ Couldn't update. Please try again.";
      return;
    }
    msg.textContent = pt
      ? '✅ Verifica o teu email para confirmar a alteração.'
      : '✅ Check your email to confirm the change.';
    renderAccountEmailCard();
  }

  // ── Expose ───────────────────────────────────────────────
  window.renderSettings     = renderSettings;
  window.onMuteToggle       = onMuteToggle;
  window.onAmbientToggle    = onAmbientToggle;
  window.onVoiceMuteToggle  = onVoiceMuteToggle;
  window.saveAccountEmail   = saveAccountEmail;

}());
