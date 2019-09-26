<template>
  <!-- data from https://www.runnersworld.com/uk/training/5km/a760067/six-week-beginner-5k-schedule/ -->
  <div>
    <aside class="aside--padding">
      <h4 class="text-center">Beginners 5k training plan over six weeks</h4>
      <p>
        Aimed at completely new runners, this is a basic 5K schedule that
        assumes you don't run at all yet, and is designed to get you round
        comfortably, probably with a few short walk breaks.
      </p>
      <p>
        This plan is pretty basic and assumes that you don't run at all yet. It
        has been designed to get you round your first 3.1 mile race, probably
        with a few short walking breaks.
      </p>
      <p>
        The schedule will take you through six weeks, starting with short runs
        with walk breaks. If you find this too easy, or are already used to
        running for up to 30 minutes a few times a week, take a look at our
        intermediate 5K training plan.
      </p>
      <p>
        <strong>On race day:</strong>
        You will probably find that you can run at least 20 minutes before you
        need a break, but whatever your plan, start slowly and don't wait until
        you are exhausted before taking some one-minute walk breaks.
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
