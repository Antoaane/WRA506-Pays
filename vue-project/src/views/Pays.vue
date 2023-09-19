<script setup>
    import { onMounted, ref } from 'vue'
    import axios from 'axios'

    let data = ref('')

    onMounted(async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    data.value = response.data
    })
</script>

<template>
    <section>
        <h1>Pays</h1>
        <p v-for="pays in data" :key="pays.name.common">
            {{ pays.name.common }}
        </p>
    </section>
</template>

<style>

</style>