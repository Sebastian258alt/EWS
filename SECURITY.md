# EnglishFlow MZ — Security

This document covers the P0 security/production-hardening pass. It explains
what changed, why, what to deploy, and what's still an open risk.

## 1. Authentication

**Before:** usernames + passwords were generated and checked entirely in the
browser (`js/user.js` `mkUser`, `js/app.js` `doLogin`), with the password
stored as plaintext in `localStorage` (`user.pw`). A hardcoded demo account
(`test` / `1234`) was created on every single page load, in every visitor's
browser, unconditionally.

**Now:**
- Real accounts are authenticated by **Supabase Auth**
  (`sb.auth.signUp` / `sb.auth.signInWithPassword`, in `js/auth.js`). This app
  never sees or stores a password — it's sent directly to Supabase's GoTrue
  service over TLS, which returns a session JWT.
- Because Supabase Auth is email-based and this app's UI is username-based,
  a small `user_handles` table + `resolve_username_email()` RPC
  (`supabase-migration/06_security_hardening.sql`) lets the app resolve
  "username → email" without exposing the whole user list. Users can supply
  a real email at signup (recommended, enables password reset); if they
  don't, a non-deliverable placeholder email is used instead so the account
  still works for username/password login on this app.
- **Legacy accounts** (created before this pass) still have their old
  plaintext `pw`. On next successful login, `doLogin` verifies it locally
  **once**, then transparently calls `Auth.migrateLegacyLocalUser()`, which
  creates the equivalent Supabase Auth account with that same
  (now-verified) password and deletes the local `pw` field. Nothing is
  ever sent to Supabase before it's verified locally, and the field is
  only deleted once a real Supabase session exists.
- **Google OAuth** (`js/auth.js` `signInWithGoogle`) is unchanged — it never
  touched passwords.
- **Offline/misconfigured fallback:** if Supabase is unreachable, new
  registrations fall back to a **salted PBKDF2 hash** (native
  `crypto.subtle`, 150k iterations — not a hand-rolled cipher) instead of
  plaintext. This is clearly logged as a degraded mode and the account is
  migrated the same way legacy accounts are, the next time Supabase is
  reachable.
- The hardcoded demo account is now **off by default everywhere**. It only
  gets created if a developer explicitly opts in with `?debug=1` or
  `localStorage.ews_debug = '1'` (the same switch `js/debug-panel.js`
  already used) — never for a normal visitor, never in a way that ships
  silently to production.

### Required deployment step
Run `supabase-migration/06_security_hardening.sql` in the Supabase SQL
Editor. Existing users keep working immediately; the "own row only" RLS
policy applies to writes made from anyone with a JWT, and legacy accounts
migrate on their next login as described above.

## 2. Cross-site scripting (XSS)

Centralized in **`js/security-utils.js`** (loaded first, before any other
script): `escapeHtml()`, `safeAvatarUrl()`, `clampDisplayName()`.

Fixed spots where untrusted data reached `innerHTML` unescaped:

| File | What was untrusted | Fix |
|---|---|---|
| `js/leaderboard.js` | `name` / `avatar` from any Supabase-writable `user_progress` row | `escapeHtml()` on name; `safeAvatarUrl()` restricts avatars to http(s) URLs only (rejects `javascript:`, attribute breakout, etc.) |
| `js/chat.js` | The user's own typed AI-tutor message | `escapeHtml()` before markdown-lite formatting (was self-XSS: a message like `<img src=x onerror=...>` rendered live) |

Already-correct code (verified, no changes needed): `js/admin-ui.js` and
`js/debug-panel.js` already escape every dynamic value they render.
Achievement names, search results, and curriculum content come from static
app data, not user input, so they were left as-is.

**Rule going forward** (documented at the top of `security-utils.js`):
any user-controlled string going into `innerHTML`/`insertAdjacentHTML`
must go through `escapeHtml()` exactly once, right at the point of
insertion. Prefer `textContent` when no markup is actually needed.

## 3. Supabase / RLS

- **Critical fix:** `user_progress`'s old (undeployed-but-documented)
  policy was `using (supabase_id = auth.uid()::text OR supabase_id IS
  NULL)`. Since local-password accounts never had a real `supabase_id`,
  that `OR ... IS NULL` clause meant **any client holding the public anon
  key — which is public by design — could overwrite any local user's row**:
  XP, streak, achievements, display name, avatar. `06_security_hardening.sql`
  replaces it with `supabase_id = auth.uid()::text`, full stop, for
  insert/update/delete. Combined with the Supabase Auth migration above
  (which is what actually gives local users a real `auth.uid()`), this
  closes the hole rather than just tightening the policy text.
- `admins` / `is_admin()` were already solid: no public read policy at all,
  `is_admin()` is `SECURITY DEFINER`, and `admin.js`/`admin-api.js` treat the
  client-side check purely as UX — real authorization happens against
  Postgres. No changes needed here.
- Content tables (`units`, `lessons`, `grammar`, `translations`,
  `admin_content_*`) already had public-read/admin-write RLS in
  `01_schema.sql`. No changes needed.
- **Data exposure fix:** `email` was previously included in the
  `user_progress.payload` that gets synced — and that table has a public
  read policy for the leaderboard. That means every user's email was
  world-readable via the anon key. `email` has been removed from
  `js/storage.js`'s `SYNC_ALLOW`; it's kept locally for login resolution
  only, never synced.
- Added `user_handles` (RLS: write only your own row, no direct public
  read) + `resolve_username_email()` RPC for username-based login (see §1).
- Added a `pg_column_size(payload) < 20000` check constraint on
  `user_progress` as a blunt guard against unbounded payloads.

## 4. Input validation

- `js/security-utils.js` adds `isReasonableUsername` (letters/digits/`_-.`,
  3–32 chars), `isReasonableEmail`, and `clampDisplayName` (strips control
  characters, 32-char cap) — used in `doReg`.
- These are UX/defense-in-depth only. **The real enforcement is server-side**
  RLS + the check constraint above; never trust `typeof`/regex/`maxlength`
  alone, per the original brief.

## 5. Secrets

Scanned the entire repository for `service_role`, `SUPABASE_SERVICE_ROLE_KEY`,
`PRIVATE_KEY`, `API_KEY`, hardcoded tokens, etc. **None found.** The only key
in the frontend is the Supabase **anon/public** key in
`js/supabase-config.js`, which is meant to be public — RLS is what protects
the data behind it (see §3). The word "secret" appears only inside grammar
lesson content ("the secret to sounding natural...") — not a credential.

## 6. localStorage inventory

| Key | Contents | Classification |
|---|---|---|
| `ews4_u` | Array of local user profiles (name, xp, progress, `authProvider`, etc.) | SAFE (no password field anymore) |
| `ews4_cur` | Current username | SAFE |
| `ews4_lang`, `ews4_theme` | UI preferences | SAFE |
| `ews4_auth_provider` | `'google'` flag | SAFE |
| `ews4_auth_profile` | Cached `{id, email, name, avatar}` from the signed-in session | SENSITIVE (email) — local-only, never synced |
| `ews4_supabase_auth` | Supabase's own session/JWT storage | SENSITIVE — handled entirely by supabase-js, not app code |
| `ews4_progress`, `ews4_sync_queue`, `ews4_last_sync` | Sync bookkeeping | SAFE |
| `ews_debug` | Dev-mode flag | SAFE |
| Legacy `user.pw` (pre-migration accounts only) | Plaintext password | **CRITICAL** — being phased out via the migration in §1; deleted the moment migration succeeds |
| `user.pwHash` / `user.pwSalt` (offline-fallback accounts only) | PBKDF2 hash + salt, never the password itself | SENSITIVE but not reversible |

Nothing here needed outright removal — preferences/progress/offline cache
are all legitimately needed client-side, per the original brief.

## 7. Authorization (admin)

Verified, not changed: `admin.html`/`admin.js` treat the browser-side
`isAdmin` check as **navigation UX only**. The actual gate is Postgres'
`is_admin()` `SECURITY DEFINER` function, checked by RLS on every admin
table operation — a user who spoofs the client-side check gets nothing
back from Supabase.

## 8. What was intentionally NOT changed

Per the "no giant refactor / don't break working features" brief:
- Curriculum content, lesson data, quiz/game logic: untouched.
- XP/streak/gamification *rules* (how much XP an action grants): untouched
  — see remaining risk below.
- UI/UX, visual design: untouched, aside from one new (optional) email
  field on the signup form.

## 9. Remaining risks (honest list)

- **Client-authoritative scoring.** RLS now stops other users from
  touching your data, but your *own* authenticated client still computes
  and sends its own `xp`/`streak`/etc. A modified client can still inflate
  its own progress. Fully closing this needs a `SECURITY DEFINER` RPC that
  recomputes XP server-side instead of trusting the payload — a real
  feature, intentionally out of scope for this P0 pass. **NOT FIXED — flagged.**
- **Username enumeration.** `resolve_username_email()` returns `null` for
  unknown usernames (so it can't distinguish "wrong username" from "wrong
  password" in the login flow), but an attacker could still brute-force
  which usernames exist by calling it repeatedly. Recommend adding rate
  limiting (e.g., a Supabase Edge Function or Cloudflare rule) if this
  matters for your threat model. **NOT FIXED — flagged.**
- **Synthetic emails can't receive "forgot password" mail.** Users who
  don't supply a real email at signup (or migrated automatically from a
  legacy account without one) get a non-deliverable placeholder address.
  They can still log in with username+password, but Supabase's built-in
  password-reset email won't reach them. Recommend prompting these users
  to add a real email from Settings. **REQUIRES PRODUCT DECISION.**
- **This was not tested against your live Supabase project.** I don't have
  credentials for `xlpwrwourxcanpyfnivz.supabase.co`, so the SQL migration
  and the Auth flows are reviewed and written to be correct, but not
  execution-verified against production data. **REQUIRES MANUAL TEST**
  (see checklist below) before/after running the migration.
- **Email confirmation setting.** Whether `signUp` returns a session
  immediately or requires email confirmation depends on your Supabase
  project's Auth settings. The code handles both, but which path new
  users hit depends on that setting — worth checking it matches what you
  want (e.g., disable confirmation for synthetic-email signups).

## 10. Test checklist & status

| # | Test | Status |
|---|---|---|
| 1 | Login with correct username/password (new account) | REQUIRES MANUAL TEST |
| 2 | Login with wrong password | FIXED (rejected, no plaintext comparison exposed) |
| 3 | Logout | PASS (unchanged) |
| 4 | Persistent session | PASS (Supabase JWT persistence unchanged for Google; REQUIRES MANUAL TEST for new password accounts) |
| 5 | New registration (email provided / omitted) | REQUIRES MANUAL TEST |
| 6 | Legacy account login → transparent migration → `pw` deleted | REQUIRES MANUAL TEST against a real legacy account |
| 7 | Access without authentication | PASS — RLS blocks writes, public read is intentional for leaderboard |
| 8 | Cross-user data access (read someone else's private data) | PASS — no private per-user table is exposed beyond the public leaderboard fields by design |
| 9 | XP tampering via direct Supabase call (own account) | PARTIALLY FIXED — see "client-authoritative scoring" above |
| 10 | XP/profile tampering via direct Supabase call (someone else's account) | FIXED by `06_security_hardening.sql` RLS |
| 11 | XSS via username/name | FIXED (`escapeHtml` in leaderboard) |
| 12 | XSS via leaderboard avatar | FIXED (`safeAvatarUrl`) |
| 13 | XSS via AI chat input | FIXED (`escapeHtml` before markdown formatting) |
| 14 | XSS via localStorage-sourced data | NOT VERIFIED beyond the spots listed in §2 — no other injection point found in this audit |
| 15 | Lesson/unit ID manipulation | NOT VERIFIED — out of scope for this pass; lesson content is read-only for non-admins per RLS |
| 16 | Admin access without authorization | PASS — verified server-side via `is_admin()` |
| 17 | Secrets in bundle | PASS — none found beyond the intentionally-public anon key |
| 18 | Demo account (`test`/`1234`) reachable in production | FIXED — gated behind explicit dev opt-in, never created otherwise |

Test with a harmless payload only, e.g. `<img src=x onerror=alert('XSS')>`
in the display-name field, then check it renders as literal text (not an
alert) on the leaderboard.
