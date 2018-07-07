import Vue from 'vue'
import Router from 'vue-router'
import studentDashboard from '../components/student-dashboard'
import adminDashboard from '../components/admin-dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/studentDashboard', name: 'studentDashboard', component: studentDashboard },
    { path: '/adminDashboard', name: 'adminDashboard', component: adminDashboard },
  ]
})
