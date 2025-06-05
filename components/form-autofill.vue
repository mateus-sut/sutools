<template>
    <div class="p-6 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-indigo-600">Form Auto-fill</h1>
            <p class="text-gray-600 mt-2">Preencha suas informações uma vez e preencha automaticamente os formulários no
                zero code.</p>
        </div>

        <form @submit.prevent="saveData" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                    <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
                    <input id="name" v-model="formData.name" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Digite seu nome completo" />
                </div>

                <div>
                    <label for="cep" class="block text-sm font-medium text-gray-700">CEP</label>
                    <input id="cep" v-model="formData.cep" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="00000-000" />
                </div>

                <div>
                    <label for="number" class="block text-sm font-medium text-gray-700">Número</label>
                    <input id="number" v-model="formData.numberAddress" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Número do endereço" />
                </div>

                <div class="col-span-2">
                    <label for="birthDate" class="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                    <input id="birthDate" v-model="formData.birthDate" type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" v-model="formData.email" type="email"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="seu@email.com" />
                </div>

                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
                    <input id="phone" v-model="formData.phone" type="tel"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="(00) 00000-0000" />
                </div>

                <div class="col-span-2">
                    <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
                    <input id="password" v-model="formData.password" type="password"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="••••••••" />
                </div>
            </div>
        </form>

        <div class="flex gap-4 mb-6 mt-4">
            <button @click="saveData"
                class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center gap-2">
                <Save class="w-4 h-4" />
                Salvar informações
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { Storage } from "@plasmohq/storage"
import { Save } from "lucide-vue-next"

interface FormData {
    cep: string
    numberAddress: string
    name: string
    birthDate: string
    email: string
    phone: string
    password: string
}

const storage = new Storage()

const formData = reactive<FormData>({
    cep: "",
    numberAddress: "",
    name: "",
    birthDate: "",
    email: "",
    phone: "",
    password: "",
})

const saveData = async () => {
    await storage.set("data", formData)
}

const getData = async () => {
    const data = await storage.get<FormData>("data")
    if (data) {
        Object.assign(formData, data)
    }
}

const autofillForm = async () => {
    const data = await storage.get<FormData>("data")
    if (data) {
        console.log("Auto-filling form with saved data:", data)
    }
}

autofillForm()
getData()
</script>