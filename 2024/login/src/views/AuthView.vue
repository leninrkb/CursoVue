<template>
    <div class="main">
        <h4>Login</h4>
        <form @submit.prevent="login">
            <label for="user">User</label>
            <input type="text" name="user" v-model="user">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">
            <input class="border-2 p-2 active:bg-gray-400 cursor-pointer transition hover:-translate-y-1 hover:border-gray-500" type="submit">
        </form>
    </div>
</template>
<!-- https://hfp69ivl.directus.app/auth/login -->
<!-- email: testuser@gogodev.net -->
<!-- password: 12345678 -->


<script setup>
import { ref } from 'vue'
let user = ref('')
let password = ref('')

const login = () => {
    console.log('login...');
    console.log(user.value);
    console.log(password.value);
    clearFields()
}

const clearFields = () => {
    user.value = ''
    password.value = ''
}
</script>


<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 1em;
    border: 2px solid gray;
    border-radius: 0.5em;
    background-color: rgb(10, 10, 10, 0.1);
    gap: 1.1em;
}

.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
    gap: 1em;
    font-weight: bold;
}

input{
    border-radius: 0.5em;
    padding: 0.4em;
}
</style>