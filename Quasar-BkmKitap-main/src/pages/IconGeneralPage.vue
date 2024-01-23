<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-icon" style="padding-bottom: 5px;">
            <IconGeneral style="background-color: #f5f5f5;"/>
        </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts">
    import IconGeneral from '/src/components/IconGeneral.vue';
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';

    export default {
        components: {
            IconGeneral,
            TheHeader,
            TheFooter,
        },
    };
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-icon {
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 100px;
        margin-right: 100px;
        height: fit-content;
    }
</style>
