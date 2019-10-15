import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Features from '@/views/Features.vue'
import TrainingPlans from '@/views/TrainingPlans.vue'
import Login from '@/views/Login.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import Dashboard from '@/views/Dashboard.vue'
// import GettingStarted from '@/views/GettingStarted.vue'
// import FiveK from '@/views/FiveK.vue'
// import TenK from '@/views/TenK.vue'
// import HalfMarathon from '@/views/HalfMarathon.vue'
// import Marathon from '@/views/Marathon.vue'
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
    {
      path: '/training-plans/getting-started',
      name: 'getting-started',
      component: () =>
        import(
          /*webpackChunkName: "training-plans"*/ '@/views/GettingStarted.vue'
        )
    },
    {
      path: '/training-plans/5k',
      name: '5k',
      component: () =>
        import(/*webpackChunkName: "training-plans"*/ '@/views/FiveK.vue')
    },
    {
      path: '/training-plans/10k',
      name: '10k',
      component: () =>
        import(/*webpackChunkName: "training-plans"*/ '@/views/TenK.vue')
    },
    {
      path: '/training-plans/half-marathon',
      name: 'half-marathon',
      component: () =>
        import(
          /* webpackChunkName: "training-plans" */ '@/views/HalfMarathon.vue'
        )
    },
    {
      path: '/training-plans/marathon',
      name: 'marathon',
      component: () =>
        import(/*webpackChunkName: "training-plans"*/ '@/views/Marathon.vue')
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
