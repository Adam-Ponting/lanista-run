<template>
  <div id="dashboard">
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
          <div class="create-post">
            <p>create a post</p>
            <form @submit.prevent>
              <textarea v-model.trim="post.content"></textarea>
              <button class="button" @click="createPost">post</button>
            </form>
          </div>
        </div>
      </div>
      <div>{{ userProfile }}</div>
      <div class="col2">
        <div>
          <p class="no-results">There are currently no posts</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')
import { firebaseApp, fs } from '@/firebaseConfig.js'

export default {
  data() {
    return {
      post: {
        content: ''
      }
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile'])
  },
  methods: {
    createPost() {
      fb.postsCollection
        .add({
          //timestamp: fs.firestore.FieldValue.serverTimestamp(),
          timestamp: fs.FieldValue.serverTimestamp(), //works
          time2: firebaseApp.firestore.FieldValue.serverTimestamp(), //works

          content: this.post.content,
          userId: this.currentUser.uid,
          userName: this.userProfile.firstName,
          comments: 0,
          likes: 0
        })
        .then(ref => {
          console.log('ref => ', ref)
          this.post.content = ''
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped></style>
