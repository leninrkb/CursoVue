<template>
    <p :class="{'danger':isError}">
        aqui cualquier mensaje
    </p>
    <button class="btn" @click="toggle">toggle state</button>
</template>

<script lang="ts" setup>
import {Ref, ref} from 'vue'
let isError:Ref<boolean> = ref(false)
const toggle = () => {
    isError.value = !isError.value
    console.log(isError.value);
    
}
</script>


<style scoped>
.danger{
    color: rgb(200,0,0,0.7);
}

.ok{
    color: rgb(0,200,0,0.7);
}
</style>