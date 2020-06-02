import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "*",
      component: () => import('@/views/404.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/user',
      name: 'User',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/dashboard/Dashboard.vue'),
      children: [
        {
          path: 'tables',
          name: 'Tables',
          component: () => import('./views/dashboard/Tables.vue'),
        },
        {
          path: 'tables/:tablename',
          name: 'Show',
          component: () => import('@/views/dashboard/ShowTable.vue')
        },
        {
          path: 'maps',
          name: 'Maps',
          component: () => import('@/views/dashboard/Maps.vue')
        },
        {
          path: 'forms',
          name: 'ReportForms',
          component: () => import('@/views/dashboard/ReportForms.vue')
        },
        {
          path: 'usermanagement',
          name: 'UserManagement',
          component: () => import('@/views/dashboard/UserManagement.vue')
        },
        {
          path: 'featureforecasting',
          name: 'FeatureForecasting',
          component: () => import('@/views/dashboard/FeatureForecasting.vue')
        }
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
