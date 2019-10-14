<template>
  <div id="HomeBanner">
    <div class="home-banner__image" alt="scroll down">
      <base-icon
        v-scroll-to="{
          el: '#HomeText',
          duration: 1000
        }"
        name="arrow-down-circle"
        class="icon--modifier"
        height="32"
        width="32"
      ></base-icon>
      <div ref="hello" class="home-banner__text-container">
        <h1 class="home-banner__text">
          Many runners do not have the time to join organised groups, it doesn’t
          have to end there. Improve your performance with training plans.
        </h1>
        <router-link :to="{ name: 'create-account' }" class="home-banner__link"
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
.home-banner__text-container {
  color: var(--text-color-white);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  height: 50%;
  width: 100%;
  padding: 1em;
  text-shadow: 1px 1px 1px var(--text-color-black);
  .home-banner__text {
    text-align: center;
    font-size: 1em;
    font-weight: normal;
  }
  .home-banner__link {
    align-self: center;
    width: fit-content;
    padding: 0.5em;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid var(--border-white);
  }
}
.icon--modifier {
  color: var(--text-color-white);
  position: absolute;
  bottom: 20%;
  left: 49%;
  &:hover {
    cursor: pointer;
  }
}

@media only screen and (min-width: 600px) {
  .home-banner__text-container {
    width: 40%;
    justify-content: center;
    height: 100%;
  }
}
</style>
