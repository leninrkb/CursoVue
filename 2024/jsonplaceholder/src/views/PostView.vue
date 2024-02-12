<template>
    <h3>Available posts</h3>
    <div class="container">
        <ul>
            <span class="item" v-for="data, index in posts" :key="index">
                <router-link :to="{ name: 'post-item', params: { id: data.id } }">{{ data.id }} - {{ data.title }}</router-link>
            </span>
        </ul>
    </div>
</template>


<script setup>
import { onMounted } from "vue";
import Post from '@/services/PostService.js';

const service = new Post()
let posts = service.get_data()

onMounted(() => {
    service.get_posts()
})
</script>


<style scoped lang="scss">

.item {
    display: block;
    padding: 1em;
    margin: 1em;
    border-radius: 0.5em;
    background-color: lighten($color: teal, $amount: 5);
    color: rgb(250, 250, 250);

    &:hover{
        background-color: lighten($color: teal, $amount: 15);
    }
}

.container{
    width: 100vw;
    max-height: 90vh;
    overflow: auto;
    margin: 1em;
    background-color: lighten($color: gray, $amount: 40);
    border-radius: 0.5em;
}
</style>