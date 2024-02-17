<template>
    <h4 v-if="show" class="text-lg animate-pulse font-bold font-sans my-2 p-2 rounded-md bg-gray-400 text-center">
        <slot></slot>
    </h4>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    show:{
        type: Boolean,
        default: false
    }
})
</script>