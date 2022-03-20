import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "/src/views/Dashboard.vue";
import LoginPage from "/src/views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
