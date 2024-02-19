<template>
    pinia
    <h3>counter: {{ store.count }}</h3>
    <h3>counter x 2: {{ store.times2 }}</h3>
    <button @click="store.increment(1)">increment</button>
</template>

<script setup>
import { useCounterStore } from '@/store/index'
const store = useCounterStore()

</script>
