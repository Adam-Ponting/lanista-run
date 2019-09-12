<template>
  <div class="card">
    <div class="card-header">
      <slot></slot>
      <slot name="title"></slot>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFeature'
}
</script>

<style lang="scss" scoped>
.card {
  padding: 0.5em;
  text-align: center;
}
.card-header {
  color: black;
}
.icon--modifier {
  // class passed in from HomeText
  color: orange;
  display: flex;
  justify-content: center;
}
@media only screen and (min-width: 600px) {
  .card {
    width: 100%;
    flex: 0 1 calc(50% - 1em); // make each the same size
    &:nth-child(-n + 2) {
      // add margin to top 2 tiles only
      margin-bottom: 0.5em;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .card {
    flex: 0 1 calc(25% - 1em); // make each the same size
    &:nth-child(-n + 2) {
      // remove margin as cards are on single line
      margin-bottom: 0;
    }
  }
}
</style>
