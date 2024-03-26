<template>
        <label :class="labelClasses">
            {{ label }}
        </label>
        <input @focus="isFocused = true"
               @blur="isFocused = false"
               class="p-2 rounded-xl bg-echo-white font-roboto focus:outline focus:outline-offset-0 focus:outline-orange-400 focus:outline-1 duration-300" />
</template>

<script setup lang="ts">
    import { defineProps } from 'vue'
    const props = defineProps<{
        label: string
        validation: string
    }>()

    const isFocused = ref(false)

    const labelClasses = computed(() => {
        return {
            'block font-roboto-light text-xs font-medium duration-100 mb-0 p-0 mt-2': true,
            'text-orange-400': isFocused.value,
            '-translate-y-1': isFocused.value
        }
    })
</script>

<style scoped>

</style>