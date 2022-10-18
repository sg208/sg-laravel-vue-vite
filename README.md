# SG-LARAVEL-VUE3-VITE-TAILWIND

## Overview

Wizkid Manager 2000 is an application that is focused on managing wizkids. The application will provide features such as adding, viewing, updating, and deleting of wizkids.

## Stacks

-   Laravel 9
-   Vue 3
-   Vite
-   Tailwind CSS
-   JSON Server, alternative option for data replacement

## Installation (Windows 10 Only)

This application can be run locally in your Windows 10 machine, please follow the following for installation after you clone the repo:

1. Download [XAMPP](https://www.apachefriends.org/) for Windows then Install it on your Windows 10 computer.
2. Download [Composer](https://getcomposer.org/download/) (Composer-Setup.exe) then install it (skip if already installed).
3. Go to the directory for this application, then run `npm install` to install packages.
4. Install `json-server` globally to your machine with `npm install -g json-server` (skip if already installed).
5. Install `concurrently` globally to your machine with `npm install -g concurrently` (skip if already installed).
6. Move this repo to `C:\xampp\htdocs` since we'll be using `XAMPP` to run the Apache and MySQL

## Running locally

1. Open XAMPP application. If XAMPP is not found in your programs list, find and run `C:\xampp\xampp-control.exe` (or whereever XAMPP was originally installed on your machine).
    - Click `START` on both `Apache` and `MySql`.
2. Go to the the root of this application then open multiple instances of terminal.
    - Terminal 1 > Run `php artisan serve` to run Laravel locally
    - Terminal 2 > Run `npm run dev2` to run Vue SPA locally with JSON server as your local API instead of Laravel
3. Go to your browser and open `localhost:8000`
