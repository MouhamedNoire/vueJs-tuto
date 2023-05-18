import Home from "./components/home.vue";
import SignUp from "./components/signUp.vue";
import Login from "./components/login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signUp",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name:"Add",
    component: Add,
    path:"/add",
  },
  {
    name:"Update",
    component: Update,
    path:"/update/:id",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
