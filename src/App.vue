<template>
  <div id="app">
    <AppNavBar />
    <router-view class="router-view" />
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue'

export default {
  components: {
    AppNavBar
  }
}
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.router-view {
  position: absolute;
  width: 100%;
  top: 34px;
  left: 0;
}
</style>
