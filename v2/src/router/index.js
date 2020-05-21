import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: () => import("@/views/404")
  },
  {
    path: "/dashboard",
    component: () => import("@/views/Index"),
    children: [
      // Dashboard
      {
        name: "Dashboard",
        path: "/home",
        component: () => import("@/views/dashboard/DashboardHome")
      },
      // Tables
      {
        name: "Data Tables",
        path: "/tables",
        component: () => import("@/views/dashboard/Tables")
      },
      // Maps
      {
        name: "Park Maps",
        path: "/maps",
        component: () => import("@/views/dashboard/ParkMaps")
      },
      // Report Forms
      {
        name: "Report Forms",
        path: "/forms",
        component: () => import("@/views/dashboard/ReportForms")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
