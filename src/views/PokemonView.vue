<script setup>
import { useRouter, useRoute } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritosStore } from "../store/favoritos";
import { useLastSeenStore } from "../store/lastSeen";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const { getData, data, loading, errorData } = useGetData();

const useFavoritos = useFavoritosStore();
const useLastSeen = useLastSeenStore();

const { favoritos } = storeToRefs(useFavoritos);

const { agregarFavorito } = useFavoritos;

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`).then(
  (res) => {
    useLastSeen.updateLastSeen(res);
  }
);

const travelBack = () => {
  router.push("/pokemons");
};
</script>

<template>
  <main class="container py-4 px-4 px-md-0">
    <div class="spinner-border" role="status" v-if="loading">
      <span class="visually-hidden">Cargando pokemon...</span>
    </div>

    <div class="row row-cols-3 g-5" v-if="data">
      <div class="col col-12 col-md-6 col-lg-3 order-2 order-md-1">
        <p class="m-0">#{{ data.id }}</p>
        <h1 class="mt-0 text-capitalize">{{ data.name }}</h1>

        <div class="types d-flex flex-row gap-2 mb-2">
          <p
            :class="`font-quicksand badge rounded-pill text-uppercase type ${data.types[0].type.name}`"
          >
            {{ data.types[0].type.name }}
          </p>
          <p
            v-if="data.types[1]"
            :class="`font-quicksand badge rounded-pill text-uppercase type ${data.types[1].type.name}`"
          >
            {{ data.types[1].type.name }}
          </p>
        </div>

        <div class="stats d-flex flex-column gap-2">
          <div class="stat" v-for="stat in data.stats">
            <p class="m-1">
              <span class="text-uppercase stat-name">{{ stat.stat.name }}</span
              >: {{ stat.base_stat }}
            </p>
            <div
              class="progress"
              :aria-label="stat.stat.name"
              :aria-valuenow="stat.base_stat"
              aria-valuemin="0"
              :aria-valuemax="data.base_experience"
              style="height: 8px"
            >
              <div
                class="progress-bar bg-dark"
                :style="`width: ${
                  (stat.base_stat * 100) / data.base_experience
                }%`"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center order-1 order-md-2"
      >
        <div class="poke-image">
          <img
            class="w-100"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`"
            :alt="data.name"
          />
        </div>
      </div>

      <div class="col-12 col-md-12 col-lg-3 order-3">
        <h2>Sprites</h2>

        <section class="sprites">
          <div class="row row-cols-2 row-cols-md-4 row-cols-lg-2 g-3">
            <div class="col">
              <div class="sprite-bg bg-secondary-subtle rounded-4">
                <img
                  :src="data.sprites.front_default"
                  :alt="`${data.name} - Front default`"
                />
              </div>
            </div>
            <div class="col">
              <div class="sprite-bg bg-secondary-subtle rounded-4">
                <img
                  :src="data.sprites.back_default"
                  :alt="`${data.name} - Back default`"
                />
              </div>
            </div>
            <div class="col">
              <div class="sprite-bg bg-secondary-subtle rounded-4">
                <img
                  :src="data.sprites.front_shiny"
                  :alt="`${data.name} - Front shiny`"
                />
              </div>
            </div>
            <div class="col">
              <div class="sprite-bg bg-secondary-subtle rounded-4">
                <img
                  :src="data.sprites.back_shiny"
                  :alt="`${data.name} - Back shiny`"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="buttons d-flex flex-column gap-2 mt-4">
          <button
            :disabled="favoritos.some((item) => item.id === data.id)"
            class="btn btn-dark"
            @click="agregarFavorito(data)"
          >
            <i class="fa-solid fa-heart me-2" aria-hidden="true"></i>
            Add to favorites
          </button>
          <button class="btn btn-light" @click="travelBack">
            Return to the pokedex
          </button>
        </section>
      </div>
    </div>

    <div v-if="errorData"><h1>No existe el pokemon</h1></div>
  </main>
</template>

<style>
.sprite-bg {
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}
</style>
