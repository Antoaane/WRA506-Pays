<script setup>
  import TitleText from './components/TitleText.vue'

  // const title2 = 'Voici les moyennes'

  const symfony = 4
  const integration = 7
  const reseau = 9
  const cultureArtistique = 8
  const communication = 6

  const average = (symfony + integration + reseau + cultureArtistique + communication) / 5

  const table = [
    { name: 'Symfony', note: symfony },
    { name: 'Intégration', note: integration },
    { name: 'Réseau', note: reseau },
    { name: 'Culture artistique', note: cultureArtistique },
    { name: 'Communication', note: communication },
  ]
</script>

<template>
  <TitleText />

  <div class="container">
    <ul>
      <li>Note sur Symfony : {{ symfony }}</li>
      <li>Note en intégration : {{ integration }}</li>
      <li>Note en réseau : {{ reseau }}</li>
      <li>Note en culture artistique : {{ cultureArtistique }}</li>
      <li>Note en communication : {{ communication }}</li>
      <br>
      <li>Moyenne générale : {{ average }}</li>
    </ul>

    <table>
      <tr>
        <th>Matière</th>
        <th>Note</th>
      </tr>
      <tr v-for="item in table">
        <td>{{ item.name }}</td>
        <td>{{ item.note }}</td>
      </tr>
    </table>
  </div>
  
</template>

<style scoped>
li {
  color: red;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  margin-top: 2rem;
  border-collapse: collapse;
  border: 1px solid black;
}
</style>
