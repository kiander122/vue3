import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Collections from '@/views/Collections.vue'
import About from '@/views/About.vue'
import Contacts from '@/views/Contacts.vue'
import Teams from '@/views/Teams.vue'
import Login from '@/views/auth/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path:'/collections',
        name: 'Collections',
        component: Collections,
        meta: { requiresAuth: true }
    },
    {
        path:'/login',
        name: 'Login',
        component: Login,
    },
    {
        path:'/about',
        name: 'About',
        component: About,
        meta: { requiresAuth: true }
    },
    {
        path:'/contact',
        name: 'Contact',
        component: Contacts,
        meta: { requiresAuth: true }
    },
    // {
    //     path:'/teams',
    //     name: 'Teams',
    //     component: Teams,
    //     meta: { requiresAuth: true }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const passcode = localStorage.getItem('passcode') || null
    if (to.meta.requiresAuth && !passcode) {
        next({ name: 'Login', query: to.query })
    } else if (to.name === 'Login' && passcode) {
        next({ name: 'Home' })
    } else {
        next()
    }
})

export default router