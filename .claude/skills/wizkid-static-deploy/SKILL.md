---
name: wizkid-static-deploy
description: Use when building, previewing or deploying the static demo, changing vite.static.config.js, vite.static-routes.js, wrangler.jsonc, hosting, Cloudflare settings or the live demo URL, or when asked where the site is hosted. Trigger words - deploy, wrangler, Cloudflare, static build, dist, live demo, hosting, 404, build:static.
---

# wizkid-static-deploy

## Facts

- LIVE: https://sg-laravel-vue-vite.engg.app = `dist/` on a Cloudflare Worker with static assets (`wrangler.jsonc`: `assets.directory` = `dist`, `not_found_handling` = `404-page`, `workers_dev` = `false`).
- DEPLOY: `pnpm run deploy` = `pnpm build:static && wrangler deploy` (`package.json` `scripts.deploy`).
- ENV NAMES: `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID`. NEVER print or echo values.
- BUILD OUTPUT: `dist/` + `dist/api/wizkid.json` emitted from `jsonserver/db.json` (`vite.static.config.js:10-23`); `VITE_WIZKID_API_URL=/api/wizkid.json` (`vite.static.config.js:27-29`).
- LARAVEL: not in the live path. `routes/web.php` serves `/` only.
- RETIRED hosts: Vercel · Netlify · Railway · Cloudflare Pages · engg.me. NEVER list as live.

## Procedure

1. `source ~/.nvm/nvm.sh && nvm use 24`
2. `pnpm test` → gate; stop on failure
3. `pnpm build:static` → writes `dist/` (gitignored, `.gitignore:` `/dist`)
4. Preview without deploy: `pnpm exec vite preview --config vite.static.config.js` (answers every path 200, `README.md:55`)
5. Real status codes: `pnpm exec wrangler dev` (serves `dist/` like production)
6. `pnpm run deploy` ONLY on explicit user request — external side effect

## Gotchas

- `/404` returns 200 (Cloudflare serves `404.html` as an asset) · `design.md` § Hosting
- `/add/` and `/add.html` → 307 to `/add` · `design.md` § Hosting
