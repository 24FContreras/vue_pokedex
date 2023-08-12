import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore("favoritos", () => {
  const favoritos = ref([]);

  if (localStorage.getItem("favoritos")) {
    favoritos.value = JSON.parse(localStorage.getItem("favoritos"));
  }

  const agregarFavorito = (pokemon) => {
    favoritos.value.push(pokemon);
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  };

  const removerFavorito = (id) => {
    const index = favoritos.value.findIndex((item) => item.id === id);
    favoritos.value.splice(index, 1);

    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  };

  return { favoritos, agregarFavorito, removerFavorito };
});
