<script setup>
import { ref } from "vue";
import router from "./../router";

const search = ref("");

const handleSearch = () => {
  router.push(`/pokemons/${search.value.toLowerCase()}`);
};
</script>

<template>
  <form
    @submit.prevent="handleSearch"
    class="bg-light d-flex flex-row align-items-center gap-1 border border-secondary-subtle border-1 p-1 rounded-pill"
  >
    <input
      class="form-control border-0 rounded-pill"
      type="text"
      v-model.trim="search"
    />
    <button
      class="btn btn-secondary btn-sm search-btn"
      aria-label="Search pokemon"
    >
      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    </button>
  </form>
</template>

<style>
.search-btn {
  width: 2.15rem;
  aspect-ratio: 1;
  border-radius: 100%;
  display: grid;
  place-content: center;
}
</style>
