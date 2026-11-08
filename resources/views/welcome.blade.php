<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Wizkid Manager 2000</title>
        <meta name="description" content="A small Vue 3 demo that lists a team of wizkids with their roles and contact details.">
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff">
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#141513">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        @vite(['resources/js/app.js', 'resources/css/app.css'])
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
