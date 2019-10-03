<template>
  <section class="features max-width">
    <CardFeature
      v-for="(feature, index) in features"
      :key="index"
      :feature="feature"
    >
      <template v-slot:icon>
        <base-icon
          :name="feature.icon"
          height="32"
          width="32"
          class="icon--modifier"
        ></base-icon>
      </template>
      <template v-slot:title>{{ feature.title }}</template>
      <template v-slot:content>{{ feature.content }}</template>
    </CardFeature>
  </section>
</template>

<script>
import CardFeature from '@/components/CardFeature'
export default {
  name: 'HomeCards',
  components: {
    CardFeature
  },
  created() {
    this.features = [
      {
        icon: 'activity',
        title: 'Structured Workouts',
        content:
          'Training or racing, get faster in less time with access to expertly designed workouts.'
      },
      {
        icon: 'award',
        title: 'Training Plans',
        content:
          'Go from beginner to pro. Choose from multiple comprehensive running plans.'
      },
      {
        icon: 'calendar',
        title: 'Calendar',
        content:
          'Keep your training on track with Calendar. Schedule workouts, races, and other activities.'
      },
      {
        icon: 'compass',
        title: 'Performance Analytics',
        content:
          'Use your run data to improve. Get simple tools to analyze your training to see if you’re getting faster.'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.features {
  display: block;
}
.icon--modifier {
  color: var(--active-orange);
}

@media only screen and (min-width: 600px) {
  .features {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
}
</style>
