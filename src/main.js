import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// https://www.npmjs.com/package/vue-nprogress
import 'nprogress/nprogress.css' // <-----

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

import './registerServiceWorker'
Vue.component('BaseIcon', BaseIcon) // register global component('asName', component) // must be above new.Vue...

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
