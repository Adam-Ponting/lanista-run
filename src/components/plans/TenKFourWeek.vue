<template>
  <!-- data from https://www.runnersworld.com/uk/training/5km/a760067/six-week-beginner-5k-schedule/ -->
  <div>
    <aside class="aside--padding">
      <h4 class="text-center">Four-week 10K training plans</h4>
      <p>
        Four weeks is long enough to improve your fitness and put a little edge
        of speed in your legs. There are three schedule options here: one for
        runners who can spare three days a week to train; one for five days a
        week; and one for six or seven days a week. Each option loosely relates
        to a range of target 10K times, and these are shown at the top of each
        schedule.
      </p>
      <p>
        The most basic option does assume you’re already running a minimum of
        three times and 16-20 miles a week, so if you’ve never run before but
        you’re committed to running a 10K in four weeks’ time you’d be best to
        simply focus on building up the length of your runs, rather than
        following the more speed-orientated structure of these schedules.
      </p>
      <p>
        Two key things to remember when following this training plan:
        <br />1. The sessions in the training plan aren’t set in stone. Be
        flexible with speeds and distances where you need to, especially if you
        start to feel tired all the time. <br />2. Feel free to change the order
        of the sessions to fit in with your daily schedule. Just be sure to
        follow the basic principle of not scheduling hard sessions back-to-back.
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
        <p class="text--padding">
          Four weeks is long enough to improve your fitness and put a little
          edge of speed in your legs. If you're committed to running a 10K in
          four weeks' time, this training plan looks at running three times a
          week, or around 16-20 miles. If you're a complete beginner, that
          mileage might sound a little daunting, but simply focus on building up
          the length of your runs, rather than following the more
          speed-orientated structure of these schedules.
        </p>
        <p class="text--padding">
          For more experienced runners, by following this training plan you
          should be able to achieve a 45-60 minute 10K.
        </p>
        <WeekView :week="weekLow.week1" />
        <WeekView :week="weekLow.week2" />
        <WeekView :week="weekLow.week3" />
        <WeekView :week="weekLow.week4" />
      </div>
      <div v-else-if="currentTab === 'Medium'" key="medium">
        <p class="text--padding">
          If you've got a month to train for your 10K, take a look at this four
          week training plan, where you'll be out running five times a week.
          That means two rest days to give your body time to recover, and
          different schedules of speed, fartlek and recovery runs. Sticking to
          this training plan should mean you'll be able to pace yourself to a
          40-50 minute 10K.
        </p>
        <WeekView :week="weekMedium.week1" />
        <WeekView :week="weekMedium.week2" />
        <WeekView :week="weekMedium.week3" />
        <WeekView :week="weekMedium.week4" />
      </div>
      <div v-else key="high">
        <p class="text--padding">
          If you're an experienced runner, looking to improve your 10K time and
          run a 35-45 minute 10K, we've got the plan to help. It involves four
          weeks of training, running 6-7 days per week. It will be a mixture of
          tempo, speed and fartlek runs.
        </p>
        <WeekView :week="weekHigh.week1" />
        <WeekView :week="weekHigh.week2" />
        <WeekView :week="weekHigh.week3" />
        <WeekView :week="weekHigh.week4" />
      </div>
    </transition>
  </div>
</template>

<script>
import { fourWeekLow } from '@/assets/data/TenK.js'
import { fourWeekMedium } from '@/assets/data/TenK.js'
import { fourWeekHigh } from '@/assets/data/TenK.js'
import WeekView from '@/components/WeekView.vue'

export default {
  components: {
    WeekView
  },
  data() {
    return {
      currentTab: '',
      tabs: ['Low', 'Medium', 'High']
    }
  },
  created() {
    this.weekLow = fourWeekLow
    this.weekMedium = fourWeekMedium
    this.weekHigh = fourWeekHigh
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
