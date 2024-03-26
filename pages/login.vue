<template>
    <div class="layout-container">
        <NuxtLayout class="w-full">
            <div class="w-1/2 h-1/3 m-auto bg-echo-gray rounded-lg p-6 flex flex-col">
                <h1 class="font-rubik text-center w-full">
                    Log in
                </h1>
                <div class="flex flex-row mt-4">
                    <div class="flex flex-col w-1/2 mx-auto h-full">
                        <EchoInput class="my-2" label="Email" validation="" />
                        <EchoInput class="my-2" label="Password" validation="" />

                        <EchoButton class="w-1/2 mx-auto my-4">
                            Log in
                        </EchoButton>
                    </div>

                    <div class="flex flex-col my-3 w-1/2 h-full">
                        <div class="bg-orange-300 p-3 mx-auto h-32 w-32">

                        </div>

                        <NuxtLink to="/signup" class="text-sm mx-auto text-center mt-2">
                            Don't have an account?
                            <br />
                            <span class="underline text-echo-orange">
                            Sign up
                        </span>
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>