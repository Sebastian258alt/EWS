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
//  • units + lessons: ALL-OR-NOTHING per table pair, but LAZY.
//    If Supabase has ANY rows in `units`, the static UNITS array
//    is REPLACED with what Supabase returns — same all-or-nothing
//    rule as before. If `units` is empty or unreachable, the bundled
//    static UNITS stays exactly as it is today — zero behaviour change.
//    ⚠️ TRADE-OFF: if an admin adds just 1 unit to Supabase before
//    finishing the migration, the app will show ONLY that unit and
//    hide the other bundled units, because this is all-or-nothing,
//    not a merge. Don't add units in Supabase until you've run the
//    full seed_units.sql + seed_lessons.sql, or you'll temporarily
//    "lose" the rest of the curriculum from the learner's view.
//
//    Unlike the old version of this function, the initial fetch only
//    pulls metadata (titles/icons/xp) — NOT `lessons.questions`, which
//    holds the full learn/qs payload. Units come back marked `_lazy`,
//    same convention as js/lazy-loader.js's file-backed stubs. Real
//    lesson content for a unit is fetched on demand, one unit_id at a
//    time, the first time window.EWSEnsureUnit(unitId) is called — see
//    window.__EWS_REGISTER_LAZY_UNITS in js/lazy-loader.js. This keeps
//    the manifest-driven lazy loading intact even once Supabase is the
//    content source, instead of silently downloading every unit's full
//    content on every app load.
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

  async function safeSelect(sb, table, columns) {
    try {
      const { data, error } = await withTimeout(sb.from(table).select(columns || '*'), TIMEOUT_MS);
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

  // Fetch one unit's full lesson content (learn/qs included) from Supabase.
  // Called lazily, at most once per unit, by js/lazy-loader.js the first
  // time that unit is actually opened — see __EWS_REGISTER_LAZY_UNITS below.
  async function fetchFullUnit(sb, unitRow) {
    const { data: lessonRows, error } = await withTimeout(
      sb.from('lessons').select('*').eq('unit_id', unitRow.id).order('sort_order'),
      TIMEOUT_MS
    );
    if (error) {
      throw new Error(`[content-loader] lessons fetch error for unit ${unitRow.id}: ${error.message}`);
    }
    if (!lessonRows) {
      // Timed out — same failure mode as a 404'd unit .js file: reject so
      // the caller's promise chain sees it, instead of silently pretending
      // this unit loaded with zero lessons.
      throw new Error(`[content-loader] lessons fetch timed out for unit ${unitRow.id}`);
    }

    const lessons = lessonRows
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map((row) => {
        const payload = row.questions || {};
        return {
          id: row.id,
          title: row.title,
          titlePt: row.title_pt,
          icon: row.icon,
          xp: row.xp,
          learn: payload.learn || undefined,
          qs: payload.qs || [],
        };
      });

    return {
      id: unitRow.id,
      cefr: unitRow.cefr,
      title: unitRow.title,
      titlePt: unitRow.title_pt,
      desc: unitRow.description,
      descPt: unitRow.description_pt,
      color: unitRow.color,
      icon: unitRow.icon,
      premium: !!unitRow.premium,
      lessons,
    };
  }

  // ── units + lessons (all-or-nothing, but lazy) ────────────────
  async function refreshUnitsAndLessons(sb) {
    const unitRows = await safeSelect(sb, 'units');
    if (!unitRows || unitRows.length === 0) {
      console.info('[content-loader] units: no Supabase rows — keeping bundled static curriculum.');
      return;
    }

    // Step 2.3A Fix #2: Supabase is about to become the authoritative
    // curriculum source (all-or-nothing replacement below). Drop the old
    // bundled file-based unit locations from js/lazy-loader.js now, so a
    // later EWSEnsureAllUnits() call (daily challenge) can't resurrect the
    // bundled curriculum back into UNITS alongside/over the Supabase one.
    if (window.__EWS_CLEAR_FILE_LOCATIONS) {
      window.__EWS_CLEAR_FILE_LOCATIONS();
    } else {
      console.warn('[content-loader] js/lazy-loader.js missing __EWS_CLEAR_FILE_LOCATIONS — bundled units may resurrect via EWSEnsureAllUnits().');
    }

    // Metadata only — deliberately omits `questions` (learn/qs), which is
    // what makes this lazy. sort_order is needed for ordering lessons
    // within a unit but isn't shown in the UI, so it's dropped after sort.
    const lessonMetaRows = (await safeSelect(
      sb, 'lessons', 'id, unit_id, title, title_pt, icon, xp, sort_order'
    )) || [];

    const lessonsByUnit = {};
    lessonMetaRows
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .forEach((row) => {
        const lesson = {
          id: row.id,
          title: row.title,
          titlePt: row.title_pt,
          icon: row.icon,
          xp: row.xp,
        };
        (lessonsByUnit[row.unit_id] = lessonsByUnit[row.unit_id] || []).push(lesson);
      });

    const unitRowById = {};
    unitRows.forEach((row) => { unitRowById[row.id] = row; });

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
        _lazy: true, // no learn/qs yet — swapped for the real unit on demand
      }));

    // UNITS is `const` — mutate the array in place so every existing
    // reference to it (ui-curriculum.js, lesson.js, quiz.js…) sees the update.
    if (typeof UNITS !== 'undefined') {
      UNITS.length = 0;
      UNITS.push(...newUnits);
      console.info(`[content-loader] units: registered ${newUnits.length} lazy units / ${lessonMetaRows.length} lesson stubs from Supabase.`);
    }

    // Wire each unit's real content to be fetched on demand instead of
    // eagerly here. js/lazy-loader.js calls load(unitId) the first time
    // window.EWSEnsureUnit(unitId) or EWSEnsureAllUnits() runs, and
    // handles swapping the stub for the resolved real unit.
    if (window.__EWS_REGISTER_LAZY_UNITS) {
      window.__EWS_REGISTER_LAZY_UNITS(newUnits, (unitId) => {
        const unitRow = unitRowById[unitId];
        if (!unitRow) return Promise.resolve(null);
        return fetchFullUnit(sb, unitRow);
      });
    } else {
      console.warn('[content-loader] js/lazy-loader.js not loaded before content-loader.js — Supabase units will stay as metadata-only stubs.');
    }

    // Follow-up to the Phase 8 non-blocking change (index.html): this
    // refresh now runs in the background instead of being awaited before
    // ewsInit(), so it can finish AFTER ui-curriculum.js's idle-callback
    // has already rendered the curriculum once from bundled static data.
    // Unlike the grammar/sounds tabs (which nav.js's goTab() already
    // re-renders on every tab switch), nothing else re-renders the home
    // curriculum — so re-render it here if it's already loaded, otherwise
    // the still-loading first render will naturally pick up these UNITS.
    if (typeof window.renderCurriculum === 'function') {
      window.renderCurriculum();
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
