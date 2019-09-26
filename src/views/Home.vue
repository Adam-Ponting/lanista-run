<template>
  <div>
    <HomeBanner />
    <HomeText class="component--padding" />
    <HomeCards class="component--padding" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeText from '@/components/home/HomeText.vue'
import HomeCards from '@/components/home/HomeCards.vue'

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
