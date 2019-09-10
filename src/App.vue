<template>
  <div id="app">
    <AppNavBar />
    <router-view class="router-view" />
    <div>
      <a href="#" v-scroll-to="'#element'">Scroll to #element</a>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati
      temporibus ratione! Recusandae repudiandae quo, voluptate inventore,
      libero mollitia blanditiis vel magnam maxime ipsam necessitatibus
      corporis, dolorem labore illum harum!
    </div>

    <div id="element">Hi. I'm #element.</div>
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
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
.router-view {
  padding-top: 4em;
}
</style>
