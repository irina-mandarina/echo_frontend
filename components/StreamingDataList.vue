<template>
    <div :class="`p-6 w-11/12 ${streamingData && streamingData.length > 0 ? 'h-[600px]' : 'h-40'} flex mx-auto overflow-hidden`">

        <div class="flex flex-col bg-echo-gray rounded-lg w-3/4 p-1 overflow-hidden">
            <p class="h-1/12 font-franklin text-2xl p-4">
                Recents streams
            </p>
            <div class="h-full overflow-y-auto whitespace-nowrap">
                <Stream v-if="streamingData && streamingData.length > 0" class="border-t border-echo-dark-gray" v-for="stream in streamingData" :stream="stream" />
                <div v-else>
                    <p class="text-center font-roboto-light text-echo-dark-gray">
                        No streams available
                    </p>
                </div>
                <!-- <Stream v-for="stream in user?.streamingData?.slice(-15)" :stream="stream" /> -->
            </div>
        </div>

        <!-- Stats -->
        <div class="p-6">
            <p class="font-franklin text-2xl p-4">
                Stats
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
    import type { Stream } from '~/models/StreamingData';

    const props = defineProps<{
        streamingData: Stream[] | undefined
    }>()
</script>
