<script setup>
  import TitleText from './components/TitleText.vue'

  // const title2 = 'Voici les moyennes'

  const symfony = 4
  const integration = 17
  const reseau = 9
  const cultureArtistique = 8
  const communication = 16

  const average = (symfony + integration + reseau + cultureArtistique + communication) / 5

  const table = [
    { 
      name: 'Symfony', 
      note: symfony 
    },
    {
      name: 'Intégration', 
      note: integration 
    },
    { 
      name: 'Réseau', 
      note: reseau 
    },
    { 
      name: 'Culture artistique', 
      note: cultureArtistique 
    },
    { 
      name: 'Communication', 
      note: communication 
    },
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

    <div class="container-child">
      <div v-for="item in table">
        <div v-if="item.note < 8" style="display: flex;">
          <p>{{ item.name }} : </p>
          <p style="color: red;">&MediumSpace;{{ item.note }}</p>
        </div>
        <div v-else-if="item.note >= 8 && item.note <= 10" style="display: flex;">
          <p>{{ item.name }} : </p>
          <p style="color: orange;">&MediumSpace;{{ item.note }}</p>
        </div>
        <div v-else style="display: flex;">
          <p>{{ item.name }} : </p>
          <p style="color: greenyellow;">&MediumSpace;{{ item.note }}</p>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<style scoped>
* {
  color: white;
}

p, td {
  margin: 0 0.25rem;
}

li {
  color: red;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 2rem;
  padding: 1rem;

  background-color: rgb(61, 77, 80);

  border-radius: 2rem;
}

.container-child {
  background-color: rgb(81, 102, 105);
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center
}

table {
  margin-top: 2rem;
  border-collapse: collapse;
  border: 1px solid black;
}
</style>
