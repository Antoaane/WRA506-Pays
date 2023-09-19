<script setup>
  import TitleText from './components/TitleText.vue'

  // const title2 = 'Voici les moyennes'

  const symfony = 4
  const integration = 17
  const reseau = 9
  const cultureArtistique = 8
  const communication = 16
  const developpementBack = 7
  const developpementFront = 14
  const anglais = 12
  const mathematiques = 10
  const audiovisuel = 3


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
    { 
      name: 'Développement back', 
      note: developpementBack 
    },
    { 
      name: 'Développement front', 
      note: developpementFront 
    },
    { 
      name: 'Anglais', 
      note: anglais 
    },
    { 
      name: 'Mathématiques', 
      note: mathematiques 
    },
    { 
      name: 'Audiovisuel', 
      note: audiovisuel 
    }
  ]
</script>

<template>
  <TitleText />

  <section class="container">
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

    <section>
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
    </section>
    
  </section>
  
</template>

<style>
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .container {
    flex-direction: row;
  }

  section, table, ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 1rem;
    padding: 1rem;

    background-color: rgba(43, 61, 61, 0.6);

    border-radius: 1.5rem;
  }

  th, tr, li, p {
    margin: 0.5rem;
    padding: 0.5rem;

    background-color: rgba(43, 61, 61, 0.6);

    border-radius: 0.5rem;

    list-style: none;
    color: white;
  }
</style>
