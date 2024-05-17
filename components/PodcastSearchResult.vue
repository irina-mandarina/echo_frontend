<template>
    <div class="flex flex-row p-2 h-full">
        <div class="w-1/10 h-full">
            <img src="https://via.placeholder.com/50" alt="podcast cover" class="w-full h-full" />
        </div>
        <div class="w-9/10 h-full">
            <h3 class="font-lato-light text-lg">
                {{ podcast.name }}
            </h3>
            <p class="text-sm">
                {{ podcast.publisher }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { ShowSearchResult } from '~/models/Show';

    defineProps<{ podcast: ShowSearchResult }>()
</script>

<style scoped>

</style>