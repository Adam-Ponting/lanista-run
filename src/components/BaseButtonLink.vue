<template>
  <router-link :to="{ name: link }" class="button">
    Find your training plan
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
      type: String
    },
    name: {
      type: String
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
.button {
  display: inline-flex;
  align-items: center;
  /* START HOVER TRANSITION */
  // padding-right is used to balance out padding left
  // to keep element the same width
  .icon {
    color: red;
    padding-left: 0.1em;
    padding-right: 0.5em;
  }
  &:hover .icon {
    color: orange;
    padding-left: 0.5em;
    padding-right: 0.1em;
  }
  /* END HOVER TRANSITION */
}
</style>
