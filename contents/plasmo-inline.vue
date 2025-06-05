<script lang="ts">
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"
import { Storage } from "@plasmohq/storage"
import { generateCpf } from "../utils/cpf"

export const config: PlasmoCSConfig = {
  matches: ["*://*.cloudfront.net/*"]
}

const getInlineAnchor: PlasmoGetInlineAnchor = () =>
document.querySelector(".register-title")

const mountShadowHost: PlasmoMountShadowHost = ({ anchor, shadowHost }) => {
  anchor!.element!.insertBefore(shadowHost!, anchor!.element!.firstChild)
}

export default {
  plasmo: {
    getInlineAnchor,
    mountShadowHost
  },
  data() {
    return {
      count: 0
    }
  },
  setup() {},
  mounted() {},
  methods: {
    async autoFillForm() {
      const storage = new Storage()
      const data = await storage.get("data")
      console.log(data)

      const cep = document?.getElementById("form.cep") as HTMLInputElement
      const numberAddress = document?.getElementById("form.numero") as HTMLInputElement
      const name = document?.getElementById("form.nome") as HTMLInputElement
      const birthDate = document?.getElementById("form.data_nascimento") as HTMLInputElement
      const email = document?.getElementById("form.email") as HTMLInputElement
      const phone = document?.getElementById("form.telefone") as HTMLInputElement
      const password = document?.getElementById("form.senha") as HTMLInputElement
      const confirmPassword = document?.getElementById("form.confirmar_senha") as HTMLInputElement
      const cpf = document?.getElementById("form.cpf") as HTMLInputElement

      if (cep) {
        cep.value = data.cep
        cep.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (name) {
        name.value = data.name
        name.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (birthDate) {
        birthDate.value = data.birthDate
        birthDate.dispatchEvent(new Event("input", { bubbles: true }))  
      }
      if (email) {
        email.value = data.email
        email.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (phone) {
        phone.value = data.phone
        phone.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (password) {
        password.value = data.password
        password.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (confirmPassword) {
        confirmPassword.value = data.password
        confirmPassword.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (numberAddress) {
        numberAddress.value = data.numberAddress
        numberAddress.dispatchEvent(new Event("input", { bubbles: true }))
      }
      if (cpf) {
        const cpfGenerated = await generateCpf()
        console.log(cpfGenerated)
        cpf.value = cpfGenerated
        cpf.dispatchEvent(new Event("input", { bubbles: true }))
      }
    }
  }
}
</script>

<template>
  <div>
    <button @click="autoFillForm()">Auto Preencher Formulário</button>
  </div>
</template>
