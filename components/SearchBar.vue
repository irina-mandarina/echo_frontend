<template>
    <div>
        <div :class="containerClasses">
            <i :class="iconClasses"></i>
            <input
                class="p-2 bg-echo-bg rounded-r-xl font-roboto outline-none focus:outline-none overflow-none w-full"
                @focus="isFocused = true"
                @blur="isFocused = false"
            />
        </div>
        <Transition v-if="isFocused">
            <div class="absolute w-full h-full bg-black/25 top-0 left-0 z-10">

                <SearchResultsModal />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const isFocused = ref(false)

const iconClasses = computed(() => {
    return {
        'fas fa-search p-2 my-auto': true,
        'text-orange-400': isFocused.value,
    }
})

const containerClasses = computed(() => {
    return {
        'z-20 relative bg-echo-bg rounded-xl duration-300 flex flex-row w-full outline outline-offset-0 outline-2 outline-echo-gray': true,
        'outline outline-offset-0 outline-orange-400 outline-1': isFocused.value,
    }
})
</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
