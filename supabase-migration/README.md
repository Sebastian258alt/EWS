# Supabase migration — English With Sebastian

## Run order (Supabase → SQL Editor)

1. **`01_schema.sql`** — creates `admins` + `is_admin()`, the live tables
   (`units`, `lessons`, `grammar`, `translations`), and the draft/admin
   tables (`admin_content_*`, `admin_translations`), all with RLS.
   - After running it, seed yourself as an admin:
     `insert into public.admins (email) values ('you@example.com');`
2. **`02_seed_units.sql`** — 32 units.
3. **`03_seed_lessons.sql`** — 177 lessons (run after step 2 — `lessons.unit_id`
   references `units.id`).
4. **`04_seed_grammar.sql`** — 30 grammar rules, full shape (needs section 3b
   in `01_schema.sql`, which is included by default). Use
   `04_seed_grammar_slim.sql` instead **only** if you deliberately skip 3b —
   see the note below, it loses data.
5. **`05_seed_translations.sql`** — 1,027 rows across 5 languages (en, pt,
   mz, en-gb, pt-pt).

All seed files use `on conflict ... do update`, so they're safe to re-run.

## Two schema gaps I found and fixed

`js/admin-tables.js` describes the tables "exactly as they exist in the DB,"
but two fields your live app actually reads weren't in that spec:

- **`units.cefr`** — `ui-curriculum.js` filters units by `unit.cefr`
  (A0/A1/B1...). Missing from the `units` field list. I added the column
  in schema section 2 and included it in `02_seed_units.sql`.
- **`grammar.category` / `.country_code` / `.icon` / `.uses` / `.signals` /
  `.mistakes`** — your static `GRAM` array has all of these, but the live
  `grammar` table spec only has `id/title/subtitle/formula/tip/examples/quiz`.
  I added the extra columns in schema **section 3b** and used them in
  `04_seed_grammar.sql`. If you'd rather keep the slimmer shape, delete
  section 3b from `01_schema.sql` and use `04_seed_grammar_slim.sql` — but
  then category badges, colours, icons, "common uses," signal words, and
  common-mistakes cards will have nowhere to live and will disappear from
  the Grammar Lab once it reads from Supabase.

I also updated `js-admin-tables.patched.js` (your `js/admin-tables.js`)
to add these as editable fields in the admin panel, so they're not
seed-only — an admin can actually update them later. Diff it against your
original and copy it in if you're happy with the change.

## Wiring the live app: `js-content-loader.js`

Drop this in as `js/content-loader.js`. It's called once, awaited, right
before `ewsInit()` — see `index.patched.html` for the two-line diff against
your `index.html` (loads the script in Phase 3, awaits `EWSContent.refresh()`
in Phase 8 before the first render).

It fetches from Supabase and falls back to your bundled static data
**per table**, but the fallback strategy is deliberately different for
different content types:

- **`units` + `lessons` → all-or-nothing per table.** If Supabase has *any*
  rows in `units`, the app replaces the whole static curriculum with what's
  in Supabase (lessons nested under their unit). If `units` is empty or
  unreachable, the bundled 32-unit/177-lesson curriculum is used untouched —
  day-one behavior doesn't change at all.
  **⚠️ Risk:** because this isn't a merge, adding just 1 unit in Supabase
  before finishing the migration will make the app show *only* that one
  unit and hide the other 31, since it's an all-or-nothing swap, not a
  merge by id. Don't add units in Supabase until `02`+`03` have both been
  run in full, or temporarily set the unit's Supabase table aside while
  testing.
- **`grammar` → merge by id.** Every Supabase row overrides the static
  entry with the same id, or gets appended if new. Untouched static topics
  stay as fallback. Safe to populate gradually, one rule at a time.
- **`translations` → merge by (language, key).** Same idea — only the keys
  present in Supabase override the bundled string for that language;
  everything else keeps working. Safe to populate gradually.

I chose merge-by-id for grammar/translations (safe to do incrementally)
and all-or-nothing for units/lessons (simpler, and matches how deeply
nested/ordered that content is — a partial merge there would need to
reconcile sort_order and orphaned lessons, which adds real complexity for
not much benefit if you're migrating everything in one sitting anyway).

## What I did **not** do

- I didn't touch `admin_content_*` / `admin_translations` (the draft
  tables) with seed data — those are the staging area for new content an
  admin authors from scratch in the panel, not a mirror of the live
  static data, per the original design intent in `admin-tables.js`.
- I didn't modify your Supabase project — I don't have network/DB access
  from here. Run the `.sql` files yourself in the SQL Editor in the order
  above.
