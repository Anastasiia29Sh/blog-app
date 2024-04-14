<script setup lang="ts">
defineProps<{
  name: string;
  date: string;
}>();
</script>

<template>
  <div class="comment-sender">
    <div class="avatar" />

    <div class="date-avtor">
      <span class="name-sender">{{ name }}</span>

      <time :datetime="date">
        {{ new Date(date).toLocaleString() }}
      </time>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-sender {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 38px;
  height: 38px;

  display: flex;
  justify-content: center;

  border-radius: 100%;
  background-color: rgba($primaryColor, 0.5);
}

.date-avtor {
  display: flex;
  flex-direction: column;
  gap: 3px;

  color: $neutralColor-700;
}

.name-sender {
  color: $neutralColor;
}
</style>
