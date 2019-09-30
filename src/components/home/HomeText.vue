<template>
  <div id="HomeText">
    <div class="max-width">
      <h1 class="header text--padding">
        Lanista Run Training Plans
      </h1>
      <p class="text--padding">
        Running is a great way to get fit, feel better and even form new
        relationships with other runners. Starting a new running habit doesn’t
        have to be hard - all it takes is a comfortable pair of shoes and a
        willingness to move a little or a lot, all at your own pace.
      </p>
      <p class="text--padding">
        People of all abilities turn to these science-backed training plans to
        get faster. Whether you currently have a little fitness or a lot,
        there’s a structured plan for you that will help you achieve your goals.
      </p>
      <base-button-link
        link="training-plans"
        name="arrow-right"
        class="button--position button--color"
      >
        <template v-slot:linkTo
          >Find your training plan</template
        >
      </base-button-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeText'
}
</script>

<style lang="scss" scoped>
#HomeText {
  min-height: 70vh;
  background-color: var(--bg-color-white);
  color: var(--text-color-main);
}
.header {
  text-align: center;
  text-decoration: underline;
  text-decoration-color: var(--active-orange);
  margin: 0 auto;
}
.text--padding {
  padding: 0 1em;
}
.button--position {
  margin-left: 1.1em;
}
.button--color {
  color: var(--text-color-black);
  font-size: 0.9em;
}
</style>
