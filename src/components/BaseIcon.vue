<template>
  <span>
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + name }" />
    </svg>
    <!-- default slot -->
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
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
.icon {
  display: inherit;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  //  margin-right: 6px;
}
</style>
