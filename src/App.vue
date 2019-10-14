<template>
  <div id="app">
    <AppNavBar />
    <div v-if="currentUser" class="user">user is:{{ currentUser.email }}</div>
    <transition name="fade" mode="out-in">
      <router-view class="router-view" />
    </transition>
    <AppFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNavBar from '@/components/AppNavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppNavBar,
    AppFooter
  },

  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss">
@import '@/assets/css/app.scss';
// Layout Properties (position, float, clear, display)
// Box Model Properties (width, height, margin, padding)
// Visual Properties (color, background, border, box-shadow)
// Typography Properties (font-size, font-family, text-align, text-transform)
// Misc Properties (cursor, overflow, z-index)

// .max-width {
//   max-width: 1200px;
//   margin: 0 auto;
// }
.user {
  position: fixed;
  top: 0;
  left: 40%;
  z-index: 1;
}

.router-view {
  padding-top: 64px;
  overflow-x: hidden;
}
.component--padding {
  padding: 4em 1em;
}
.text--center {
  text-align: center;
}

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
