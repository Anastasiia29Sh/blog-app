<script setup lang="ts">
import { Post } from "@/shared/types/common";

import PostForm from "@/features/PostForm.vue";

withDefaults(
  defineProps<{
    idUser: number;
    post?: Post;
    isEdit?: boolean;
  }>(),
  {
    isEdit: false,
  }
);

const emit = defineEmits(["cancel", "editPost", "createPost"]);
</script>

<template>
  <div class="modal">
    <h3 class="p-text-md--bold title-modal">
      <span v-if="isEdit">Редактировать пост</span>
      <span v-else>Создать пост</span>
    </h3>

    <PostForm
      v-if="isEdit"
      :id-user="idUser"
      :post="post"
      @submit="(values) => emit('editPost', values)"
      @cancel="emit('cancel')"
    />

    <PostForm
      v-else
      :id-user="idUser"
      @submit="(values) => emit('createPost', values)"
      @cancel="emit('cancel')"
    />
  </div>
</template>

<style scoped lang="scss">
.modal {
  max-width: 500px;

  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 25%;

  z-index: 100;

  padding: 20px;

  color: #ffffff;

  background-color: $primaryColor;
  border-radius: 8px;
}

.title-modal {
  margin-bottom: 20px;
  text-align: center;
}
</style>
