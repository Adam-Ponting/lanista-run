<template>
  <div>
    <main class="form-container">
      <form class="form" @submit.prevent="resetPassword">
        <fieldset>
          <legend class="form__legend">Reset Password</legend>
          <input
            id="resetEmail"
            v-model.trim="passwordForm.email"
            type="email"
            name="email"
            placeholder="Enter your email"
            class="form__input"
            required
            minlength="5"
            maxlength="25"
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
              <span>reset</span>
            </template>
          </base-button>
          <NotificationContainer v-if="notifications.length > 0" />
        </fieldset>
        <div class="login-extras">
          <span class="login-extras__text"
            >Already signed up? Proceed to Login</span
          >
          <base-button
            :type="'button'"
            class="login-extras__button"
            @click.native="toLogin"
          >
            <template v-slot:name>
              <span>login</span>
            </template>
          </base-button>
        </div>

        <LoginExtraRoutes />
      </form>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { resetPassword } from '@/components/functions.js'

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
      passwordForm: {
        email: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return this.passwordForm.email.length >= 5 && this.emailIncludes
    },
    emailIncludes() {
      return (
        this.passwordForm.email.includes('.') &&
        this.passwordForm.email.includes('@')
      )
    },
    ...mapState(['notifications'])
  },
  methods: {
    resetPassword() {
      resetPassword(this.passwordForm.email)
      this.passwordForm.email = ''
    },
    toLogin() {
      this.$emit('toLoginView')
    },
    toCreateAccount() {
      this.$router.push({ name: 'create-account' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.form-container {
  background: transparent;
}
</style>
