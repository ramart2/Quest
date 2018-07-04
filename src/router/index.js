import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ { path: '/dashboard', name: 'dashboard', component: dashboard }]
})
