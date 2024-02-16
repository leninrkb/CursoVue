<template>
    <div class="options">
        <IconButton @click="">Login with google</IconButton>
        <IconButton @click="">Login with facebook</IconButton>
        <IconButton @click="">Login with github</IconButton>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import IconButton from "@/components/IconButton.vue";
// 
const google_provider = new GoogleAuthProvider()
const auth = getAuth()
const loginGoogle =  () => {
    signInWithPopup(auth, google_provider).then(() => {
        alert(`signed in with google succesfuly`)
    }).catch(error => {
        alert(error)
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