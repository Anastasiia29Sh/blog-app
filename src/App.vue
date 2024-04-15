<script setup lang="ts">
import { useInitialDataStore } from "@/shared/store/initialDataStore";

const initialDataStore = useInitialDataStore();

initialDataStore.initializeData();
</script>

<template>
  <div class="container">
    <header class="header">
      <router-link to="/blog-app/" class="p-text-xxl-bold link">
        Блог
      </router-link>
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
  padding: 20px;

  text-align: center;
  background-color: $primaryColor;

  .link {
    color: #fff8dc;
  }
}

.app {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-inline: 40px;
}
</style>
