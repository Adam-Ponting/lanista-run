<template>
  <div class="card">
    <div class="card__border-left"></div>
    <div class="card__content">
      <img :src="image.image" alt="generic runner" class="card__image" />
      <h3 class="card__title">{{ image.title }}</h3>
      <p class="card__text">{{ image.tip }}</p>
    </div>
    <div class="card__border-right"></div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
/* 
    ** ADD THESE TO PARENT COMPONENT **
    <div class="padding FAQ-card-wrapper">
      <FAQCard
        v-for="(image, index) in topTips"
        :key="index"
        :image="image"
        class="FAQ-card"
      />
    </div>

.FAQ-card-wrapper {
  display: block;
  background-color: $dark-shade;
}
.FAQ-card {
  margin: 1em auto; // center card
}
@media only screen and (min-width: 800px) {
  .FAQ-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .FAQ-card {
    margin: 1em;
  }
}
*/
.card {
  flex: 1 1 320px;
  max-width: 500px;

  display: grid;
  grid-template-columns: 0.05fr 1fr 0.05fr;
  grid-template-areas: 'border-left content border-right';

  text-align: center;

  &__border-left,
  &__border-right {
    align-self: end;

    height: 90%;
    background: $dark-accent;
  }

  &__border-left {
    grid-area: border-left;

    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }

  &__border-right {
    grid-area: border-right;

    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }

  &__content {
    grid-area: content;

    border-top-right-radius: 0.5em;
    border-top-left-radius: 0.5em;

    background-color: $dark-accent;
  }

  &__image {
    width: 100%;
    height: auto;

    border-radius: 0.5em;
    box-shadow: 0px 3px 13px 2px rgba(0, 0, 0, 0.5);
  }

  &__title {
    padding: 0.5em 0;

    color: $text-light;

    font-family: cursive;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-transform: capitalize;
  }

  &__text {
    margin: 0; // resets global p style
    padding: 0.5em 0;

    color: $text-dark;

    font-size: 0.9em;

    opacity: 0.75;
  }
}
</style>
