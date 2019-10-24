<template>
  <div>
    <main class="form-container padding">
      <form class="form" @submit.prevent="signup">
        <fieldset>
          <legend class="form__legend">Create Account</legend>
          <input
            id="firstName"
            v-model.trim="signupForm.firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            class="form__input"
            required
            minlength="2"
            maxlength="10"
          />
          <input
            id="lastName"
            v-model.trim="signupForm.lastName"
            type="text"
            placeholder="Last Name"
            class="form__input"
            required
            minlength="5"
            maxlength="10"
          />

          <input
            id="email"
            ref="email"
            v-model.trim="signupForm.email"
            type="email"
            placeholder="Email"
            required
            class="form__input"
            minlength="5"
            maxlength="25"
          />

          <input
            id="password"
            v-model.trim="signupForm.password"
            type="password"
            placeholder="Password"
            required
            class="form__input"
            minlength="5"
            maxlength="10"
          />
          <base-button
            ref="buttonSubmit"
            :type="'submit'"
            value="Submit"
            class="form__button"
            :class="[
              isFormValid
                ? 'form__button--activeButton'
                : 'form__button--disabledButton'
            ]"
          >
            <template v-slot:name>
              <span>submit</span>
            </template>
          </base-button>
          <NotificationContainer v-if="notifications.length > 0" />
        </fieldset>

        <LoginExtraRoutes />
      </form>
    </main>
  </div>
</template>

<script>
import { signup } from '@/components/functions.js'
import { mapState } from 'vuex'

import NProgress from 'nprogress' // <--- include the library

import BaseButton from '@/components/BaseButton.vue'
import LoginExtraRoutes from '@/components/LoginExtraRoutes.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    BaseButton,
    LoginExtraRoutes,
    NotificationContainer
  },
  data() {
    return {
      signupForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return (
        this.signupForm.firstName.length >= 2 &&
        this.signupForm.lastName.length >= 5 &&
        this.signupForm.email.length >= 3 &&
        this.emailIncludes &&
        this.signupForm.password.length >= 5
      )
    },
    emailIncludes() {
      return (
        this.signupForm.email.includes('.') &&
        this.signupForm.email.includes('@')
      )
    },
    ...mapState(['notifications'])
  },
  methods: {
    signup() {
      NProgress.start()
      signup(
        this.signupForm.firstName,
        this.signupForm.lastName,
        this.signupForm.email,
        this.signupForm.password
      )
    },
    toLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
</style>
