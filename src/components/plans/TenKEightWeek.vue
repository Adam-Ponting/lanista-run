<template>
  <!-- data from https://www.runnersworld.com/uk/training/5km/a760067/six-week-beginner-5k-schedule/ -->
  <div>
    <aside class="aside--padding">
      <h4 class="text-center">Eight-week 10K training plans</h4>
      <p>
        Two weeks put you in a sort of no man’s land – you can’t improve a great
        deal in such a short time, but you can do some useful sessions to
        prepare for the race. If you’re a relatively new runner, it should allow
        you to learn to run with a degree of efficiency and economy. Regular
        runners can use the fortnight to fine-tune their existing fitness and
        practice running at 10K pace.
      </p>
    </aside>

    <WeekView :week="week.week1" />
    <WeekView :week="week.week2" />
    <WeekView :week="week.week3" />
    <WeekView :week="week.week4" />
    <WeekView :week="week.week5" />
    <WeekView :week="week.week6" />
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
  }
}
</script>

<style lang="scss" scoped>
.aside--padding {
  padding: 0 1em;
}
.text-center {
  text-align: center;
}
</style>
