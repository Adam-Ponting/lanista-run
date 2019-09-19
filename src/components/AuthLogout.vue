<template>
  <div>
    <a @click="logout">logout</a>
  </div>
</template>

<script>
const fb = require('@/firebaseConfig.js')

export default {
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch('clearData')
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
