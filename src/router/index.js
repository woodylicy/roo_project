import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SystemLayout from "../layouts/SystemLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: SystemLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/card",
          name: "card",
          component: () => import("../views/CardView.vue"),
        },
      ],
    },
  ],
});

export default router;
