<template>
  <div>
    <h1 class="week-number">week {{ week[0].weekNumber }}</h1>
    <DayView v-for="day in week[1].plan" :key="day.id" :day="day" />
  </div>
</template>

<script>
import DayView from '@/components/DayView.vue'

export default {
  props: {
    week: {
      type: Array,
      required: true
    }
  },
  components: {
    DayView
  }
}
</script>

<style lang="scss" scoped>
.week-number {
  margin: 0;
  padding: 0;
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 0;

  padding: 0.25em;
  color: whitesmoke;
  background: linear-gradient(
    to right,
    rgba(lightgrey, 0.1),
    rgba(023, 105, 139, 1.25)
  );
  text-transform: capitalize;
  text-align: center;
}
</style>
