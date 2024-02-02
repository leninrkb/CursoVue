<template>
    <label for="nuevo">nuevo pais</label><input type="text" v-model="newCountry">
    <button class="btn" @click="add">agregar</button>
    <ol>
        <li v-for="c, index in countries" :key="index">
            {{c.name}}
        </li>
    </ol>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'
interface ICountry{
    code:string,
    name:string,
}
let newCountry:Ref<string> = ref('')
let countries: Ref<Array<ICountry>> = ref([
    {
        code:'ec',
        name:'ecuador'
    }
])
const add = () => {
    let new_ = {code:'', name:newCountry.value}
    countries.value.push(new_)
    newCountry.value = ''
}
</script>