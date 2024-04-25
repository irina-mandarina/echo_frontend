<template>
    <div class="layout-container">
        <NuxtLayout class="w-full">
            <div class="w-1/3 mx-auto bg-echo-gray rounded-lg p-6 flex flex-col">
                <h1 class="font-franklin text-center">
                    Create an account for
                    <br />
                    <span class="text-echo-orange">
                        echo
                    </span>
                </h1>

                <div class="flex flex-col w-5/6 mx-auto">
                    <EchoInput :value="username"
                    @update:value="username=$event"
                     class="my-2" label="Username" validation="" />

                    <EchoInput :value="email" @update:value="email=$event"
                     class="my-2" label="Email" validation="" />

                    <EchoInput :value="password"
                    @update:value="password=$event"
                     class="my-2" label="Password" validation="" />

                    <EchoInput :value="confirmPassword"
                    @update:value="confirmPassword=$event"
                     class="my-2" label="Confirm Password" validation="" />

                    <div v-if="userStore.errorMessage" class="text-red-500 text-sm">
                        {{ userStore.errorMessage }}
                    </div>
                    
                    <div v-if="password !== confirmPassword" class="text-red-500 text-sm">
                        Passwords do not match
                    </div>

                    <EchoButton @click="signUp" class="w-1/2 mx-auto my-3">
                        Sign up
                    </EchoButton>
                </div>

                <div class="flex my-3">
                    <NuxtLink to="/login" class="text-sm mx-auto">
                        Already have an account?
                        <span class="underline text-echo-orange">
                            Log in
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '~/stores/userStore'

    const userStore = useUserStore()

    const username = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')

    async function signUp() {
        console.log('Signing up: ', username.value, email.value, password.value, confirmPassword.value)
        await userStore.signUp(username.value, email.value, password.value)
        if (userStore.errorMessage) {
            return
        }
        navigateTo('/')
    }
</script>

<style scoped>

</style>