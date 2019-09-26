<template>
  <!-- data from https://www.runnersworld.com/uk/training/5km/a760067/six-week-beginner-5k-schedule/ -->
  <div>
    <aside class="aside--padding">
      <h4 class="text-center">Two-week 10K training plans</h4>
      <p>
        Two weeks put you in a sort of no man’s land – you can’t improve a great
        deal in such a short time, but you can do some useful sessions to
        prepare for the race. If you’re a relatively new runner, it should allow
        you to learn to run with a degree of efficiency and economy. Regular
        runners can use the fortnight to fine-tune their existing fitness and
        practice running at 10K pace.
      </p>
      <p>
        If you're two weeks away from your 10K race, follow this plan, running
        <span v-show="currentTab === ''">multiple</span>
        <span v-show="currentTab === 'Low'">3-4</span>
        <span v-show="currentTab === 'High'">5-6</span>
        times per week to prepare your body. If you're a relatively new runner,
        this 14-day training plan will teach you to run efficiently and get the
        best out of your legs on the day. If you're a regular runner, use this
        training plan to fine-tune your fitness for the distance.
      </p>
      <p>
        The plan is broken down into rest days and running days. The schedule
        will involve speed runs, fartlek training and easy running.
      </p>
    </aside>
    <div class="tab-selection">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }} Intensity Plan
      </button>
    </div>

    <!-- use key in transition as both elements are div's -->
    <!-- https://vuejs.org/v2/guide/transitions.html#Transitioning-Between-Elements -->
    <transition name="component-fade" mode="out-in">
      <p v-if="currentTab === ''" class="text--center">
        Please select an above plan
      </p>

      <div v-else-if="currentTab === 'Low'" key="low">
        <WeekView :week="weekLow.week1" />
        <WeekView :week="weekLow.week2" />
      </div>
      <div v-else key="high">
        <WeekView :week="weekHigh.week1" />
        <WeekView :week="weekHigh.week2" />
      </div>
    </transition>
  </div>
</template>

<script>
import { twoWeekLow } from '@/assets/data/TenK.js'
import { twoWeekHigh } from '@/assets/data/TenK.js'
import WeekView from '@/components/WeekView.vue'

export default {
  components: {
    WeekView
  },
  data() {
    return {
      currentTab: '',
      tabs: ['Low', 'High']
    }
  },
  created() {
    this.weekLow = twoWeekLow
    this.weekHigh = twoWeekHigh
  }
}
</script>

<style lang="scss" scoped>
.text--center {
  text-align: center;
}
.text--padding {
  padding: 0 1em;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tab-button {
  font-size: 1.1em;
  padding-top: 0.5em;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: ''; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto;
    width: 5%; /* Change this to whatever width you want to have before hover. */
    padding-top: 0.5em; /* This creates some space between the element and the border. */
    border-bottom: 1px solid black; /* This creates the border. Replace black with whatever color you want. */
    transition: 0.5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
  }
  &:hover:after {
    cursor: pointer;
    width: 100%; /* This will be the new width of your border when on hover */
  }
}
.active {
  &:after {
    border-color: orange;
    width: 50%;
  }
}
.tab-selection {
  margin: 0 1em;
  text-align: center;
  background-color: white;
}
.aside--padding {
  padding: 0 1em;
}
.text-center {
  text-align: center;
}
</style>
