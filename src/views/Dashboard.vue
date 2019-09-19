<template>
  <div>
    <AuthUpdateUserName />

    <!-- <button @click="get">user</button> -->
    <!-- <button @click="posta">posts</button> -->
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js')
import AuthUpdateUserName from '@/components/AuthUpdateUserName'
import { updateProfile } from '@/components/functions.js'

import { mapState } from 'vuex'

export default {
  components: {
    AuthUpdateUserName
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile', 'currentUser', 'posts'])
  },
  methods: {
    updateProfile() {
      updateProfile({
        // send firstName and lastName as object, if blank use name from userProfile
        firstName:
          this.firstName !== '' ? this.firstName : this.userProfile.firstName,
        lastName:
          this.lastName !== '' ? this.lastName : this.userProfile.lastName
      })
    },
    get() {
      fb.usersCollection
        .doc(this.$store.state.currentUser.uid)
        .get()
        .then(res => {
          console.log(res.data())
        })
        .catch(err => {
          console.log(err)
        })
    },
    posta() {
      console.log('colecting')
      fb.postsCollection
        .orderBy('timestamp', 'desc')
        .onSnapshot(querySnapshot => {
          let postsArray = []

          querySnapshot.forEach(doc => {
            console.log(doc)
            let post = doc.data()
            post.id = doc.id
            postsArray.push(post)
          })
          console.log(postsArray[0].content)
        })
    }
  }
}
</script>
