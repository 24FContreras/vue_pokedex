<script setup>
import { storeToRefs } from "pinia";
import { useLastSeenStore } from "../store/lastSeen";
import SearchBar from "../components/searchBar.vue";
import PokemonCard from "../components/PokemonCard.vue";

const useLastSeen = useLastSeenStore();
const { lastSeen } = storeToRefs(useLastSeen);
</script>

<template>
  <header
    class="container-fluid home-header vh-minusnav d-flex flex-column align-items-center justify-content-center"
  >
    <div class="col col-12 col-md-6 p-4">
      <h1 class="text-uppercase text-center">Search in the pokedex</h1>
      <SearchBar />
    </div>
  </header>

  <main class="container-fluid">
    <section
      class="row vh-50 p-3 p-md-5 bg-secondary-subtle d-flex flex-column justify-content-start"
    >
      <div class="col col-12">
        <h2>Last seen</h2>

        <p v-if="!lastSeen.length">You have seen any pokemons yet</p>

        <div
          v-else
          class="mt-1 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 g-4"
        >
          <div class="col" v-for="pokemon in lastSeen">
            <PokemonCard
              :pokeId="pokemon.id"
              :name="pokemon.name"
              :key="pokemon.id"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.home-header {
  background-color: white;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.55)
    ),
    url("./../assets/poke-bg.png");
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
}

.vh-minusnav {
  min-height: calc(100vh - 3.5rem);
}
</style>
