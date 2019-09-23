<template>
  <main>
    <section>
      <div class="beginner-headers">
        <h1 class="text--center">Beginners Training Schedule</h1>
        <h5 class="text--center">
          Build from nought to 30 minutes in just eight weeks
        </h5>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/getting-started.jpg?alt=media&token=babbabfa-02f6-4732-a869-2a72c262ee34"
        alt="Image of man running"
      />
    </section>
    <aside class="component component--light getting-started__intro">
      <h2 class="text--center">Before You Begin</h2>

      <p>
        Whatever your level of fitness you should comfortably be able to build
        from nothing to running continuously for 30 minutes in the space of
        eight weeks. All you need to do is make a commitment to run at least
        three times a week and follow this simple run-walk programme which will
        gradually ease you towards the goal.
      </p>

      <section class="beginner-details">
        <p v-for="(detail, index) in details" :key="index">
          <base-icon name="play" class="icon--modifier"></base-icon>
          {{ detail }}
        </p>
      </section>
    </aside>
    <div class="component component--dark">
      <h2 class="text--center">The Schedule</h2>
      <WeekView v-for="week in week" :key="week.id" :week="week" class="test" />
    </div>
    <div class="component component--light text--center">
      <h2>The Result</h2>
      <p>
        Congratulations! You’re a runner! What next? How about a 5K (3.1-mile)
        run?
      </p>
    </div>
  </main>
</template>

<script>
import { plan } from '@/assets/data/GettingStarted.js'
import WeekView from '@/components/WeekView.vue'

export default {
  components: {
    WeekView
  },
  created() {
    this.week = plan
    this.details = [
      'Allow at least a day between runs when you begin.',
      'If in doubt, slow down. You should be able to hold a conversation while you run. Respecting your body is the best route to progression.',
      'Walk purposefully, and be strict with your run/walk timings.',
      'Don’t be afraid to repeat a week, or drop back a week. Everyone’s different.',
      'Take heart - you will get there!'
    ]
  }
}
</script>

<style lang="scss" scoped>
.test {
  padding: 0 1em;
}
.beginner-headers {
  padding: 1em;
}
.getting-started__intro {
  padding: 5em 1em;
}
.text--center {
  text-align: center;
}
img {
  display: block;
  margin: 0 auto;
}
.beginner-details {
  padding-left: 0.5em;
  text-align: left;
  p {
    display: flex;
  }
}
.icon--modifier {
  color: orange;
  padding-right: 0.5em;
}
.week-number {
  font-size: 1em;
  padding: 0.25em;
  color: whitesmoke;
  background: linear-gradient(
    to right,
    rgba(lightgrey, 0.1),
    rgba(023, 105, 139, 1.25)
  );
  text-transform: capitalize;
  text-align: center;
}
</style>
