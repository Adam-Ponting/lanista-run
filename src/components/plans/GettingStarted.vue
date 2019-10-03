<template>
  <main class="training-plan">
    <PlanHeader class="component--padding">
      <template #heading>
        <h1 class="plan-header__heading">
          {{ gettingStarted.header }}
        </h1>
      </template>
      <template #sub-heading>
        <h2 class="plan-header__sub-heading">
          {{ gettingStarted.subHeader }}
        </h2>
      </template>
    </PlanHeader>

    <section class="component--padding">
      <div class="max-width">
        <h2 class="training-plan__section-heading">
          {{ gettingStarted.toBeginHeading }}
        </h2>
        <p class="training-plan__section-lead-text">
          {{ gettingStarted.toBeginText }}
        </p>
      </div>
    </section>

    <section class="component--padding">
      <div class="max-width">
        <h2 class="training-plan__section-heading">
          {{ gettingStarted.topTips }}
        </h2>
        <p v-for="(tip, index) in topTips" :key="index">
          <base-icon
            name="play"
            class="icon--modifier"
            width="20"
            height="20"
          ></base-icon>
          {{ tip }}
        </p>
      </div>
    </section>

    <section class="component--padding">
      <h2 class="training-plan__section-heading">
        {{ gettingStarted.theSchedule }}
      </h2>
      <section class="getting-started--responsive">
        <WeekView v-for="week in week" :key="week.id" :week="week" />
      </section>
    </section>

    <section class="component--padding">
      <div class="max-width">
        <h2 class="training-plan__section-heading">
          {{ gettingStarted.theResults }}
        </h2>
        <p class="text--center">
          Congratulations! You’re a runner! What next? How about a 5K (3.1-mile)
          run?
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { plan } from '@/assets/data/GettingStarted.js'
import WeekView from '@/components/WeekView.vue'
import PlanHeader from '@/components/trainingPlans/PlanHeader.vue'

export default {
  components: {
    WeekView,
    PlanHeader
  },
  created() {
    this.gettingStarted = {
      header: 'Beginners Training Schedule',
      subHeader: 'Build from nought to 30 minutes in just eight weeks',
      toBeginHeading: 'Before you begin your journey',
      toBeginText:
        'Whatever your level of fitness you should comfortably be able to build from nothing to running continuously for 30 minutes in the space of eight weeks. All you need to do is make a commitment to run at least three times a week and follow this simple run-walk programme which will gradually ease you towards the goal.',
      topTips: 'Top Tips',
      theSchedule: 'The Schedule',
      theResults: 'The Results'
    }
    this.week = plan
    this.topTips = [
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
.training-plan {
  &__section-heading {
    color: var(--text-color-main);
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    &::after {
      content: '';
      display: block;
      border-bottom: 2px solid var(--active-green);
      width: 5%;
      margin: 0 auto;
      padding-top: 0.5em;
    }
  }
  &__section-lead-text {
    color: var(--text-color-faded);
    font-size: 0.8em;
    font-weight: 600;
    text-align: center;
  }
}
section.component--padding:nth-child(odd) {
  background-color: var(--bg-color-white);
}
.icon--modifier {
  // class received from component
  color: var(--active-orange);
  padding-right: 0.25em;
}
@media only screen and (min-width: 1250px) {
  // go to flex when content fits best
  .getting-started--responsive {
    display: flex;
    padding: 0 0.25em 2em;
  }
}
</style>
