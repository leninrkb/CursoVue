import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue';

const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: AuthView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
