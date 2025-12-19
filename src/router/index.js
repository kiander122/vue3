import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Collections from '@/views/Collections.vue'
import About from '@/views/About.vue'
import Contacts from '@/views/Contacts.vue'
import Teams from '@/views/Teams.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/collections',
        name: 'Collections',
        component: Collections
    },
    {
        path:'/about',
        name: 'About',
        component: About
    },
    {
        path:'/contact',
        name: 'Contact',
        component: Contacts
    },
    {
        path:'/teams',
        name: 'Teams',
        component: Teams
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router