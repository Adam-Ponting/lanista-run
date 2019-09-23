<template>
  <div id="app">
    <AppNavBar />
    <div class="user" v-if="currentUser">user is:{{ currentUser.email }}</div>
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
.user {
  position: fixed;
  top: 0;
  left: 40%;
  z-index: 1;
}
body,
html {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #444;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  color: inherit;
  text-decoration: none;
  border: none;
  background-color: inherit;
  &:active,
  &:hover,
  &:focus,
  &:focus-within {
    border: none;
    outline: none;
  }
}

* {
  box-sizing: border-box;
  transition: all 0.2s ease;
}
.router-view {
  padding-top: 64px;
  overflow-x: hidden;
}
.component {
  padding: 5em 0;
  &--light {
    background-color: #f9f9fb;
  }
  &--dark {
    background-color: whitesmoke;
  }
}

/* START TRANSITIONS */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
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
