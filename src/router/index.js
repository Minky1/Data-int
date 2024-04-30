import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AccountView from "../views/AccountView.vue";
import AboutView from "../views/AboutView.vue";
import OrderView from "../views/OrderView.vue";
import TyForOrder from "../views/TyForOrder.vue";
import AccountRegister from "../views/AccountRegister.vue";
import OrderList from "../views/OrderList.vue";
import TyForRegister from "../views/TyForRegister.vue";
import AfterLogin from "../views/AfterLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/order",
      name: "order",
      component: OrderView,
    },
    {
      path: "/auth/login",
      name: "login",
      component: AccountView,
    },

    {
      path: "/auth/register",
      name: "register",
      component: AccountRegister,
    },
    {
      path: "/tyfororder",
      name: "tyfororder",
      component: TyForOrder,
    },
    {
      path: "/tyforregister",
      name: "UserProfile",
      component: TyForRegister,
    },
    {
      path: "/afterlogin",
      name: "afterlogin",
      component: AfterLogin,
    },

  ],
});
export default router;
