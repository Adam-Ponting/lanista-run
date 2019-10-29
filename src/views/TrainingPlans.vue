<template>
  <div>
    <TrainingPlansBanner
      :banner-details="trainingPlans"
      :image="image"
      :position="position"
    />
    <main class="padding">
      <TrainingPlansDistances
        v-for="distance in distances"
        :key="distance.heading"
        :distance="distance"
      />
    </main>
  </div>
</template>

<script>
import TrainingPlansBanner from '@/components/TrainingPlansBanner.vue'
import TrainingPlansDistances from '@/components/trainingPlans/TrainingPlansDistances.vue'
export default {
  name: 'TrainingPlans',
  components: {
    TrainingPlansBanner,
    TrainingPlansDistances
  },
  created() {
    this.image =
      'https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/hero_training-plans.jpg?alt=media&token=e117ba91-eaf9-4c64-a704-f19836851f2a'
    this.position = 'center'
    // this.subHeader =
    //   'Training plans define how long, hard and frequently you need to run to properly prepare for your event - and to maintain fitness.'
    this.trainingPlans = [
      {
        title: 'Plans for Every Runner',
        content:
          'Athletes of all abilities use our training plans to get faster.',
        icon: 'users'
      },
      {
        title: 'Training Sessions',
        content:
          'Benefit from the proven results of a varied training plan, including speedwork, intervals and fartlek sessions.',
        icon: 'zap'
      },
      {
        title: 'Proven Plans',
        content:
          'Structured training plans build your endurance and strength in the right order so you can be confident going into your event.',
        icon: 'clock'
      },
      {
        title: 'Workout Creator',
        content:
          'Create a personal workout from scratch, or cutomize an existing workout.',
        icon: 'database'
      }
    ]
    this.distances = [
      {
        plan: 'gettingStarted',
        heading: 'Getting Started',
        link: 'getting-started',
        description:
          'Begin your running journey with those all-important first steps – our Get-Started Schedule will take you from nought to 30 minutes in just eight weeks, whatever your current level of fitness.'
      },
      {
        plan: 'fiveK',
        heading: '5k',
        link: '5k',
        description:
          "5K (3.1 miles) is many things to many runners - it can be the perfect beginner's distance or a testing time trial. Whether you're a beginner aiming to get round or a regular runner, we've got schedules that'll see you to 5K in 6 - 12 weeks."
      }
      // {
      //   plan: 'tenK',
      //   heading: '10k',
      //   link: '10k',
      //   description:
      //     "The UK's most popular race distance is something special – versatile, testing and the perfect training companion for more other running goals than any other distance. Whether you've got two weeks or two months until your race, we've got the schedule for you."
      // },
      // {
      //   plan: 'halfMarathon',
      //   heading: 'Half-marathon',
      //   link: 'half-marathon',
      //   description:
      //     "Looking for a tough, but satisfying endurance event? The half-marathon could be just the thing, and with ten and twelve-week plans, we've got a schedule for every runner."
      // },
      // {
      //   plan: 'marathon',
      //   heading: 'Marathon',
      //   link: 'marathon',
      //   description:
      //     "Whether you're a first-timer or a marathon devotee, pick one of our huge range of 16-week schedules and you could soon be lining up ready to tackle the big one."
      // }
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.padding {
  background-color: $light-shade;
}
</style>
