<template>
  <section class="distances">
    <base-button-link
      :link="distance.link"
      name="arrow-right"
      class="distances__button"
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
  margin-bottom: 1em; // vertical spacing

  &:last-child {
    margin-bottom: 0; // remove from last
  }

  &__heading {
    font-size: 1.2em;
  }

  &__description {
    margin: 1em 0 2em; // paragraph vertical spacing

    &:last-child {
      margin-bottom: 0; // remove from last
    }
  }
}
.distances__button {
  margin-left: 1em;
}
</style>
