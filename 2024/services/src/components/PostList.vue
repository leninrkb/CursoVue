<template>
    <ul>
        <ol v-for="data, index in posts" :key="index">
            <li>id: {{data.id}}</li>
            <li>user id: {{data.userId}}</li>
            <li>title: {{data.title}}</li>
            <li>body: {{data.body}}</li>
            <br>
        </ol>
    </ul>
</template>

<script setup>
import { onMounted } from "vue";
import PostService from '@/services/PostService.js'

const service = new PostService()
let posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})
</script>

<style scoped>
ol{
    border: 2px solid rgb(10,150, 10, 0.5);
    margin: 1em;
    padding: 1em 1em 1em 3em;
    border-radius: 1em;
}
</style>