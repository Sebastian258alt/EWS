// ═══════════════════════════════════════════════════════════
//  admin-ui.js — generic CRUD renderer, driven by ADMIN_TABLES
// ═══════════════════════════════════════════════════════════

const AdminUI = (function () {
  const root = () => document.getElementById('view-root');

  function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  function matchObjFor(cfg, row) {
    if (cfg.compositeKey) {
      const m = {};
      cfg.compositeKey.forEach((k) => { m[k] = row[k]; });
      return m;
    }
    return { [cfg.pk]: row[cfg.pk] };
  }

  function rowLabel(cfg, row) {
    if (cfg.compositeKey) return cfg.compositeKey.map((k) => row[k]).join(' / ');
    return row[cfg.pk];
  }

  // ── Dashboard ────────────────────────────────────────────────
  async function renderDashboard() {
    root().innerHTML = `<h2 class="view-title">Dashboard</h2>
      <div class="card-grid" id="dash-cards"></div>`;
    const cardsEl = document.getElementById('dash-cards');
    const entries = Object.entries(ADMIN_TABLES);

    cardsEl.innerHTML = entries.map(([key, cfg]) => `
      <div class="stat-card">
        <div class="stat-label">${escapeHtml(cfg.label)}</div>
        <div class="stat-value" id="count-${key}">…</div>
      </div>`).join('');

    entries.forEach(async ([key]) => {
      try {
        const n = await AdminAPI.count(key);
        const el = document.getElementById(`count-${key}`);
        if (el) el.textContent = n.toLocaleString();
      } catch (e) {
        const el = document.getElementById(`count-${key}`);
        if (el) el.textContent = '—';
        console.error(`count(${key}) failed`, e);
      }
    });
  }

  // ── Foreign-key option cache ─────────────────────────────────
  const fkCache = {};
  async function getFkOptions(refersTo) {
    const cacheKey = refersTo.table;
    if (fkCache[cacheKey]) return fkCache[cacheKey];
    const rows = await AdminAPI.listAll(refersTo.table);
    const opts = rows.map((r) => ({
      value: r[refersTo.valueField],
      label: r[refersTo.labelField] ?? r[refersTo.valueField],
    }));
    fkCache[cacheKey] = opts;
    return opts;
  }

  // ── List view ────────────────────────────────────────────────
  async function renderList(tableKey) {
    const cfg = ADMIN_TABLES[tableKey];
    root().innerHTML = `
      <div class="view-header">
        <h2 class="view-title">${escapeHtml(cfg.label)}</h2>
        <button class="btn btn-primary" id="btn-new">+ New</button>
      </div>
      <div id="list-status" class="status-msg"></div>
      <div class="table-wrap"><table class="admin-table" id="admin-table">
        <thead><tr>${cfg.fields.map((f) => `<th>${escapeHtml(f.label)}</th>`).join('')}<th>Actions</th></tr></thead>
        <tbody id="table-body"><tr><td colspan="${cfg.fields.length + 1}">Loading…</td></tr></tbody>
      </table></div>`;

    document.getElementById('btn-new').addEventListener('click', () => renderForm(tableKey, null));

    try {
      const rows = await AdminAPI.list(tableKey, { orderBy: cfg.orderBy, ascending: true });
      const tbody = document.getElementById('table-body');
      if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="${cfg.fields.length + 1}">No rows yet.</td></tr>`;
        return;
      }
      tbody.innerHTML = rows.map((row) => `
        <tr>
          ${cfg.fields.map((f) => `<td>${renderCellValue(f, row[f.name])}</td>`).join('')}
          <td class="row-actions">
            <button class="btn btn-sm" data-act="edit">Edit</button>
            <button class="btn btn-sm btn-danger" data-act="del">Delete</button>
          </td>
        </tr>`).join('');

      [...tbody.querySelectorAll('tr')].forEach((tr, i) => {
        const row = rows[i];
        tr.querySelector('[data-act="edit"]').addEventListener('click', () => renderForm(tableKey, row));
        tr.querySelector('[data-act="del"]').addEventListener('click', () => confirmDelete(tableKey, row));
      });
    } catch (e) {
      console.error(e);
      document.getElementById('list-status').innerHTML =
        `<div class="alert alert-error">Couldn't load rows — ${escapeHtml(e.message || 'unknown error')}. If you're not an admin, this is expected (RLS is blocking access).</div>`;
      document.getElementById('table-body').innerHTML = `<tr><td colspan="${cfg.fields.length + 1}">—</td></tr>`;
    }
  }

  function renderCellValue(field, value) {
    if (field.type === 'boolean') return value ? '✅' : '—';
    if (field.type === 'json') {
      const s = typeof value === 'string' ? value : JSON.stringify(value);
      return `<code class="json-preview">${escapeHtml((s || '').slice(0, 60))}${(s || '').length > 60 ? '…' : ''}</code>`;
    }
    if (field.type === 'color' && value) {
      return `<span class="color-swatch" style="background:${escapeHtml(value)}"></span> ${escapeHtml(value)}`;
    }
    const s = value == null ? '' : String(value);
    return escapeHtml(s.length > 80 ? s.slice(0, 80) + '…' : s);
  }

  // ── Create / Edit form ──────────────────────────────────────
  async function renderForm(tableKey, existingRow) {
    const cfg = ADMIN_TABLES[tableKey];
    const isEdit = !!existingRow;

    root().innerHTML = `
      <div class="view-header">
        <h2 class="view-title">${isEdit ? 'Edit' : 'New'} ${escapeHtml(cfg.label)}</h2>
        <button class="btn" id="btn-back">← Back to list</button>
      </div>
      <div id="form-status" class="status-msg"></div>
      <form id="crud-form" class="crud-form"></form>`;

    document.getElementById('btn-back').addEventListener('click', () => renderList(tableKey));

    const form = document.getElementById('crud-form');

    for (const f of cfg.fields) {
      const disablePk = f.name === cfg.pk && isEdit && !cfg.compositeKey; // pk immutable once created
      const disableComposite = cfg.compositeKey?.includes(f.name) && isEdit;
      const disabled = disablePk || disableComposite;
      const val = existingRow ? existingRow[f.name] : '';
      const wrap = document.createElement('div');
      wrap.className = 'field';

      let inputHtml = '';
      if (f.type === 'textarea' || f.type === 'json') {
        const displayVal = f.type === 'json'
          ? (typeof val === 'string' ? val : (val ? JSON.stringify(val, null, 2) : ''))
          : (val ?? '');
        inputHtml = `<textarea name="${f.name}" rows="${f.type === 'json' ? 5 : 3}" ${disabled ? 'disabled' : ''}>${escapeHtml(displayVal)}</textarea>`;
      } else if (f.type === 'boolean') {
        inputHtml = `<input type="checkbox" name="${f.name}" ${val ? 'checked' : ''} ${disabled ? 'disabled' : ''} />`;
      } else if (f.type === 'color') {
        inputHtml = `<input type="text" name="${f.name}" value="${escapeHtml(val ?? '')}" placeholder="#3d7eff" ${disabled ? 'disabled' : ''} />`;
      } else if (f.type === 'number') {
        inputHtml = `<input type="number" name="${f.name}" value="${val ?? ''}" ${disabled ? 'disabled' : ''} />`;
      } else if (f.type === 'select' && f.refersTo) {
        inputHtml = `<select name="${f.name}" ${disabled ? 'disabled' : ''}><option value="">Loading…</option></select>`;
      } else {
        inputHtml = `<input type="text" name="${f.name}" value="${escapeHtml(val ?? '')}" ${disabled ? 'disabled' : ''} />`;
      }

      wrap.innerHTML = `
        <label>${escapeHtml(f.label)}${f.required ? ' <span class="req">*</span>' : ''}</label>
        ${inputHtml}
        ${disabled ? '<div class="hint">Key field — cannot be changed after creation.</div>' : ''}`;
      form.appendChild(wrap);

      if (f.type === 'select' && f.refersTo) {
        getFkOptions(f.refersTo).then((opts) => {
          const sel = form.querySelector(`[name="${f.name}"]`);
          sel.innerHTML =
            `<option value="">— choose —</option>` +
            opts.map((o) => `<option value="${escapeHtml(o.value)}" ${String(o.value) === String(val) ? 'selected' : ''}>${escapeHtml(o.label)} (${escapeHtml(o.value)})</option>`).join('');
        }).catch((e) => console.error('fk load failed', e));
      }
    }

    const actions = document.createElement('div');
    actions.className = 'form-actions';
    actions.innerHTML = `
      <button type="submit" class="btn btn-primary">${isEdit ? 'Save changes' : 'Create'}</button>
      <button type="button" class="btn" id="btn-cancel">Cancel</button>`;
    form.appendChild(actions);
    form.querySelector('#btn-cancel').addEventListener('click', () => renderList(tableKey));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusEl = document.getElementById('form-status');
      statusEl.innerHTML = '';

      const payload = {};
      try {
        for (const f of cfg.fields) {
          const disablePk = f.name === cfg.pk && isEdit && !cfg.compositeKey;
          const disableComposite = cfg.compositeKey?.includes(f.name) && isEdit;
          if (disablePk || disableComposite) continue; // don't send immutable key fields on edit

          const el = form.querySelector(`[name="${f.name}"]`);
          if (f.type === 'boolean') {
            payload[f.name] = el.checked;
          } else if (f.type === 'number') {
            payload[f.name] = el.value === '' ? null : Number(el.value);
          } else if (f.type === 'json') {
            const raw = el.value.trim();
            payload[f.name] = raw ? JSON.parse(raw) : null; // throws on invalid JSON — caught below
          } else {
            payload[f.name] = el.value === '' ? null : el.value;
          }
        }
      } catch (err) {
        statusEl.innerHTML = `<div class="alert alert-error">Invalid JSON in one of the fields: ${escapeHtml(err.message)}</div>`;
        return;
      }

      try {
        if (isEdit) {
          await AdminAPI.updateRow(tableKey, matchObjFor(cfg, existingRow), payload);
        } else {
          await AdminAPI.insertRow(tableKey, payload);
        }
        renderList(tableKey);
      } catch (err) {
        console.error(err);
        statusEl.innerHTML = `<div class="alert alert-error">Save failed — ${escapeHtml(err.message || 'unknown error')}.</div>`;
      }
    });
  }

  // ── Delete confirmation ─────────────────────────────────────
  function confirmDelete(tableKey, row) {
    const cfg = ADMIN_TABLES[tableKey];
    const label = rowLabel(cfg, row);
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal">
        <h3>Delete this row?</h3>
        <p>This will permanently delete <strong>${escapeHtml(String(label))}</strong> from <code>${escapeHtml(tableKey)}</code>. This cannot be undone.</p>
        <div class="form-actions">
          <button class="btn btn-danger" id="modal-confirm">Delete</button>
          <button class="btn" id="modal-cancel">Cancel</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    overlay.querySelector('#modal-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#modal-confirm').addEventListener('click', async () => {
      try {
        await AdminAPI.deleteRow(tableKey, matchObjFor(cfg, row));
        overlay.remove();
        renderList(tableKey);
      } catch (e) {
        console.error(e);
        overlay.querySelector('.modal').insertAdjacentHTML(
          'beforeend',
          `<div class="alert alert-error">Delete failed — ${escapeHtml(e.message || 'unknown error')}.</div>`
        );
      }
    });
  }

  return { renderDashboard, renderList, renderForm };
})();

window.AdminUI = AdminUI;
