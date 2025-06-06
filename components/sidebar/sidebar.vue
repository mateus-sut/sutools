<template>
    <div class="flex h-screen flex-col border-r border-gray-200 bg-white w-64">
        <div class="flex h-16 shrink-0 items-center px-4 gap-2">
            <Wrench class="w-6 h-6" />
            <h1 class="text-xl font-bold text-indigo-600">
                Sutools
            </h1>
        </div>
        <nav class="flex-1 space-y-1 px-2 py-4">
            <SidebarItem v-for="item in navigationItems" :key="item.text" :icon="item.icon" :text="item.text"
                :to="item.to" />
        </nav>
    </div>
</template>

<script setup lang="ts">
import { Wand, User, Wrench } from 'lucide-vue-next'
import SidebarItem from './sidebar-item.vue'
import type { LucideIcon } from '~node_modules/lucide-vue-next/dist/lucide-vue-next'

interface NavigationItem {
    icon: LucideIcon
    text: string
    to: string
}

const navigationItems: NavigationItem[] = [
    {
        icon: Wand,
        text: 'Form Auto-fill',
        to: '/'
    },
    {
        icon: User,
        text: 'Usuários cadastrados',
        to: '/users'
    },
]
</script>