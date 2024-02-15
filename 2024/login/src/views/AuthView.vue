<template>
    <LoginForm @login="login($event)"></LoginForm>
</template>


<script setup>
import LoginForm from '@/components/LoginForm.vue'
import { ref } from 'vue'

const login = (e) => {
    console.log(e.user.value);
    console.log(e.password.value);
}
</script>


<style scoped>

</style>