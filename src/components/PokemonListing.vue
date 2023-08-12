<script setup>
import { RouterLink } from "vue-router";

defineProps(["name", "pokeId"]);
const emit = defineEmits(["removerFavorito"]);
</script>

<template>
  <li
    class="list-group-item d-flex flex-row align-items-center justify-content-between"
  >
    <div class="pokemon d-flex flex-row align-items-center">
      <RouterLink :to="`/pokemons/${name}`">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`"
          :alt="name"
        />
      </RouterLink>
      <div>
        <p class="m-0 text-secondary">#{{ pokeId }}</p>
        <RouterLink
          :to="`/pokemons/${name}`"
          class="font-quicksand fw-semibold link-underline link-underline-opacity-0 text-dark"
          >{{ name }}</RouterLink
        >
      </div>
    </div>

    <button
      class="btn btn-danger btn-sm"
      @click="emit('removerFavorito', pokeId)"
      :aria-label="`eliminar ${name} de favoritos`"
    >
      <i class="fa-solid fa-heart-circle-xmark me-1" aria-hidden="true"></i>
      Remove
    </button>
  </li>
</template>
