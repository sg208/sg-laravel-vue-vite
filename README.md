# Wizkid Manager 2000

A small Laravel and Vue 3 demo for keeping a list of wizkids. Right now it lists them; adding, updating, deleting and logging in are placeholder pages.

Live demo: https://sg-laravel-vue-vite.engg.app

The live demo is only the Vue front end, built as static files. There is no Laravel or PHP behind it: the wizkid list is a JSON file copied into the build. Laravel only runs on your own machine, and even there it does not serve the wizkid data. Its one route (`routes/web.php`) returns the page that loads the Vue app, and the list comes from JSON Server on port 8080.

## Stack

-   Laravel 9
-   Vue 3.5 and Vue Router 5, with file-based routes from `vite-plugin-pages`
-   Vite 8
-   Tailwind CSS 4
-   pnpm and Vitest
-   JSON Server as a local stand-in for the API

The pages live in `resources/js/pages`, components in `resources/js/components`. The wizkid data is in `jsonserver/db.json`.

The site also has Accessibility, Privacy and Terms pages. The footer links to them, plus a small GitHub icon for the source.

## Design

The list opens with the page title set large in Instrument Serif, a count of people on the team, and one panel per role with its count. Below that, each wizkid is a row with a round photo, name, role tag, email, phone, and Update and Delete links. Each role has its own pale colour tag. The rest of the interface uses Instrument Sans, with a deep teal reserved for the "Add new wizkid" button and the focus outline.

Light and dark colours follow your system setting. Both fonts are bundled from `@fontsource` packages, so the site loads no fonts from other servers. The layout works down to 320px wide without sideways scrolling. Details are in [design.md](design.md).

## Run it locally

You need Node 24 (see `.node-version`) with pnpm (`corepack enable`).

```sh
pnpm install
pnpm dev2
```

`pnpm dev2` starts JSON Server on port 8080 and the Vite dev server together. The page that loads the app comes from Laravel 9, so you also need PHP and Composer. In a second terminal:

```sh
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

Then open `localhost:8000`. Laravel answers only `/`, so moving between pages works by clicking, but reloading a page such as `/privacy` gives Laravel's 404 page. The static demo does not have this problem.

To see the same build as the live demo, without PHP:

```sh
pnpm build:static
pnpm exec vite preview --config vite.static.config.js
```

`vite preview` answers every address with 200. To check the real status codes, serve `dist/` the way the live site does with `pnpm exec wrangler dev`.

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
-   `pnpm build:static` builds the Vue app on its own, without Laravel, into `dist/` using `vite.static.config.js` and the root `index.html`. It copies the wizkids from `jsonserver/db.json` to `dist/api/wizkid.json`. It also writes one HTML file per page (`add.html`, `privacy.html` and so on, taken from the router's own page list) and a `404.html`, so the live site answers real pages with 200 and unknown addresses with a 404 and the "Page not found" view. It also copies `resources/static/` (favicon, `_headers`) into `dist/`.

The app reads the API address from `VITE_WIZKID_API_URL`. When that is not set, it uses JSON Server at `http://localhost:8080/api/wizkid`.

## Deploy

The live demo is the static build from `pnpm build:static`, served by a Cloudflare Worker with static assets. No PHP runs there. The config is in `wrangler.jsonc`.

```sh
pnpm run deploy
```

This runs `pnpm build:static` and then `wrangler deploy`. Wrangler 4 is a dev dependency, so you only need `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set in your environment.

## For contributors

Agent and architecture notes are in [AGENTS.md](AGENTS.md) and [design.md](design.md).

## License

MIT. See [LICENSE](LICENSE).
