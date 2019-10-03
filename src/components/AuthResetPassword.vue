<template>
  <form class="form--display" @submit.prevent="resetPassword">
    <fieldset>
      <legend class="legend__text">Reset Password</legend>
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
      <NotificationContainer v-if="notifications.length > 0" />

      <button
        ref="buttonSubmit"
        type="submit"
        value="Submit"
        class="form__button"
        :class="[
          isFormValid
            ? 'form__button--activeButton'
            : 'form__button--disabledButton'
        ]"
      >
        Reset
      </button>
    </fieldset>
    <div class="alt-link">
      <span class="alt-link__text">Already signed up? Proceed to Login</span>
      <button
        type="button"
        class="form__button form__button--muted"
        @click="toLogin"
      >
        Login
      </button>
    </div>
    <div class="alt-link">
      <span class="alt-link__text">Want an account? Sign up</span>
      <button
        type="button"
        class="form__button form__button--muted"
        @click="toCreateAccount"
      >
        Create Account
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'

import { resetPassword } from '@/components/functions.js'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
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
.form-container {
  min-height: calc(100vh - 90px); // 100vh - footer height(90px)
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/lanista-run.appspot.com/o/bg-account.png?alt=media&token=1ee9669a-334b-4710-8cb2-b739684ef4ff');
  background-repeat: no-repeat;
  background-position: 40% 60px;
  background-size: contain;
  background-color: #ced4da;
}

.form--display {
  margin: 0.5em;
}
.legend__text {
  text-align: left;
  color: white;
  font-variant: small-caps;
}
.form__input {
  font-size: 0.9em;
  line-height: 2em;
  color: #444;
  width: 100%;
  padding-left: 0.5em;
  margin: 0.25em 0;
  background-color: #f9f9fb;
  border: none;
  border-bottom: 2px solid #ced4da;
  border-left: 3px solid transparent;
  border-radius: 0.5em;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    outline: none;
    border-bottom-color: #444;
  }
  &:required {
    border-left-color: lightgreen;
  }
  &:invalid {
    border-left-color: orange;
    color: #919ca0;
  }
  &::placeholder {
    color: #919ca0;
  }
}
.form__button {
  display: block;
  border: none;
  font-weight: bold;
  margin: 3em auto 2em;
  padding: 0.75em 1em;
  border: 2px solid lightcoral;

  &--activeButton {
    background-color: lightgreen;
    color: black;
    border: 2px solid transparent;
    &:hover {
      cursor: pointer;
    }
  }
  &--disabledButton {
    background-color: rgba(lightgrey, 0.8);
    color: #919ca0;
  }
  &--muted {
    display: inline-block;
    font-size: 0.7em;

    margin: 0.5em;
    padding: 0.5em;
    background-color: whitesmoke;
    border: 2px solid lightcoral;
    color: #444;
    &:hover {
      cursor: pointer;
    }
  }
}

.alt-link {
  display: block;
  background: linear-gradient(
    to right,
    rgba(lightgrey, 0.1),
    rgba(023, 105, 139, 1.25)
  );
  text-align: right;
  &__text {
    font-size: 0.7em;
    color: whitesmoke;
  }
}
@media only screen and (min-width: 600px) {
  .form--display {
    width: 50%;
  }
}
</style>
