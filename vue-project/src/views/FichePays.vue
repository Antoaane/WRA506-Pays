<script setup>
    import { useRoute } from 'vue-router'
    import { onMounted, ref } from 'vue'
    import axios from 'axios'

    const route = useRoute()
    const pays = route.params.pays

    let data = ref('')

    onMounted(async () => {
    const response = await axios.get('https://restcountries.com/v3.1/name/' + pays)
    data.value = response.data[0]
    })

    console.log(data)
</script>

<template>
    <section v-if="data">
        <img :src=data.flags.png alt="">
        <h1>{{ data.name.common }}</h1>
    </section>
</template>