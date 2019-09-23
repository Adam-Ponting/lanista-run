<template>
  <div>
    <HomeBanner />
    <HomeText class="component" />
    <HomeCards class="component" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue'
import HomeText from '@/components/HomeText.vue'
import HomeCards from '@/components/HomeCards.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeText,
    HomeCards
  }
}
</script>
<style lang="scss" scoped></style>
