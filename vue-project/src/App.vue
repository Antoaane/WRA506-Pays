<script setup>
  import TitleText from './components/TitleText.vue'

  const symfony = 4
  const integration = 7
  const reseau = 9
  const cultureArtistique = 8
  const communication = 6

  const average = (symfony + integration + reseau + cultureArtistique + communication) / 5
</script>

<template>
  <TitleText />

  <ul>
    <li>Note sur Symfony : {{ symfony }}</li>
    <li>Note en intégration : {{ integration }}</li>
    <li>Note en réseau : {{ reseau }}</li>
    <li>Note en culture artistique : {{ cultureArtistique }}</li>
    <li>Note en communication : {{ communication }}</li>
    <br>
    <li>Moyenne générale : {{ average }}</li>
  </ul>
</template>

<style scoped>
li {
  color: red;
}
</style>
