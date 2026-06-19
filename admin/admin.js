let sb = null;
let unitsData = [];
let grammarData = [];
let translationsData = {};

// ─── Auth (unchanged) ──────────────────────────────────────────────

async function initAdmin() {
  sb = getAdminSupabase();
  if (!sb) {
    document.getElementById('loginError').textContent = 'Supabase not configured.';
    return;
  }

  const { data: { session } } = await sb.auth.getSession();
  if (session && await isAdminUser()) {
    showDashboard();
  } else {
    document.getElementById('loginContainer').style.display = 'flex';
  }

  document.getElementById('loginBtn').onclick = async () => {
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      document.getElementById('loginError').textContent = error.message;
      return;
    }
    if (await isAdminUser()) {
      showDashboard();
    } else {
      await sb.auth.signOut();
      document.getElementById('loginError').textContent = 'You are not authorized as admin.';
    }
  };

  document.getElementById('logoutBtn').onclick = async () => {
    await sb.auth.signOut();
    location.reload();
  };
}

function showDashboard() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  loadAllData();
}

// ─── Data loading ──────────────────────────────────────────────────

async function loadAllData() {
  await Promise.all([loadUnits(), loadGrammar(), loadTranslations()]);
  renderAll();
}

async function loadUnits() {
  try {
    const { data, error } = await sb
      .from('units')
      .select('*, lessons(*)')
      .order('sort_order', { ascending: true });
    if (error) throw error;
    unitsData = data || [];
    unitsData.forEach(u => {
      if (u.lessons) u.lessons.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
    });
  } catch (err) {
    console.error('Error loading units:', err);
    document.getElementById('unitsList').innerHTML = `<div class="error">Failed to load units: ${err.message}</div>`;
  }
}

async function loadGrammar() {
  try {
    const { data, error } = await sb
      .from('grammar')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) throw error;
    grammarData = data || [];
  } catch (err) {
    console.error('Error loading grammar:', err);
    document.getElementById('grammarList').innerHTML = `<div class="error">Failed to load grammar: ${err.message}</div>`;
  }
}

async function loadTranslations() {
  try {
    const { data, error } = await sb
      .from('translations')
      .select('*')
      .order('language', { ascending: true });
    if (error) throw error;
    translationsData = {};
    (data || []).forEach(row => {
      if (!translationsData[row.language]) translationsData[row.language] = {};
      translationsData[row.language][row.key_name] = row.value;
    });
  } catch (err) {
    console.error('Error loading translations:', err);
    document.getElementById('translationsList').innerHTML = `<div class="error">Failed to load translations: ${err.message}</div>`;
  }
}

// ─── Rendering ─────────────────────────────────────────────────────

function renderAll() {
  renderUnitsEditor();
  renderGrammarEditor();
  renderTranslationsEditor();
  setupAddButtons();
}

function renderUnitsEditor() {
  const container = document.getElementById('unitsList');
  if (!unitsData.length) {
    container.innerHTML = '<div class="card">No units found. Create one!</div>';
    return;
  }
  container.innerHTML = '';
  unitsData.forEach((unit, uIdx) => {
    const unitDiv = document.createElement('div');
    unitDiv.className = 'card';
    unitDiv.dataset.unitId = unit.id;
    unitDiv.innerHTML = `
      <h3>${escapeHtml(unit.title)} (${unit.premium ? 'Premium' : 'Free'})</h3>
      <label>Title (EN):</label> <input class="unit-title-en" value="${escapeHtml(unit.title)}" data-unit-id="${unit.id}">
      <label>Title (PT):</label> <input class="unit-title-pt" value="${escapeHtml(unit.title_pt || '')}" data-unit-id="${unit.id}">
      <label>Description (EN):</label> <textarea class="unit-desc-en" data-unit-id="${unit.id}">${escapeHtml(unit.description || '')}</textarea>
      <label>Description (PT):</label> <textarea class="unit-desc-pt" data-unit-id="${unit.id}">${escapeHtml(unit.description_pt || '')}</textarea>
      <label>Color:</label> <input class="unit-color" value="${escapeHtml(unit.color || '#2979ff')}" data-unit-id="${unit.id}">
      <label>Icon:</label> <input class="unit-icon" value="${escapeHtml(unit.icon || '📚')}" data-unit-id="${unit.id}">
      <label>Premium:</label> <input type="checkbox" class="unit-premium" ${unit.premium ? 'checked' : ''} data-unit-id="${unit.id}">
      <div style="margin:0.5rem 0;">
        <button class="save unit-save-btn" data-unit-id="${unit.id}">💾 Save Unit</button>
        <button class="danger delete-unit-btn" data-unit-id="${unit.id}">🗑️ Delete Unit</button>
      </div>
      <h4>Lessons</h4>
      <div class="lessons-container" data-unit-id="${unit.id}"></div>
      <button class="add-lesson-btn" data-unit-id="${unit.id}">+ Add Lesson</button>
    `;
    container.appendChild(unitDiv);

    const lessonsContainer = unitDiv.querySelector('.lessons-container');
    const lessons = unit.lessons || [];
    lessons.forEach((lesson, lIdx) => {
      const lessonDiv = document.createElement('div');
      lessonDiv.className = 'lesson-item';
      lessonDiv.dataset.lessonId = lesson.id;
      lessonDiv.innerHTML = `
        <strong>${escapeHtml(lesson.title)}</strong>
        <label>Title EN:</label> <input class="lesson-title-en" value="${escapeHtml(lesson.title)}" data-lesson-id="${lesson.id}">
        <label>Title PT:</label> <input class="lesson-title-pt" value="${escapeHtml(lesson.title_pt || '')}" data-lesson-id="${lesson.id}">
        <label>Icon:</label> <input class="lesson-icon" value="${escapeHtml(lesson.icon || '📖')}" data-lesson-id="${lesson.id}">
        <label>XP:</label> <input type="number" class="lesson-xp" value="${lesson.xp || 10}" data-lesson-id="${lesson.id}">
        <label>Questions (JSON):</label>
        <textarea class="lesson-questions" rows="4" data-lesson-id="${lesson.id}">${escapeHtml(JSON.stringify(lesson.questions || [], null, 2))}</textarea>
        <div style="margin-top:0.5rem;">
          <button class="save lesson-save-btn" data-lesson-id="${lesson.id}">💾 Save Lesson</button>
          <button class="danger delete-lesson-btn" data-lesson-id="${lesson.id}">🗑️ Delete Lesson</button>
        </div>
      `;
      lessonsContainer.appendChild(lessonDiv);
    });

    attachUnitEvents(unitDiv);
  });
}

function attachUnitEvents(container) {
  container.querySelector('.unit-save-btn')?.addEventListener('click', async (e) => {
    const unitId = e.target.dataset.unitId;
    await saveUnit(unitId);
  });
  container.querySelector('.delete-unit-btn')?.addEventListener('click', async (e) => {
    const unitId = e.target.dataset.unitId;
    if (confirm('Delete this unit and all its lessons?')) {
      await deleteUnit(unitId);
    }
  });
  container.querySelector('.add-lesson-btn')?.addEventListener('click', async (e) => {
    const unitId = e.target.dataset.unitId;
    await addLesson(unitId);
  });
  container.querySelectorAll('.lesson-save-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const lessonId = e.target.dataset.lessonId;
      await saveLesson(lessonId);
    });
  });
  container.querySelectorAll('.delete-lesson-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const lessonId = e.target.dataset.lessonId;
      if (confirm('Delete this lesson?')) {
        await deleteLesson(lessonId);
      }
    });
  });
}

function renderGrammarEditor() {
  const container = document.getElementById('grammarList');
  if (!grammarData.length) {
    container.innerHTML = '<div class="card">No grammar topics found.</div>';
    return;
  }
  container.innerHTML = '';
  grammarData.forEach((g, idx) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.grammarId = g.id;
    div.innerHTML = `
      <h3>${escapeHtml(g.title)}</h3>
      <label>Title:</label> <input class="gram-title" value="${escapeHtml(g.title)}" data-grammar-id="${g.id}">
      <label>Subtitle:</label> <input class="gram-sub" value="${escapeHtml(g.subtitle || '')}" data-grammar-id="${g.id}">
      <label>Formula:</label> <input class="gram-formula" value="${escapeHtml(g.formula || '')}" data-grammar-id="${g.id}">
      <label>Tip:</label> <textarea class="gram-tip" data-grammar-id="${g.id}">${escapeHtml(g.tip || '')}</textarea>
      <label>Examples (JSON):</label> <textarea class="gram-examples" rows="3" data-grammar-id="${g.id}">${escapeHtml(JSON.stringify(g.examples || [], null, 2))}</textarea>
      <label>Quiz (JSON):</label> <textarea class="gram-quiz" rows="3" data-grammar-id="${g.id}">${escapeHtml(JSON.stringify(g.quiz || [], null, 2))}</textarea>
      <div style="margin-top:0.5rem;">
        <button class="save gram-save-btn" data-grammar-id="${g.id}">💾 Save Grammar</button>
        <button class="danger delete-grammar-btn" data-grammar-id="${g.id}">🗑️ Delete</button>
      </div>
    `;
    container.appendChild(div);
    attachGrammarEvents(div);
  });
}

function attachGrammarEvents(container) {
  container.querySelector('.gram-save-btn')?.addEventListener('click', async (e) => {
    const id = e.target.dataset.grammarId;
    await saveGrammar(id);
  });
  container.querySelector('.delete-grammar-btn')?.addEventListener('click', async (e) => {
    const id = e.target.dataset.grammarId;
    if (confirm('Delete this grammar topic?')) {
      await deleteGrammar(id);
    }
  });
}

function renderTranslationsEditor() {
  const container = document.getElementById('translationsList');
  const langKeys = Object.keys(translationsData);
  if (!langKeys.length) {
    container.innerHTML = '<div class="card">No translations found.</div>';
    return;
  }
  container.innerHTML = '';
  for (const lang of langKeys) {
    const langDiv = document.createElement('div');
    langDiv.className = 'card';
    langDiv.dataset.lang = lang;
    langDiv.innerHTML = `<h3>${lang}</h3><div class="trans-entries"></div><button class="add-translation-btn" data-lang="${lang}">+ Add Key</button>`;
    container.appendChild(langDiv);
    const entriesContainer = langDiv.querySelector('.trans-entries');
    const dict = translationsData[lang];
    for (const [key, val] of Object.entries(dict)) {
      const row = document.createElement('div');
      row.style.margin = '0.5rem 0';
      row.innerHTML = `
        <label>${escapeHtml(key)}:</label>
        <input class="trans-val" data-lang="${lang}" data-key="${escapeHtml(key)}" value="${escapeHtml(val)}">
        <button class="danger delete-trans-btn" data-lang="${lang}" data-key="${escapeHtml(key)}">🗑️</button>
      `;
      entriesContainer.appendChild(row);
    }
    attachTranslationEvents(langDiv);
  }
}

function attachTranslationEvents(container) {
  container.querySelectorAll('.trans-val').forEach(inp => {
    inp.addEventListener('change', async (e) => {
      const lang = e.target.dataset.lang;
      const key = e.target.dataset.key;
      const value = e.target.value;
      await saveTranslation(lang, key, value);
    });
  });
  container.querySelectorAll('.delete-trans-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const lang = e.target.dataset.lang;
      const key = e.target.dataset.key;
      if (confirm(`Delete translation "${key}"?`)) {
        await deleteTranslation(lang, key);
      }
    });
  });
  container.querySelector('.add-translation-btn')?.addEventListener('click', async (e) => {
    const lang = e.target.dataset.lang;
    const newKey = prompt('Enter new translation key:');
    if (newKey && newKey.trim()) {
      await addTranslation(lang, newKey.trim());
    }
  });
}

// ─── Add buttons (global) ────────────────────────────────────────

function setupAddButtons() {
  document.getElementById('addUnitBtn').onclick = async () => {
    await addUnit();
  };
  document.getElementById('addGrammarBtn').onclick = async () => {
    await addGrammar();
  };
  document.getElementById('addTranslationBtn').onclick = async () => {
    const lang = prompt('Enter language code (e.g., en, pt, mz):');
    if (lang && lang.trim()) {
      const key = prompt('Enter translation key:');
      if (key && key.trim()) {
        await addTranslation(lang.trim(), key.trim());
      }
    }
  };
}

// ─── CRUD Operations ──────────────────────────────────────────────

// ----- Units -----
async function addUnit() {
  const newUnit = {
    title: 'New Unit',
    title_pt: '',
    description: '',
    description_pt: '',
    color: '#2979ff',
    icon: '📚',
    premium: false,
    sort_order: unitsData.length,
  };
  try {
    const { data, error } = await sb.from('units').insert(newUnit).select().single();
    if (error) throw error;
    unitsData.push(data);
    renderUnitsEditor();
    showStatus('Unit added!', 'success');
  } catch (err) {
    showStatus('Error adding unit: ' + err.message, 'error');
  }
}

async function saveUnit(unitId) {
  const container = document.querySelector(`[data-unit-id="${unitId}"]`);
  if (!container) return;
  const title = container.querySelector('.unit-title-en').value;
  const titlePt = container.querySelector('.unit-title-pt').value;
  const desc = container.querySelector('.unit-desc-en').value;
  const descPt = container.querySelector('.unit-desc-pt').value;
  const color = container.querySelector('.unit-color').value;
  const icon = container.querySelector('.unit-icon').value;
  const premium = container.querySelector('.unit-premium').checked;

  const updates = { title, title_pt: titlePt, description: desc, description_pt: descPt, color, icon, premium };
  try {
    const { error } = await sb.from('units').update(updates).eq('id', unitId);
    if (error) throw error;
    const unit = unitsData.find(u => u.id === unitId);
    if (unit) Object.assign(unit, updates);
    showStatus('Unit saved!', 'success');
  } catch (err) {
    showStatus('Error saving unit: ' + err.message, 'error');
  }
}

async function deleteUnit(unitId) {
  try {
    const { error } = await sb.from('units').delete().eq('id', unitId);
    if (error) throw error;
    unitsData = unitsData.filter(u => u.id !== unitId);
    renderUnitsEditor();
    showStatus('Unit deleted.', 'success');
  } catch (err) {
    showStatus('Error deleting unit: ' + err.message, 'error');
  }
}

// ----- Lessons -----
async function addLesson(unitId) {
  const newLesson = {
    unit_id: unitId,
    title: 'New Lesson',
    title_pt: '',
    icon: '📖',
    xp: 10,
    questions: [],
    sort_order: 0,
  };
  try {
    const { data, error } = await sb.from('lessons').insert(newLesson).select().single();
    if (error) throw error;
    const unit = unitsData.find(u => u.id === unitId);
    if (unit) {
      if (!unit.lessons) unit.lessons = [];
      unit.lessons.push(data);
    }
    renderUnitsEditor();
    showStatus('Lesson added!', 'success');
  } catch (err) {
    showStatus('Error adding lesson: ' + err.message, 'error');
  }
}

async function saveLesson(lessonId) {
  const container = document.querySelector(`[data-lesson-id="${lessonId}"]`);
  if (!container) return;
  const title = container.querySelector('.lesson-title-en').value;
  const titlePt = container.querySelector('.lesson-title-pt').value;
  const icon = container.querySelector('.lesson-icon').value;
  const xp = parseInt(container.querySelector('.lesson-xp').value) || 10;
  const questionsText = container.querySelector('.lesson-questions').value;
  let questions;
  try {
    questions = JSON.parse(questionsText);
  } catch (e) {
    showStatus('Invalid JSON in Questions field.', 'error');
    return;
  }

  const updates = { title, title_pt: titlePt, icon, xp, questions };
  try {
    const { error } = await sb.from('lessons').update(updates).eq('id', lessonId);
    if (error) throw error;
    for (const unit of unitsData) {
      const lesson = unit.lessons?.find(l => l.id === lessonId);
      if (lesson) { Object.assign(lesson, updates); break; }
    }
    showStatus('Lesson saved!', 'success');
  } catch (err) {
    showStatus('Error saving lesson: ' + err.message, 'error');
  }
}

async function deleteLesson(lessonId) {
  try {
    const { error } = await sb.from('lessons').delete().eq('id', lessonId);
    if (error) throw error;
    for (const unit of unitsData) {
      if (unit.lessons) {
        unit.lessons = unit.lessons.filter(l => l.id !== lessonId);
      }
    }
    renderUnitsEditor();
    showStatus('Lesson deleted.', 'success');
  } catch (err) {
    showStatus('Error deleting lesson: ' + err.message, 'error');
  }
}

// ----- Grammar -----
async function addGrammar() {
  const newGram = {
    title: 'New Grammar Topic',
    subtitle: '',
    formula: '',
    tip: '',
    examples: [],
    quiz: [],
  };
  try {
    const { data, error } = await sb.from('grammar').insert(newGram).select().single();
    if (error) throw error;
    grammarData.push(data);
    renderGrammarEditor();
    showStatus('Grammar topic added!', 'success');
  } catch (err) {
    showStatus('Error adding grammar: ' + err.message, 'error');
  }
}

async function saveGrammar(grammarId) {
  const container = document.querySelector(`[data-grammar-id="${grammarId}"]`);
  if (!container) return;
  const title = container.querySelector('.gram-title').value;
  const subtitle = container.querySelector('.gram-sub').value;
  const formula = container.querySelector('.gram-formula').value;
  const tip = container.querySelector('.gram-tip').value;
  const examplesText = container.querySelector('.gram-examples').value;
  const quizText = container.querySelector('.gram-quiz').value;
  let examples, quiz;
  try {
    examples = JSON.parse(examplesText);
    quiz = JSON.parse(quizText);
  } catch (e) {
    showStatus('Invalid JSON in Examples or Quiz.', 'error');
    return;
  }

  const updates = { title, subtitle, formula, tip, examples, quiz };
  try {
    const { error } = await sb.from('grammar').update(updates).eq('id', grammarId);
    if (error) throw error;
    const gram = grammarData.find(g => g.id === grammarId);
    if (gram) Object.assign(gram, updates);
    showStatus('Grammar saved!', 'success');
  } catch (err) {
    showStatus('Error saving grammar: ' + err.message, 'error');
  }
}

async function deleteGrammar(grammarId) {
  try {
    const { error } = await sb.from('grammar').delete().eq('id', grammarId);
    if (error) throw error;
    grammarData = grammarData.filter(g => g.id !== grammarId);
    renderGrammarEditor();
    showStatus('Grammar deleted.', 'success');
  } catch (err) {
    showStatus('Error deleting grammar: ' + err.message, 'error');
  }
}

// ----- Translations -----
async function addTranslation(lang, key) {
  const value = prompt(`Enter value for "${key}" in ${lang}:`) || '';
  try {
    const { data, error } = await sb.from('translations').insert({
      language: lang,
      key_name: key,
      value: value,
    }).select().single();
    if (error) throw error;
    if (!translationsData[lang]) translationsData[lang] = {};
    translationsData[lang][key] = value;
    renderTranslationsEditor();
    showStatus('Translation added!', 'success');
  } catch (err) {
    showStatus('Error adding translation: ' + err.message, 'error');
  }
}

async function saveTranslation(lang, key, value) {
  try {
    const { error } = await sb
      .from('translations')
      .update({ value })
      .eq('language', lang)
      .eq('key_name', key);
    if (error) throw error;
    if (translationsData[lang]) translationsData[lang][key] = value;
    showStatus('Translation saved!', 'success');
  } catch (err) {
    showStatus('Error saving translation: ' + err.message, 'error');
  }
}

async function deleteTranslation(lang, key) {
  try {
    const { error } = await sb
      .from('translations')
      .delete()
      .eq('language', lang)
      .eq('key_name', key);
    if (error) throw error;
    if (translationsData[lang]) delete translationsData[lang][key];
    renderTranslationsEditor();
    showStatus('Translation deleted.', 'success');
  } catch (err) {
    showStatus('Error deleting translation: ' + err.message, 'error');
  }
}

// ─── Utilities ────────────────────────────────────────────────────

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    if (m === '"') return '&quot;';
    return m;
  });
}

function showStatus(msg, type = 'success') {
  const el = document.getElementById('statusMsg');
  if (el) {
    el.textContent = msg;
    el.className = type;
    setTimeout(() => { el.textContent = ''; el.className = ''; }, 4000);
  }
}

// ─── Tabs ──────────────────────────────────────────────────────────

document.addEventListener('click', function(e) {
  const tabBtn = e.target.closest('.tab-btn');
  if (tabBtn) {
    const tabName = tabBtn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabBtn.classList.add('active');
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(tabName + 'Tab').classList.add('active');
  }
});

// ─── Init ──────────────────────────────────────────────────────────

initAdmin();
