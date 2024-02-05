<template>
    <input type="number" step="0.1" v-model="taxes">
    product: <input type="text" v-model="product.name"> -> 
    price: <input type="number" v-model="product.price"> : 
    <button class="btn" @click="addProductHandler">add</button>
    <br>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price per unit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data, index in products" :key="index">
                <td>{{data.name}}</td>
                <td>{{data.price}}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total taxes:</td>
                <td>$ {{total}}</td>
            </tr>
        </tfoot>
    </table>
    <hr>
</template>

<script lang="ts" setup>
import { ref, Ref, computed } from "vue";
interface Product{
    name: string
    price: number
}
let taxes:Ref<number> = ref(0.12)
let product:Ref<Product> = ref({
    name: '',
    price: 0
})
let products:Ref<Array<Product>> = ref([])
let total = computed(() => {
    let resp = 0
    products.value.forEach(element => {
        resp += element.price * taxes.value
    });
    return resp
})
const addProduct = () => {
    products.value.push({
        name: product.value.name,
        price: product.value.price,
    })
}
const clearFields = () => {
    product.value.name = ''
    product.value.price = 0
}
const addProductHandler = () => {
    addProduct()
    clearFields()
}
</script>

<style scoped>
</style>