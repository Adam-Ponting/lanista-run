<template>
  <div>
    <!-- data from https://www.runnersworld.com/uk/training/a760072/six-week-intermediate-5k-schedule/ -->
    <aside class="aside--padding">
      <h4 class="text-center">Intermediate 5k training plan over six weeks</h4>
      <p>
        A basic 5K training schedule for anyone who can currently run for 30
        minutes, four times a week.
      </p>
      <p>
        The training plan will include a number of different types of run to
        help you get your best time as you tackle your next 5k race - these
        include easy, tempo and fartlek runs.
      </p>
      <p>
        If you feel like this is a bit much for you, take a look at our beginner
        training plan, aimed at getting you started.
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
.aside--padding {
  padding: 0 1em;
}

.text-center {
  text-align: center;
}
</style>
