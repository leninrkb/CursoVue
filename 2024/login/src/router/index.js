import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue';
import FirebaseAuthView from '@/views/FirebaseAuthView.vue';
import SocialAuthView from '@/views/SocialAuthView.vue';

const routes = [
    {
      path:'/authsocial',
      name:'auth-social',
      component: SocialAuthView
    },
    {
        path: '/authfirebase',
        name: 'auth-firebase',
        component: FirebaseAuthView
    },
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
