<template>
  <div id="HomeBanner">
    <div class="image" alt>
      <base-icon
        name="arrow-down-circle"
        class="icon"
        v-scroll-to="{
          el: '#element',
          duration: 1000
        }"
      ></base-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image {
  width: 100%;
  height: 100vh;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/running-banner-image.jpg?alt=media&token=f5246ce0-7f45-42f2-a0cb-66e99f557938"');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% center;
  background-attachment: scroll;
}

.icon {
  color: white;
  position: absolute;
  bottom: 10%;
  left: 50%;
  &:hover {
    cursor: pointer;
  }
}
</style>
