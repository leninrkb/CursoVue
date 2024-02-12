import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPost from '@/components/BlogPost.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/services',
        name: 'services',
        component: ServicesView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path:'/blog',
        name:'blog-view',
        component: BlogView
    },        
    {
        path:'/blog/:id',
        name:'blog-post',
        component: BlogPost
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
