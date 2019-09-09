<template>
  <nav class="nav" :class="{ 'nav-test': colorNav }">
    <div class="nav__info">
      <router-link :to="{ name: 'home' }" class="nav__link">
        <svg class="icon" width="32" height="32">
          <use v-bind="{ 'xlink:href': '/feather-sprite.svg#home' }" />
        </svg>
      </router-link>
      <router-link :to="{ name: 'home' }" class="nav__link"
        >Features</router-link
      >
      <router-link :to="{ name: 'about' }" class="nav__link"
        >Training Plans</router-link
      >
      <router-link :to="{ name: 'about' }" class="nav__link"
        >Resources</router-link
      >
    </div>

    <div class="nav__account">
      <router-link :to="{ name: 'about' }" class="nav__link">Login</router-link>
      <router-link :to="{ name: 'about' }" class="nav__link"
        >Create Account</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavBar',
  data() {
    return {
      colorNav: false
    }
  },
  watch: {
    $route() {
      // https://stackoverflow.com/questions/42336188/dynamically-inserting-a-css-class-to-navbar-based-on-route
      this.$route.path === '/'
        ? (this.colorNav = false)
        : (this.colorNav = true)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  stroke: lightpink;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.nav-test {
  background-color: lightgoldenrodyellow;
  .nav__link {
    color: black;
    text-shadow: none;
  }
  .icon {
    stroke: black;
  }
}
.nav {
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}
.nav__link {
  color: linen;
  text-shadow: 0 0 2px black;
  font-size: 1em;
  padding: 0.5em;
  margin: 0 0.5em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}
.nav__info,
.nav__account {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
