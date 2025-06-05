import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Form Auto-fill',
        component: () => import('../components/form-autofill.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('../components/users/users.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../components/users/users.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../components/Settings.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
}) 