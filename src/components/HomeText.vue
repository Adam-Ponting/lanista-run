<template>
  <div id="HomeText">
    <h1>Lanista Run Training Plans</h1>
    <hr class="divider" />
    <div>
      <article class="welcome">
        <p>
          Running is a great way to get fit, feel better and even form new
          relationships with other runners. Starting a new running habit doesn’t
          have to be hard - all it takes is a comfortable pair of shoes and a
          willingness to move a little or a lot, all at your own pace.
        </p>
        <router-link
          :to="{ name: 'training-plans' }"
          class="button button--link"
          >Find your training plan</router-link
        >
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeText'
}
</script>

<style lang="scss" scoped>
.welcome {
  padding: 0 1em;
}
.button {
  display: flex;
  align-items: center;
  width: fit-content;
  &::after {
    content: '\2192';
    color: red;
    font-size: 2em;
    transition: all 0.5s ease;
    padding-left: 0.1em;
  }
  &:hover {
    cursor: pointer;
    &::after {
      content: '\2192';
      color: orange;
      padding-left: 0.2em;
    }
  }
}
h1 {
  text-align: center;
}
.divider {
  border: 2px solid orange;
  width: 50%;
}

.features {
  background-color: #f9f9fb;
  text-align: center;
}
@media only screen and (min-width: 600px) {
  .welcome {
    // display: flex;
    flex-flow: row nowrap;
  }
}
</style>
