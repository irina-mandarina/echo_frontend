<template>
    <div class="flex flex-row p-2 overflow-x-hidden">
        <img class="rounded-xl w-[72px] h-[72px]" :src="stream.episode.images[1].url" alt="Episode image" />
        
        <div class="px-2 w-[90%]">
            <div class="font-roboto-light flex flex-row justify-between">
                <p class="text-xl w-4/5 text-ellipsis overflow-hidden hover:w-max hover:overflow-visible">
                    {{ stream?.episode?.name }}
                </p>
                <p class="text-xs">
                    {{ new Date(parseInt(stream?.timestamps?.[stream?.timestamps?.length - 1] as unknown as string)).toLocaleString() }}
                </p>
            </div>
            <p class="font-roboto font-medium">
                {{ stream?.episode?.show?.name }}
            </p>
            <p class="text-ellipsis overflow-hidden font-roboto">
                {{ stream?.episode?.description }}
            </p>
            
        </div>
    </div> 
</template>

<script setup lang="ts">
    import type { Stream } from '~/models/StreamingData'

    defineProps<{
        stream: Stream
    }>()
</script>