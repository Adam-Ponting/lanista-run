<template>
  <div>
    <ViewsBanner
      :bannerDetails="trainingPlans"
      :image="image"
      :position="position"
      :header="header"
      :subHeader="subHeader"
    />
  </div>
</template>

<script>
import ViewsBanner from '@/components/ViewsBanner.vue'
export default {
  name: 'TrainingPlans',
  components: {
    ViewsBanner
  },
  created() {
    this.image =
      'https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/hero_training-plans.jpg?alt=media&token=e117ba91-eaf9-4c64-a704-f19836851f2a'
    this.position = 'center'
    this.header = 'Choose your plan'
    this.subHeader =
      ' Training plans define how long, hard and frequently you need to run to properly prepare for your event - or just to maintain fitness.'
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
  }
}
</script>

<style lang="scss" scoped></style>
