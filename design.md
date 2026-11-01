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
| shell | `resources/js/App.vue` | skip link → `#main` · `Header` (banner + `Nav` "Main") · `main#main` · `Footer`; `afterEach` focuses new page's h1 (not on first load) |
| list | `resources/js/pages/index.vue` | h1 always rendered (`ListHeader`) · sr-only `role=status` (loading / "Loaded N wizkids.") · `role=alert` error · empty message · `RoleSummary` + `WizkidItem` rows (`ul[aria-label="All wizkids"]`) |
| roles | `resources/js/roles.js` | `countRoles` (boss → developer → designer → intern, unknown last) · `getRoleTone` (role tint classes) |
| placeholders | `pages/{add,update,delete,login,[...all]}.vue` | `ListHeader` + `components/PlaceholderNotice.vue` |
| legal pages | `resources/js/pages/{accessibility,privacy,terms}.vue` | wrap `components/LegalPage.vue` (h1 + "Last updated") |
| footer | `resources/js/components/Footer.vue` | wordmark close + nav "Site information": Accessibility · Privacy · Terms + GitHub repo `https://github.com/sg208/sg-laravel-vue-vite` |

## Visual design

Direction: taste-skill app style "Editorial greeting" (seed 62489967, `.taste-skill/` not committed). Shell redrawn to no sidebar: only two destinations (Wizkids, Log in).

| token | light | dark | use |
|---|---|---|---|
| `--ground` | `#ffffff` | `#141513` | page |
| `--surface` | `#f4f4f1` | `#1f201d` | panels, list, footer (one tone step, no borders/shadows) |
| `--text` | `#1f201d` | `#ecece7` | all running text |
| `--muted` | `#595956` | `#b0b0aa` | secondary lines |
| `--accent` | `#1b6e66` | `#6cc5b8` | primary button, mark, focus |
| `--negative` | `#a3221a` | `#ff9b8f` | Delete, error |
| `--role-{boss,developer,designer,intern}-{bg,ink}` | pale tints | deep tints | role tags (identity, not data) |

- Tokens: `resources/css/app.css` `:root` + `@media (prefers-color-scheme: dark)`; mapped to Tailwind via `@theme inline` (`bg-surface`, `text-ink`, `text-muted`, `bg-accent`, ...).
- Type: Instrument Serif 400 for h1 + footer wordmark (48px); Instrument Sans 400/500/600 elsewhere. Self-hosted via `@fontsource/instrument-sans` + `@fontsource/instrument-serif` (latin subsets, imported in `resources/js/app.js`). No font CDN.
- Layout: centred 1100px column, 16px gutter phone / 24px ≥640px; panels radius 22px; controls fully round.
- List row: CSS grid `56px | name+role | contact | actions` at ≥768px; stacks to 2 columns below; `min-w-0` + `overflow-wrap:anywhere` → no sideways scroll at 320px.
- A11y: `:focus-visible` 3px accent outline; controls `min-h-11` (44px); hover = `transition-colors` only, zeroed under `prefers-reduced-motion`.

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
4. Photos load from picsum.photos → fastly.picsum.photos (only external hosts in the built output; listed in `privacy.vue`).

## Hosting

- Live demo = static Vue front end only; no PHP. Laravel runs only locally (`php artisan serve`), serves `/` only, and has no wizkid API — local data comes from JSON Server.
- LIVE: https://sg-laravel-vue-vite.engg.app — Cloudflare Worker with static assets (`wrangler.jsonc`).
- `wrangler.jsonc` — `assets.directory=dist` · `not_found_handling=single-page-application` · custom domain route · `workers_dev=false` · `preview_urls=false`.
- DEPLOY: `pnpm run deploy` = `pnpm build:static && wrangler deploy` (`package.json` scripts). Needs wrangler v4 (devDependency) + `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID`.
- RETIRED: Vercel · Netlify · Railway · Cloudflare Pages · engg.me. NEVER list as live.
- CI/CD: none; deploy is manual.

## Key decisions

- Static build without Laravel for the demo. WHY: Laravel side is unused by the SPA; a static Worker needs no PHP runtime. `vite.static.config.js:1-2`
- SPA fallback in Worker assets. WHY: history-mode routes (`/privacy` etc.) must resolve to `index.html`. `wrangler.jsonc`
- Per-route `document.title`. WHY: SPA ships one `index.html`; each page needs a distinct title for a11y. `resources/js/pageTitles.js:1`
- Laravel 9 left as is. WHY: separate upgrade → `.backlog/2026-10-31-1346-upgrade-laravel-composer.md`
