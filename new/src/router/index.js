import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('../components/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../components/UserLogin.vue'),
    meta: { hideLoginOption: true }
  },
  {
    path: '/user',
    name: 'UserInfo',
    component: () => import('../components/UserPage.vue')
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
  },
  {
    path: '/maps',
    name: 'Maps',
    component: () => import('../components/MapsPage.vue'),
    // meta: { hideNavigation: true }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
