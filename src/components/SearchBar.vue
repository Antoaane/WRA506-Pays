<script>
    import { onMounted, ref, watch } from 'vue'
    import axios from 'axios'
    import { ModelSelect } from 'vue-search-select/dist/VueSearchSelect/src/components/ModelSelect.vue'

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
    <ModelSelect />
</template>