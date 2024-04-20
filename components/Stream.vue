<template>
    <div class="flex flex-row">
        <div class="w-1/4">
            {{ stream.episode.name }}
        </div>
    </div> 
</template>

<script setup lang="ts">
    import type { StreamingData } from '~/models/User'

    defineProps<{
        stream: StreamingData
    }>()
</script>