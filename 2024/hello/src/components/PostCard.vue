<template>
    <div class="card">
        <h3>titulo</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae quos ea reiciendis quisquam pariatur sit
            perspiciatis? Fugit odit officiis distinctio nesciunt autem ut, praesentium ea, laboriosam deserunt dicta ullam.
        </p>
        <PostButton></PostButton>
    </div>
</template>

<script lang="ts" setup>
import PostButton from '@/components/PostButton.vue'
</script>

<style scoped>
.card{
    border-radius: 0.5em;
    padding: 0.5em;
    margin: 0.2em;
    border: 2px solid rgb(20,30,20,0.2);
}
</style>