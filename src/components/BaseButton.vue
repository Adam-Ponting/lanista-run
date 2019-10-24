<template>
  <button class="button" :type="type">
    <slot name="name"></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      default: 'defaultButton'
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

  padding: 0.5em;

  align-items: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
}
</style>
