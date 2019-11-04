<template>
  <header class="padding distance-header">
    <slot name="heading"></slot>
    <slot name="sub-heading"></slot>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.distance-header {
  background-color: $main-brand;

  text-align: center;

  &__heading {
    // class is from parent
    padding: 0.75em 0;

    color: $text-dark;
    border-top: 1px solid hsl(257, 36%, 17%);

    font-family: 'Fredoka One', cursive;

    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-align: center;
    text-transform: uppercase;

    &::after {
      content: '';
      display: block;

      margin: 0 auto;
      padding-top: 0.25em;
      width: 20%;

      border-bottom: 2px solid hsl(39, 100%, 50%);
    }
  }
  &__sub-heading {
    // class is from parent
    padding: 0.75em 0;

    border-bottom: 1px solid #251c3b;

    color: $text-light;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    font-family: 'Fredoka One', cursive;
  }
}
@media only screen and (min-width: 500px) {
  .distance-header__heading {
    font-size: 2em;
  }
}
</style>
