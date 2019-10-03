<template>
  <main>
    <section>
      <div class="beginner-headers">
        <h1 class="text--center header__main">5k training</h1>
        <h5 class="text--center">
          Our one-stop shop for all things 5K, whether you're a beginner in
          training for your first ever race or an experienced runner targeting a
          new PB
        </h5>
      </div>
    </section>
    <aside class="component component--light getting-started__intro">
      <h2 class="text--center">Before You Begin</h2>

      <p>
        Short and snappy, 5K races are the perfect distance for beginners
        targeting a first race, but an equally satisfying target for a
        speed-demon with more racing experience.
      </p>

      <section
        v-for="(faq, index) in faqs"
        :key="index"
        class="beginner-details"
      >
        <span class="question">
          <base-icon name="play" class="icon--modifier"></base-icon>
          {{ faq.question }}
        </span>
        <span class="answer">{{ faq.answer }}</span>
      </section>
    </aside>
    <div class="component component--dark">
      <h2 class="text--center">Select a 5k Training Plan</h2>
      <div class="tab-selection">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </div>
      <transition name="component-fade" mode="out-in">
        <p v-if="currentTab === ''" class="text--center">
          Please select an above plan
        </p>

        <component :is="currentTab" class="tab"></component>
      </transition>
    </div>
    <div class="component component--light text--center">
      <h2>The Result</h2>
      <p>
        Congratulations! You’re a runner! What next? How about a 10K (6.2-mile)
        run?
      </p>
    </div>
  </main>
</template>

<script>
import { plan } from '@/assets/data/GettingStarted.js'
import FiveKBeginner from '@/components/plans/FiveKBeginner.vue'
import FiveKIntermediate from '@/components/plans/FiveKIntermediate.vue'

export default {
  components: {
    Beginner: FiveKBeginner,
    Intermediate: FiveKIntermediate
  },
  data() {
    return {
      currentTab: '',
      tabs: ['Beginner', 'Intermediate']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  created() {
    this.week = plan
    this.faqs = [
      { question: 'How far is 5k in miles?', answer: '5K is 3.1 miles.' },
      {
        question: 'How long will it take to train for a 5K?',
        answer:
          "We've got two different six week training plans to get you ready for your first 5K race, or to help you speed up on your next 5K race."
      },
      {
        question: 'How long will it take me to run a 5K?',
        answer:
          'Use our race time predictor to use your training runs to get a rough guide of how long it will take you to get round.'
      },
      {
        question: 'What should I eat on race day?',
        answer:
          "The right pre-race nutrition will help you fuel your 5K perfectly, and avoid an upset stomach. It's important to incorporate hydrations and nutrition in training runs."
      },
      {
        question: 'How can I get faster?',
        answer: 'Run to a plan.'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.header__main {
  text-transform: uppercase;
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
  margin: 0 0.25em;

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
.question {
  font-weight: bold;
  display: flex;
}
.answer {
  width: 100%;
}
.beginner-headers {
  padding: 1em;
}
.getting-started__intro {
  padding: 5em 1em;
}
.text--center {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
}
.beginner-details {
  padding-left: 0.5em;
  text-align: left;
  margin: 1em 0;
}
.icon--modifier {
  color: orange;
  padding-right: 0.5em;
}
.week-number {
  font-size: 1em;
  padding: 0.25em;
  color: whitesmoke;
  background: linear-gradient(
    to right,
    rgba(lightgrey, 0.1),
    rgba(023, 105, 139, 1.25)
  );
  text-transform: capitalize;
  text-align: center;
}
</style>
