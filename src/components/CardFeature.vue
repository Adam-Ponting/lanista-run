<template>
  <div class="card">
    <slot name="icon"></slot>
    <h4 class="card__title">
      <slot name="title"></slot>
    </h4>
    <p class="card__content">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardFeature',
  props: {
    feature: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  text-align: center;
  display: block;
  margin: 0.5em;
  padding: 1em 0.5em;
  &__title {
    margin: 0.5em 0;
    color: var(--text-color-black);
  }
  &__content {
    margin: 0.3em 0;
    font-size: 0.7em;
  }
}
@media only screen and (min-width: 600px) {
  .card {
    width: 100%;
    flex: 0 1 calc(50% - 1em); // make each the same size 2 per line
  }
}
@media only screen and (min-width: 1000px) {
  .card {
    flex: 0 1 calc(25% - 1em); // make each the same size 4 on line
  }
}
</style>
