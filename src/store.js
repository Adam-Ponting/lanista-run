import Vue from 'vue'
import Vuex from 'vuex'
// import NProgress from 'nprogress' // <--- include the library

const fb = require('@/firebaseConfig.js')

Vue.use(Vuex)

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')

    fb.usersCollection.doc(user.uid).onSnapshot(doc => {
      store.commit('setUserProfile', doc.data())
    })

    // realtime updates from our posts collection
    fb.postsCollection
      .orderBy('createdOn', 'desc')
      .onSnapshot(querySnapshot => {
        let postsArray = []

        querySnapshot.forEach(doc => {
          let post = doc.data()
          post.id = doc.id
          postsArray.push(post)
        })

        // store.commit('setPosts', postsArray)
      })
  }
})

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    nextId: 1,
    notifications: []
  },

  mutations: {
    PUSH_FIREBASE_AUTH_NOTIFICATION(state, notification) {
      state.notifications.push({
        // use object destructuring to add an id to notification object
        message: notification,
        id: state.nextId++
      })
    },
    DELETE_FIREBASE_AUTH_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        // create array without id to remove object
        notification => notification.id !== notificationToRemove.id
      )
    },
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    addFirebaseAuthNotification({ commit }, notification) {
      commit('PUSH_FIREBASE_AUTH_NOTIFICATION', notification)
    },
    removeFirebaseAuthNotification({ commit }, notificationToRemove) {
      commit('DELETE_FIREBASE_AUTH_NOTIFICATION', notificationToRemove)
    },
    updateProfile({ state }, userName) {
      let firstName = userName.firstName
      let lastName = userName.lastName

      fb.usersCollection
        .doc(state.currentUser.uid)
        .update({ firstName, lastName })
        .then(user => {
          console.log('user ', user)
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    clearData({ commit }) {
      commit('setCurrentUser', null)
      commit('setUserProfile', {})
      commit('setPosts', null)
    },
    fetchUserProfile({ commit, state }) {
      fb.usersCollection
        .doc(state.currentUser.uid)
        .get()
        .then(res => {
          commit('setUserProfile', res.data())
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
