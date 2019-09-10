import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Features from '@/views/Features.vue'
import TrainingPlans from '@/views/TrainingPlans.vue'
import Resources from '@/views/Resources.vue'
import Login from '@/views/Login.vue'
import CreateAccount from '@/views/CreateAccount.vue'

// https://www.vuemastery.com/courses/next-level-vue/progress-bar-global-and-per-route-guards
import NProgress from 'nprogress' // <--- include the library

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/training-plans',
      name: 'training-plans',
      component: TrainingPlans
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccount
    }
  ]
})
router.beforeEach((routeTo, routeFrom, next) => {
  // Start the route progress bar.
  NProgress.start()
  next()
})
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router
