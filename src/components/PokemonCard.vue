<script setup>
import { RouterLink } from "vue-router";

defineProps(["name", "pokeId", "listMode"]);
const emit = defineEmits(["removerFavorito"]);
</script>

<template>
  <div class="card text-center overflow-hidden">
    <RouterLink class="w-100 poke-image" :to="`/pokemons/${name}`">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`"
        :alt="name"
      />
    </RouterLink>
    <div class="card-body">
      <p class="m-0 text-secondary fw-thin">#{{ pokeId }}</p>
      <RouterLink
        :to="`/pokemons/${name}`"
        class="card-title font-quicksand fw-semibold link-underline link-underline-opacity-0"
        >{{ name }}</RouterLink
      >
    </div>
  </div>
</template>
