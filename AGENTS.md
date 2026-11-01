# AGENTS.md

- LEARNINGS: `.enggflo/learning.md` · append: `/enggflo-init "<mistake>"`
- DOCS: `design.md` (architecture) · `conventions.md` (naming, git) · `.enggflo/brain.md` (decisions, open threads) <!-- enggflo -->

## Project

- WHAT: "Wizkid Manager 2000" demo: Laravel 9 shell serving a Vue 3 SPA (list/add/update/delete wizkids) with Tailwind; data from a local JSON Server mock (`README.md:1-5`).
- STATE: JS side updated 2026-10-31 (Vite 8, Vue 3.5, Tailwind 4, pnpm); Laravel 9 untouched (`.backlog/`); Laravel side is the stock skeleton (`routes/web.php` serves `welcome` view only, no wizkid API).
- BRANCHES: `main` (default) · `develop` (work branch) · `master` (legacy, kept) · remote `versiontwo`. PR/branch convention: no enforced convention observed.

## Commands

- `source ~/.nvm/nvm.sh && nvm use 24` — Node 24 (`.node-version:1`) before pnpm
- `pnpm install` — JS deps (`pnpm-lock.yaml`, `packageManager` in `package.json`)
- `pnpm dev` — Vite dev server
- `pnpm dev2` — JSON Server :8080 + Vite (both local devDeps)
- `pnpm build` — Vite production build to `public/build` (gitignored)
- `pnpm build:static` — SPA without Laravel → `dist/` + `dist/api/wizkid.json` (`vite.static.config.js`) <!-- enggflo -->
- `pnpm run deploy` — `build:static` + `wrangler deploy`; needs global wrangler v4 + `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID` (names only) <!-- enggflo -->
- `pnpm test` — Vitest (`vitest.config.js`, `tests/js/*.test.js`)
- `pnpm audit --audit-level high` — must report no high/critical
- `composer install && php artisan serve` — Laravel on :8000 (composer not verified in this env)
- `vendor/bin/phpunit` — PHP example tests (`phpunit.xml`)

## Architecture

| concept | path |
|---|---|
| SPA entry | `resources/js/app.js` → mounts `App.vue` on `#app` in `resources/views/welcome.blade.php` |
| routes (file-based) | `resources/js/pages/*.vue` via `vite-plugin-pages` (`vite.config.js`), router `resources/js/router.js` |
| components (auto-imported) | `resources/js/components/` via `unplugin-vue-components` (`vite.config.js`) |
| data access | `resources/js/composables/useWizkid.js` (`VITE_WIZKID_API_URL`, falls back to `http://localhost:8080/api/wizkid`) |
| mock API | `jsonserver/db.json` + `jsonserver/routes.json` |
| styles | `resources/css/app.css` (Tailwind 4 via `@tailwindcss/vite`, `@source` globs) |
| Laravel | `app/` · `routes/` · `config/` · `database/` |

- CI/CD: none (no `.github/workflows/`).
- HOSTING: live demo https://sg-laravel-vue-vite.engg.app = `pnpm build:static` → `dist/` on a Cloudflare Worker with static assets (`wrangler.jsonc`, `pnpm run deploy`). No other host. Vercel · Netlify · Railway · Cloudflare Pages · engg.me retired — NEVER document them as live. <!-- enggflo -->
- LEGAL: `pages/accessibility.vue` · `privacy.vue` · `terms.vue` (via `components/LegalPage.vue`), linked from `Footer.vue` with the GitHub repo link; per-route `document.title` from `resources/js/pageTitles.js`. Privacy page lists third parties (Cloudflare, picsum.photos) — update it when adding an external URL.

## Test profile

| field | value |
|---|---|
| runner | Vitest + @vue/test-utils + happy-dom (JS) · PHPUnit (PHP) |
| command | `pnpm test` · `vendor/bin/phpunit` |
| conventions | `tests/js/*.test.js` (composables, components with `RouterLinkStub`) · `tests/Unit|Feature/*Test.php` (Laravel examples) |
| levels | unit ✓ · integration ✗ · e2e ✗ |
| enforced_by | unverified (no CI) |

## Gotchas

- `resources/js/bootstrap.js` — not imported by `app.js`; axios/lodash unused at runtime.
- `package.json` `"type": "module"` — config files are ESM; a CommonJS config needs `.cjs`.
- `package.json` `pnpm.overrides` — patched rollup 2, nanoid 3, picomatch 2 for audit; drop once upstream deps move.
- pnpm does not hoist transitive packages: import from `vue`, never `@vue/runtime-core`.
- `vitest.config.js` — separate from `vite.config.js`; skips the Laravel plugin and file routes.

- LICENSE: MIT (`LICENSE`, `package.json`, `composer.json`).

## Task routing

| task | route |
|---|---|
| repeated mistake or non-obvious fix | `/enggflo-init "<mistake>"` → `.enggflo/learning.md` |
| dependency review | `/enggflo-maintenance` → `.backlog/`; done items → `.done/` |

## References <!-- enggflo -->

- vue — https://vuejs.org/llms.txt (llms.txt)
- vue-router — https://router.vuejs.org/llms.txt (llms.txt)
- vite — https://vite.dev/llms.txt (llms.txt)
- vitest — https://vitest.dev/llms.txt (llms.txt)
