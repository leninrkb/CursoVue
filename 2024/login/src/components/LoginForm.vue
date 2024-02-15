<template>
    <div class="main">
        <slot></slot>
        <form @submit.prevent="login">
            <label for="user">User</label>
            <input type="text" name="user" v-model="user">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">
            <input class="border-2 p-2 active:bg-gray-400 cursor-pointer transition hover:-translate-y-1 hover:border-gray-500" type="submit">
        </form>
    </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(['login'])

let user = ref('')
let password = ref('')

const clearFields = () => {
    user.value = ''
    password.value = ''
}
const login = () => {
    emit("login", {user, password})
    clearFields()
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