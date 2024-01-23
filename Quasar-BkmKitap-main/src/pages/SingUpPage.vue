<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-signUp" style="padding-bottom: 5px;">
            <SingUp />
        </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts">
    import SingUp from '/src/components/SingUp.vue';
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';

    export default {
        components: {
            SingUp,
            TheHeader,
            TheFooter,
        },
};
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-signUp {
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 100px;
        margin-right: 100px;
        height: fit-content;
    }
</style>
