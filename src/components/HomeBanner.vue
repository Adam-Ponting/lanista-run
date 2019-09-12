<template>
  <div id="HomeBanner">
    <div class="home-banner__image" alt="scroll down">
      <base-icon
        name="arrow-down-circle"
        class="icon"
        height="32"
        width="32"
        v-scroll-to="{
          el: '#HomeText',
          duration: 1000
        }"
      ></base-icon>
      <div class="home-banner__text">
        <p>
          Many runners do not have the time to join organised groups, it doesn’t
          have to end there. Improve your performance with training plans.
        </p>
        <router-link :to="{ name: 'create-account' }"
          >Create Account</router-link
        >
      </div>
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
.home-banner__image {
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/running-banner-image.jpg?alt=media&token=f5246ce0-7f45-42f2-a0cb-66e99f557938"');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% center;
  background-attachment: scroll;
}
.home-banner__text {
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  height: 50%;
  font-size: 1em;
  width: 100%;
  padding: 1em;
  text-shadow: 1px 1px 1px black;
  p {
    text-align: center;
  }
  a {
    align-self: center;
    width: fit-content;
    padding: 0.5em;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid white;
  }
}
.icon {
  color: white;
  position: absolute;
  bottom: 20%;
  left: 49%;
  &:hover {
    cursor: pointer;
  }
}

@media only screen and (min-width: 600px) {
  .home-banner__text {
    width: 40%;
    justify-content: center;
    height: 100%;
  }
}
</style>
