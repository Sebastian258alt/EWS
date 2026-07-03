// ═══════════════════════════════════════════════════════════
//  PROFILE.JS — About page renderer + Profile edit modal  v4.0
//  English With Sebastian
//  Extracted from app.js — edit here for profile/about changes.
//  Depends on: ABOUT_DATA, SFX, window.t(), window.getCU,
//              window.saveCU, window.refreshUI, window.showToast,
//              window.spawnEmojis
//  Exposes: window.renderAbout, window.downloadCV,
//           window.openEditProfile, window.closeEditProfile,
//           window.closeEditProfileEv, window.selectAvatar,
//           window.saveEditProfile
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── About page ───────────────────────────────────────────
  window.renderAbout = function () {
    const el = document.getElementById('prof-about-creator');
    if (!el) return;
    const d    = ABOUT_DATA;
    const lang = window.currentLang;

    const skillsHTML = d.skills.map(s =>
      `<div class="skill-pill"><span>${s.icon}</span>${lang === 'pt' ? s.pt : s.en}</div>`
    ).join('');

    const statsHTML = d.stats.map(s =>
      `<div class="about-stat">
        <div class="about-stat-icon">${s.icon}</div>
        <div class="about-stat-num" data-target="${s.n}">0</div>
        <div class="about-stat-lbl">${lang === 'pt' ? s.pt : s.en}</div>
      </div>`
    ).join('');

    const eduHTML = d.education.map(e => {
      const info = lang === 'pt' ? e.pt : e.en;
      return `<div class="timeline-item">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <div class="tl-title">${info.degree}</div>
          <div class="tl-org">${info.school}</div>
          <div class="tl-period">${info.year}</div>
          <div class="tl-note">${info.note}</div>
        </div>
      </div>`;
    }).join('');

    const expHTML = d.experience.map(ex => {
      const info = lang === 'pt' ? ex.pt : ex.en;
      return `<div class="timeline-item">
        <div class="tl-dot tl-dot-blue"></div>
        <div class="tl-content">
          <div class="tl-title">${info.title}</div>
          <div class="tl-org">${info.org}</div>
          <div class="tl-period">${info.period}</div>
          <div class="tl-desc">${info.desc}</div>
        </div>
      </div>`;
    }).join('');

    el.innerHTML = `
    <div class="about-wrap">
      <div class="about-hero-card">
        <div class="about-hero-bg"></div>
        <div class="about-avatar-ring">
          <div class="about-avatar">SJ</div>
          <div class="about-avatar-badge">🎓</div>
        </div>
        <h1 class="about-name">${d.name}</h1>
        <div class="about-role">${lang === 'pt' ? d.role.pt : d.role.en}</div>
        <div class="about-location"><span>📍</span> ${d.location}</div>
        <div class="about-bio">${window.t ? t('aboutBio') : ''}</div>
        <div class="about-actions">
          <a href="mailto:${d.email}" class="about-action-btn about-action-email"><span>✉️</span> Email</a>
          <a href="https://wa.me/${d.whatsapp}" target="_blank" class="about-action-btn about-action-wa"><span>💬</span> WhatsApp</a>
          <button class="about-action-btn about-action-cv" onclick="downloadCV()"><span>📄</span> ${window.t ? t('aboutDownloadCV') : 'CV'}</button>
        </div>
      </div>
      <div class="about-stats-grid">${statsHTML}</div>
      <div class="about-section">
        <div class="about-section-title">${window.t ? t('aboutSkills') : 'Skills'}</div>
        <div class="skills-wrap">${skillsHTML}</div>
      </div>
      <div class="about-section">
        <div class="about-section-title">${window.t ? t('aboutEducation') : 'Education'}</div>
        <div class="timeline">${eduHTML}</div>
      </div>
      <div class="about-section">
        <div class="about-section-title">${window.t ? t('aboutExperience') : 'Experience'}</div>
        <div class="timeline">${expHTML}</div>
      </div>
      <div class="about-section">
        <div class="about-section-title">${window.t ? t('aboutContact') : 'Contact'}</div>
        <div class="social-grid">
          <a href="${d.socials.instagram}" target="_blank" class="social-card social-ig"><span class="social-icon">📸</span><span>Instagram</span></a>
          <a href="${d.socials.facebook}"  target="_blank" class="social-card social-fb"><span class="social-icon">👥</span><span>Facebook</span></a>
          <a href="${d.socials.tiktok}"    target="_blank" class="social-card social-tt"><span class="social-icon">🎵</span><span>TikTok</span></a>
          <a href="${d.socials.linkedin}"  target="_blank" class="social-card social-li"><span class="social-icon">💼</span><span>LinkedIn</span></a>
          <a href="${d.socials.youtube}"   target="_blank" class="social-card social-yt"><span class="social-icon">▶️</span><span>YouTube</span></a>
          <a href="${d.socials.github}"    target="_blank" class="social-card social-gh"><span class="social-icon">💻</span><span>GitHub</span></a>
        </div>
        <div class="contact-cards">
          <div class="contact-card" onclick="navigator.clipboard.writeText('${d.email}').then(()=>showToast('📋 Email copied!'))">
            <span>✉️</span>
            <div><div class="contact-label">Email</div><div class="contact-val">${d.email}</div></div>
            <span class="contact-copy">📋</span>
          </div>
          <div class="contact-card" onclick="navigator.clipboard.writeText('${d.phone}').then(()=>showToast('📋 Number copied!'))">
            <span>📞</span>
            <div><div class="contact-label">Phone / WhatsApp</div><div class="contact-val">${d.phone}</div></div>
            <span class="contact-copy">📋</span>
          </div>
        </div>
      </div>
    </div>`;

    setTimeout(() => {
      document.querySelectorAll('.about-stat-num[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        let count = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count = Math.min(count + increment, target);
          el.textContent = count + (target >= 100 ? '+' : '');
          if (count >= target) clearInterval(timer);
        }, 35);
      });
    }, 100);
  };

  // ── Meet the Creator (hidden, toggled from Profile) ──────
  let _aboutRendered = false;
  function toggleAboutCreator() {
    if (window.SFX) SFX.click();
    const panel = document.getElementById('prof-about-creator');
    const btn   = document.getElementById('meetCreatorBtn');
    if (!panel) return;
    if (!_aboutRendered) { window.renderAbout(); _aboutRendered = true; }
    const isOpen = panel.classList.toggle('on');
    if (btn) btn.classList.toggle('open', isOpen);
    if (isOpen) {
      setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }
  }

  function downloadCV() {
    if (window.showToast) showToast('📄 ' + (window.currentLang === 'pt' ? 'CV em breve disponível!' : 'CV download coming soon!'));
    if (window.SFX) SFX.click();
  }

  // ── Profile edit ─────────────────────────────────────────
  const AVATAR_LIST = [
    '😎','🦁','🐯','🦊','🐺','🐻','🐼','🦝','🐸','🦋',
    '🦄','🐉','🦅','🦚','🐬','🐋','🦈','🦖','🌟','🔥',
    '⚡','🎯','🏆','🎓','🚀','🌈','💎','🎮','🎸','🥷',
    '🧙','🧜','🧛','🤖','👽','🎃','🦸','🕵️','🧑‍🎤','🧑‍🚀',
  ];
  let _editSelectedAvatar = null;

  function openEditProfile() {
    if (window.SFX) SFX.click();
    const u = window.getCU(); if (!u) return;
    _editSelectedAvatar = null;
    const nameInput = document.getElementById('editNameInput');
    if (nameInput) nameInput.value = u.name || '';
    _buildAvPicker(u);
    _updateEditPreview(u.avatar, u.name);
    document.getElementById('editProfileOverlay').classList.add('on');
  }

  function closeEditProfile() {
    document.getElementById('editProfileOverlay').classList.remove('on');
    _editSelectedAvatar = null;
  }

  function closeEditProfileEv(e) {
    if (e.target === document.getElementById('editProfileOverlay')) closeEditProfile();
  }

  function _buildAvPicker(u) {
    const grid = document.getElementById('avPickerGrid');
    if (!grid) return;
    const current = u.avatar || '';
    grid.innerHTML = AVATAR_LIST.map(em => {
      const key = 'emoji:' + em;
      const sel = current === key ? ' selected' : '';
      return `<div class="av-item${sel}" data-av="${key}" onclick="selectAvatar('${key}',this)">${em}</div>`;
    }).join('');
  }

  function selectAvatar(key, el) {
    if (window.SFX) SFX.click();
    _editSelectedAvatar = key;
    document.querySelectorAll('.av-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    const u = window.getCU();
    _updateEditPreview(key, u ? u.name : '?');
  }

  function _updateEditPreview(avatar, name) {
    const prev = document.getElementById('editAvPreview');
    if (!prev) return;
    if (avatar && avatar.startsWith('emoji:')) {
      prev.style.backgroundImage = 'none';
      prev.style.fontSize = '2.2rem';
      prev.textContent = avatar.replace('emoji:', '');
    } else if (avatar) {
      prev.style.backgroundImage = `url(${avatar})`;
      prev.style.backgroundSize  = 'cover';
      prev.style.backgroundPosition = 'center';
      prev.textContent = '';
    } else {
      prev.style.backgroundImage = 'none';
      prev.style.fontSize = '1.8rem';
      prev.textContent = (name || '?')[0].toUpperCase();
    }
  }

  function saveEditProfile() {
    if (window.SFX) SFX.click();
    const u = window.getCU(); if (!u) return;
    const nameInput = document.getElementById('editNameInput');
    const newName = (nameInput ? nameInput.value.trim() : '') || u.name;
    if (!newName) { if (window.showToast) showToast('❌ Name cannot be empty!'); return; }
    if (newName.length > 32) { if (window.showToast) showToast('❌ Name too long (max 32 chars)'); return; }
    u.name = newName;
    if (_editSelectedAvatar !== null) u.avatar = _editSelectedAvatar;
    window.saveCU(u);
    if (window.refreshUI) refreshUI();
    closeEditProfile();
    if (window.showToast) showToast('✅ Profile updated!');
    if (window.SFX) SFX.ach();
    if (window.spawnEmojis) spawnEmojis('✨', 3);
  }

  // ── Search input hook (fallback) ─────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const srchInput = document.getElementById('srchInput');
    if (srchInput && window.doSearch) {
      srchInput.removeEventListener('input', doSearch);
      srchInput.addEventListener('input', doSearch);
    }
  });

  // ── Expose ───────────────────────────────────────────────
  window.toggleAboutCreator = toggleAboutCreator;
  window.downloadCV        = downloadCV;
  window.openEditProfile   = openEditProfile;
  window.closeEditProfile  = closeEditProfile;
  window.closeEditProfileEv = closeEditProfileEv;
  window.selectAvatar      = selectAvatar;
  window.saveEditProfile   = saveEditProfile;

}());
