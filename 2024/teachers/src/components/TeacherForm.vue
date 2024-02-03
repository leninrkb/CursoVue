<template>
    <h1>Teachers registry</h1>
    <div>
        <form @submit.prevent="submitHandler">
            name: <input type="text" v-model="teacher.name">
            <br>
            surname: <input type="text" v-model="teacher.surname">
            <br>
            docs: <input type="checkbox" v-model="teacher.docs">
            <br>
            <input type="submit">
        </form>
    </div>
    <hr>
    <div>
        <h4>Teacher list</h4>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>surname</th>
                    <th>docs</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="teacher, index in teachers" :key="index">
                    <td>{{teacher.name}}</td>
                    <td>{{teacher.surname}}</td>
                    <td>{{teacher.docs}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";
let teacher = ref({
    name:'',
    surname:'',
    docs:false
})
let teachers = ref([])
const addTeacher = () => {
    teachers.value.push({
        name: teacher.value.name,
        surname: teacher.value.surname,
        docs: teacher.value.docs,
    })
}
const clearFields = () => {
    teacher.value.name = ''
    teacher.value.surname = ''
    teacher.value.docs = false
}
const submitHandler = () => {
    addTeacher()
    clearFields()
    console.log('submit');
}
</script>