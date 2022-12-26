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
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/views/PokemonView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
