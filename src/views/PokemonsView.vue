<script setup>
import { useGetData } from "@/composables/getData";
import PokemonCard from "../components/PokemonCard.vue";
import PokemonPagination from "../components/PokemonPagination.vue";
import SearchBar from "../components/SearchBar.vue";

const { getData, data, loading, errorData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon?limit=15");
</script>

<template>
  <main class="container py-4">
    <div
      class="d-flex flex-row align-items-center justify-content-between mb-4"
    >
      <h1>Pokemons</h1>
      <div class="d-flex gap-2 flex-row align-items-center">
        <SearchBar />
      </div>
    </div>

    <div class="spinner-border" role="status" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-if="data">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-4"
      >
        <div class="col" v-for="pokemon in data.results">
          <PokemonCard
            :pokeId="pokemon.url.split('/')[6]"
            :name="pokemon.name"
            :key="pokemon.url.split('/')[6]"
          />
        </div>
      </div>

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
