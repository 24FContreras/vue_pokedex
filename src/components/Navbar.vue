<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand font-quicksand" to="/">
        <img
          src="@/assets/pokeball.png"
          alt="pokeball logo"
          width="24"
          height="24"
        />
        Pokedex
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-center text-md-start ms-auto">
          <RouterLink to="/" class="nav-link" active-class="active"
            >Home</RouterLink
          >
          <RouterLink class="nav-link" to="/pokemons" active-class="active"
            >Pokemons</RouterLink
          >
          <RouterLink class="nav-link" to="/favorites" active-class="active"
            >Favorites</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
