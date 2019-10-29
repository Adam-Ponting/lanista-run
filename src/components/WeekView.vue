<template>
  <div>
    <transition name="fade" mode="out-in">
      <div :id="`${tab}-${index}`" :key="tab" class="grid-wrapper">
        <div
          class="level"
          title="Toggle Intensity"
          @click="toggleLevel(tab, index)"
        >
          {{ tab }}
        </div>
        <div class="week">Week {{ this.$store.state.weekNumber[index] }}</div>
        <div class="day-wrapper">
          <div v-for="day in this.$store.state.weekDays" :key="day" class="day">
            {{ day }}
          </div>
        </div>

        <div v-show="tab === 'Beginner'" class="activity-wrapper">
          <div
            v-for="day in beginner"
            :key="day.id"
            class="activity"
            :class="{ 'is-rest-day': day.activity === 'Rest' }"
          >
            {{ day.activity }}
          </div>
        </div>
        <div v-show="tab === 'Intermediate'" class="activity-wrapper">
          <div
            v-for="day in intermediate"
            :key="day.id"
            class="activity"
            :class="{ 'is-rest-day': day.activity === 'Rest' }"
          >
            {{ day.activity }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    beginner: {
      type: Array,
      default: () => []
    },
    intermediate: {
      type: Array,
      default: () => []
    },
    tab: {
      type: String,
      default: 'Beginner'
    },
    tabs: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    }
  },

  methods: {
    toggleLevel(tab, weekNumber) {
      console.log(tab, weekNumber)
      this.$emit('togglePlan', { tab, weekNumber })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.grid-wrapper {
  display: grid;
  grid-template-columns: auto 7fr; // title / 7xdays
  grid-template-areas:
    'level  week'
    'days activities';

  margin: 0.5em 0;

  font-size: 1em;
}
.level {
  // intensity button
  grid-area: level;

  margin: 0.1em;

  border-radius: 5px;

  background-color: $button-info;
  color: $text-light;

  &:hover {
    cursor: pointer;
  }
}
.level,
.week {
  padding: 0.5em;
}
.day {
  padding: 0.2em;
}
.activity {
  padding: 0.25em;
}

.week {
  grid-area: week;

  display: flex; // to ceneter content
  justify-content: center;
  align-items: center;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  text-transform: capitalize;

  background-color: $main-brand;
  color: $text-dark;

  font-weight: bold;
}

.day-wrapper {
  grid-area: days;

  border-top-left-radius: 15px;
}
.day {
  border: 1px solid $main-brand;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  font-weight: bold;
  text-transform: uppercase;
}
.activity-wrapper {
  grid-area: activities;
}
.activity {
  border: 1px solid $main-brand;

  text-align: center;
}
.activity-wrapper,
.day-wrapper {
  display: grid;
  grid-template-rows: repeat(7, 1fr); // kick out 7 row for days of week
}
.activity,
.day {
  display: flex; // to center content
  justify-content: center;
  align-items: center;
}
.is-rest-day {
  filter: brightness(90%);

  background-color: $light-shade;
}

@media only screen and (min-width: 768px) {
  .grid-wrapper {
    grid-template-rows: auto 2fr; // day / activity height
    grid-template-areas:
      'level  days'
      'week activities';
    font-size: 1em;
  }
  .activity-wrapper,
  .day-wrapper {
    display: grid;

    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
  }
  .activity {
    padding: 0.2em;
    font-size: 0.8em;
  }
  .week,
  .day {
    font-size: 0.8em;
  }
  .week {
    padding: 0.5em 0.2em;

    border-top-right-radius: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .day {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 0;
  }
}
@media only screen and (min-width: 1024px) {
  .activity-wrapper {
    font-size: 1em;
  }
}
</style>
