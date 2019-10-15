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
  display: block;

  // padding: 2em 0;
  padding-bottom: 2em;

  text-align: center;

  &:last-child {
    padding-bottom: 0;
  }

  &__title {
    margin: 0.2em 0;
    font-size: 1.1em;
    font-weight: bold;
  }

  &__content {
    margin: 0.1em 0;
    opacity: 0.7;
    font-size: 0.8em;
  }
}
@media only screen and (min-width: 600px) {
  .card {
    flex: 0 1 calc(50% - 1em); // make each the same size 2 per line

    width: 100%;

    padding-bottom: 0; // remove padding from all (bottom in particular for vertical alignment)

    &:first-child {
      padding-bottom: 2em; // adds padding for top line
    }
  }
}
@media only screen and (min-width: 1000px) {
  .card {
    flex: 0 1 calc(25% - 1em); // make each the same size 4 on line

    padding-bottom: 0; // reset padding to 0 to set evebly vertically
  }
}
</style>
