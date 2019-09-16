<template>
  <div
    class="feature-banner feature-banner__image"
    alt="scroll down"
    :style="styleObject"
  >
    <h2 class="feature-banner__header">{{ header }}</h2>
    <h6 class="feature-banner__sub-header">{{ subHeader }}</h6>
    <div class="flex-container">
      <div
        v-for="feature in bannerDetails"
        :key="feature.title"
        class="feature"
      >
        <base-icon :name="feature.icon" class="icon--modifier"></base-icon>
        <h3 class="feature__title">{{ feature.title }}</h3>

        <p class="feature__content">{{ feature.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewsBanner',
  props: {
    bannerDetails: {
      type: Array
    },
    image: {
      type: String
    },
    position: {
      type: String
    },
    header: {
      type: String
    },
    subHeader: {
      type: String
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
.feature-banner {
  text-align: center;
  color: white;
  padding: 2em 1em;
}
.feature-banner__image {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 0;
  width: 100%;
}

.feature-banner__header {
  text-transform: uppercase;
}
.feature-banner__sub-header {
  font-size: 1.1em;
  font-weight: normal;
}

.icon--modifier {
  display: flex;
  justify-content: center;
  color: inherit;
}
.feature {
  padding: 0.2em 0;
  &:nth-child(odd) {
    color: #f7e7ce;
  }
  &__title {
    text-transform: uppercase;
    font-size: 1em;
    margin-bottom: 0.25em;
  }
  &__content {
    margin-top: 0.25em;
  }
}

@media only screen and (min-width: 700px) {
  .flex-container {
    display: flex;
    flex-flow: row nowrap;
  }
  .feature {
    flex: 1;
    padding: 0 0.5em;
  }
}
</style>
