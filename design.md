# design.md <!-- enggflo -->

## Architecture

| layer | path | fact |
|---|---|---|
| Laravel shell | `routes/web.php` · `resources/views/welcome.blade.php:8-11` | serves `welcome` view; `@vite` loads `resources/js/app.js`; mounts on `#app`. No wizkid API |
| SPA | `resources/js/app.js` · `resources/js/App.vue` | Vue 3.5 app, Vue Router 5 |
| routing | `resources/js/router.js:5-13` | `createWebHistory`, routes from `~pages` (`vite-plugin-pages`, `resources/js/pages`); `afterEach` sets `document.title` |
| titles | `resources/js/pageTitles.js:4-18` | path → title map; unknown path → "Page not found · Wizkid Manager 2000" |
| components | `resources/js/components/` | auto-imported via `unplugin-vue-components` (`vite.config.js:33-36`) |
| data | `resources/js/composables/useWizkid.js:4-5` | `fetch(VITE_WIZKID_API_URL ?? http://localhost:8080/api/wizkid)` |
| mock API | `jsonserver/db.json` · `jsonserver/routes.json` | JSON Server :8080 via `pnpm dev2` |
| legal pages | `resources/js/pages/{accessibility,privacy,terms}.vue` | wrap `components/LegalPage.vue` (h1 + "Last updated") |
| footer | `resources/js/components/Footer.vue:6-28` | links Accessibility · Privacy · Terms + GitHub repo `https://github.com/sg208/sg-laravel-vue-vite` |

## Builds

| build | config | output | consumer |
|---|---|---|---|
| Laravel | `vite.config.js` (`laravel-vite-plugin`) | `public/build` | `php artisan serve` |
| static demo | `vite.static.config.js` + root `index.html` | `dist/` + `dist/api/wizkid.json` | Cloudflare Worker |
| tests | `vitest.config.js` | — | `pnpm test` (happy-dom) |

## Data flow

1. `index.vue` `onMounted` → `getWizkidsData()` → `fetch(WIZKID_API_URL)`.
2. Local: JSON Server serves `jsonserver/db.json` at `:8080/api/wizkid`.
3. Static: `vite.static.config.js:10-23` emits `db.wizkid` as `dist/api/wizkid.json`; `:27-29` defines `VITE_WIZKID_API_URL=/api/wizkid.json`.
4. Photos load from picsum.photos (third party, listed in `privacy.vue`).

## Hosting

- LIVE: https://sg-laravel-vue-vite.engg.app — Cloudflare Worker with static assets (`wrangler.jsonc`).
- `wrangler.jsonc` — `assets.directory=dist` · `not_found_handling=single-page-application` · custom domain route · `workers_dev=false` · `preview_urls=false`.
- DEPLOY: `pnpm run deploy` = `pnpm build:static && wrangler deploy` (`package.json` scripts). Needs global wrangler v4 + `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID`.
- RETIRED: Vercel · Netlify · Railway · Cloudflare Pages · engg.me. NEVER list as live.
- CI/CD: none; deploy is manual.

## Key decisions

- Static build without Laravel for the demo. WHY: Laravel side is unused by the SPA; a static Worker needs no PHP runtime. `vite.static.config.js:1-2`
- SPA fallback in Worker assets. WHY: history-mode routes (`/privacy` etc.) must resolve to `index.html`. `wrangler.jsonc`
- Per-route `document.title`. WHY: SPA ships one `index.html`; each page needs a distinct title for a11y. `resources/js/pageTitles.js:1`
- Laravel 9 left as is. WHY: separate upgrade → `.backlog/2026-10-31-1346-upgrade-laravel-composer.md`
