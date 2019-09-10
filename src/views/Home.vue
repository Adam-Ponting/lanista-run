<template>
  <div>
    <HomeBanner />
    <HomeText class="component" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue'
import HomeText from '@/components/HomeText.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeText
  }
}
</script>
<style lang="scss" scoped>
.component {
  padding: 3em 0;
}
</style>
