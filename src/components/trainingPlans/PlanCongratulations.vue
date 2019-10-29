<template>
  <section class="padding congratulations">
    <h6 class="congratulations__heading">congratulations</h6>
    <p class="congratulations__sub-heading">You did it!</p>

    <slot name="heading"></slot>
    <p class="congratulations__text">
      What next?
      <br />How about a <slot name="next"></slot>run?
    </p>

    <p class="congratulations__text">
      View
      <router-link
        :to="{ name: 'training-plans' }"
        class="congratulations__link"
        title="View all plans"
        >training plans</router-link
      >.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.congratulations {
  background-color: $dark-shade;
  color: $text-light;

  text-align: center;

  &__heading {
    // class is from parent
    padding: 0.75em 0;

    color: $text-light;
    border-top: 1px solid white;

    font-family: fantasy;
    font-size: 2em;
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

    border-bottom: 1px solid white;
    color: white;

    font-size: 0.9em;
    font-family: cursive;
  }
  &__text {
    opacity: 0.9;
  }
  &__link {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 500px) {
  .distance-header__heading {
    font-size: 2em;
  }
}
</style>
