<template>
  <section class="distances">
    <article>
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
    </article>
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
.distances {
  padding: 0.25em 1em;
  margin: 0.5em 0;
}
.button--position {
  margin-left: 1em;
}
.button--color {
  color: var(--text-color-black);
}
.distances__heading {
  margin: 0.25em 0;
}
.distances__description {
  margin: 0;
}
</style>
