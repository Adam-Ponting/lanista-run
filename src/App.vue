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
:root {
  --bg-color-main: #f7f7f7;
  --bg-color-white: #fff;
  --bg-color-black: #343a40;

  --text-color-main: #444;
  --text-color-faded: #999;
  --text-color-black: #111;
  --text-color-red: rgb(255, 0, 0);

  --active-orange: orange;
  --active-red: red;
}

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
  background-color: var(--bg-color-main);
  color: var(--text-color-red);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  background-color: inherit;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  overflow: visible;
  text-decoration: none;
  text-transform: none;
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

.scale-enter {
  transform: scale(0); // start from 0
}
.scale-enter-active,
.scale-leave-active {
  // default scale to 1
  transition: transform 0.2s ease-out;
}
.scale-leave-to {
  transform: scale(0); // scale to 0
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
