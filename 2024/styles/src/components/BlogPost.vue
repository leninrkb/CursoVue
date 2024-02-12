<template>
    <div class="class">{{init}}</div>
    <div>post N: {{id}}</div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";


let init = ref('blog post')
let id = ref(0)

onMounted(() => {
    const route = useRoute()
    id.value = route.params.id
})
</script>

<style scoped>
</style>