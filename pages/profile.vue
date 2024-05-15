<template>
    <div class="layout-container">
        <NuxtLayout>
            <!-- Profile picture and BG -->
            <div class="absolute bg-echo-gray w-full h-1/3 -z-[101]">
                <div class="absolute bg-echo-gray w-full h-1/2 -top-1/2 -z-[101]"></div>
                <div class="rounded-full w-32 h-32 bg-echo-orange absolute -bottom-24 left-6">
                </div>
            </div>
            <div class="w-full h-1/3 relative opacity-0"></div>


            <div class="flex flex-row justify-items-start"> 

                <!-- <div class="w-40 relative opacity-0"> &nbsp; </div> -->

                <div class="ml-40 p-4 w-1/2">
                    <div class="flex flex-row justify-between">
                        <p class="font-franklin text-3xl">
                            @{{ user?.username ?? "irina" }}
                        </p>
                        <div class="flex flex-row">
                            <p class="font-franklin text-2xl px-4">
                                42 followers
                            </p>
                            <p class="font-franklin text-2xl px-4">
                                42 following
                            </p>
                        </div>
                    </div>
                    <p class="font-roboto-light p-2">
                        This is my bio. I like listening to podcasts.
                        This is my bio. I like listening to podcasts.
                        This is my bio. I like listening to podcasts.
                        This is my bio. I like listening to podcasts.
                        This is my bio. I like listening to podcasts.
                        This is my bio. I like listening to podcasts.
                        This is my bio. I like listening to podcasts.
                    </p>
                </div>

                <div class="flex flex-row justify-evenly w-1/3 font-franklin text-echo-orange text-2xl text-center p-6">
                    <p class="px-4 bg-echo-gray h-fit rounded-xl">
                        {{ user?.streamingData?.length ?? 182 }}
                        <br />
                         streams 
                    </p>
                    <p class="px-4 bg-echo-gray h-fit rounded-xl">
                        {{ user?.streamingData?.length ?? 35 }} 
                        <br />
                         podcasts 
                    </p>
                </div>
            </div>
            
            <!-- Stream data -->
            <div class="p-6 w-11/12 h-[600px] flex mx-auto overflow-hidden">

                <!-- Recent streams -->
                <div class="flex flex-col bg-echo-gray rounded-lg w-3/4 p-1 overflow-hidden">
                    <p class="h-1/12 font-franklin text-2xl p-4">
                        Recents streams
                    </p>
                    <div class="h-full overflow-y-auto whitespace-nowrap">
                        <Stream class="border-t border-echo-dark-gray" v-for="i in 15" :stream="i" />
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

        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    import type { User } from '~/models/User'
    import { useUserStore } from '~/stores/userStore'

    const userStore = useUserStore()
    onBeforeMount(async () => {
        await userStore.init()
    })
    let user = computed(() => userStore.user)
</script>

<style scoped>

</style>