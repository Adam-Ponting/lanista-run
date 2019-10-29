<template>
  <div>
    <main class="form-container padding">
      <form class="form" @submit.prevent="updateProfile">
        <fieldset>
          <legend class="form__legend">Update User Name</legend>
          <label for="firstName" class="label">First name:</label>
          <input
            id="firstName"
            v-model.trim="firstName"
            type="text"
            name="firstName"
            :placeholder="userProfile.firstName"
            class="form__input"
            minlength="1"
            maxlength="15"
          />
          <label for="firstName" class="label">Last name:</label>

          <input
            id="lastName"
            v-model.trim="lastName"
            type="text"
            name="lastName"
            :placeholder="userProfile.lastName"
            class="form__input"
            minlength="1"
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
              <span>update</span>
            </template>
          </base-button>
          <NotificationContainer v-if="notifications.length > 0" />
        </fieldset>
      </form>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { updateProfile } from '@/components/functions.js'

import BaseButton from '@/components/BaseButton.vue'

import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    BaseButton,
    NotificationContainer
  },
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    isFormValid() {
      // form is valid if any chars are added
      return this.firstName || this.lastName
    },
    ...mapState(['notifications', 'userProfile'])
  },
  methods: {
    updateProfile() {
      updateProfile({
        // send firstName and lastName as object, if blank use name from userProfile
        firstName:
          this.firstName !== '' ? this.firstName : this.userProfile.firstName,
        lastName:
          this.lastName !== '' ? this.lastName : this.userProfile.lastName
      })
      // reset usename in view
      this.firstName = ''
      this.lastName = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/app.scss';

.form__input {
  border-left: 2px solid $button-warning; // add style as not required by default
}
.label {
  font-size: 0.7em;
  position: relative;
  top: 0.25em;
  &:hover {
    cursor: pointer;
  }
}
</style>
