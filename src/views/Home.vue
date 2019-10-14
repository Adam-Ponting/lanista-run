<template>
  <main>
    <section class="home-banner__image">
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
      <div class="home-banner__text-container">
        <h1 class="home-banner__text">
          Many runners do not have the time to join organised groups, it doesn’t
          have to end there. Improve your performance with training plans.
        </h1>
        <router-link :to="{ name: 'create-account' }" class="home-banner__link"
          >Create Account</router-link
        >
      </div>
    </section>
    <HomeText class="component--padding" />
    <HomeCards class="component--padding" />
  </main>
</template>

<script>
// @ is an alias to /src
import HomeText from '@/components/home/HomeText.vue'
import HomeCards from '@/components/home/HomeCards.vue'

export default {
  name: 'HomePage',
  components: {
    HomeText,
    HomeCards
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.home-banner__image {
  position: relative;
  top: 0;

  height: 100vh;
  width: 100%;

  background-attachment: scroll;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/running-banner-image.jpg?alt=media&token=f5246ce0-7f45-42f2-a0cb-66e99f557938"');
  background-position: 70% center;
  background-repeat: no-repeat;
  background-size: cover;
}
.home-banner__text-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  height: 50%;
  padding: 1em;
  width: 100%;

  color: $text-color-secondary;
  text-shadow: 1px 1px 1px $text-color-primary;
  .home-banner__text {
    font-size: 1em;
    line-height: 1.3em;
    font-weight: normal;
    text-align: center;
    margin-bottom: 1em;
  }
  .home-banner__link {
    align-self: center;

    padding: 0.75em;
    width: fit-content;

    background-color: $button-bg-color-info;
    color: $text-color-secondary;

    text-align: center;
    text-transform: uppercase;
  }
}
.icon--modifier {
  position: absolute;
  bottom: 20%;
  left: 49%;

  color: $text-color-secondary;

  &:hover {
    cursor: pointer;
  }
}

@media only screen and (min-width: 600px) {
  .home-banner__text-container {
    justify-content: center;

    height: 100%;
    width: 40%;
  }
}
</style>
