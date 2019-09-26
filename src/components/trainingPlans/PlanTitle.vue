<template>
  <section class="plan">
    <slot name="header"></slot>
    <slot name="lead-text"> </slot>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.plan {
  background-color: var(--bg-color-main);
  padding: 1em;
  text-align: center;
  &__header {
    color: var(--text-color-main);
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    &::after {
      content: '';
      display: block;
      border-bottom: 2px solid var(--active-green);
      width: 5%;
      margin: 0 auto;
      padding-top: 0.5em;
    }
  }
  &__lead-text {
    color: var(--text-color-faded);
    font-size: 0.8em;
    padding-bottom: 2em;
  }
}
</style>
