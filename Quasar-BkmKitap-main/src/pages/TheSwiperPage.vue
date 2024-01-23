<template>
    <q-layout view="lHh Lpr lFf" class="main-layout">
    <TheHeader style="min-height: 250px;"/>
        <q-page-container class="container-swiper" style="padding-bottom: 5px;">
            <SwiperSlide/>
        </q-page-container>
        <TheFooter />
  </q-layout>
</template>

<script lang="ts">
    import SwiperSlide from '/src/components/SwiperSlide.vue';
    import TheHeader from '/src/components/TheHeader.vue';
    import TheFooter from '/src/components/TheFooter.vue';

    export default {
        components: {
            SwiperSlide,
            TheHeader,
            TheFooter
        },
    };
</script>

<style scoped>
    .main-layout {
        background-color: #f5f5f5;
    }
    .container-swiper {
        margin-top: 50px;
        margin-bottom: 50px;
        height: fit-content;
    }
</style>
