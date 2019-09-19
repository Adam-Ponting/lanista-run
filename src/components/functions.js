import { store } from '@/store.js'
import router from '@/router.js'
import { firebaseApp } from '@/firebaseConfig.js'
import NProgress from 'nprogress' // <--- include the library

function resetPassword(email) {
  NProgress.start()
  firebaseApp
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      NProgress.done()
      store.dispatch('addFirebaseAuthNotification', 'Email sent to ' + email)
    })
    .catch(err => {
      store.dispatch('addFirebaseAuthNotification', err.message)
      NProgress.done()
    })
}

function signup(name, title, email, password) {
  NProgress.start()
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      store.commit('setCurrentUser', user.user)

      // create user obj
      firebaseApp
        .firestore()
        .collection('users')
        .doc(user.user.uid)
        .set({
          name: name,
          title: title
        })
        .then(() => {
          store.dispatch('fetchUserProfile')
          router.push('/dashboard')
          NProgress.done()
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err.message)
      store.dispatch('addFirebaseAuthNotification', err.message)
      NProgress.done()
    })
}

function login(email, password) {
  NProgress.start()

  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      store.commit('setCurrentUser', user.user)
      store.dispatch('fetchUserProfile')
      router.push({ name: 'dashboard' })
      NProgress.done()
    })
    .catch(err => {
      console.log(err.message)
      store.dispatch('addFirebaseAuthNotification', err.message)
      NProgress.done()
    })
}

function logout() {
  NProgress.start()
  firebaseApp
    .auth()
    .signOut()
    .then(() => {
      store.dispatch('clearData')
      if (router.currentRoute.name !== 'home') {
        // if user is not 'home', take them there
        router.push({ name: 'home' })
      }
      NProgress.done()
    })
    .catch(err => {
      console.log(err)
    })
}

function uploadPlan(plan) {
  NProgress.start()

  console.log(plan)
  plan.forEach(function(obj) {
    firebaseApp
      .firestore()
      .collection('menu')
      .add({
        id: obj.id,
        day: obj.day,
        type: obj.type,
        activity: obj.activity,
        isComplete: obj.isComplete
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
        NProgress.done()
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  })
}

/* const get = plan => {
  console.log('get', plan)
  plan.forEach(function(obj) {
    firebaseApp
      .firestore()
      .collection('menu')
      .add({
        id: obj.id,
        day: obj.day,
        type: obj.type,
        activity: obj.activity,
        isComplete: obj.isComplete
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  })
}
 */
export { login, logout, uploadPlan, signup, resetPassword }
