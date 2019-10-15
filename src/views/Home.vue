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
    <section id="HomeText">
      <section class="max-width">
        <h1 class="header">Lanista Run Training Plans</h1>
        <p>
          Running is a great way to get fit, feel better and even form new
          relationships with other runners. Starting a new running habit doesn’t
          have to be hard - all it takes is a comfortable pair of shoes and a
          willingness to move a little or a lot, all at your own pace.
        </p>
        <p>
          People of all abilities turn to these science-backed training plans to
          get faster. Whether you currently have a little fitness or a lot,
          there’s a structured plan for you that will help you achieve your
          goals.
        </p>
        <base-button-link
          link="training-plans"
          name="arrow-right"
          class="button__link"
        >
          <template v-slot:linkTo>
            <span>Find your training plan</span>
          </template>
        </base-button-link>
      </section>
    </section>
    <section class="features max-width">
      <CardFeature
        v-for="(feature, index) in features"
        :key="index"
        :feature="feature"
      >
        <template v-slot:icon>
          <base-icon
            :name="feature.icon"
            height="32"
            width="32"
            class="card__icon--modifier"
          ></base-icon>
        </template>
        <template v-slot:title>{{ feature.title }}</template>
        <template v-slot:content>{{ feature.content }}</template>
      </CardFeature>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import CardFeature from '@/components/CardFeature'

export default {
  name: 'HomePage',
  components: {
    CardFeature
  },
  created() {
    this.features = [
      {
        icon: 'activity',
        title: 'Structured Workouts',
        content:
          'Training or racing, get faster in less time with access to expertly designed workouts.'
      },
      {
        icon: 'award',
        title: 'Training Plans',
        content:
          'Go from beginner to pro. Choose from multiple comprehensive running plans.'
      },
      {
        icon: 'calendar',
        title: 'Calendar',
        content:
          'Keep your training on track with Calendar. Schedule workouts, races, and other activities.'
      },
      {
        icon: 'compass',
        title: 'Performance Analytics',
        content:
          'Use your run data to improve. Get simple tools to analyze your training to see if you’re getting faster.'
      }
    ]
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

    background-color: $button-color-info;
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

#HomeText {
  min-height: 70vh;

  background-color: $bg-color-light;
  color: $text-color-primary;
  color: var(--text-color-main);
}
.header {
  padding-bottom: 1em;

  color: $fill-dark;

  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
}
.button__link {
  color: $button-color-info;

  font-size: 0.9em;
}

.features {
  display: block;
  background-color: red;
}
.card__icon--modifier {
  color: orange;
}

@media only screen and (min-width: 600px) {
  .home-banner__text-container {
    justify-content: center;

    height: 100%;
    width: 40%;
  }
  .features {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
}
</style>
