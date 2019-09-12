<template>
  <div id="app">
    <AppNavBar />
    <transition name="fade" mode="out-in">
      <router-view class="router-view" />
    </transition>
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
  transition: all 0.3s ease;
}
.router-view {
  padding-top: 64px;
  overflow-x: hidden;
}
/* START TRANSITIONS */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-leave-to {
  opacity: 0;
}
/* END TRANSITIONS */
/* START MEDIA QUERY */

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
/* END MEDIA QUERY */
</style>
