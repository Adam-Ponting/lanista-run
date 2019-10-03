<template>
  <div class="week-view">
    <h1 class="week-number">week {{ week[0].weekNumber }}</h1>
    <section class="week-view--responsive">
      <DayView v-for="day in week[1].plan" :key="day.id" :day="day" />
    </section>
  </div>
</template>

<script>
import DayView from '@/components/DayView.vue'

export default {
  components: {
    DayView
  },
  props: {
    week: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.getting-started--responsive .week-view {
  padding: 0 0.25em;
  flex: 1;
}
.week-view {
  padding: 0 1em;
  background-color: var(--bg-color-main);
}
.week-number {
  margin: 0;
  padding: 0;
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 0;
  padding: 0.25em;
  color: var(--text-color-white);
  background: linear-gradient(
    to right,
    var(--bg-color-main),
    var(--bg-color-blue) 10%,
    var(--bg-color-blue) 90%,
    var(--bg-color-main)
  );
  text-transform: capitalize;
  text-align: center;
}
@media only screen and (min-width: 1000px) {
  .week-view--responsive {
    display: flex;
  }
  .week-number {
    background: linear-gradient(
      to right,
      var(--bg-color-main),
      var(--bg-color-blue) 50%,
      var(--bg-color-main)
    );
  }
}
</style>
