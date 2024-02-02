<template>
  <h1>Hola mundo</h1>
  <ExampleSelective></ExampleSelective>
  <CounterComposition></CounterComposition>
  <CounterOption></CounterOption>
  <PostContainer></PostContainer>
</template>

<script lang="ts" setup>
import PostContainer from '@/components/PostContainer.vue'
import CounterOption from '@/components/CounterOption.vue'
import CounterComposition from '@/components/CounterComposition.vue'
import ExampleSelective from '@/components/ExampleSelective.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn{
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: aquamarine;
    text-transform: capitalize;
    color: rgb(20,50,20);
}
.btn:hover{
    background-color: rgb(57, 230, 172);
}
</style>
