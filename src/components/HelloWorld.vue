<template>
  <div class="hello">
    <div class="image" alt></div>
    <svg class="icon" width="32" height="32">
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#arrow-down-circle' }" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  position: absolute;
  top: -34px;
  left: -0;
  width: 100%;
}
.icon {
  position: absolute;
  bottom: 20px;
  left: 50%;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.image {
  width: 100%;
  height: 100vh;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/running-banner-image.jpg?alt=media&token=f5246ce0-7f45-42f2-a0cb-66e99f557938"');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% center;
}
@media only screen and (min-width: 600px) {
  .image {
    background-position: 70% center;
  }
}
</style>
