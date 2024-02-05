<template>
    <input class="input" type="text" v-model="theString">
    <br>
    <h4>original string: {{ theString }}</h4>
    <h4>opposite string: {{ opposite }}</h4>
    <hr>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
let theString = ref('')
let opposite = computed(():string => {
    return theString.value.split('').reverse().join('')
}) 
</script>

<style scoped></style>