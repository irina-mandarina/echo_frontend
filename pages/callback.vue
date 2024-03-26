<template>
    <div class="layout-container">
        <NuxtLayout>
            <div class="flex flex-col">
                <p class="mx-auto text-2xl font-lato-light p-4">
                    <span v-if="accessPermitted">
                        You have successfully connected your Spotify account.
                    </span>
                    <span v-else>
                        You have denied access to your Spotify account. Please try again.
                    </span>
                </p>
                <div v-if="accessPermitted" class="mx-auto">
                    <img src="https://freepngimg.com/thumb/emoji/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png" />
                </div>
                <div v-else class="mx-auto">
                    <img src="https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart.png" />
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { useRoute} from "vue-router"
const route = useRoute();

const accessPermitted = ref<boolean>(!route.fullPath.includes("access_denied"))

</script>

<style scoped>

</style>