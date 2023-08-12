import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { title: "Home" },
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../views/PokemonsView.vue"),
      meta: { title: "Pokemons" },
    },
    {
      path: "/pokemons/:pokemon",
      name: "pokemon",
      component: () => import("../views/PokemonView.vue"),
      meta: { title: "pokemon" },
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritosView.vue"),
      meta: { title: "Favorites" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const poke = to.params.pokemon;

  if (poke) {
    document.title = `${poke[0].toUpperCase() + poke.slice(1)} - Pokedex`;
  } else {
    document.title = `${to.meta.title} - Pokedex`;
  }
  next();
});

export default router;
