<template>
  <div>
    <button @click="trya">try</button>
    <button @click="uploadPlan">UploadPlan</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
//const fb = require('../firebaseConfig.js')
import { plan } from '@/assets/data/Fivek.js'
import { logout, uploadPlan } from '@/components/functions.js'

console.log(plan)
export default {
  methods: {
    uploadPlan() {
      uploadPlan(plan)
    },
    logout() {
      logout()
    }
  }
}
</script>
<style lang="scss" scoped></style>
