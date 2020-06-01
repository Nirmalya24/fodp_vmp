import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 404 Route
  {
    path: "*",
    component: () => import("@/components/404")
  },
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/components/HomePage")
  },
  {
    name: "Login",
    path: '/login',
    component: () => import("@/components/UserLogin")
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/components/UserRegister")
  },
  {
    name: "UserPage",
    path: "/profile",
    component: () => import("@/components/UserPage")
  },
  {
    name: "ForgotPassword",
    path: '/forgot',
    component: () => import("@/components/ForgotPassword")
  },
  {
    path: "/dashboard",
    component: () => import("@/components/dashboard/DashboardHome"),
    children: [
      // Tables
      {
        name: "TablesPage",
        path: "tables",
        component: () => import("@/components/dashboard/TablesPage"),
        children: [
          {
            name: "ShowTable",
            path: ':tablename', 
            component: () => import("@/components/dashboard/ShowTable")
          } 

        ]
      },
      // Maps
      {
        name: "Maps",
        path: "maps",
        component: () => import("@/components/dashboard/ParkMaps")
      },
      // Report Forms
      {
        name: "Report Forms",
        path: "forms",
        component: () => import("@/components/dashboard/ReportForms")
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

// Redirect if the user is not authenticated
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if(authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});


