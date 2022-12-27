import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../components/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import("../components/views/PokemonView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
