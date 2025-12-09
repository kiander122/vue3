import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Stories from '@/views/Stories.vue'
import Features from '@/views/Features.vue'
import Contacts from '@/views/Contacts.vue'
import Teams from '@/views/Teams.vue'
import Journey from '@/views/Journey.vue'

import StoryDetail from '@/views/StoryDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/stories',
        name: 'Stories',
        component: Stories
    },
    {
        path: '/story/:id',
        name: 'StoryDetail',
        component: StoryDetail,
        props: true
    },
    {
        path:'/features',
        name: 'Features',
        component: Features
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
    {
        path:'/journey',
        name: 'Journey',
        component: Journey
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router