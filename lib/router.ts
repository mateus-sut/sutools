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
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
}) 