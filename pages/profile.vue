<template>
    <div class="layout-container">
        <NuxtLayout>
            <!-- Profile picture and BG -->
            <div class="absolute bg-echo-gray w-full h-1/3 -z-[101]">
                <div class="absolute bg-echo-gray w-full h-1/2 -top-1/2 -z-[101]"></div>
                <div class="rounded-full w-32 h-32 bg-echo-orange absolute -bottom-16 left-6">
                </div>
            </div>
            <div class="w-full h-1/3 relative opacity-0"></div>
            <div class="flex flex-row justify-items-start"> 

                <div class="w-40 relative opacity-0"> &nbsp; </div>

                <div class="">
                    <p class="font-franklin text-2xl">
                        {{ user?.username }}
                    </p>
                    <p>
                        {{  user?.streamingData?.length ?? 0 }} streams 
                    </p>
                </div>
            </div>
            
            <!-- Stream data -->
            <div class="p-6 w-11/12 flex mx-auto">
                <div class="bg-echo-gray rounded-lg w-3/4 p-6">
                    <p class="font-franklin">
                        Last streams
                    </p>
                    <!-- Recent streams -->
                    <Stream v-for="stream in user?.streamingData?.slice(-15)" :stream="stream" />
                </div>

                <div class="p-6">
                    <p class="font-franklin text-center">
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