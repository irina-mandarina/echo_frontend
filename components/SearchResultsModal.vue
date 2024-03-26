<template>
    <div class="absolute inset-[16%] flex w-2/3 block bg-echo-white rounded-xl shadow-lg">
        <div class="w-full h-min justify-evenly flex border-b border-b-1 border-b-echo-gray font-lato-bold">
            <span class="cursor-pointer border-b border-b-2 py-2 px-4 border-b-echo-orange"
                  v-for="i in ['Podcasts', 'Episodes', 'Profiles']">
                {{ i }}
            </span>
        </div>
        <div class="p-3">
         <PodcastSearchResult />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>