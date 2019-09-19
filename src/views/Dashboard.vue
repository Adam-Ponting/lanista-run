<template>
  <div>
    <div>{{ userProfile }}</div>
    <hr />
    <div>{{ currentUser }}</div>
    <hr />
    <div>{{ posts }}</div>
    <hr />
    <button @click="get">user</button>
    <button @click="posta">posts</button>
    <div @click="test(true)">true</div>
    <div @click="test(false)">false</div>
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js')

import { store } from '@/store.js'

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userProfile', 'currentUser', 'posts'])
  },
  methods: {
    test(val) {
      store.dispatch('isLoading', val)
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
