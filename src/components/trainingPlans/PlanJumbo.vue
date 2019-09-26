<template>
  <section class="jumbo-plan">
    <h1 class="jumbo-plan__header text--center">
      <slot name="header"></slot>
    </h1>
    <h5 class="jumbo-plan__sub-header">
      <slot name="sub-header"></slot>
    </h5>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.jumbo-plan {
  background-color: var(--bg-color-black);
  padding: 1em;
  text-align: center;

  &__header {
    color: var(--text-color-white);
    font-size: 2em;
    &::after {
      content: '';
      display: block;
      border-bottom: 2px solid var(--active-orange);
      width: 20%;
      margin: 0 auto;
      padding-top: 0.75em;
    }
  }
  &__sub-header {
    color: var(--text-color-faded);
    font-size: 0.8em;
    margin: 0.5em 0;
  }
}
</style>
