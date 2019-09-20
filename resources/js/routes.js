import VueRouter from 'vue-router'
import Vue from 'vue'


import Home from '@/js/components/Home'

import About from '@/js/components/About'
import Register from '@/js/components/Register'
import Login from '@/js/components/Login'
import Dashboard from '@/js/components/Dashboard'
// Routes

// Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
]


export default routes