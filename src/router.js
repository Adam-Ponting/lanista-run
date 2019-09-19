import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Features from '@/views/Features.vue'
import TrainingPlans from '@/views/TrainingPlans.vue'
import Resources from '@/views/Resources.vue'
import Login from '@/views/Login.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import Dashboard from '@/views/Dashboard.vue'
import firebase from 'firebase/app'

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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    { path: '*', redirect: { name: 'home' } }
  ],
  /* https://router.vuejs.org/guide/advanced/scroll-behavior.html */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    }
    if (to.hash) {
      console.log(to.hash)
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    NProgress.start()
    next({ name: 'create-account' })
  } else if (requiresAuth && currentUser) {
    NProgress.start()
    next()
  } else {
    NProgress.start()
    next()
  }
})
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
