<template>
  <main>
    <PlanHeader>
      <!-- uses classes in PlanHeader component -->
      <template #heading>
        <h1 class="distance-header__heading">{{ fiveK.header }}</h1>
      </template>
      <template #sub-heading>
        <h2 class="distance-header__sub-heading">{{ fiveK.subHeader }}</h2>
      </template>
    </PlanHeader>

    <section class="padding intro-text">
      <p class="text">{{ fiveK.introText }}</p>
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

    <section class="padding ability-card-wrapper">
      <div
        v-for="(level, index) in fiveK.levels"
        :key="index"
        class="ability-card"
      >
        <img :src="level.image" class="ability-card__image" />
        <h5 class="ability-card__header">
          <base-icon
            name="bar-chart"
            class="icon--modifier"
            height="32"
            width="32"
          ></base-icon>
          {{ level.level }}
        </h5>
        <div class="ability-card__text-wrapper">
          <p v-for="text in level.text" :key="text" class="ability-card__text">
            {{ text }}
          </p>
        </div>
        <!-- https://github.com/rigor789/vue-scrollto/issues/26 -->
        <button
          class="ability-card__button"
          @click="
            sleep(level.level).then(() => {
              $scrollTo('#' + currentTab + '-one', { offset: -100 })
            })
          "
        >
          View {{ level.level }} Plan
        </button>
      </div>
    </section>
    <!-- https://vuejs.org/v2/guide/transitions.html#Transitioning-Between-Elements -->
    <section class="plan-tables padding">
      <WeekView
        v-for="(week, index) in beginnerWeeks"
        :key="index"
        :beginner="beginnerWeeks[index]"
        :intermediate="intermediateWeeks[index]"
        :week-number="weekNumber[index]"
        :days-of-week="weekDays"
        :tab="currentTab"
        :tabs="tabs"
        @togglePlan="toggleLevel"
      />
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
          :to="{ name: '10k' }"
          class="congratulations__link"
          title="View 10k plans"
          >10k</router-link
        >&nbsp;(6.2-mile) run?
      </p>
      <p class="congratulations__text">
        View all
        <router-link
          :to="{ name: 'training-plans' }"
          class="congratulations__link"
          title="View all plans"
          >training plans</router-link
        >.
      </p>
    </section>
  </main>
</template>

<script>
import { beginnerData, intermediateData } from '@/assets/data/FiveK.js'

import PlanHeader from '@/components/trainingPlans/PlanHeader.vue'
import WeekView from '@/components/WeekView.vue'

export default {
  components: {
    PlanHeader,
    WeekView
  },

  data() {
    return {
      currentTab: 'Beginner',
      tabs: ['Beginner', 'Intermediate', 'Advanced']
    }
  },

  created() {
    this.beginnerData = beginnerData
    this.intermediateData = intermediateData
    this.weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
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
    /* split data into 7 day chunks */
    function chunkArray(myArray, weekLength) {
      let chunk = []

      while (myArray.length) {
        chunk.push(myArray.splice(0, weekLength))
      }

      return chunk // return each week out to weeks array
    }
    this.beginnerWeeks = chunkArray(beginnerData, 7)
    this.intermediateWeeks = chunkArray(intermediateData, 7)
    // function chunkArray(myArray, weekLength) {
    //   let oneWeek = []

    //   while (myArray.length) {
    //     oneWeek.push(myArray.splice(0, weekLength))
    //   }

    //   return oneWeek // return each week out to weeks array
    // }
    // this.weeks = chunkArray(beginnerData, 7)
    this.fiveK = {
      header: '5k Training Schedule',
      subHeader:
        " Our one-stop shop for all things 5K, whether you're a beginner in training for your first ever race or an experienced runner targeting a new PB",
      introText:
        'Short and snappy, 5K races are the perfect distance for beginners targeting a first race, but an equally satisfying target for a speed-demon with more racing experience.',
      levels: [
        {
          level: 'Beginner',
          image:
            'https://img.livestrong.com/630x/photos.demandstudios.com/getty/article/99/24/472894240.jpg?ipx=%7B%22f%22%3A%22webp%22%7D',
          text: [
            "Aimed at completely new runners, this is a basic 5K schedule that assumes you don't run at all yet, and is designed to get you round comfortably, probably with a few short walk breaks.",
            "This plan is pretty basic and assumes that you don't run at all yet. It has been designed to get you round your first 3.1 mile race, probably with a few short walking breaks.",
            'The schedule will take you through six weeks, starting with short runs with walk breaks. If you find this too easy, or are already used to running for up to 30 minutes a few times a week, take a look at our intermediate 5K training plan.',
            "On race day: You will probably find that you can run at least 20 minutes before you need a break, but whatever your plan, start slowly and don't wait until you are exhausted before taking some one-minute walk breaks."
          ]
        },
        {
          level: 'Intermediate',
          image:
            'https://img.livestrong.com/630x/photos.demandstudios.com/getty/article/112/92/sb10064761w-001.jpg?ipx=%7B%22f%22%3A%22webp%22%7D',
          text: [
            'A basic 5K training schedule for anyone who can currently run for 30 minutes, four times a week.',
            'The training plan will include a number of different types of run to help you get your best time as you tackle your next 5k race - these include easy, tempo and fartlek runs.',
            ' If you feel like this is a bit much for you, take a look at our beginner training plan, aimed at getting you started. '
          ]
        }
      ]
    }
    this.fiveKBeginner = {
      level: 'beginner',
      text: [
        "Aimed at completely new runners, this is a basic 5K schedule that assumes you don't run at all yet, and is designed to get you round comfortably, probably with a few short walk breaks.",
        "This plan is pretty basic and assumes that you don't run at all yet. It has been designed to get you round your first 3.1 mile race, probably with a few short walking breaks.",
        'The schedule will take you through six weeks, starting with short runs with walk breaks. If you find this too easy, or are already used to running for up to 30 minutes a few times a week, take a look at our intermediate 5K training plan.',
        "On race day: You will probably find that you can run at least 20 minutes before you need a break, but whatever your plan, start slowly and don't wait until you are exhausted before taking some one-minute walk breaks."
      ]
    }

    this.fiveKIntermediate = {
      level: 'intermediate',
      text: [
        'A basic 5K training schedule for anyone who can currently run for 30 minutes, four times a week.',
        'The training plan will include a number of different types of run to help you get your best time as you tackle your next 5k race - these include easy, tempo and fartlek runs.',
        ' If you feel like this is a bit much for you, take a look at our beginner training plan, aimed at getting you started. '
      ]
    }
    this.topTips = [
      {
        title: 'How far is 5k in miles?',
        tip: '5K is 3.1 miles.',
        image:
          'https://img.livestrong.com/630x/clsd/getty/cache.gettyimages.com/dc2295da7240416bb0964003f821a4fe.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
      },
      {
        title: 'How long will it take to train for a 5K?',
        tip:
          "We've got two different six week training plans to get you ready for your first 5K race, or to help you speed up on your next 5K race.",
        image:
          'https://img.livestrong.com/630x/photos.demandstudios.com/getty/article/106/233/517671371.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
      },
      {
        title: 'How long will it take me to run a 5K?',
        tip:
          'Use our race time predictor to use your training runs to get a rough guide of how long it will take you to get round.',
        image:
          'https://img.livestrong.com/630x/clsd/getty/ecb796a6cfc34e92aea95307adc9dd45.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
      },
      {
        title: 'What should I eat on race day?',
        tip:
          "The right pre-race nutrition will help you fuel your 5K perfectly, and avoid an upset stomach. It's important to incorporate hydrations and nutrition in training runs.",
        image:
          'https://img.livestrong.com/630x/photos.demandstudios.com/getty/article/68/203/492757968.jpg?ipx=%7B%22f%22%3A%22webp%22%7D'
      }
    ]
  },
  methods: {
    sleep: function(level, ms = 400) {
      console.log('sleeping')
      /* https://github.com/rigor789/vue-scrollto/issues/26 */
      this.currentTab = level
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    toggleLevel(x) {
      this.currentTab === 'Beginner'
        ? (this.currentTab = 'Intermediate')
        : (this.currentTab = 'Beginner')
      console.log('x', x)
      this.go(x)
    },
    go(x) {
      console.log(x)

      let adam = function(ms = 400) {
        console.log('sleeping')
        /* https://github.com/rigor789/vue-scrollto/issues/26 */
        return new Promise(resolve => setTimeout(resolve, ms))
      }

      adam().then(() => {
        x.tab === 'Beginner'
          ? this.$scrollTo(`#Intermediate-${x.weekNumber}`, { offset: -100 })
          : this.$scrollTo(`#Beginner-${x.weekNumber}`, { offset: -100 })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.plan-tables {
  background-color: $light-shade;
}
.tab__header {
  font-size: 1.5em;
  text-align: center;
  padding: 1em;
  margin-bottom: 0.5em;
  background-color: $dark-accent;
}

.ability-card-wrapper {
  background-color: $light-accent;
  text-align: center;
  display: block;
}

.ability-card {
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 1em 0;
  padding: 1em;

  background-color: $dark-shade;
  color: $text-light;
  border-radius: 6px;
  box-shadow: 0px 3px 13px 2px rgba(0, 0, 0, 0.5);

  font-size: 1em;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.5em;

  text-align: center;

  &__header {
    margin: 1em 0;

    color: $main-brand;

    font-size: 1.5em;
    text-transform: uppercase;
  }

  &__image {
    width: 100%;
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;

    color: $text-light;
  }

  &__text {
    flex: 1;

    opacity: 0.9;
  }

  &__button {
    padding: 0.5em 1em;

    background-color: $button-info;
    &:hover {
      cursor: pointer;
    }
  }
}
.icon--modifier {
  vertical-align: text-bottom;
  color: $button-warning;
}

//
//
//
.congratulations__header {
  text-align: center;
  font-size: 1.5em;
  line-height: 1.5em;
}
.congratulations__text {
  font-size: 0.9em;
  opacity: 0.9;
  text-align: center;
}
.congratulations__link {
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
}

.intro-text {
  background-color: $light-shade;
  color: $text-dark;
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

  // &:nth-child(odd) {
  //   background-color: $dark-accent;
  // }
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
.the-plan {
  background-color: $light-shade;
  &__heading {
    text-align: center;
  }
}
.congratulations {
  background-color: $dark-shade;
  color: $text-light;
}
@media only screen and (min-width: 768px) {
  .plan__container {
    display: grid;
    grid-template-columns: 1fr 7fr; // week number / 7 days of week
    grid-template-areas:
      ' level  day '
      ' week content ';

    background: $light-shade;

    font-size: 0.8rem; // chanage rem to sort scaling issue
  }
}
@media only screen and (min-width: 900px) {
  .card-wrapper {
    text-align: center;
    padding-bottom: 2em; // to offset -margin for the cards
  }
  .card {
    width: calc(100% / 2 - 4em);
    margin: 2em 1em;

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
  .ability-card-wrapper {
    display: flex;
  }
  .ability-card {
    flex: 0 0 auto;

    width: calc(100% / 2 - 2em);

    margin: 0 1em;

    &__image {
      flex: 0 1 auto;
    }

    &__text-wrapper {
      flex: 1;
    }
  }
}
@media only screen and (min-width: 1200px) {
  .text {
    text-align: left;
  }

  .plan__container {
    font-size: 1rem;
  }
}
</style>
