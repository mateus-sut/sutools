<template>
  <div class="min-w-[400px] p-6 bg-white rounded">
    <h1 class="text-2xl font-bold text-center mb-6 text-indigo-600">Sutools</h1>
    
    <form @submit.prevent="saveData" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <!-- Name Input -->
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <!-- CEP and Number Address -->
        <div>
          <label class="block text-sm font-medium text-gray-700">CEP</label>
          <input
            v-model="formData.cep"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter CEP"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Number</label>
          <input
            v-model="formData.numberAddress"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Address number"
          />
        </div>

        <!-- Birth Date -->
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700">Birth Date</label>
          <input
            v-model="formData.birthDate"
            type="date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <!-- Contact Information -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="formData.email"
            type="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Phone</label>
          <input
            v-model="formData.phone"
            type="tel"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Your phone"
          />
        </div>

        <!-- Password Fields -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="formData.password"
            type="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save Data
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import type { App } from "vue"
import { Storage } from "@plasmohq/storage"
import "./style.css"

const storage = new Storage()

const formData = reactive({
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
  const data = await storage.get("data")
  if(data){
    formData.cep = data.cep
    formData.numberAddress = data.numberAddress
    formData.name = data.name
    formData.birthDate = data.birthDate
    formData.email = data.email
    formData.phone = data.phone
    formData.password = data.password
  }
}

getData();


defineOptions({
  prepare(app: App) {
    // Use any plugins here:
    // app.use
  }
})
</script>
