<script setup>
    import { onMounted, ref, watch } from 'vue'
    import axios from 'axios'

    let data = ref('')
    let recherche = ref('')
    let dataFull = ref('')

    onMounted(async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    data.value = response.data
    dataFull.value = response.data
    })

    watch(recherche, () => {
        filtrerPays()
    })

    function filtrerPays() {
        data.value = dataFull.value.filter(pays => pays.name.common.toLowerCase().includes(recherche.value.toLowerCase()))
    }
</script> 

<template>
    <section>
        <h1>Pays</h1>
        <input type="text" v-model="recherche">
        <!-- <button :on-click="filtrerPays()">Recherher</button> -->
        <router-link :to="`/pays/${pays.name.common}`" v-for="pays in data" :key="pays.name.common">
            {{ pays.name.common }}
        </router-link>
    </section>
</template>

<style>

</style>