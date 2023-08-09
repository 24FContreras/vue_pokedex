<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Vue" width="30" height="24" /> PokeAPI
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <RouterLink
            to="/"
            class="btn btn-outline-primary me-2"
            active-class="active"
            >Home</RouterLink
          >
          <RouterLink
            class="btn btn-outline-primary"
            to="/pokemons"
            active-class="active"
            >Pokemons</RouterLink
          >
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
