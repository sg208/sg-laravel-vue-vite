# AGENTS.md

- LEARNINGS: `.enggflo/learning.md` · append: `/enggflo-init "<mistake>"`

## Project

- WHAT: "Wizkid Manager 2000" demo: Laravel 9 shell serving a Vue 3 SPA (list/add/update/delete wizkids) with Tailwind; data from a local JSON Server mock (`README.md:1-5`).
- STATE: unmaintained since 2022-10; Laravel side is the stock skeleton (`routes/web.php` serves `welcome` view only, no wizkid API).
- BRANCHES: `main` (default) · `develop` (work branch) · `master` (legacy, kept) · remote `versiontwo`. PR/branch convention: no enforced convention observed.

## Commands

- `npm install` — JS deps (`package-lock.json`)
- `npm run dev` — Vite dev server (`package.json:4`)
- `npm run dev2` — JSON Server :8080 + Vite; needs global `json-server` + `concurrently` (`package.json:5`)
- `npm run build` — Vite production build to `public/build` (`package.json:6`)
- `composer install && php artisan serve` — Laravel on :8000 (composer not verified in this env)
- `vendor/bin/phpunit` — PHP example tests (`phpunit.xml`)

## Architecture

| concept | path |
|---|---|
| SPA entry | `resources/js/app.js` → mounts `App.vue` on `#app` in `resources/views/welcome.blade.php` |
| routes (file-based) | `resources/js/pages/*.vue` via `vite-plugin-pages` (`vite.config.js:30`), router `resources/js/router.js` |
| components (auto-imported) | `resources/js/components/` via `unplugin-vue-components` (`vite.config.js:33`) |
| data access | `resources/js/composables/useWizkid.js` (fetches `http://localhost:8080/api/wizkid`) |
| mock API | `jsonserver/db.json` + `jsonserver/routes.json` |
| styles | `resources/css/app.css` · `tailwind.config.js` · `postcss.config.js` |
| Laravel | `app/` · `routes/` · `config/` · `database/` |

- CI/CD: none (no `.github/workflows/`).

## Test profile

| field | value |
|---|---|
| runner | PHPUnit (`phpunit.xml`); no JS test runner |
| command | `vendor/bin/phpunit` |
| conventions | `tests/Unit/*Test.php` · `tests/Feature/*Test.php` (Laravel example tests only) |
| levels | unit ✓ (example) · integration ✗ · e2e ✗ |
| enforced_by | unverified (no CI) |

## Gotchas

- `resources/js/composables/useWizkid.js:9` — API URL hardcoded to JSON Server on localhost:8080.
- `resources/js/bootstrap.js` — not imported by `app.js`; axios/lodash unused at runtime.
- `.node-version:1` — pins Node 16.15.0.

## Task routing

| task | route |
|---|---|
| repeated mistake or non-obvious fix | `/enggflo-init "<mistake>"` → `.enggflo/learning.md` |
| dependency review | `/enggflo-maintenance` → `.backlog/` |

## References <!-- enggflo -->

- vue — https://vuejs.org/llms.txt (llms.txt)
- vue-router — https://router.vuejs.org/llms.txt (llms.txt)
- vite — https://vite.dev/llms.txt (llms.txt)
