<script>
    const title = 'Notes'
    const text = 'Voici les notes de l\'étudiant :'

    export default {
        name: 'TitleText',
        data() {
            return {
                title,
                text
            }
        }
    }
</script>

<template>
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>
</template>

<style scoped>
    h1 {
        color: blueviolet;
    }
    p {
        color: greenyellow;
    }
</style>