<template>
  <main>
    <HomeBanner />
    <HomeText class="component--padding" />
    <HomeCards class="component--padding" />
  </main>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeText from '@/components/home/HomeText.vue'
import HomeCards from '@/components/home/HomeCards.vue'

export default {
  name: 'HomePage',
  components: {
    HomeBanner,
    HomeText,
    HomeCards
  }
}
</script>
<style lang="scss" scoped></style>
