# Wizkid Manager 2000

A small Laravel and Vue 3 demo for keeping a list of wizkids. Right now it lists them; adding, updating, deleting and logging in are placeholder pages.

Live demo: https://sg-laravel-vue-vite.engg.app

## Stack

-   Laravel 9
-   Vue 3.5 and Vue Router 5, with file-based routes from `vite-plugin-pages`
-   Vite 8
-   Tailwind CSS 4
-   pnpm and Vitest
-   JSON Server as a local stand-in for the API

The pages live in `resources/js/pages`, components in `resources/js/components`. The wizkid data is in `jsonserver/db.json`.

The site also has Accessibility, Privacy and Terms pages. The footer links to them and to the source on GitHub.

## Run it locally

You need Node 24 (see `.node-version`) with pnpm (`corepack enable`). For the Laravel side you also need PHP and Composer.

```sh
pnpm install
pnpm dev2
```

`pnpm dev2` starts JSON Server on port 8080 and the Vite dev server together. In a second terminal, run `php artisan serve` and open `localhost:8000`.

### On Windows with XAMPP

The original setup used Windows 10 with XAMPP:

1. Install [XAMPP](https://www.apachefriends.org/) and [Composer](https://getcomposer.org/download/) (Composer-Setup.exe).
2. Move the repo to `C:\xampp\htdocs` and run `pnpm install` there.
3. Open XAMPP (or `C:\xampp\xampp-control.exe`) and start Apache and MySQL.
4. In one terminal run `php artisan serve`, in another `pnpm dev2`, then open `localhost:8000`.

## Test

```sh
pnpm test
```

Runs the Vitest suite in `tests/js`.

## Build

-   `pnpm build` builds the front end for Laravel into `public/build`.
-   `pnpm build:static` builds the Vue app on its own, without Laravel, into `dist/` using `vite.static.config.js` and the root `index.html`. It copies the wizkids from `jsonserver/db.json` to `dist/api/wizkid.json`.

The app reads the API address from `VITE_WIZKID_API_URL`. When that is not set, it uses JSON Server at `http://localhost:8080/api/wizkid`.

## Deploy

The live demo is the static build, served by a Cloudflare Worker with static assets. The config is in `wrangler.jsonc`.

```sh
pnpm run deploy
```

This runs `pnpm build:static` and then `wrangler deploy`. Wrangler 4 is a dev dependency, so you only need `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set in your environment.

## For contributors

Agent and architecture notes are in [AGENTS.md](AGENTS.md) and [design.md](design.md).

## License

MIT. See [LICENSE](LICENSE).
