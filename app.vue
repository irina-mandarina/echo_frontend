<template>
    <div>
        <NuxtPage />
    </div>
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <Link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lobster&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    <Link href="https://fonts.googleapis.com/css2?family=Lobster&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
</template>

<script setup>
</script>

<style>
    @font-face {
        src: url("assets/Franklin Gothic Demi Cond Regular.ttf");
        font-family: 'Franklin Gothic Demi Condensed';
    }

    body {
        font-family: 'Roboto', serif;
        color: #1f1f1f;
    }

    html {
        background-color: #eae8e8;
    }

    html, body, #__nuxt, [data-v-inspector="app.vue:2:5"], .layout-container {
        height: 100%;
    }

    .font-franklin {
        font-family: 'Franklin Gothic Demi Condensed', sans-serif;
    }

    .font-roboto {
        font-family: 'Roboto', serif;
    }

    .font-roboto-light {
        font-family: 'Roboto', serif;
        font-weight: 200;
    }

    .echo-scrollbar::-webkit-scrollbar-track {
       background: #f1f1f1; /* Color of the scrollbar track */
    }

    .echo-scrollbar::-webkit-scrollbar-thumb {
        background: #888; /* Color of the scrollbar thumb */
    }

    .echo-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #ff0000; /* Color of the scrollbar thumb on hover */
    }
</style>
