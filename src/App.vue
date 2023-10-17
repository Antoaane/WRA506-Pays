<script setup>
  import SearchBat from './components/SearchBar.vue'
</script>

<template>
  <nav>
    <h1>Menu</h1>

    <router-link class="a" to="/">Accueil</router-link>
    <router-link class="a" to="/seance/1">Séance 1</router-link>
    <router-link class="a" to="/pays">Pays</router-link>
  </nav>
  <router-view>

  </router-view>
</template>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0.5rem;

    background-color: rgb(78, 127, 131);
    color: white;

    border-radius: 1.5rem;
  }

  a, h1 {
    padding: 0.5rem 1rem;

    text-decoration: none;
    color: white;

    border-radius: 0.5rem;
  }

  a:hover {
    color: rgb(78, 127, 131);
    background-color: white;
  }

  input[type = "text"] {
    padding: 0.5rem;
    margin: 0.5rem;

    border-radius: 0.5rem;
  }

  .flag {
    width: 15rem;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    border: white 2px;
  }
</style>
