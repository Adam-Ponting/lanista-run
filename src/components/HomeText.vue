<template>
  <div id="HomeText">
    <h1 class="header">Lanista Run Training Plans</h1>
    <hr class="divider" />
    <p class="text">
      Running is a great way to get fit, feel better and even form new
      relationships with other runners. Starting a new running habit doesn’t
      have to be hard - all it takes is a comfortable pair of shoes and a
      willingness to move a little or a lot, all at your own pace.
    </p>
    <p class="text">
      People of all abilities turn to these science-backed training plans to get
      faster. Whether you currently have a little fitness or a lot, there’s a
      structured plan for you that will help you achieve your goals.
    </p>
    <base-button-link
      link="training-plans"
      name="arrow-right"
      class="button--position button--color"
    ></base-button-link>
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
}
.header {
  text-align: center;
  color: black;
}
.divider {
  border: 0.1em solid orange;
  width: 50%;
}
.text {
  color: #444;
  padding: 0 1em;
}
.button--position {
  margin-left: 1em;
}
.button--color {
  color: black;
}
</style>
