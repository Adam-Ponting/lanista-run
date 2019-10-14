<template>
  <nav id="NavBar" class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <!-- START NAVBAR ICONS -->
    <div class="navbar--top">
      <router-link
        v-scroll-to="{
          el: '#NavBar',
          duration: 1000
        }"
        :to="{ name: 'home' }"
        class="home__icon"
        @click.native="isOpen = false"
      >
        <base-icon
          name="home"
          height="32"
          width="32"
          class="navbar__icon"
        ></base-icon>
      </router-link>
      <div @click="isOpen = !isOpen">
        <transition name="scale" mode="out-in">
          <base-icon
            v-if="!isOpen"
            key="menu"
            name="menu"
            height="32"
            width="32"
            class="navbar__icon"
          ></base-icon>
          <base-icon
            v-else
            key="close"
            name="x"
            height="32"
            width="32"
            class="navbar__icon"
          ></base-icon>
        </transition>
      </div>
    </div>
    <!-- END NAVBAR ICONS -->

    <!-- START MOBILE LINKS -->
    <transition name="fade">
      <div v-if="isOpen" class="nav-menu" @click="isOpen = false">
        <router-link :to="{ name: 'features' }" class="nav__link"
          >Features</router-link
        >
        <router-link :to="{ name: 'training-plans' }" class="nav__link"
          >training plans</router-link
        >
        <router-link :to="{ name: 'resources' }" class="nav__link"
          >Resources</router-link
        >
        <router-link
          v-if="currentUser"
          :to="{ name: 'dashboard' }"
          class="nav__link"
          >Dashboard</router-link
        >
        <router-link
          v-if="!currentUser"
          :to="{ name: 'create-account' }"
          class="nav__link"
          >Create Account</router-link
        >
        <router-link
          v-if="!currentUser"
          :to="{ name: 'login' }"
          class="nav__link"
          >Login</router-link
        >
        <button v-else type="button" class="nav__link" @click="logout">
          Log out
        </button>
      </div>
    </transition>
    <!-- END MOBILE LINKS -->
  </nav>
</template>

<script>
import { logout } from '@/components/functions.js'
import { mapState } from 'vuex'

export default {
  name: 'AppNavBar',
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isOpen: false,
      navHover: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    logout() {
      logout()
    },
    onScroll() {
      /* https://medium.com/@Taha_Shashtari/hide-navbar-on-scroll-down-in-vue-fb85acbdddfe */
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 64) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
      // close nav menu along with hiding navbar
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
// import scss file(s)
@import '@/assets/css/app.scss';
.navbar {
  position: fixed;
  top: 0;

  height: 64px;
  width: 100%;

  background-color: $bg-color-light;
  box-shadow: 0 1px 10px $bg-color-dark;
  color: $text-color-primary;

  z-index: 1;
  // hides nav
  /* currently not used - think it's best to keep nav shown */
  // &--hidden {
  //   box-shadow: none;
  //   transform: translate3d(0%, -100%, 0);
  // }
  // mobile spacing
  &--top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;

    height: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 1em;
  }
}
.nav-menu {
  display: flex;
  flex-flow: column nowrap;

  background-color: inherit;
  border-bottom: 1px solid $fill-dark;
  border-top: 0.1em solid $fill-dark;
}
.navbar__icon {
  display: flex;
  align-items: center;

  height: 100%;

  &:hover {
    cursor: pointer;
  }
}
.nav__link {
  display: block;

  padding: 0.2em 0;

  border-left: 0.2em solid transparent;
  border-right: 0.2em solid transparent;
  opacity: 0.6;

  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  transition: all 0.3s ease;

  &:hover {
    background-color: hsl($hsl-highlight-light, 0%, 90%);
    border-left: 0.2em solid $bg-highlight-dark;
    border-right: 0.2em solid transparent;
    opacity: 1;

    cursor: pointer;
  }
}
// style active links
.router-link-exact-active {
  opacity: 1;
  &:not(.home__icon) {
    // give a left border to the active link, as long as it's not .home__icon
    color: $text-color-primary;
    background-color: hsl($hsl-highlight-light, 0%, 85%);
  }
}
</style>
