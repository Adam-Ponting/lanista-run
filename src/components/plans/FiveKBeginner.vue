<template>
  <div class="beginner-container">
    <h4 class="text-center">Beginners 5k training plan over six weeks</h4>
    <p>
      Aimed at completely new runners, this is a basic 5K schedule that assumes
      you don't run at all yet, and is designed to get you round comfortably,
      probably with a few short walk breaks.
    </p>
    <p>
      This plan is pretty basic and assumes that you don't run at all yet. It
      has been designed to get you round your first 3.1 mile race, probably with
      a few short walking breaks.
      <br />The schedule will take you through six weeks, starting with short
      runs with walk breaks. If you find this too easy, or are already used to
      running for up to 30 minutes a few times a week, take a look at our
      intermediate 5K training plan.
    </p>
    <WeekView :week="week.weekOne" />
  </div>
</template>

<script>
import { beginner } from '@/assets/data/FiveK.js'
import WeekView from '@/components/WeekView.vue'

export default {
  name: 'FiveKBeginner',
  components: {
    WeekView
  },
  created() {
    this.week = beginner
    console.log(beginner)
  }
}
</script>

<style lang="scss" scoped>
.beginner-container {
  padding: 0 1em;
}
.text-center {
  text-align: center;
}
</style>
