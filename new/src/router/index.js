import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import( '../components/TablesPage.vue')
  },
  {
    path: "/tables/:tablename",
    name: 'show',
    component: () => import( '../components/ShowTable.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/DashboardPage.vue'),
    meta: { hideNavigation: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
