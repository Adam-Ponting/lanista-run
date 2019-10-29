<template>
  <section class="padding intro-text">
    <slot name="intro-text"></slot>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.intro-text {
  background-color: $light-shade;
  text-align: center;
}
</style>
