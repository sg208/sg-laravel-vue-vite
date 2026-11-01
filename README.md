# SG-LARAVEL-VUE3-VITE-TAILWIND

## Overview

Wizkid Manager 2000 is an application that is focused on managing wizkids. The application will provide features such as adding, viewing, updating, and deleting of wizkids.

## Live demo

https://sg-laravel-vue-vite.engg.app

The demo is the Vue SPA on its own, without Laravel, served by a Cloudflare Worker (static assets) on the sg208 account. `wrangler.jsonc` holds the config. `pnpm run deploy` builds and runs `wrangler deploy`; it needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.

## Stacks

-   Laravel 9
-   Vue 3.5 and Vue Router 5
-   Vite 8
-   Tailwind CSS 4
-   pnpm and Vitest
-   JSON Server, for local data source replacement

## Installation (Windows 10 Only)

This application can be run locally in your Windows 10 machine, please follow the following for installation after you clone the repo:

1. Download [XAMPP](https://www.apachefriends.org/) for Windows then Install it on your Windows 10 computer.
2. Download [Composer](https://getcomposer.org/download/) (Composer-Setup.exe) then install it.
3. Install Node 24 (see `.node-version`) and enable pnpm with `corepack enable`.
4. Go to the directory for this application, then run `pnpm install` to install packages (this includes `json-server` and `concurrently`).
5. Move this repo to `C:\xampp\htdocs` since we'll be using `XAMPP` to run the Apache and MySQL

## Running locally

1. Open XAMPP application. If XAMPP is not found in your programs list, find and run `C:\xampp\xampp-control.exe` (or whereever XAMPP was originally installed on your machine).
    - Click `START` on both `Apache` and `MySql`.
2. Go to the the root of this application then open multiple instances of terminal.
    - Terminal 1 > Run `php artisan serve` to run Laravel locally
    - Terminal 2 > Run `pnpm dev2` to run Vue SPA locally with JSON server as your local API instead of Laravel
3. Go to your browser and open `localhost:8000`

## Static demo build

`pnpm build:static` builds the Vue SPA without Laravel into `dist/`, using `vite.static.config.js` and the root `index.html`. It also bundles the wizkids from `jsonserver/db.json` as `dist/api/wizkid.json`. The composable reads the API address from `VITE_WIZKID_API_URL` and falls back to `http://localhost:8080/api/wizkid` (json-server) when it is not set, as in local development.

## Tests

-   `pnpm test` runs the Vitest suite in `tests/js`.
-   `pnpm build` builds the front end to `public/build`.

## License

MIT. See [LICENSE](LICENSE).
