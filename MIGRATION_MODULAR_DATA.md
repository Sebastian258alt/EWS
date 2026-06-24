# EWS Data Architecture Migration — Modular Units

**Date:** 2026-06-24  
**Type:** Structural refactor (zero functional change)

---

## Summary

The lesson data architecture was refactored from three monolithic files into a scalable per-unit modular structure. The app's runtime behaviour is **100% identical**.

---

## File Tree — Before

```
js/data/
├── a0.js        (227 lines — 1 unit, 10 lessons)
├── a1.js        (490 lines — 5 units, 21 lessons)
└── b1.js       (1389 lines — 8 units, 45 lessons)
```

## File Tree — After

```
js/data/
├── a0.js        ← PRESERVED (original, untouched)
├── a1.js        ← PRESERVED (original, untouched)
├── b1.js        ← PRESERVED (original, untouched)
├── a0/
│   ├── unit1.js     (u0 — Beginner Zero, 10 lessons)
│   └── index.js     (assembles UNITS_A0)
├── a1/
│   ├── unit1.js     (u1 — Present Tenses, 6 lessons)
│   ├── unit2.js     (u2 — Past Tenses, 2 lessons)
│   ├── unit3.js     (u3 — Future, 2 lessons)
│   ├── unit4.js     (u4 — Vocabulary Builder, 6 lessons)
│   ├── unit5.js     (u5 — Daily Life, 5 lessons)
│   └── index.js     (assembles UNITS_A1)
└── b1/
    ├── unit1.js     (u6 — Phrasal Verbs, 1 lesson)
    ├── unit2.js     (u7 — Idioms, 1 lesson)
    ├── unit3.js     (u8 — Past Perfect & Narrative Tenses, 8 lessons)
    ├── unit4.js     (u9 — Future Perfect & Future Continuous, 7 lessons)
    ├── unit5.js     (u10 — Advanced Conditionals, 8 lessons)
    ├── unit6.js     (u11 — Passive Voice, 6 lessons)
    ├── unit7.js     (u12 — Reported Speech, 7 lessons)
    ├── unit8.js     (u13 — Modal Verbs, 7 lessons)
    └── index.js     (assembles UNITS_B1)
```

---

## How It Works

### Global Variable Chain (unchanged)

The app uses `<script>` tags (no ES modules). Each unit file declares a namespaced constant:

```
a0/unit1.js   → const UNITS_A0_UNIT1 = [{ id:'u0', ... }];
a0/index.js   → const UNITS_A0 = [...UNITS_A0_UNIT1];
data.js       → const UNITS = [...UNITS_A0, ...UNITS_A1, ...UNITS_B1];
```

### Load Order in index.html

```
unit files (per level, in order) → index.js (per level) → data.js
```

---

## Files Changed

| File | Change |
|------|--------|
| `index.html` | Script tags: 3 → 17 (14 unit files + 3 index files) |
| `js/data.js` | Comments updated only; logic unchanged |
| `service-worker.js` | Cache list updated; version bumped `ews-v3 → ews-v4` |

## Files Created (14 unit files + 3 index files = 17 new files)

| File | Content |
|------|---------|
| `js/data/a0/unit1.js` | Unit u0 |
| `js/data/a0/index.js` | Assembles UNITS_A0 |
| `js/data/a1/unit1.js` | Unit u1 |
| `js/data/a1/unit2.js` | Unit u2 |
| `js/data/a1/unit3.js` | Unit u3 |
| `js/data/a1/unit4.js` | Unit u4 |
| `js/data/a1/unit5.js` | Unit u5 |
| `js/data/a1/index.js` | Assembles UNITS_A1 |
| `js/data/b1/unit1.js` | Unit u6 |
| `js/data/b1/unit2.js` | Unit u7 |
| `js/data/b1/unit3.js` | Unit u8 |
| `js/data/b1/unit4.js` | Unit u9 |
| `js/data/b1/unit5.js` | Unit u10 |
| `js/data/b1/unit6.js` | Unit u11 |
| `js/data/b1/unit7.js` | Unit u12 |
| `js/data/b1/unit8.js` | Unit u13 |
| `js/data/b1/index.js` | Assembles UNITS_B1 |

---

## What Was NOT Changed

- `js/data.js` — logic unchanged (`const UNITS = [...UNITS_A0, ...UNITS_A1, ...UNITS_B1]`)
- `js/app.js`, `js/ui.js`, `js/quiz.js`, `js/lesson.js`, `js/progress.js` — untouched
- `js/leaderboard.js`, `js/auth.js`, `js/chat.js`, `js/game.js`, `js/storage.js` — untouched
- `js/premium.js`, `js/supabase-config.js` — untouched
- `admin/` — untouched
- All lesson IDs (l0a, l1, l8a, etc.) — identical
- All unit IDs (u0–u13) — identical
- All XP values — identical
- All CEFR tags — identical
- All premium flags — identical
- All localStorage keys — unchanged (data.js logic untouched)
- All Supabase references — unchanged
- All routes — unchanged

---

## How to Add a New Unit in Future

1. Create `js/data/a1/unit6.js` with `const UNITS_A1_UNIT6 = [{ id:'u_new', ... }];`
2. Add `...UNITS_A1_UNIT6` to the spread in `js/data/a1/index.js`
3. Add `<script src="js/data/a1/unit6.js"></script>` to `index.html` **before** the `a1/index.js` line
4. Add the path to the `STATIC_ASSETS` array in `service-worker.js`

---

## Validation Checklist

- [x] All unit IDs preserved: u0–u13
- [x] All lesson IDs preserved: l0a–l13g (76 total)
- [x] Total lesson count: a0=10, a1=21, b1=45 — unchanged
- [x] All bracket-balanced (validated by parser)
- [x] Global variable names UNITS_A0 / UNITS_A1 / UNITS_B1 unchanged
- [x] data.js UNITS assembly unchanged
- [x] index.html load order correct (units → index → data.js)
- [x] Service worker cache updated and version bumped
- [x] Admin panel unaffected (does not load data files)
- [x] No ES module syntax introduced (app uses classic scripts)
- [x] No code duplication (each lesson lives in exactly one file)
