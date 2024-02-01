<template>
    <h3>{{counter}}</h3>
    <button class="btn" @click="increment">incrementar</button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
    name:'counter-composition',
    setup(){
        let counter:Ref = ref(0)
        const increment = ():void => { counter.value += 1 }
        return{
            counter, increment
        }
    }
})
</script>