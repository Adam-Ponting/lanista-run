<template>
  <main>
    <!-- data from https://www.runnersworld.com/uk/training/a760084/the-perfect-10k/ -->
    <section>
      <div class="beginner-headers">
        <h1 class="text--center header__main">10k training</h1>
        <h5 class="text--center">
          Your best-possible 10K - from a four-day emergency plan to an
          eight-week-plus schedule, with all your questions answered
        </h5>
      </div>
    </section>
    <aside class="component component--light getting-started__intro">
      <h2 class="text--center">Before You Begin</h2>

      <p>
        We’ve broken our training plans down into time before the event, and
        runs per week to help you find the best schedule for you.
      </p>

      <section
        class="beginner-details"
        v-for="(faq, index) in faqs"
        :key="index"
      >
        <span class="question">
          <base-icon name="play" class="icon--modifier"></base-icon>
          {{ faq.question }}
        </span>
        <span class="answer">{{ faq.answer }}</span>
      </section>
    </aside>
    <div class="component component--dark">
      <h2 class="text--center">Select a 10k Training Plan</h2>
      <div class="tab-selection">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab === tab ? (currentTab = '') : (currentTab = tab)"
        >
          {{ tab }} Week Plans
        </button>
      </div>
      <transition name="component-fade" mode="out-in">
        <component :is="currentTab" class="tab"></component>
      </transition>
    </div>
    <div class="component component--light text--center">
      <h2>The Result</h2>
      <p>
        Congratulations! You’re a runner! What next? How about a half-marathon?
        (13.2-mile) run?
      </p>
    </div>
  </main>
</template>

<script>
import TenKTwoWeek from '@/components/plans/TenKTwoWeek.vue'
import TenKFourWeek from '@/components/plans/TenKFourWeek.vue'
import TenKEightWeek from '@/components/plans/TenKEightWeek.vue'

export default {
  components: {
    Two: TenKTwoWeek,
    Four: TenKFourWeek,
    Eight: TenKEightWeek
  },
  data() {
    return {
      currentTab: 'Two',
      tabs: ['Two', 'Four', 'Eight']
    }
  },
  created() {
    this.faqs = [
      { question: 'How far is 10k in miles?', answer: '10K is 6.2 miles.' },
      {
        question: 'How much time do I need to train for a 10K?',
        answer:
          'This hinges on two things: how often you can train and how long you have till the race. Our plans cater for time periods of two to eight weeks training.'
      },
      {
        question: 'What time should I aim for?',
        answer:
          'If you’re a complete beginner, don’t start out with an overly ambitious goal, input a recent time in our race time predictor tool. For experienced runners, you can be a bit more structured. With correct training, you should be able to hit your goal. We’ve also got time related 10K training plans below to help you reach your goal.'
      },
      {
        question: 'How should I pace on the day?',
        answer:
          'If this is your first 10K, try and run evenly – a fast start will often mean a painful finish. If you have a target of 60 minutes, you should aim to pass each kilometre marker at six-minute intervals. If you feel great near the end, pick up the pace and speed up.'
      },
      {
        question: 'What should I eat the night before a 10K?',
        answer:
          'SiS nutritionist Emma Barraclough shared the following top tips on how best to fuel your body for a 10K race, and what you should be eating during training.'
      },
      {
        question: 'How much water should I drink during a 10K race?',
        answer:
          'This depends on a few things – the weather on the day and whether you are properly hydrated before you start racing. A sub-40-minute athlete on a cool day would be fine without stopping for water, a beginner would benefit from the liquid and the opportunity to walk through the drinks station. Use your judgement, but either way, try to resume your normal running rhythm as soon as possible after a station. Find more commonly asked questions before running a 10K here.'
      },
      {
        question: 'I’m finding my training difficult - what should I do?',
        answer:
          'Whether you’ve got the speed, but are struggling with the endurance, or are an endurance runner struggling to speed up, we’ve found the solutions to the most common 10K problems here.'
      }
    ]
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
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
  display: inline-block;
  margin: 0 0.25em;

  &:hover {
    cursor: pointer;
  }
  &:after {
    content: ''; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto;
    width: 50%; /* Change this to whatever width you want to have before hover. */
    padding-top: 0.5em; /* This creates some space between the element and the border. */
    border-bottom: 2px solid black; /* This creates the border. Replace black with whatever color you want. */
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
    width: 100%;
  }
}
.tab-selection {
  text-align: center;
  margin: 0 auto;
  width: fit-content;
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
