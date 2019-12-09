/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('menu-comp', require('./components/Menu.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './bootstrap';

import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VueAuth from '@websanova/vue-auth'
import auth from './auth'
import routes from './routes'
import store from '@/store'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)



import '@/plugins'

import vuetify from '@/plugins/vuetify'
import '@/plugins/chartist.js'
import '@/plugins/index.js'
import '@/plugins/vuetify.js'
import '@/plugins/components.js'
// import '@/plugins/base.js'


import App from '@/views/App';


Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
})

Vue.router = router
// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `http://localhost:8000/api`
Vue.use(VueAuth, auth)
// Load Index

 new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')