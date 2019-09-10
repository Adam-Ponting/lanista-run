<template>
  <div id="HomeText" class="features">
    <CardFeature>
      <base-icon
        name="activity"
        height="32"
        width="32"
        class="icon--modifier"
      ></base-icon>
      <template v-slot:title>
        <h3>Structured Workouts</h3>
      </template>
      <template v-slot:content>
        <p>
          Training or racing, get faster in less time with access to expertly
          designed workouts.
        </p>
      </template>
    </CardFeature>
    <CardFeature>
      <base-icon
        name="award"
        height="32"
        width="32"
        class="icon--modifier"
      ></base-icon>
      <template v-slot:title>
        <h3>Training Plans</h3>
      </template>

      <template v-slot:content>
        <p>
          Go from beginner to pro. Choose from multiple comprehensive running
          plans.
        </p>
      </template>
    </CardFeature>
    <CardFeature>
      <base-icon
        name="calendar"
        height="32"
        width="32"
        class="icon--modifier"
      ></base-icon>
      <template v-slot:title>
        <h3>Calendar</h3>
      </template>
      <template v-slot:content>
        <p>
          Keep your training on track with Calendar. Schedule workouts, races,
          and other activities.
        </p>
      </template>
    </CardFeature>
    <CardFeature>
      <base-icon
        name="compass"
        height="32"
        width="32"
        class="icon--modifier"
      ></base-icon>
      <template v-slot:title>
        <h3>Performance Analytics</h3>
      </template>
      <template v-slot:content>
        <p>
          Use your run data to improve. Get simple tools to analyze your
          training to see if you’re getting faster.
        </p>
      </template>
    </CardFeature>
  </div>
</template>

<script>
import CardFeature from '@/components/CardFeature'
export default {
  name: 'HomeText',
  components: {
    CardFeature
  }
}
</script>

<style lang="scss" scoped>
.features {
  background-color: #f9f9fb;
}
@media only screen and (min-width: 600px) {
  .features {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #f9f9fb;
  }
}
</style>
