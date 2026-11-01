# Brain

- PURPOSE: decisions · context · open threads not derivable from code
- UPDATE: resolved Open thread → remove; superseded Decision → append `SUPERSEDED: <date>`

## Decisions

- 2026-10-31 — `main` created from `master` and set as default; `develop` created from `main`. WHY: standard two-branch flow. REJECTED: deleting `master` — kept for safety. SOURCE: public repo sweep

- 2026-10-31 — JS side moved to pnpm and latest majors; Laravel/composer left as is. WHY: composer not available in sweep env; Laravel 9→12 is a separate upgrade. REJECTED: npm audit fix --force — skips framework migration. SOURCE: `.done/`

- 2026-11-01 — Live demo hosted on a Cloudflare Worker (static assets) at https://sg-laravel-vue-vite.engg.app; deploy via `pnpm run deploy`. WHY: SPA needs no PHP runtime; one host. REJECTED: Vercel · Netlify · Railway · Cloudflare Pages · engg.me — retired. SOURCE: `wrangler.jsonc`, commit 593e50e <!-- enggflo -->

- 2026-11-01 — Added Accessibility, Privacy, Terms pages + footer GitHub repo link. WHY: public demo needs legal/a11y statements. SOURCE: commit 22c22eb, `Footer.vue:6-28` <!-- enggflo -->

## Context

- Laravel backend is unused by the SPA; data comes from JSON Server mock (`jsonserver/`).

## Open threads

- Laravel 9 upgrade → `.backlog/2026-10-31-1346-upgrade-laravel-composer.md`
- Moderate dev-only advisories under @vue/test-utils → `.backlog/2026-10-31-1349-fix-test-utils-moderate-advisories.md`
- No CI workflow; tests run locally only; deploy is manual (`pnpm run deploy`).

- `master` and `versiontwo` remote branches still exist; deletion needs owner decision.
- Deferred a11y (release v0.1.0 review, medium/low, pre-existing markup): `WizkidItem.vue` card does not reflow at 320px (stack `flex-col sm:flex-row`, `min-w-0`, `break-all` on email); `index.vue` status region goes silent after load (announce "Loaded N wizkids") and shows nothing for an empty list; wizkid name is `aria-level="3"` under the h1 (use `<h2>`); `welcome.blade.php` title is the stack name, not the app name.
