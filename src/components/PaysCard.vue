<script setup>
defineProps(['pays'])
</script>

<template>
    <img class="flag" :src="pays.flags.svg" alt="">
    <h2>{{ pays.name.common }}</h2>
    <p>Capitale : {{ pays.capital[0] }}</p>
    <p>Population : {{ pays.population }}</p>
    <p>Superficie : {{ pays.area }} km²</p>
</template>