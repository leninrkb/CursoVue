<template>
    <form @submit.prevent="submitHandler">
        name: <input class="input" type="text" v-model="name">
        <br>
        acepto las condiciones: <input type="checkbox" v-model="agree">
        <br>
        <select v-model="opcion">
            <option value="uno">hola</option>
            <option value="dos">perinola</option>
            <option value="tres">apex?</option>
        </select>
        <br>
        <input type="submit">
    </form>
    <hr>
</template>


<script lang="ts" setup>
import { ref } from "vue";
let name = ref('')
let agree = ref(true)
let opcion = ref('dos')
const submitHandler = () => {
    console.log('haciendo submit');
}
</script>


<style scoped>
</style>