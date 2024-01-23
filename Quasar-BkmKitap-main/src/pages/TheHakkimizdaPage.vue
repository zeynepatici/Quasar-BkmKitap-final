<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-hakkimizda" style="padding-bottom: 5px;">
            <TheHakkimizda style="min-height: 900px;" />
        </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts">
    import TheHakkimizda from '/src/components/TheHakkimizda.vue';
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';
    export default {
        components: {
            TheHakkimizda,
            TheHeader,
            TheFooter,
        },
    };
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-hakkimizda {
        margin-top: 20px;
        margin-left: 500px;
        margin-right: 500px;
        height: fit-content;
        display: grid;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
        justify-items: stretch;
        background-color: #f5f5f5;
        

    }
</style>