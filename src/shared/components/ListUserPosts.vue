<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import PostCard from "./PostCard.vue";
import CreateEditPostModal from "./CreateEditPostModal.vue";

import { Post } from "@/shared/types/common";

import { usePostStore } from "@/shared/store/postStore";

defineProps<{
  posts: Post[];
  idUser: number;
}>();

const emit = defineEmits(["update"]);

const postStore = usePostStore();

const editablePost = ref<Post>();

const isCreate = ref(false);
const isEdit = ref(false);

function editPost(id: number) {
  isEdit.value = true;
  editablePost.value = postStore.getPostId(id);
}

function saveEditablePost(values: Post) {
  postStore.editPost(values);
  emit("update");
  cancel();
}

function saveCreatedPost(values: Post) {
  postStore.createPost(values);
  emit("update");
  cancel();
}

function cancel() {
  isEdit.value = false;
  isCreate.value = false;
}

const modal = ref(null);

onClickOutside(modal, () => {
  isEdit.value = false;
  isCreate.value = false;
});
</script>

<template>
  <div v-if="posts.length !== 0">
    <div class="my-posts">
      <h3 class="p-text-md--bold">Мои записи</h3>

      <button class="btn" @click="isCreate = true">Добавить запись</button>
    </div>

    <div class="post-list">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        edit
        @editPost="editPost"
        @update="emit('update')"
      />
    </div>
  </div>

  <div v-else class="empty-posts">
    <span>У вас еще нет записей</span>

    <button class="btn" @click="isCreate = true">Добавить запись</button>
  </div>

  <div v-if="isEdit || isCreate" ref="modal">
    <CreateEditPostModal
      v-if="isEdit"
      :id-user="idUser"
      :post="editablePost"
      is-edit
      @cancel="cancel"
      @editPost="saveEditablePost"
    />
    <CreateEditPostModal
      v-else
      :id-user="idUser"
      @cancel="cancel"
      @createPost="saveCreatedPost"
    />
  </div>
</template>

<style scoped lang="scss">
.my-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  padding: 4px;

  background-color: #ffffff;
  border: 1px solid $primaryColor;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: $primaryColor;
  }
}

.empty-posts {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  margin-top: 50px;
}
</style>
