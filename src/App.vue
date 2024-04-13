<script setup lang="ts">
import { useInitialDataStore } from "@/shared/store/initialDataStore";

const initialDataStore = useInitialDataStore();

initialDataStore.initializeData();

// import NoteCard from "./shared/components/NoteCard.vue";
</script>

<template>
  <header class="header">Блог</header>

  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 60px;
  color: #fff8dc;
  background-color: $primaryColor;
}

.app {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-inline: 40px;
}
</style>
