<template>
  <div>
    <ViewsBanner
      :bannerDetails="features"
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
  name: 'Features',
  components: {
    ViewsBanner
  },
  created() {
    this.image =
      'https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/hero_features.jpg?alt=media&token=468f86c0-d6c0-4aeb-9446-db80ced022a0'
    this.position = '80% 0'
    this.header = 'Train The Right Way'
    this.subHeader =
      'Confidence comes from the perfect strategy combined with the best training tools.'
    this.features = [
      {
        title: 'Commit to running',
        content:
          'Start by adding your event goals to guide your training strategy.',
        icon: 'fast-forward'
      },
      {
        title: 'Structure your training',
        content:
          'Plan your training volume and intensity to create the right workouts at the right time.',
        icon: 'filter'
      },
      {
        title: 'Work smarter',
        content:
          'Share planned workouts with your peers and create your own to add to your calendar.',
        icon: 'calendar'
      },
      {
        title: 'Track your progress',
        content:
          'Watch as your fitness improves and get rewarded along the way.',
        icon: 'bar-chart-2'
      }
    ]
  }
}
</script>

<style lang="scss" scoped></style>
