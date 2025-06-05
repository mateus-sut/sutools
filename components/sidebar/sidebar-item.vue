<template>
    <router-link :to="to" :class="[
        'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
        isActive
            ? 'bg-indigo-100 text-indigo-600'
            : 'text-gray-700 hover:bg-gray-100'
    ]">
        <component :is="icon" :class="[
            'mr-3 flex-shrink-0 h-5 w-5',
            isActive ? 'text-indigo-500' : 'text-gray-400'
        ]" />
        <span>{{ text }}</span>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { LucideIcon } from 'lucide-vue-next'

interface Props {
    icon: LucideIcon
    text: string
    to: string
}

const props = defineProps<Props>()
const route = useRoute()

const isActive = computed(() => {
    return route.path === props.to
})
</script>

<style scoped></style>