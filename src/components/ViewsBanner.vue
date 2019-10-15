<template>
  <section
    class="feature-banner feature-banner__image"
    alt="scroll down"
    :style="styleObject"
  >
    <h1 class="feature-banner__header">{{ header }}</h1>
    <p class="feature-banner__sub-header">{{ subHeader }}</p>
    <div class="flex-container">
      <div
        v-for="feature in bannerDetails"
        :key="feature.title"
        class="feature"
      >
        <base-icon
          :name="feature.icon"
          class="icon--modifier"
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
  name: 'ViewsBanner',
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
    },
    header: {
      type: String,
      default: ''
    },
    subHeader: {
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

.feature-banner {
  padding: 3em 1em;

  color: $text-color-secondary;
  text-align: center;
}
.feature-banner__image {
  position: relative;
  top: 0;

  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
}
.feature-banner__header {
  text-transform: uppercase;
  font-size: 1.6em;
}
.feature-banner__sub-header {
  margin-top: 0;
  margin-bottom: 2em;

  opacity: 1;
  text-shadow: 1px 1px 1px $text-color-primary;
  font-size: 1.1em;
  font-weight: normal;
}
.icon--modifier {
  display: flex;
  justify-content: center;
  color: inherit;
  color: $color-attention;
  margin-bottom: 0.25em;
}
.feature {
  margin-top: 2em;

  &__title {
    text-transform: uppercase;
    font-size: 1.1em;
    margin-top: 0.25em;
    margin-bottom: 0.5em;
  }
  &__content {
    font-size: 0.9em;

    &:nth-child(odd) {
      opacity: 0.9;
    }
  }
}
@media only screen and (min-width: 700px) {
  .flex-container {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }
  .feature {
    flex: 0 1 calc(25% - 1em); // make each the same size 4 on line
  }
}
</style>
