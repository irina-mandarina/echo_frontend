<template>
    <div class="flex flex-row p-2">
        <div class="w-[10%]">
            <img class="rounded-xl" src="../assets/huberman.jpg" alt="Episode image" />
        </div>
        <div class="px-2">
            <p class="text-xl font-roboto-light">
                {{ stream?.episode?.name ?? "Episode name" }}
            </p>
            <p class="font-roboto bold">
                {{ stream?.episode?.show?.name ?? "Episode author" }}
            </p>
            <p class="text-ellipsis overflow-hidden font-roboto">
                {{ stream?.episode?.description ?? "Episode description" }}
            </p>
        </div>
    </div> 
</template>

<script setup lang="ts">
    import type { StreamingData } from '~/models/User'

    defineProps<{
        // stream: StreamingData
        stream: any
    }>()
</script>