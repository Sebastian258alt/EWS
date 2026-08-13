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

  // ── Expose ───────────────────────────────────────────────
  window.renderSettings     = renderSettings;
  window.onMuteToggle       = onMuteToggle;
  window.onAmbientToggle    = onAmbientToggle;
  window.onVoiceMuteToggle  = onVoiceMuteToggle;

}());
