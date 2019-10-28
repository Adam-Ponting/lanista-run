<template>
  <main>
    <PlanHeader>
      <!-- uses classes in PlanHeader component -->
      <template #heading>
        <h1 class="distance-header__heading">{{ gettingStarted.header }}</h1>
      </template>
      <template #sub-heading>
        <h2 class="distance-header__sub-heading">
          {{ gettingStarted.subHeader }}
        </h2>
      </template>
    </PlanHeader>

    <section class="padding intro-text">
      <p class="text">
        Whatever your level of fitness you should comfortably be able to build
        from nothing to running continuously for 30 minutes in the space of
        eight weeks.
      </p>
      <p class="text">
        All you need to do is make a commitment to run at least three times a
        week and follow this simple run-walk programme which will gradually ease
        you towards the goal.
      </p>
    </section>

    <aside class="padding card-wrapper">
      <div v-for="(tip, index) in topTips" :key="index" class="card">
        <div class="image-wrapper">
          <img class="image" :src="tip.image" />
        </div>

        <div class="card-content">
          <h6 class="card-content__title">{{ tip.title }}</h6>
          <p class="card-content__text">{{ tip.tip }}</p>
        </div>
      </div>
    </aside>

    <section class="padding the-plan--wrapper">
      <div class="the-plan--responsive">
        <div v-for="(week, index) in weekNumber" :key="week" class="week">
          <h2 class="week__number">week {{ week }}</h2>
          <div class="week__activity">{{ plan[index].activity }}</div>
        </div>
      </div>
    </section>

    <section class="padding congratulations">
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
    </section>
  </main>
</template>

<script>
import { gettingStarted } from '@/assets/data/GettingStarted.js'
import PlanHeader from '@/components/trainingPlans/PlanHeader.vue'

export default {
  components: {
    PlanHeader
  },
  created() {
    this.weekNumber = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight'
    ]
    this.plan = gettingStarted
    this.gettingStarted = {
      header: 'Beginners Training Schedule',
      subHeader: 'Build from nought to 30 minutes in just eight weeks'
    }
    this.gettingStartedData = gettingStarted
    this.topTips = [
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
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.intro-text {
  background-color: $light-shade;

  color: $text-dark;

  text-align: center;
}
.text {
  text-align: center;
}

.card-wrapper {
  background-color: $dark-shade; // color bg card section
  text-align: center;
}
.card {
  display: inline-block; // allows use of vertical align

  margin-top: 4em;

  background-color: $dark-accent;

  border-radius: 6px;

  color: $text-color-primary;

  line-height: 1.2em;
  font-size: 1em;

  &:nth-child(odd) {
    background-color: $light-accent;
  }

  &:first-child {
    margin-top: 2em; // correctly align top image after margin -2em
  }
}
.image-wrapper {
  height: 100%;
  margin: -2em 1em 0;

  border-radius: 6px;
  box-shadow: 0px 3px 13px 2px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  .image {
    height: 100%;
    width: 100%;

    vertical-align: middle;

    border: 0;
    border-radius: 6px;
  }
}
.card-content {
  padding: 0.5em 2em;

  &__title {
    margin: 0.2em 0;

    color: $light-shade;
    font-family: cursive;
    letter-spacing: 0.1em;
    font-size: 1em;
    font-weight: bold;

    text-transform: uppercase;
  }

  &__text {
    margin: 0;
    padding: 0.5em 0;

    font-size: 0.8em;

    opacity: 0.75;
  }
}

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

.congratulations {
  background-color: $dark-shade;
  color: $text-light;
}
.congratulations__header {
  text-align: center;
  font-size: 1.5em;
  line-height: 1.5em;
}
.congratulations__text {
  opacity: 0.9;
  text-align: center;
}
.congratulations__link {
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
}

@media only screen and (min-width: 900px) {
  .card-wrapper {
    text-align: center;
    padding-bottom: 2em; // to offset -margin for the cards
  }
  .card {
    width: calc(100% / 3 - 4em);
    margin: 2em 1em;
    height: 100%;
    vertical-align: bottom;

    text-align: left;
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
  .text {
    text-align: left;
  }
  .week {
    &__number,
    &__activity {
      font-size: 1em;
    }
  }
}
</style>
