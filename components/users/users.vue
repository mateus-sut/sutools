<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Usuários cadastrados</h1>
        <p class="text-gray-600">Seus usuários cadastrados no canal "teste-gestor-att-2":</p>
        <UserItem />
    </div>
</template>

<script setup lang="ts">
import UserItem from './user-item.vue'
</script>