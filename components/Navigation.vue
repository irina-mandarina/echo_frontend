<template>
    <div class="flex flex-row w-full h-[72px] justify-between p-4 overflow-hidden">
        <NuxtLink to="/" class="text-echo-orange px-4 w-1/3 relative">
            <div class="rounded-full bg-orange-300 w-28 h-28 absolute -top-14 -left-14 -z-[100] shadow-md"></div>
            <div class="rounded-full bg-orange-400 w-20 h-20 absolute -top-10 -left-10 -z-[100] shadow-md"></div>
            <div class="rounded-full bg-orange-500 w-12 h-12 absolute -top-6 -left-6 -z-[100] shadow-md"></div>
            <div class="drop-shadow-lg px-2 font-rubik text-lg hover:animate-ping">
                echo
            </div>
        </NuxtLink>

        <div class="w-1/3 flex h-min">
            <SearchBar class="w-1/2" />
        </div>

        <div class="w-1/3 flex justify-end ">
            <NuxtLink v-for="navItem in ['home', 'charts', 'about']" :to='`/${navItem === "home" ? "" : navItem}`'
            :class="`px-4 ${isRoute(navItem) ? 'text-echo-orange' : 'text-black'}`">
                {{ navItem.replace(navItem[0], navItem[0].toUpperCase()) }}
            </NuxtLink>
            <NuxtLink class="rounded-full px-4" to="/profile">
                <i class="fa-solid fa-user text-black border-solid border-1 border-black"></i>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from "vue-router"
    const router = useRouter()
    const isRoute = (navItem: string) =>
        router.currentRoute.value.path.replaceAll("/", "").includes(navItem) || router.currentRoute.value.path === '/' && navItem === 'home'

</script>

<style scoped>

</style>