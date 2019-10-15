<template>
  <section class="distances">
    <base-button-link
      :link="distance.link"
      name="arrow-right"
      class="button--position button--color"
    >
      <template v-slot:linkTo>
        <h3 class="distances__heading">{{ distance.heading }}</h3>
      </template>
    </base-button-link>
    <p class="distances__description">{{ distance.description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    distance: {
      type: Object,
      required: true,
      default: () => ({
        // es6 returns object
        heading: 'value',
        description: 'value'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.distances {
  margin: 2em 0;
  &__heading {
    // margin-bottom: 2em;
    font-size: 1.5em;
  }
  &__description {
    margin-top: 0.5em;
  }
}
.button--position {
  margin-left: 1em;
}
.button--color {
  color: $button-color-info;
  color: $bg-highlight-dark;
}
</style>
