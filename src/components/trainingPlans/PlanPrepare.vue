<template>
  <section class="plan">
    <div class="details-container max-width">
      <slot name="details"></slot>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.plan {
  background-color: var(--bg-color-white);
  padding: 1em;
}
.details-container {
  padding: 1em 0;
}
.details-text {
  // class received from component
  margin: 0.5em 0;
  font-size: 0.9em;
  display: flex;
}
.icon--modifier {
  // class received from component
  color: var(--active-orange);
  padding-right: 0.25em;
}
</style>
