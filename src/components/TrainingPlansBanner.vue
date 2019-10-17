<template>
  <section class="banner-image padding" :style="styleObject">
    <div class="flex-container">
      <div
        v-for="feature in bannerDetails"
        :key="feature.title"
        class="feature"
      >
        <base-icon
          :name="feature.icon"
          class="feature__icon"
          height="32"
          width="32"
        ></base-icon>
        <h2 class="feature__title">{{ feature.title }}</h2>
        <p class="feature__content">{{ feature.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrainingPlansBanner',
  props: {
    bannerDetails: {
      type: Array,
      default: () => [] // es6 returns empty array
    },
    image: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      styleObject: {
        'background-image': `linear-gradient(to bottom,
        rgba( 0, 0, 139, 0.25),
        rgba( 0, 0, 139, 0.25)
        ) ,
        url(' ${this.image} ')`,
        'background-position': this.position
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/css/app.scss';

.banner-image {
  position: relative;
  top: 0;

  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;

  color: $text-light;
  text-align: center;
}
.feature {
  margin-bottom: 1em; // vertical spacing

  &:last-child {
    margin-bottom: 0; // remove spacing on last child
  }

  &__icon {
    display: flex;
    justify-content: center;

    color: $light-accent;
  }

  &__title {
    margin: 0.25em 0;

    color: $text-light;

    font-size: 1.1em;
    text-transform: uppercase;
  }

  &__content {
    margin: 0; // removes global p margin

    color: $light-shade;

    font-size: 0.8em;
  }
}
@media only screen and (min-width: 800px) {
  .flex-container {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .feature {
    flex: 0 1 calc(25% - 1em); // make each the same size 4 on line
    margin-bottom: 0; // removes mobile vertical spacing

    &__title {
      margin: 0.7em 0;
    }
  }
}
</style>
