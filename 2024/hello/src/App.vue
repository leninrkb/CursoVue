<template>
  <ComputedBill></ComputedBill>
  <ComputedExample></ComputedExample>
  <PostList></PostList>
  <LifeCycle></LifeCycle>
  <ModelForm></ModelForm>
  <ClassBind></ClassBind>
  <ExampleFor></ExampleFor>
  <ExampleSelective></ExampleSelective>
  <CounterComposition></CounterComposition>
  <CounterOption></CounterOption>
  <PostContainer></PostContainer>
</template>

<script lang="ts" setup>
import ComputedBill from '@/components/ComputedBill.vue'
import ComputedExample from "@/components/ComputedExample.vue";
import PostList from "@/components/PostList.vue";
import LifeCycle from "@/components/LifeCycle.vue";
import ModelForm from "@/components/ModelForm.vue";
import ClassBind from '@/components/ClassBind.vue'
import ExampleFor from '@/components/ExampleFor.vue'
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

.input{
  background-color: rgb(57, 230, 172, 0.5);
  padding: 0.5em;
  border-radius: 0.5em;
}
</style>
