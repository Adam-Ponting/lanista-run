<template>
  <p class="notification-message">{{ notification.message }}</p>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      // start a timeout on mounted
      // call the remove action, send in this.notification
      this.removeFirebaseAuthNotification(this.notification)
    }, 3000)
  },
  beforeDestroy() {
    // remove notification from array
    this.removeFirebaseAuthNotification(this.notification)
    // clear timeout
    clearTimeout(this.timeout)
  },
  methods: mapActions(['removeFirebaseAuthNotification']) // bring in the remove action from the notification module
}
</script>

<style lang="scss" scoped>
.notification-message {
  position: absolute;
  top: -10px;
  color: whitesmoke;
  padding: 0.1em 0.5em;
  font-size: 0.7em;
  border-left: 2px solid red;
  background-color: rgba(grey, 0.5);
}
</style>
