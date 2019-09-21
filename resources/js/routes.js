import VueRouter from 'vue-router'
import Vue from 'vue'


import Home from '@/js/components/Home'

import About from '@/js/components/About'
import App from '@/js/components/App'


import Register from '@/js/components/Register'
import Login from '@/js/components/Login'
import Dashboard from '@/js/components/Dashboard'
import UserProfile from '@/js/components/UserProfile'
import TableList from '@/js/components/TableList'
import Index from '@/js/components/Index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        name: 'home',
        components: {
          default:Home

        },
        meta: {
          auth: undefined
        }
      },
    
      {
        path: 'about',
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
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      auth: true
    },
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          auth: true
        }
      },
      {
        path: '/user-profile',
        name: 'user profile',
        component: UserProfile,
        meta: {
          auth: true
        }
      },
      {
        path: '/table-list',
        name: 'table list',
        component: TableList,
        meta: {
          auth: true
        }
      },

    ]
  },
  // USER ROUTES
  
]

  }
]


// Routes

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//     meta: {
//       auth: undefined
//     }
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: About,
//     meta: {
//       auth: undefined
//     }
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: Register,
//     meta: {
//       auth: false
//     }
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: Login,
//     meta: {
//       auth: false
//     }
//   },
//   // USER ROUTES
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: Dashboard,
//     meta: {
//       auth: true
//     }
//   },
//   {
//     path: '/user-profile',
//     name: 'user profile',
//     component: UserProfile,
//     meta: {
//       auth: true
//     }
//   },
//   {
//     path: '/index',
//     name: 'index',
//     component: Index,
//     meta: {
//       auth: true
//     }
//   },
// ]



export default routes