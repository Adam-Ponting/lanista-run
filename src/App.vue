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
  font-size: 1rem;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
.router-view {
  padding-top: 64px;
}

@media only screen and (min-width: 600px) {
  body,
  html {
    font-size: 1.1rem;
  }
}
@media only screen and (min-width: 800px) {
  body,
  html {
    font-size: 1.2rem;
  }
}
</style>
