// ═══════════════════════════════════════════════════════════
//  admin-tables.js — schema config for the generic CRUD engine
//
//  Each entry describes one Supabase table exactly as it exists
//  in the DB (per the task brief, section 5). Column names are
//  NOT renamed. `field.type` only controls which <input> the
//  admin UI renders — it does not change what's sent to Supabase.
//
//  field.type options: text | textarea | number | boolean |
//                       color | json | select
//
//  `pk`        — primary key column (used for update/delete .eq())
//  `pkEditable`— true if the admin can type the id on create
//                (matches this app's existing convention of short
//                hand-picked ids like 'u0' / 'l0a' — see data.js).
//                ASSUMPTION: flagged per-table below.
//  `orderBy`   — default sort column for the list view
//  `refersTo`  — { table, valueField, labelField } for a column
//                that is a foreign key, rendered as a <select>
//                of existing rows from the referenced table.
// ═══════════════════════════════════════════════════════════

const ADMIN_TABLES = {

  units: {
    label: 'Units',
    group: 'Live content',
    pk: 'id',
    pkEditable: true, // ASSUMPTION: id is a hand-picked text key (e.g. 'u1'), matching js/data.js unit ids
    orderBy: 'sort_order',
    fields: [
      { name: 'id', label: 'ID', type: 'text', required: true },
      { name: 'title', label: 'Title (EN)', type: 'text', required: true },
      { name: 'title_pt', label: 'Title (PT)', type: 'text' },
      { name: 'cefr', label: 'CEFR level', type: 'text' }, // ADDED: ui-curriculum.js filters units by unit.cefr — schema.sql adds this column
      { name: 'description', label: 'Description (EN)', type: 'textarea' },
      { name: 'description_pt', label: 'Description (PT)', type: 'textarea' },
      { name: 'color', label: 'Color', type: 'color' },
      { name: 'icon', label: 'Icon', type: 'text' },
      { name: 'premium', label: 'Premium', type: 'boolean' },
      { name: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },

  lessons: {
    label: 'Lessons',
    group: 'Live content',
    pk: 'id',
    pkEditable: true, // ASSUMPTION: matches lesson ids like 'l0a' in js/data.js
    orderBy: 'sort_order',
    fields: [
      { name: 'id', label: 'ID', type: 'text', required: true },
      { name: 'unit_id', label: 'Unit', type: 'select', required: true,
        refersTo: { table: 'units', valueField: 'id', labelField: 'title' } },
      { name: 'title', label: 'Title (EN)', type: 'text', required: true },
      { name: 'title_pt', label: 'Title (PT)', type: 'text' },
      { name: 'icon', label: 'Icon', type: 'text' },
      { name: 'xp', label: 'XP', type: 'number' },
      { name: 'questions', label: 'Questions (JSON)', type: 'json' },
      { name: 'sort_order', label: 'Sort order', type: 'number' },
    ],
  },

  grammar: {
    label: 'Grammar',
    group: 'Live content',
    pk: 'id',
    pkEditable: true,
    orderBy: 'id',
    fields: [
      { name: 'id', label: 'ID', type: 'text', required: true },
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'subtitle', label: 'Subtitle', type: 'text' },
      { name: 'formula', label: 'Formula', type: 'text' },
      { name: 'tip', label: 'Tip', type: 'textarea' },
      { name: 'examples', label: 'Examples (JSON)', type: 'json' },
      { name: 'quiz', label: 'Quiz (JSON)', type: 'json' },
      // ADDED: the static GRAM data (data.js) carries these too; schema.sql
      // section 3b adds the matching columns so migration doesn't drop them.
      { name: 'category', label: 'Category', type: 'text' },
      { name: 'country_code', label: 'Colour (hex)', type: 'color' },
      { name: 'icon', label: 'Icon', type: 'text' },
      { name: 'uses', label: 'Uses (JSON)', type: 'json' },
      { name: 'signals', label: 'Signals (JSON)', type: 'json' },
      { name: 'mistakes', label: 'Mistakes (JSON)', type: 'json' },
    ],
  },

  translations: {
    label: 'Translations',
    group: 'Live content',
    pk: 'id',
    pkEditable: false, // ASSUMPTION: id is a DB-generated key (uuid/serial); language+key_name are the natural key
    orderBy: 'created_at',
    fields: [
      { name: 'language', label: 'Language', type: 'text', required: true },
      { name: 'key_name', label: 'Key', type: 'text', required: true },
      { name: 'value', label: 'Value', type: 'textarea', required: true },
    ],
  },

  admin_content_units: {
    label: 'Units (draft)',
    group: 'Draft / admin content',
    pk: 'id',
    pkEditable: false, // ASSUMPTION: separate staging table, DB-generated id
    orderBy: 'order_index',
    fields: [
      { name: 'title', label: 'Title (EN)', type: 'text', required: true },
      { name: 'title_pt', label: 'Title (PT)', type: 'text' },
      { name: 'description', label: 'Description (EN)', type: 'textarea' },
      { name: 'description_pt', label: 'Description (PT)', type: 'textarea' },
      { name: 'color', label: 'Color', type: 'color' },
      { name: 'icon', label: 'Icon', type: 'text' },
      { name: 'premium', label: 'Premium', type: 'boolean' },
      { name: 'order_index', label: 'Order index', type: 'number' },
    ],
  },

  admin_content_lessons: {
    label: 'Lessons (draft)',
    group: 'Draft / admin content',
    pk: 'id',
    pkEditable: false,
    orderBy: 'order_index',
    fields: [
      { name: 'unit_id', label: 'Unit', type: 'select', required: true,
        refersTo: { table: 'admin_content_units', valueField: 'id', labelField: 'title' } },
      { name: 'title', label: 'Title (EN)', type: 'text', required: true },
      { name: 'title_pt', label: 'Title (PT)', type: 'text' },
      { name: 'icon', label: 'Icon', type: 'text' },
      { name: 'xp', label: 'XP', type: 'number' },
      { name: 'order_index', label: 'Order index', type: 'number' },
      { name: 'questions', label: 'Questions (JSON)', type: 'json' },
    ],
  },

  admin_content_grammar: {
    label: 'Grammar (draft)',
    group: 'Draft / admin content',
    pk: 'id',
    pkEditable: false,
    orderBy: 'order_index',
    fields: [
      { name: 'cat', label: 'Category', type: 'text' },
      { name: 'cc', label: 'CC', type: 'text' },
      { name: 'icon', label: 'Icon', type: 'text' },
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'sub', label: 'Subtitle', type: 'text' },
      { name: 'formula', label: 'Formula', type: 'text' },
      { name: 'uses', label: 'Uses (JSON)', type: 'json' },
      { name: 'examples', label: 'Examples (JSON)', type: 'json' },
      { name: 'signals', label: 'Signals (JSON)', type: 'json' },
      { name: 'tip', label: 'Tip', type: 'textarea' },
      { name: 'mistakes', label: 'Mistakes (JSON)', type: 'json' },
      { name: 'quiz', label: 'Quiz (JSON)', type: 'json' },
      { name: 'order_index', label: 'Order index', type: 'number' },
    ],
  },

  admin_translations: {
    label: 'Translations (draft)',
    group: 'Draft / admin content',
    pk: 'lang', // NOTE: no single-column PK given in the brief; see compositeKey below
    compositeKey: ['lang', 'key'], // lang+key together identify a row (id not listed for this table)
    pkEditable: true,
    orderBy: 'lang',
    fields: [
      { name: 'lang', label: 'Language', type: 'text', required: true },
      { name: 'key', label: 'Key', type: 'text', required: true },
      { name: 'value', label: 'Value', type: 'textarea', required: true },
    ],
  },
};

window.ADMIN_TABLES = ADMIN_TABLES;
