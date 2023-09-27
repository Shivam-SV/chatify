<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Chattify</title>
        @viteReactRefresh
        @vite('resources/css/app.css')
        @vite('resources/js/app.jsx')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
