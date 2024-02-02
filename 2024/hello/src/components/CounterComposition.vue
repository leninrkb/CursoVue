<template>
    <h3>{{ counter }}</h3>
    <button class="btn" @click="increment">incrementar</button>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
let counter: Ref = ref(0)
const increment = (): void => { counter.value += 1 }
</script>