<template>
    <h3>{{ counter }}</h3>
    <button class="btn" @click="increment">incrementar</button>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'counter-option',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment(){
            this.counter += 1
        }
    },
})
</script>


<style scoped></style>