<template>
  <main>
    <PlanJumbo>
      <template v-slot:header
        >Beginners Training Schedule</template
      >
      <template v-slot:sub-header
        >Build from nought to 30 minutes in just eight weeks</template
      >
    </PlanJumbo>
    <PlanTitle>
      <template v-slot:header>
        <h1 class="plan__header text--center">{{ header }}</h1>
      </template>
      <template v-slot:lead-text>
        <h5 class="plan__lead-text max-width">{{ subHeader }}</h5>
      </template>
    </PlanTitle>
    <PlanPrepare>
      <template v-slot:details>
        <p v-for="(detail, index) in details" :key="index" class="details-text">
          <base-icon
            name="play"
            class="icon--modifier"
            width="20"
            height="20"
          ></base-icon>
          {{ detail }}
        </p>
      </template>
    </PlanPrepare>

    <PlanTitle>
      <template v-slot:header>
        <h2 class="plan__header text--center">The Schedule</h2>
      </template>
    </PlanTitle>
    <section class="getting-started--responsive">
      <WeekView v-for="week in week" :key="week.id" :week="week" />
    </section>
    <PlanTitle style="backgroundColor:var(--bg-color-white)">
      <template v-slot:header>
        <h2 class="plan__header text--center">The Result</h2>
      </template>
      <template v-slot:lead-text>
        <p class="plan__lead-text max-width">
          Congratulations! You’re a runner! What next? How about a 5K (3.1-mile)
          run?
        </p>
      </template>
    </PlanTitle>
  </main>
</template>

<script>
import { plan } from '@/assets/data/GettingStarted.js'
import WeekView from '@/components/WeekView.vue'
import PlanJumbo from '@/components/trainingPlans/PlanJumbo.vue'
import PlanPrepare from '@/components/trainingPlans/PlanPrepare.vue'
import PlanTitle from '@/components/trainingPlans/PlanTitle.vue'

export default {
  components: {
    WeekView,
    PlanJumbo,
    PlanPrepare,
    PlanTitle
  },
  created() {
    this.header = 'Before you begin your journey'
    this.subHeader =
      'Whatever your level of fitness you should comfortably be able to build from nothing to running continuously for 30 minutes in the space of eight weeks. All you need to do is make a commitment to run at least three times a week and follow this simple run-walk programme which will gradually ease you towards the goal.'
    this.week = plan
    this.details = [
      'Allow at least a day between runs when you begin.',
      'If in doubt, slow down. You should be able to hold a conversation while you run. Respecting your body is the best route to progression.',
      'Walk purposefully, and be strict with your run/walk timings.',
      'Don’t be afraid to repeat a week, or drop back a week. Everyone’s different.',
      'Take heart - you will get there!'
    ]
  }
}
</script>

<style lang="scss" scoped>
.jumbo-plan {
  background-color: var(--bg-color-black);
  padding: 1em;
  &__header {
    color: var(--text-color-white);
    font-size: 2em;
    &::after {
      content: '';
      display: block;
      border-bottom: 2px solid var(--active-orange);
      width: 20%;
      margin: 0 auto;
      padding-top: 0.75em;
    }
  }
  &__sub-header {
    color: var(--text-color-faded);
    font-size: 0.8em;
    text-align: center;
    margin: 0.5em 0;
  }
}
@media only screen and (min-width: 1250px) {
  // go to flex when content fits best
  .getting-started--responsive {
    display: flex;
    padding: 1em 0.25em 2em;
  }
}
</style>
