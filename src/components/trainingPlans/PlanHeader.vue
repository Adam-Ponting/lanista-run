<template>
  <header class="plan-header">
    <slot name="heading"></slot>
    <slot name="sub-heading"></slot>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.plan-header {
  padding: 4em 1em;

  background-color: $fill-dark;

  text-align: center;
  &__heading {
    color: $fill-light;

    font-size: 2em;
    &::after {
      content: '';
      display: block;

      width: 20%;
      margin: 0 auto;
      padding-top: 0.25em;

      border-bottom: 2px solid $color-attention;
    }
  }
  &__sub-heading {
    padding-top: 2em;

    color: $fill-light;
    opacity: 0.8;

    font-size: 0.8em;
  }
}
</style>
