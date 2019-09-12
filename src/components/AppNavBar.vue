<template>
  <nav id="NavBar" class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <!-- START NAVBAR -->
    <div class="navbar--mobile">
      <router-link
        :to="{ name: 'home' }"
        @click.native="isOpen = false"
        v-scroll-to="{
          el: '#NavBar',
          duration: 1000
        }"
      >
        <base-icon
          name="home"
          height="32"
          width="32"
          class="navbar__icon"
        ></base-icon>
      </router-link>
      <div @click="isOpen = !isOpen">
        <base-icon
          name="menu"
          height="32"
          width="32"
          v-if="!isOpen"
          class="navbar__icon"
        ></base-icon>
        <base-icon
          name="x"
          height="32"
          width="32"
          v-else
          class="navbar__icon"
        ></base-icon>
      </div>
    </div>

    <!-- END NAVBAR -->

    <!-- START MOBILE LINKS -->
    <transition name="fade">
      <div class="nav-mobile" v-if="isOpen" @click="isOpen = false">
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
        <router-link :to="{ name: 'login' }" class="nav__link nav__link--mobile"
          >Login</router-link
        >
        <router-link
          :to="{ name: 'create-account' }"
          class="nav__link nav__link--mobile"
          >Create Account</router-link
        >
      </div>
    </transition>

    <!-- END MOBILE LINKS -->
  </nav>
</template>

<script>
export default {
  name: 'AppNavBar',
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
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
  background-color: #f9f9fb;
  color: #444;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 15px #444;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 1;

  // hides nav
  &--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }

  // mobile spacing
  &--mobile {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    margin: 0 2em;
  }
}

.nav-mobile {
  display: flex;
  flex-flow: column nowrap;
  background-color: #f9f9fb;
  border-top: 0.1em solid orange;
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
  color: #666;
  text-transform: uppercase;
  text-align: center;

  &--mobile {
    display: block;
    font-size: 1.1em;
    padding: 0.25em 0;
    &:hover {
      background-color: darken(#f9f9fb, 10%);
    }
  }
}

// style active links
.router-link-exact-active {
  background-color: darken(#f9f9fb, 5%);
  color: darken(#444, 10%);
}
</style>
