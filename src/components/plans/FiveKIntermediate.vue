<template>
  <div class="beginner-container">
    <h4 class="text-center">Intermediate 5k training plan over six weeks</h4>
    <p>
      A basic 5K training schedule for anyone who can currently run for 30
      minutes, four times a week.
    </p>
    <WeekView :week="week.weekOne" />
  </div>
</template>

<script>
import { intermediate } from '@/assets/data/FiveK.js'
import WeekView from '@/components/WeekView.vue'

export default {
  name: 'FiveKIntermediate',
  components: {
    WeekView
  },
  created() {
    this.week = intermediate
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.beginner-container {
  padding: 0 1em;
}
</style>
