<template>
  <div>
    <form @submit.prevent>
      <input
        v-model.trim="signupForm.name"
        type="text"
        placeholder="Savvy Apps"
        id="name"
      />
      <input
        v-model.trim="signupForm.title"
        type="text"
        placeholder="Company"
        id="title"
      />

      <input
        v-model.trim="signupForm.email"
        type="text"
        placeholder="you@email.com"
        id="email2"
      />

      <input
        v-model.trim="signupForm.password"
        type="password"
        placeholder="min 6 characters"
        id="password2"
      />

      <button @click="signup" class="button">Sign Up</button>
    </form>
    <hr />
    <AuthLogin />
    <hr />
    <hr />
    <form @submit.prevent class="password-reset">
      <div>
        <h1>Reset Password</h1>

        <label for="email3">Email</label>
        <input
          v-model.trim="passwordForm.email"
          type="text"
          placeholder="you@email.com"
          id="email3"
        />

        <button @click="resetPassword" class="button">Submit</button>
      </div>
    </form>
    <hr />
    <AuthLogout />
    <hr />
    <CreatePost />
    <hr />
  </div>
</template>

<script>
import AuthLogout from '@/components/AuthLogout.vue'
import CreatePost from '@/components/CreatePost.vue'
const fb = require('@/firebaseConfig.js')
import { plan } from '@/assets/data/Fivek.js'
import {
  logout,
  uploadPlan,
  signup,
  resetPassword
} from '@/components/functions.js'

export default {
  components: {
    AuthLogout,
    CreatePost
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      passwordForm: {
        email: ''
      }
    }
  },
  methods: {
    uploadPlan() {
      uploadPlan(plan)
    },
    resetPassword() {
      resetPassword()
    },
    logout() {
      logout()
    },
    signup() {
      signup(
        this.signupForm.name,
        this.signupForm.title,
        this.signupForm.email,
        this.signupForm.password
      )
    }
  },
  login() {
    fb.auth
      .signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
      .then(user => {
        this.$store.commit('setCurrentUser', user.user)
        this.$store.dispatch('fetchUserProfile')
        this.$router.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }
  // signup() {
  //   fb.auth
  //     .createUserWithEmailAndPassword(
  //       this.signupForm.email,
  //       this.signupForm.password
  //     )
  //     .then(user => {
  //       this.$store.commit('setCurrentUser', user.user)

  //       // create user obj
  //       fb.usersCollection
  //         .doc(user.user.uid)
  //         .set({
  //           name: this.signupForm.name,
  //           title: this.signupForm.title
  //         })
  //         .then(() => {
  //           this.$store.dispatch('fetchUserProfile')
  //           this.$router.push('/dashboard')
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
}
</script>
