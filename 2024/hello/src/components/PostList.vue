<template>
    <h3>Current post {{ currentPost }}</h3>
    <div class="container">
        <PostDetail v-for="data, index in info" :key="index" 
        :title="data.title" 
        :content="data.content"
        @current="setCurrentPost($event)"></PostDetail>
    </div>
    <hr>
</template>

<script lang="ts" setup>
import PostDetail from "@/components/PostDetail.vue";
import { ref } from "vue";
let info = [
    {
        title: 'beethoven',
        content: 'the most passional compser ever'
    },
    {
        title: 'mozart',
        content: 'wolfi forever would be a genius of music'
    },
    {
        title: 'bach',
        content: 'johan composed beatiful and lovely pieces of music'
    }
]
let currentPost = ref(info[0].title)
const setCurrentPost = (current:string) => {
    currentPost.value = current
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>