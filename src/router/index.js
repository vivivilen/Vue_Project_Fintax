import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'
import Calculator from '../components/Calculator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
    meta: {
      auth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    if(localStorage.getItem('loginUser') === null) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('loginUser') === null) {
      next()
    } else {
      next({
        name: 'Dashboard'
      })
    }
  }
})
export default router
