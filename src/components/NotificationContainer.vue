<template>
  <div class="notification-container">
    <!-- v-for notifications array -->
    <!-- :key is id -->
    <!-- prop passed in is the notifications object -->
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    NotificationBar
  },
  computed: mapState(['notifications']) // map to 'notification' module, ['notifications'] state
}
</script>

<style lang="scss" scoped>
.notification-container {
  position: relative; // remove element from the flow so age doesnt move on appearing
  text-align: left;
}
</style>
