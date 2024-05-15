<template>
    <div class="overflow-hidden">
        <div :class="containerClasses">
            <i :class="iconClasses"></i>
            <input
                class="p-2 bg-echo-bg rounded-r-xl font-roboto outline-none focus:outline-none w-full"
                v-model="query"
                @focus="searchBarFocused = true"
                @blur="searchBarFocused = false"
            />
        </div>
        <Transition v-if="query.length || resultsModalFocused">
            <div class="absolute fixed w-full h-full bg-black/25 top-0 left-0 z-10">

                <SearchResultsModal 
                    :query="query"
                    @focus="resultsModalFocused = true"
                    @blur="() => {resultsModalFocused = false; query = ''}"
                />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    const searchBarFocused = ref(false)
    const resultsModalFocused = ref(false)
    const query = ref('')

    const iconClasses = computed(() => {
        return {
            'fas fa-search p-2 my-auto': true,
            'text-orange-400': searchBarFocused.value,
        }
    })

    const containerClasses = computed(() => {
        return {
            'z-20 relative bg-echo-bg rounded-xl duration-300 flex flex-row w-full outline outline-offset-0 outline-2 outline-echo-gray': true,
            'outline outline-offset-0 outline-orange-400 outline-1': searchBarFocused.value,
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
