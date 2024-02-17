<template>
    <div class="options">
        <IconButton @click="loginGoogle" :icon="google_icon">Login with google</IconButton>
    </div>
    <InfoMessage :show="show_message">user signed with google!</InfoMessage>
</template>

<script setup>
import { ref } from "vue";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import IconButton from "@/components/IconButton.vue";
import InfoMessage from "@/components/InfoMessage.vue";
// 
let show_message = ref(false)
let google_icon = require('../assets/google.png')
const google_provider = new GoogleAuthProvider()
const auth = getAuth()
const loginGoogle =  () => {
    signInWithPopup(auth, google_provider).then(() => {
        show_message.value = true
    }).catch(error => {
        show_message.value = false
    })
}
</script>

<style scoped>
.options{
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    padding: 1em;
    border: 2px solid gray;
    border-radius: 0.8em;
}
</style>