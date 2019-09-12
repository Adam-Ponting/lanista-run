<template>
  <div class="feature-banner feature-banner__image" alt="scroll down">
    <h2 class="feature-banner__header">Train The Right Way</h2>
    <h6 class="feature-banner__sub-header">
      Confidence comes from the perfect strategy combined with the best training
      tools.
    </h6>
    <div class="flex-container">
      <div v-for="feature in features" :key="feature.title" class="feature">
        <h3 class="feature__title">{{ feature.title }}</h3>
        <base-icon :name="feature.icon" class="icon--modifier"></base-icon>
        <p class="feature__content">{{ feature.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureBanner',
  created() {
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
          'Plan your training volume and intensity to create the right workouts          at the right time.',
        icon: 'filter'
      },
      {
        title: 'Work smarter',
        content:
          'Export planned workouts and automatically sync the results back to your calendar.',
        icon: 'calendar'
      },
      {
        title: 'Track your progress',
        content:
          'Watch as your fitness improves and get rewarded for hitting PeakPerformances along the way.',
        icon: 'bar-chart-2'
      }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.feature-banner {
  text-align: center;
  color: white;
  padding: 2em 1em;
}
.feature-banner__image {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/features-banner.jpg?alt=media&token=b2ccc621-75b9-43b9-aa34-73fd0c399dc2');
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: cover;
  position: relative;
  top: 0;
  width: 100%;
}

.feature-banner__header {
  text-transform: uppercase;
}
.feature-banner__sub-header {
  font-size: 1.1em;
  font-weight: normal;
}

.icon--modifier {
  display: flex;
  justify-content: center;
  color: inherit;
}
.feature {
  padding: 0.2em 0;
  &:nth-child(odd) {
    color: #f7e7ce;
  }
  &__title {
    text-transform: uppercase;
    font-size: 1em;
    margin-bottom: 0.25em;
  }
  &__content {
    margin-top: 0.25em;
  }
}

@media only screen and (min-width: 700px) {
  .flex-container {
    display: flex;
    flex-flow: row nowrap;
  }
  .feature {
    flex: 1;
    padding: 0 0.5em;
  }
}
</style>
