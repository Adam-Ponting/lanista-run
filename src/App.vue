<template>
  <div id="app">
    <AppNavBar />
    <div v-if="currentUser" class="user">user is:{{ currentUser.email }}</div>
    <transition name="fade" mode="out-in">
      <router-view id="router-view" />
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

.user {
  position: fixed;
  top: 0;
  left: 40%;
  z-index: 1;
}

#router-view {
  // align all content below nav bar
  padding-top: 64px;
}
</style>
