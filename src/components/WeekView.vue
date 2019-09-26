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
.getting-started--responsive .week-view {
  padding: 0 0.25em;
  flex: 1;
}
.week-view {
  padding: 0 1em;
  background: rgba(0, 0, 0, 0.05);

  // background-color: #f9f9fb;
}
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
    rgba(023, 105, 139, 1.25),
    rgba(lightgrey, 0.1)
  );
  text-transform: capitalize;
  text-align: center;
}
@media only screen and (min-width: 1000px) {
  .week-view--responsive {
    display: flex;
  }
}
</style>
