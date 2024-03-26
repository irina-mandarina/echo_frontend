<template>
    <div class="layout-container">
        <NuxtLayout class="w-full">
            <div class="w-1/3 h-1/3 mx-auto bg-echo-gray rounded-lg p-6 flex flex-col">
                <h1 class="font-rubik text-center">
                    Create an account for
                    <br />
                    <span class="text-echo-orange">
                        echo
                    </span>
                </h1>

                <div class="flex flex-col w-5/6 mx-auto">
                    <EchoInput class="my-2" label="Email" validation="" />
                    <EchoInput class="my-2" label="Password" validation="" />
                    <EchoInput class="my-2" label="Confirm Password" validation="" />


                    <EchoButton class="w-1/2 mx-auto my-3">
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
</script>

<style scoped>

</style>