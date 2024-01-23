<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
  <TheHeader style="min-height: 250px;"/>
      <q-page-container class="container-kargo" style="padding-bottom: 5px;">
          <TheKargo/>
      </q-page-container>
  <TheFooter />
</q-layout>
</template>

<script lang="ts">
import TheHeader from 'src/components/TheHeader.vue';
import TheKargo from '/src/components/TheKargo.vue';
import TheFooter from '/src/components/TheFooter.vue';


export default {
  components: {
    TheKargo,
    TheHeader,
    TheFooter
},
};
</script>

<style scoped>
  .main-layout {
      background-color: #f5f5f5;
  }
  .container-kargo {
      margin-top: 50px;
      margin-bottom: 50px;
      margin-left: 80px;
      margin-right: 80px;
      height: fit-content;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-evenly;
      align-items: flex-start;
  }
</style>

