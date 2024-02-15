<template>
    <LoginForm @login="auth($event)">
    <h4>Firebase Login</h4></LoginForm>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 


const auth = (e) => {
    const firebase_auth = getAuth()
    signInWithEmailAndPassword(firebase_auth, e.user.value, e.password.value).then(() => {
        alert(`usuario ${e.user.value} autenticado con firebase`)
    }).catch((error) => {
        alert(error)
    })
}
</script>

<style scoped>
</style>