<template>
    <div class="container">
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
    </div>
</template>

<script lang="ts" setup>
import PostCard from '@/components/PostCard.vue';
</script> 


<style scoped>
.container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>