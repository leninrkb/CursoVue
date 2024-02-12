import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue';
import PostItem from '@/components/PostItem.vue';

const routes = [
    {
        path: '/postitem/:id',
        name: 'post-item',
        component: PostItem
    },
    {
        path: '/posts',
        name: 'posts-view',
        component: PostView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
