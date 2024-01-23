<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-giris" style="padding-bottom: 5px;">
            <TheUyeGiris />
        </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts">
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';
    import TheUyeGiris from 'src/components/TheUyeGiris.vue';
    
    export default {
        components: {
            TheUyeGiris,
            TheHeader,
            TheFooter,
        },
    };
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-giris {
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 100px;
        margin-right: 100px;
        height: fit-content;
    }
</style>
