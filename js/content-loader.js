// ═══════════════════════════════════════════════════════════
//  content-loader.js — Supabase-first, static-fallback content
//  English With Sebastian
//
//  Loaded AFTER data.js and supabase-config.js, and called ONCE
//  (awaited) before window.ewsInit() renders the first screen —
//  see the one-line change to index.html's loader described in
//  the accompanying notes.
//
//  Strategy (deliberately different per table — see notes below):
//
//  • units + lessons: ALL-OR-NOTHING per table pair.
//    If Supabase has ANY rows in `units`, the static UNITS array
//    is REPLACED with what Supabase returns (lessons nested under
//    their unit, sorted by sort_order). If `units` is empty or
//    unreachable, the bundled static UNITS stays exactly as it
//    is today — zero behaviour change.
//    ⚠️ TRADE-OFF: if an admin adds just 1 unit to Supabase before
//    finishing the migration, the app will show ONLY that unit and
//    hide the other bundled units, because this is all-or-nothing,
//    not a merge. Don't add units in Supabase until you've run the
//    full seed_units.sql + seed_lessons.sql, or you'll temporarily
//    "lose" the rest of the curriculum from the learner's view.
//
//  • grammar: MERGE BY ID.
//    Every Supabase row overrides the static GRAM entry with the
//    same id (or is appended if it's a new id). Static entries with
//    no matching Supabase row are left untouched. This is safe to
//    populate gradually.
//
//  • translations: MERGE BY (language, key).
//    Same idea, per language: only the keys present in Supabase are
//    overridden; everything else keeps the bundled string. Safe to
//    populate gradually.
// ═══════════════════════════════════════════════════════════

(function () {
  const TIMEOUT_MS = 4000;

  function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise((resolve) => setTimeout(() => resolve(null), ms)),
    ]);
  }

  async function safeSelect(sb, table) {
    try {
      const { data, error } = await withTimeout(sb.from(table).select('*'), TIMEOUT_MS);
      if (error) {
        console.warn(`[content-loader] ${table} fetch error, using static fallback:`, error.message);
        return null;
      }
      return data; // null on timeout, [] if genuinely empty, array otherwise
    } catch (e) {
      console.warn(`[content-loader] ${table} fetch threw, using static fallback:`, e);
      return null;
    }
  }

  // ── units + lessons (all-or-nothing) ────────────────────────
  async function refreshUnitsAndLessons(sb) {
    const unitRows = await safeSelect(sb, 'units');
    if (!unitRows || unitRows.length === 0) {
      console.info('[content-loader] units: no Supabase rows — keeping bundled static curriculum.');
      return;
    }

    const lessonRows = (await safeSelect(sb, 'lessons')) || [];

    const lessonsByUnit = {};
    lessonRows
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .forEach((row) => {
        const payload = row.questions || {};
        const lesson = {
          id: row.id,
          title: row.title,
          titlePt: row.title_pt,
          icon: row.icon,
          xp: row.xp,
          learn: payload.learn || undefined,
          qs: payload.qs || [],
        };
        (lessonsByUnit[row.unit_id] = lessonsByUnit[row.unit_id] || []).push(lesson);
      });

    const newUnits = unitRows
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map((row) => ({
        id: row.id,
        cefr: row.cefr,
        title: row.title,
        titlePt: row.title_pt,
        desc: row.description,
        descPt: row.description_pt,
        color: row.color,
        icon: row.icon,
        premium: !!row.premium,
        lessons: lessonsByUnit[row.id] || [],
      }));

    // UNITS is `const` — mutate the array in place so every existing
    // reference to it (ui-curriculum.js, lesson.js, quiz.js…) sees the update.
    if (typeof UNITS !== 'undefined') {
      UNITS.length = 0;
      UNITS.push(...newUnits);
      console.info(`[content-loader] units: loaded ${newUnits.length} units / ${lessonRows.length} lessons from Supabase.`);
    }
  }

  // ── grammar (merge by id) ────────────────────────────────────
  async function refreshGrammar(sb) {
    const rows = await safeSelect(sb, 'grammar');
    if (!rows || rows.length === 0 || typeof GRAM === 'undefined') return;

    const byId = new Map(GRAM.map((g) => [g.id, g]));
    rows.forEach((row) => {
      const mapped = {
        id: row.id,
        cat: row.category,
        cc: row.country_code,
        icon: row.icon,
        title: row.title,
        sub: row.subtitle,
        formula: row.formula,
        uses: row.uses || [],
        examples: row.examples || [],
        signals: row.signals || [],
        tip: row.tip,
        mistakes: row.mistakes || [],
        quiz: row.quiz || [],
      };
      byId.set(row.id, mapped); // overrides existing id, or adds a new one
    });

    GRAM.length = 0;
    GRAM.push(...byId.values());
    console.info(`[content-loader] grammar: merged ${rows.length} Supabase rows into ${GRAM.length} total rules.`);
  }

  // ── translations (merge by language + key) ───────────────────
  async function refreshTranslations(sb) {
    const rows = await safeSelect(sb, 'translations');
    if (!rows || rows.length === 0 || typeof TRANSLATIONS === 'undefined') return;

    let count = 0;
    rows.forEach((row) => {
      if (!TRANSLATIONS[row.language]) TRANSLATIONS[row.language] = {};
      TRANSLATIONS[row.language][row.key_name] = row.value;
      count++;
    });
    console.info(`[content-loader] translations: merged ${count} Supabase rows across ${new Set(rows.map(r => r.language)).size} language(s).`);
  }

  async function refresh() {
    if (!window.isSupabaseConfigured || !window.isSupabaseConfigured()) {
      console.info('[content-loader] Supabase not configured — using bundled static content only.');
      return;
    }
    const sb = window.createSupabaseClient();
    if (!sb) return;

    // Run independently so one failing table doesn't block the others.
    await Promise.all([
      refreshUnitsAndLessons(sb),
      refreshGrammar(sb),
      refreshTranslations(sb),
    ]);
  }

  window.EWSContent = { refresh };
})();
