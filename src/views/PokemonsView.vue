<script setup>
import { useGetData } from "@/composables/getData";
import PokemonListing from "@/components/PokemonListing.vue";
import PokemonPagination from "../components/PokemonPagination.vue";

const { getData, data, loading, errorData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <main class="container py-4">
    <h1>Pokemons</h1>

    <p v-if="loading">Cargando...</p>

    <div v-if="data">
      <ul class="list-group list-group-flush">
        <PokemonListing v-for="pokemon in data.results" :name="pokemon.name" />
      </ul>

      <PokemonPagination
        :previous="data.previous"
        :next="data.next"
        @getPrevious="() => getData(data.previous)"
        @getNext="() => getData(data.next)"
      />
    </div>

    <div v-if="errorData">{{ errorData }}</div>
  </main>
</template>
