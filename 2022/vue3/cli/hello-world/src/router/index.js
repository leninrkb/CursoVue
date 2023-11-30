import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/Login.vue';
import Empleados from '../views/Empleados.vue';

const routes = [
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:'/empleados',
        name:'empleados',
        component:Empleados,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;