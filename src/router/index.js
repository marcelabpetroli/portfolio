import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/MainCard.vue";
import Articles from "../views/ArticlesCard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/articles",
      name: "Articles",
      component: Articles,
    },
  ],
});

export default router;
