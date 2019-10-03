<template>
  <div class="form-container">
    <form class="form--display" @submit.prevent="updateProfile">
      <fieldset>
        <legend class="legend__text">Update User Name</legend>
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
        <NotificationContainer v-if="notifications.length > 0" />

        <button
          type="submit"
          value="Submit"
          class="form__button form__button--activeButton"
        >
          Update
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { updateProfile } from '@/components/functions.js'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    NotificationContainer
  },
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
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
  border-radius: 0.5em;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    outline: none;
    border-bottom-color: #444;
  }
  &::placeholder {
    color: #919ca0;
  }
}
.label {
  font-size: 0.7em;
  position: relative;
  top: 0.25em;
  &:hover {
    cursor: pointer;
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
}

@media only screen and (min-width: 600px) {
  .form--display {
    width: 50%;
  }
}
</style>
