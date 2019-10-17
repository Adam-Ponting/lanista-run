<template>
  <router-link :to="{ name: link }" class="button">
    <slot name="linkTo"></slot>
    <base-icon
      :name="name"
      class="icon"
      :width="width"
      :height="height"
    ></base-icon>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'home'
    },
    name: {
      type: String,
      default: 'circle'
    },
    width: {
      type: [Number, String], // can be number or string
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.button {
  background-color: $button-info;
  color: $text-light;

  display: inline-flex;

  padding: 0.4em;

  align-items: center;

  /* START HOVER TRANSITION */
  // padding-right is used to balance out padding left
  // to keep element the same width
  .icon {
    padding-left: 0.1em;
    padding-right: 0.5em;
  }
  &:hover .icon {
    padding-left: 0.5em;
    padding-right: 0.1em;
  }
  /* END HOVER TRANSITION */
}
</style>
