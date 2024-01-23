<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
        <TheHeader style="min-height: 250px;"/>
            <q-page-container class="container-urun" style="padding-bottom: 50px;">
                <TheUrun style="max-height: fit-content;"/>
            </q-page-container>
        <TheFooter />
    </q-layout>
</template>

<script lang="ts">
    import TheUrun from '/src/components/TheUrun.vue';
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';


    export default {
        components: {
            TheUrun,
            TheHeader,
            TheFooter
        },
    };
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-urun {
        
        margin-bottom: 200px;
        margin-left: 100px;
        margin-right: 100px;
        height: fit-content;
    }
</style>

