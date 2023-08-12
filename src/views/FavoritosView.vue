<script setup>
import { storeToRefs } from "pinia";
import { useFavoritosStore } from "../store/favoritos";
import PokemonListing from "../components/PokemonListing.vue";

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { removerFavorito } = useFavoritos;
</script>

<template>
  <main class="container py-4">
    <h1>Favorites</h1>

    <p v-if="!favoritos.length">
      You have not added favorite pokemons to your list yet
    </p>
    <ul class="list-group list-group-flush" v-else>
      <PokemonListing
        v-for="favorito in favoritos"
        :key="favorito.id"
        :name="favorito.name"
        :pokeId="favorito.id"
        @removerFavorito="removerFavorito"
      />
    </ul>
  </main>
</template>
