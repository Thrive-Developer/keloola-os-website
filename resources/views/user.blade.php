<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
    <title>Keloola OS - Embrace Stability and Simplicity</title>
    <meta name="description" content="Discover Keloola OS, the Linux-based operating system that combines robust stability with user-friendly simplicity. Ideal for both personal and professional use, Keloola OS provides a reliable platform for your computing needs.">
    <meta name="keywords" content="Keloola OS, business operating system, stable OS, business PCs, business laptops, professional OS, reliable performance, pre-loaded apps, desktop OS, laptop OS, stability-focused OS, business efficiency">
    <link rel="icon" sizes="180x180" href="{{ asset('assets/Path 34.svg') }}">

    <!-- Mac Devices -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/Path 34.svg') }}">

    <!-- MS Tile - for Microsoft apps-->
    <meta name="msapplication-TileImage" content="{{ asset('assets/Path 34.svg') }}">

    <!-- Fb & Whatsapp -->
    <meta property="og:site_name" content="Keloola OS">
    <meta property="og:title" content="Keloola OS - Embrace Stability and Simplicity">
    <meta property="og:description" content="Discover Keloola OS, the Linux-based operating system that combines robust stability with user-friendly simplicity. Ideal for both personal and professional use, Keloola OS provides a reliable platform for your computing needs.">
    <meta property="og:image" content="{{ asset('assets/Path 34.svg') }}">
    <meta property="og:type" content="website" />
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="180">
    <meta property="og:image:height" content="180">
    <meta property="og:url" content="{{ url('/') }}">

    @vite(['resources/css/user.css', 'resources/js/app.js', 'public/assets/flowbite.js', 'public/assets/backtop.js'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
