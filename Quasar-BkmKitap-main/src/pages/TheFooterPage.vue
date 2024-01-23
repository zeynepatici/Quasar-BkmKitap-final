<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
        <TheHeader style="min-height: 250px;"/>     
        <TheFooter style="min-width: none;;"/>
    </q-layout>
</template>

<script lang="ts">
import TheFooter from '/src/components/TheFooter.vue';
import TheHeader from '/src/components/TheHeader.vue';
export default {
    components: {
        TheFooter,
        TheHeader
    },
};

    
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }

</style>

