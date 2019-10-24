<template>
  <section>
    <div v-show="!createPage" class="login-extras">
      <span class="login-extras__text">Want an account? Sign up</span>
      <base-button
        :type="'button'"
        class="login-extras__button"
        @click.native="toCreateAccount"
      >
        <template v-slot:name>
          <span>create account</span>
        </template>
      </base-button>
    </div>
    <div v-show="!loginPage" class="login-extras">
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
    <div v-show="!loginPage" class="login-extras">
      <span class="login-extras__text">Forgotten your password?</span>
      <base-button
        :type="'button'"
        class="login-extras__button"
        @click.native="toLogin"
      >
        <template v-slot:name>
          <span>reset password</span>
        </template>
      </base-button>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton
  },
  computed: {
    loginPage() {
      if (this.$route.path == '/login') {
        return true
      } else {
        return false
      }
    },
    createPage() {
      if (this.$route.path == '/create-account') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
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

.login-extras {
  display: block;

  background: linear-gradient(
    to right,
    rgba(lightgrey, 0),
    rgba(023, 105, 139, 1)
  );

  text-align: right;
  font-size: 0.8em;

  &__button {
    margin: 1em;

    color: $text-light;
  }

  &__text {
    color: $text-light;
  }
}
</style>
