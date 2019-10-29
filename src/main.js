import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
const firebase = require('@/firebaseConfig.js')

// https://www.npmjs.com/package/vue-nprogress
import 'nprogress/nprogress.css'

const VueScrollTo = require('vue-scrollto') // https://vue-scrollto.netlify.com/
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

// to register global icons, useful if not using many
import BaseIcon from '@/components/BaseIcon.vue' // import as global component
import BaseButtonLink from '@/components/BaseButtonLink.vue' // import as global component

import './registerServiceWorker'
Vue.component('BaseIcon', BaseIcon) // register global component('asName', component) // must be above new.Vue...
Vue.component('BaseButtonLink', BaseButtonLink) // register global component('asName', component) // must be above new.Vue...

import '@/assets/css/app.scss'

Vue.config.productionTip = false

// handle page reloads
let app
firebase.auth.onAuthStateChanged(user => {
  console.log('user =>', user)
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
