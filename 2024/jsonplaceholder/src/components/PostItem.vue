<template>
    <div v-if="!done" class="item">
        <h3 class="uppercase">{{item.title}}</h3>
        <p class="body">
            {{item.body}}
        </p>
        <p class="footer">
            Post No.{{item.id}} - User:{{item.userId}}
        </p>
    </div>
    <div v-else>
        <h3>Loading...</h3>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Post from '@/services/PostService';

let service = new Post()
let router = useRoute()
let item = service.get_data()
let done = computed(() => {
    return item.value == null
})

onMounted(async () => {
    await service.get_post(router.params.id)
    console.log(item.value);
})

</script>

<style scoped>
.item{
    margin: 1em;
    padding: 1em;
    border-radius: 0.5em;
    background-color:rgb(200, 200, 200, 0.5);
}

.body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1em;
    font-weight: bold;
    text-align: justify;
}

.footer{
    font-size: 0.8em;
    text-decoration: underline;
}
</style>