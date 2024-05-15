<template>
    <NuxtLink :to="`/users/${user?.username}`" class="flex flex-row p-2 h-24">
        <div class="w-1/10 h-full">
            <img src="https://via.placeholder.com/50" alt="user profile picture" class="w-full h-full" />
        </div>
        <div class="w-9/10 h-full">
            <h3 class="font-lato-light text-lg">
                {{ user.username }}
            </h3>
            <p class="text-sm">
                {{ user.bio }}
            </p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
    import type { User } from '~/models/User';

    defineProps<{
        user: User
    }>()
</script>

<style scoped>

</style>