<template>
    <div class="layout-container">
        <NuxtLayout>
            <div class="flex flex-col">
                <p class="text-2xl p-4 font-rubik text-green-600 w-full text-center">
                    Connect to Spotify
                </p>
                <p class="font-lato-light text-xl p-4 w-1/2 mx-auto">
<!--                    &nbsp;&nbsp;&nbsp;&nbsp;-->
                    By connecting your Spotify account, you'll enable our app to provide you with a personalized experience tailored to your music preferences.
                </p>
                <p class="p-4 w-1/2 mx-auto text-center">
                    Click the button below to connect to your Spotify account.
                </p>

                <EchoButton class="mx-auto" @click="navigateToLogIn">
                    <template #default>
                        Connect
                    </template>
                    <template #loader>
                        Connecting...
                    </template>
                </EchoButton>
                <p v-if="errorMessage" class="text-red-800">
                    {{ errorMessage }}
                </p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const errorMessage = ref<string>('')

const navigateToLogIn = async () => {
    const res = await fetch('http://localhost:8080/spotify-login-token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE3MTAyMzUxMjAsImV4cCI6MTcxMDIzODcyMH0.8L1u3ioRxOPcol87swx0k_sbWTQ9arAzDMeJAUqw8Ww`,
        }
    })
    const result = await res.json()
    console.log(result)
    window.location.href = `http://localhost:8080/spotify-login/?state=${result.state}`
}
</script>

<style scoped>
</style>
