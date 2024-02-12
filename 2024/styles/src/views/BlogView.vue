<template>
    <div class="class">{{init}}</div>
    <nav>
        <router-link :to="{name:'blog-post', params:{id:1}}">first post</router-link> |
        <router-link :to="{name:'blog-post', params:{id:2}}">second post</router-link> |
        <router-link :to="{name:'blog-post', params:{id:3}}">third post</router-link> 
    </nav>
    <div>
        c
    </div>
</template>

<script setup>
import { ref } from "vue";
let init = ref('blog view')
</script>

<style scoped>
</style>