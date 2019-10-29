<template>
  <main>
    <PlanHeader>
      <!-- uses classes in PlanHeader component -->
      <template #heading>
        <h1 class="distance-header__heading">{{ plan.header }}</h1>
      </template>
      <template #sub-heading>
        <h2 class="distance-header__sub-heading">{{ plan.subHeader }}</h2>
      </template>
    </PlanHeader>

    <PlanIntroText>
      <template #intro-text>
        <p v-for="text in plan.introText" :key="text">{{ text }}</p>
      </template>
    </PlanIntroText>

    <div class="padding FAQ-card-wrapper">
      <FAQCard
        v-for="(image, index) in plan.tipsFAQ"
        :key="index"
        :image="image"
        class="FAQ-card"
      />
    </div>

    <section class="padding the-plan--wrapper">
      <div class="the-plan--responsive">
        <div
          v-for="(week, index) in this.$store.state.weekNumber"
          :key="week"
          class="week"
        >
          <h2 class="week__number">week {{ week }}</h2>
          <div class="week__activity">{{ plan.data[index].activity }}</div>
        </div>
      </div>
    </section>

    <!-- <section class="padding congratulations">
      <h6 class="congratulations__header">
        Congratulations!
        <br />You’re a runner!
      </h6>
      <p class="congratulations__text">
        What next?
        <br />How about a
        <router-link
          :to="{ name: '5k' }"
          class="congratulations__link"
          title="View 5k plans"
          >5k</router-link
        >&nbsp;(3.1-mile) run?
      </p>
      <p class="congratulations__text">
        View all
        <router-link
          :to="{ name: 'training-plans' }"
          class="congratulations__link"
          title="View 5k plans"
          >training plans</router-link
        >.
      </p>
    </section>-->

    <PlanCongratulations>
      <template #heading></template>
      <template #next>
        <router-link
          :to="{ name: '5k' }"
          class="congratulations__link"
          title="View 5k plans"
          >5k</router-link
        >&nbsp;(3.1-mile)
      </template>
    </PlanCongratulations>
  </main>
</template>

<script>
import { gettingStarted } from '@/assets/data/GettingStarted.js'
import PlanHeader from '@/components/trainingPlans/PlanHeader.vue'
import PlanIntroText from '@/components/trainingPlans/PlanIntroText.vue'
import PlanCongratulations from '@/components/trainingPlans/PlanCongratulations.vue'
import FAQCard from '@/components/FAQCard.vue'

export default {
  components: {
    PlanHeader,
    PlanIntroText,
    FAQCard,
    PlanCongratulations
  },
  created() {
    this.plan = {
      header: 'Beginners Training Schedule',
      subHeader: 'Build from nought to 30 minutes in just eight weeks',
      introText: [
        'Whatever your level of fitness you should comfortably be able to build from nothing to running continuously for 30 minutes in the space of eight weeks.',
        'All you need to do is make a commitment to run at least three times a week and follow this simple run-walk programme which will gradually ease you towards the goal.'
      ],
      data: gettingStarted,
      tipsFAQ: [
        {
          title: 'rest',
          tip: 'Allow at least a day between runs when you begin.',
          image:
            'https://img.livestrong.com/630x/clsd/getty/1ea20370ffaa41ce8be0f0dd01637cdb.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
        },
        {
          title: 'listen',
          tip:
            'If in doubt, slow down. You should be able to hold a conversation while you run. Respecting your body is the best route to progression.',
          image:
            'https://img.livestrong.com/630x/clsd/getty/88f292be87624da3b7262c0f31cc64b3.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
        },
        {
          title: 'walk',
          tip: 'Walk purposefully, and be strict with your run/walk timings.',
          image:
            'https://img.livestrong.com/630x/clsd/getty/ec1b8cf9b0e2416eb12d961347de22b5.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
        },
        {
          title: "it's personal",
          tip:
            'Don’t be afraid to repeat a week, or drop back a week. Everyone’s different.',
          image:
            'https://img.livestrong.com/630x/clsd/7/8/0aafed3b62ac49b8aee06daec15c2dc8.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
        },
        {
          title: 'persevere',
          tip: 'Take heart - you will get there!',
          image:
            'https://img.livestrong.com/630x/clsd/getty/eba20bb803394360806b17e7e6d7c091?ipx=%7B%22f%22%3A%22webp%22%7D'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.the-plan--wrapper {
  background-color: $light-shade;
  text-align: center;
}
.week {
  &:not(:first-child):not(:last-child) {
    margin: 1em 0; // add top/bottom for all apart from 1+8 weeks
  }

  &__number {
    margin: 0;
    padding: 0.5em;

    background-color: $main-brand;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: $text-dark;

    font-size: 1em;
    text-transform: capitalize;
    font-weight: bold;
  }

  &__activity {
    padding: 0.5em 0.25em;

    border: 1px solid $main-brand;
  }
}

.FAQ-card-wrapper {
  display: block;
  background-color: $dark-shade;
}
.FAQ-card {
  margin: 1em auto; // center card
}

@media only screen and (min-width: 800px) {
  .FAQ-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .FAQ-card {
    margin: 1em;
  }
}

@media only screen and (min-width: 900px) {
  .card-wrapper {
    text-align: center;
    padding-bottom: 2em; // to offset -margin for the cards
  }
  .card-content {
    padding: 1em;

    &__title {
      padding-left: 1em;
    }

    &__text {
      font-size: 0.7em;
    }
  }

  .the-plan--responsive {
    display: grid;
    grid-gap: 0.25em;

    grid-template-columns: repeat(8, 1fr);
  }
  .week {
    display: grid;
    grid-template-rows: minmax(auto, 0.4fr) 1fr;

    &:not(:first-child):not(:last-child) {
      margin: 0; // remove top/bottom margins
    }

    &__number {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 0.9em;
    }

    &__activity {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5em 0.25em;

      font-size: 0.7em;
      line-height: 1.3em;
    }
  }
}
@media only screen and (min-width: 1200px) {
  .week {
    &__number,
    &__activity {
      font-size: 1em;
    }
  }
}
</style>
