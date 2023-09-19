<script setup>
    const pays = [
        {
            name: 'France',
            id: 1
        },
        {
            name: 'Espagne',
            id: 2
        },
        {
            name: 'Italie',
            id: 3
        },
        {
            name: 'Allemagne',
            id: 4
        },
        {
            name: 'Angleterre',
            id: 5
        },
        {
            name: 'Portugal',
            id: 6
        },
        {
            name: 'Belgique',
            id: 7
        },
        {
            name: 'Suisse',
            id: 8
        },
        {
            name: 'Autriche',
            id: 9
        },
        {
            name: 'Luxembourg',
            id: 10
        }
    ]
</script>

<template>
    <section>
        <h1>Pays</h1>
        <ul>
            <li v-for="pays in pays" :key="pays.id">
                <router-link :to="`/pays/${pays.name}`">
                    {{ pays.name }}
                </router-link>
            </li>
        </ul>
    </section>
</template>

<style>

</style>