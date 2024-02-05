<template>
    <div class="post" @click="handleCurrent">
        <h4>{{title}}</h4>
        <p>
            {{content}}
        </p>
    </div>
</template>


<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"; 
const props = defineProps({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: false,
        default: 'post with no text'
    }
})
const emit = defineEmits(['current'])
const handleCurrent = () => {
    emit("current", props.title)
}
</script>

<!-- <script lang="ts">
// composition api without setup
import { defineComponent } from "vue";
export default defineComponent({
    name:'post-detail',
    props:{
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            requiered: false,
            default: 'this post has no text'
        }
    },
    emits:['current'],
    setup(props, {emit}){
        const handleCurrent = () => {
            emit("current", props.title)
        }
        return{props, handleCurrent}
    }
})
</script> -->

<style scoped>
.post{
    width: 12em;
    height: 13em;
    border: 2px solid rgb(10, 10, 10, 0.4);
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: rgb(20, 200, 20, 0.1);
    overflow: auto;
}

.post:hover{
    background-color: rgb(10, 250, 10, 0.3);
}
</style>