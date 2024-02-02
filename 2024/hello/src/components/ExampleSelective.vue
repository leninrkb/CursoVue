<template>
    <h4 v-if="age >= 18">eres mayor de edad</h4>
    <h4 v-else>eres menor de edad</h4>

    <input v-model="age" type="number">

    <h4 v-show="age >= 18">eres mayor de edad</h4>
    <h4 v-show="age < 18">eres menor de edad</h4>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
let age:Ref = ref(18)
</script>

<style scoped></style>