<template>
    <div class="flex flex-row p-2 h-full">
        <div class="w-1/10 h-full">
            <img :src="episode.images[0].url" alt="podcast cover" class="w-full h-full" />
        </div>
        <div class="w-9/10 h-full">
            <h3 class="font-lato-light text-lg">
                {{ episode.name }}
            </h3>
            <p class="text-sm">
                {{ episode.show }}
                {{ episode.release_date }}
            </p>
            <p>
                {{ episode.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { EpisodeSearchResult } from '~/models/Episode'

    defineProps<{ episode: EpisodeSearchResult }>()
</script>

<style scoped>

</style>