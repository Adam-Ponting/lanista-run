<template>
  <nav id="NavBar" class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <!-- START NAVBAR ICONS -->

    <div class="navbar--mobile max-width">
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
      <div v-if="isOpen" class="nav-mobile" @click="isOpen = false">
        <router-link
          :to="{ name: 'features' }"
          class="nav__link nav__link--mobile"
          >Features</router-link
        >
        <router-link
          :to="{ name: 'training-plans' }"
          class="nav__link nav__link--mobile"
          >training plans</router-link
        >
        <router-link
          :to="{ name: 'resources' }"
          class="nav__link nav__link--mobile"
          >Resources</router-link
        >
        <router-link
          v-if="currentUser"
          :to="{ name: 'dashboard' }"
          class="nav__link nav__link--mobile"
          >Dashboard</router-link
        >
        <router-link
          v-if="!currentUser"
          :to="{ name: 'create-account' }"
          class="nav__link nav__link--mobile"
          >Create Account</router-link
        >
        <router-link
          v-if="!currentUser"
          :to="{ name: 'login' }"
          class="nav__link nav__link--mobile"
          >Login</router-link
        >
        <button
          v-else
          type="button"
          class="nav__link nav__link--mobile"
          @click="logout"
        >
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
.navbar {
  height: 64px;
  width: 100%;
  background-color: var(--bg-color-main);
  color: var(--text-color-main);
  position: fixed;
  top: 0;
  box-shadow: 0 2px 15px var(--bg-color-black);
  border-bottom: 1px solid lightgray;
  z-index: 1;
  // hides nav
  &--hidden {
    box-shadow: none;
  }
  // mobile spacing
  &--mobile {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
  }
}
.nav-mobile {
  display: flex;
  flex-flow: column nowrap;
  background-color: inherit;
  border-top: 0.1em solid var(--active-orange);
  border-bottom: 1px solid lightgray;
}
.navbar__icon {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1em;
  &:hover {
    cursor: pointer;
  }
}
.nav__link {
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.5;
  &--mobile {
    display: block;
    font-weight: bold;
    padding: 0.25em 0;
    transition: all 0.3s ease;
    border-left: 0.2em solid transparent;
    border-right: 0.2em solid transparent;
    &:hover {
      cursor: pointer;
      opacity: 1;
      background-color: var(--bg-color-white);
      border-left: 0.2em solid var(--active-red);
      border-right: 0.2em solid transparent;
    }
  }
}
// style active links
.router-link-exact-active {
  opacity: 1;
  &:not(.home__icon) {
    // give a left border to the active link, as long as it's not .home__icon
    border-left: 0.2em solid var(--active-red);
  }
}
</style>
