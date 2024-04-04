<template>
    <div class="layout-container">
        <NuxtLayout>
            <div class="absolute bg-echo-gray w-full h-1/2 -z-[101]">
                <div class="absolute bg-echo-gray w-full h-1/2 -top-1/2 -z-[101]"></div>
                <div class="rounded-full w-32 h-32 bg-echo-orange absolute -bottom-16 left-6">
                </div>
            </div>
            <div class="w-full h-1/2 relative opacity-0"></div>
            <h1 class="font-rubik text-2xl">
                {{ user?.username }}
            </h1>

        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    import type { User } from '~/models/User'
    import { useUserStore } from '~/stores/userStore'

    const userStore = useUserStore()
    userStore.init()
    let user = computed(() => userStore.user)
</script>

<style scoped>

</style>