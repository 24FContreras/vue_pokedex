<script setup>
import { RouterLink } from "vue-router";

defineProps(["name"]);
</script>

<template>
  <li class="list-group-item">
    <RouterLink :to="`/pokemons/${name}`">{{ name }}</RouterLink>
  </li>
</template>
