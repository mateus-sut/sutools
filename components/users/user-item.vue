<template>
    <div class="flex items-center justify-between border border-gray-200 p-2 rounded-md">
        <h1 class="text-sm font-medium text-gray-900">077.222.333-21</h1>
        <Copy class="w-4 h-4 text-gray-500" @click="copyCpf" />
    </div>
</template>

<script setup lang="ts">
import { Copy } from 'lucide-vue-next'

const copyCpf = () => {
    navigator.clipboard.writeText('077.222.333-21')
}

</script>

<style scoped></style>