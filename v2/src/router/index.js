import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index'),
    children: [
      // Dashboard
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/Home'),
      },
      // Tables
      {
        name: 'Data Tables',
        path: '/tables',
        component: () => import('@/views/dashboard/Tables'),
      },
      // Maps
      {
        name: 'Park Maps',
        path: '/park-maps',
        component: () => import('@/views/dashboard/ParkMaps'),
      },
      // Report Forms
      {
        name: 'Report Forms',
        path: '/forms',
        component: () => import('@/views/dashboard/ReportForms'),
      },
    ],
  },
];

const router = new VueRouter({
  routes
});

export default router;
