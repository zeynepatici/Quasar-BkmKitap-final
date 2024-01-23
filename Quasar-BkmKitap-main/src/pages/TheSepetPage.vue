<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-sepet" style="padding-bottom: 5px;">
            <TheSepet />
        </q-page-container>
        <TheFooter />
  </q-layout>
</template>

<script lang="ts">
import TheHeader from 'src/components/TheHeader.vue';
import TheSepet from '/src/components/TheSepet.vue';
import TheFooter from '/src/components/TheFooter.vue';
export default {
    components: {
        TheSepet,
        TheHeader,
        TheFooter,
    },
};
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-sepet {
        margin: 50px;
        margin-left: 100px;
        margin-right: 100px;
        height: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: flex-start;
    }
</style>

