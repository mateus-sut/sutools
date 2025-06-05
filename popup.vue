<template>
  <div class="flex h-screen min-w-[800px] min-h-[600px]">
    <Sidebar />
    <main class="flex-1 overflow-y-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import type { App } from "vue"
import { Storage } from "@plasmohq/storage"
import Sidebar from "./components/sidebar/sidebar.vue"
import { router } from "./lib/router"
import "./style.css"

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

getData()

defineOptions({
  prepare(app: App) {
    app.use(router)
  }
})
</script>
