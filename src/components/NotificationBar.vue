<template>
  <p class="notification-message" @click="removeNotification">
    {{ notification.message }}
  </p>
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
    }, 10000)
  },
  beforeDestroy() {
    // remove notification from array
    this.removeFirebaseAuthNotification(this.notification)
    // clear timeout
    clearTimeout(this.timeout)
  },
  methods: {
    removeNotification() {
      this.removeFirebaseAuthNotification(this.notification)
    },
    ...mapActions(['removeFirebaseAuthNotification']) // bring in the remove action from the notification module
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.notification-message {
  position: absolute;
  left: 0;
  top: -4em;
  padding: 0.2em;

  background-color: $button-warning;
  border-left: 2px solid $button-info;
  color: $text-light;

  font-size: 0.7em;
}
</style>
