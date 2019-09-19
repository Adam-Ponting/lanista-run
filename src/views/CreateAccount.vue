<template>
  <div class="form-container">
    <form @submit.prevent="signup" class="form--display">
      <fieldset>
        <legend class="legend__text">Create Account</legend>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          class="form__input"
          required
          v-model.trim="signupForm.firstName"
          minlength="2"
          maxlength="10"
        />
        <input
          v-model.trim="signupForm.lastName"
          type="text"
          placeholder="Last Name"
          id="lastName"
          class="form__input"
          required
          minlength="5"
          maxlength="10"
        />

        <input
          v-model.trim="signupForm.email"
          type="email"
          placeholder="Email"
          id="email"
          required
          class="form__input"
          ref="email"
          minlength="5"
          maxlength="25"
        />

        <input
          v-model.trim="signupForm.password"
          type="password"
          placeholder="Password"
          id="password"
          required
          class="form__input"
          minlength="5"
          maxlength="10"
        />
        <NotificationContainer v-if="notifications.length > 0" />
        <button
          type="submit"
          value="Submit"
          class="form__button"
          ref="buttonSubmit"
          :class="[
            isFormValid
              ? 'form__button--activeButton'
              : 'form__button--disabledButton'
          ]"
        >
          Submit
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
    </form>
  </div>
</template>

<script>
import { signup } from '@/components/functions.js'
import { mapState } from 'vuex'

import NProgress from 'nprogress' // <--- include the library
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
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
.errors {
  position: absolute;
  top: 50%;
}
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
  margin: 3em auto 2em;
  padding: 0.75em 1em;
  border: 2px solid lightcoral;
  font-weight: bold;
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
    margin: 0.5em;
    padding: 0.5em;
    background-color: whitesmoke;
    border: 2px solid lightcoral;
    font-size: 0.7em;
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
