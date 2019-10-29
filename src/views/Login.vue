<template>
  <!-- div container needed for padding classes to take affect over root #id's -->
  <div>
    <main class="form-container padding">
      <form v-if="!showResetPassword" class="form" @submit.prevent="login">
        <fieldset>
          <legend class="form__legend">Login</legend>
          <input
            id="email"
            v-model.trim="loginForm.email"
            type="email"
            name="email"
            placeholder="Email"
            class="form__input"
            required
            minlength="5"
            maxlength="25"
          />
          <input
            id="password"
            v-model.trim="loginForm.password"
            type="password"
            placeholder="Password"
            class="form__input"
            required
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
              <span>login</span>
            </template>
          </base-button>

          <NotificationContainer v-if="notifications.length > 0" />
        </fieldset>

        <div class="login-extras">
          <span class="login-extras__text">Forgotten your password?</span>
          <base-button
            :type="'button'"
            class="login-extras__button"
            @click.native="toForgottenPassword"
          >
            <template v-slot:name>
              <span>reset password</span>
            </template>
          </base-button>
        </div>

        <LoginExtraRoutes />
      </form>

      <AuthResetPassword
        v-if="showResetPassword"
        @toLoginView="showLoginView"
      />
    </main>
  </div>
</template>

<script>
import { login } from '@/components/functions.js'
import { mapState } from 'vuex'

import NProgress from 'nprogress' // <--- include the library

import AuthResetPassword from '@/components/AuthResetPassword.vue'
import BaseButton from '@/components/BaseButton.vue'
import LoginExtraRoutes from '@/components/LoginExtraRoutes.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  name: 'Login',
  components: {
    AuthResetPassword,
    BaseButton,
    LoginExtraRoutes,
    NotificationContainer
  },

  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      showResetPassword: false
    }
  },
  computed: {
    isFormValid() {
      return (
        this.emailIncludes &&
        this.loginForm.email.length >= 5 &&
        this.loginForm.password.length >= 5
      )
    },
    emailIncludes() {
      return (
        this.loginForm.email.includes('.') && this.loginForm.email.includes('@')
      )
    },
    ...mapState(['notifications'])
  },
  methods: {
    login() {
      NProgress.start()
      login(this.loginForm.email, this.loginForm.password)
    },
    showLoginView() {
      this.showResetPassword = false
    },
    toForgottenPassword() {
      this.showResetPassword = true
    },
    toLogin() {
      this.$router.push({ name: 'login' })
    },
    toCreateAccount() {
      this.$router.push({ name: 'create-account' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
</style>
