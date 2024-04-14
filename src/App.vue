<script setup lang="ts">
import { useInitialDataStore } from "@/shared/store/initialDataStore";

const initialDataStore = useInitialDataStore();

initialDataStore.initializeData();
</script>

<template>
  <div class="container">
    <header class="header">
      <router-link to="/" class="link link-avtor"> Блог </router-link>
    </header>

    <div id="app" class="app">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  overflow: auto;

  position: relative;
}

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
