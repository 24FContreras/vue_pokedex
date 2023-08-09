<script setup>
import { useRouter, useRoute } from "vue-router";
import { useGetData } from "@/composables/getData";

const route = useRoute();
const router = useRouter();
const { getData, data, loading, errorData } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);

const travelBack = () => {
  router.push("/pokemons");
};
</script>

<template>
  <main class="container py-4">
    <p v-if="loading">Cargando pokemon...</p>
    <div v-if="data">
      <h1>{{ $route.params.pokemon }}</h1>
      <img :src="data.sprites?.front_default" :alt="data.name" />
      <button class="btn btn-info" @click="travelBack">
        Volver a lista de pokemons
      </button>
    </div>

    <div v-if="errorData"><h1>No existe el pokemon</h1></div>
  </main>
</template>
