<template>
  <article class="day-view">
    <h3 v-show="day.day" class="day-view__day">{{ day.day }}</h3>
    <h4 v-show="day.type" class="day-view__type">{{ day.type }}</h4>
    <p class="day-view__activity">{{ day.activity }}</p>
    <!-- <div class="day-view__extras">
      <span class="day-view__extras-comment">
        <base-icon name="message-circle" class="icon--modifier"></base-icon>
      </span>
      <span
        class="day-view__extras-complete"
        @click="day.isComplete = !day.isComplete"
      >
        <base-icon
          v-show="day.isComplete"
          name="check-circle"
          class="icon--modifier"
        ></base-icon>
        <base-icon
          v-show="!day.isComplete"
          name="x-circle"
          class="icon--modifier"
        ></base-icon>
      </span>
    </div>-->
  </article>
</template>

<script>
export default {
  props: {
    day: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.day-view {
  text-align: center;

  &__day {
    margin: 0;
    padding: 0.2em 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 1em;
    text-transform: uppercase;
  }
  &__type {
    margin: 0.5em 0;
    text-transform: uppercase;
    font-size: 1.1em;
    font-variant-caps: all-small-caps;
  }
  &__activity {
    margin: 0;
    padding-top: 0.25em;
    padding-bottom: 0.1em;
    color: var(--text-color-main);
    &:after {
      content: ''; /* This is necessary for the pseudo element to work. */
      display: block; /* This will put the pseudo element on its own line. */
      width: 25%; /* Change this to whatever width you want to have before hover. */
      margin: 0 auto;
      padding-top: 0.15em; /* This creates some space between the element and the border. */
      border-bottom: 1px solid black; /* This creates the border. Replace black with whatever color you want. */
      transition: 0.5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
      opacity: 0.25;
    }
  }
  &__extras {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
}
@media only screen and (min-width: 1000px) {
  .day-view {
    padding: 0 0.25em;
    flex: 1;
    &__activity {
      font-size: 0.8em;
      &:after {
        content: ''; /* This is necessary for the pseudo element to work. */
        padding-top: 0; /* This creates some space between the element and the border. */
        border-bottom: none; /* This creates the border. Replace black with whatever color you want. */
      }
    }
  }
}
</style>
