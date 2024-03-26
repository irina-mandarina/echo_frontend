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
    const { $graphql } = useNuxtApp()
    import { useUserStore } from '~/stores/userStore'

    $graphql.default.setHeader('authorization', `Bearer ${localStorage.getItem('jwt')}`)
    const userStore = useUserStore()
    userStore.init()
</script>

<style>
    @font-face {
        src: url("/assets/RubikOne-Regular.ttf");
        font-family: 'Rubik One';
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

    .font-rubik {
        font-family: 'Rubik One', sans-serif;
    }

    .font-roboto {
        font-family: 'Roboto', serif;
    }

    .font-roboto-light {
        font-family: 'Roboto', serif;
        font-weight: 300;
    }

    .font-lato-light {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        font-style: normal;
    }

    .font-lato-regular {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .font-lato-bold {
        font-family: "Lato", sans-serif;
        font-weight: 700;
        font-style: normal;
    }
</style>
