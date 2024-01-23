<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-filtre-urun" style="padding-bottom: 5px;">
            <TheFiltre style="background-color: #f5f5f5;height: fit-content;"/>
            <TheUrun style="background-color: #f5f5f5; width: fit-content;margin-left: 5px;"/>
        </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts">
    import TheFiltre from '/src/components/TheFiltre.vue';
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';
import TheUrun from 'src/components/TheUrun.vue';


    export default {
        components: {
    TheFiltre,
    TheHeader,
    TheFooter,
    TheUrun
},
    };
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-filtre-urun {
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 10px;
        height: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: flex-start;
        align-content: space-around;
    }
</style>
