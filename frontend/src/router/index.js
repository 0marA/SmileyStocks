import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "/src/views/Dashboard.vue";
import LoginPage from "/src/views/LoginPage.vue";
import NewAccountPage from "/src/views/NewAccountPage.vue";

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
            name: "LoginPageRedirect",
            component: LoginPage,
        },
        {
            path: "/dashboard",
            name: "Dasbhoard",
            component: Dashboard,
        },
        {
            path: "/newaccount",
            name: "NewAccountPage",
            component: NewAccountPage,
        },
    ],
});

export default router;
