<template>
    <div class="layout-container">
        <NuxtLayout>
            <div class="h-2/3 bg-echo-gray top-0 flex flex-col justify-end">
                <span class="font-franklin text-5xl p-4">
                    Love what you listen to;
                    <br />
                    Let podcasts be your passion project
                </span>
                <p class="font-roboto-light text-3xl p-4">
                    Share your listening experience. Explore, inspire, connect.
                </p>
            </div>

            <div class="py-10 px-2">
                <p class="font-franklin text-3xl">
                    Picked just for you
                </p>
                <div class="whitespace-nowrap justify-between overflow-auto echo-scrollbar">
                    <div v-for="i in 10" class="p-2 inline-block">
                        <img width="180" heigth="180" src="https://supercast-storage-assets.b-cdn.net/channel/3050/artwork/medium-e94c6fcf00a6db9444f5c26eb44ef3e6.jpg" />
                    </div>  
                </div>
            </div>

            
            <div class="w-full">
                <p class="font-franklin text-3xl">
                    Trending this week
                </p>
                <div>

                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>