<template>
    <button
        class="p-2 rounded-md border-2 transition hover:shadow-gray-500 hover:shadow-md hover:-translate-y-1 border-gray-500 w-fit active:translate-y-0 active:shadow-none">
        <span>
            <slot></slot>
            <img v-if="!loading" class="w-7 rounded-full" :src="icon" alt="button icon">
            <img v-else class="w-7 rounded-full animate-spin" :src="loading_icon" alt="button icon">

        </span>
    </button>
</template>

<script setup>
import { defineProps } from "vue";
// 
const props = defineProps({
    icon: {
        type: String,
        default: 'https://picsum.photos/100'
    },
    loading:{
        type: Boolean,
        default: false
    }

})
// 
let loading_icon = require('../assets/loading.png')
</script>

<style scoped>
span{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
}
</style>