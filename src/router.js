import { createRouter, createWebHistory } from "vue-router";
import CreateAccountScreen from "./components/CreateAccountScreen.vue";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen.vue";
import LoginScreen from "./components/LoginScreen.vue";


const routes = [
    {
        path: "/create-account",
        name: "create-account",
        component: CreateAccountScreen
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPasswordScreen
    },
    {
        path: "/",
        name: "login",
        alias: "/login",
        component: LoginScreen
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;