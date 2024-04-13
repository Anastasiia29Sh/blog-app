<script setup lang="ts">
import { useInitialDataStore } from "@/shared/store/initialDataStore";

const initialDataStore = useInitialDataStore();

// вынести в stor в функцию, которую потом здесь вызывать!!!
// Проверка наличия данных в local storage и инициализация начальных данных при необходимости
if (!localStorage.getItem("posts")) {
  initialDataStore.initializeData();
}

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
