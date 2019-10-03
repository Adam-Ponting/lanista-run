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
.plan-header {
  background-color: var(--bg-color-black);
  text-align: center;
  &__heading {
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
  &__sub-heading {
    color: var(--text-color-faded);
    font-size: 0.8em;
  }
}
</style>
