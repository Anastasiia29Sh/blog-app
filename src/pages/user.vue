<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import PostCard from "@/shared/components/PostCard.vue";

import { useUserStore } from "@/shared/store/userStore";
import { usePostStore } from "@/shared/store/postStore";

const userStore = useUserStore();
const postStore = usePostStore();

const route = useRoute();
const idUser = route.params.id;

userStore.getUserId(+idUser);

const user = ref(computed(() => userStore.user));

const posts = ref(computed(() => user.value?.post));

posts.value = postStore.sortPosts(posts.value || []);
</script>

<template>
  <div class="avtor">
    <img src="../assets/icons/user.png" alt="" class="icon" />
    <span class="p-text-lg">{{ user?.fullName }}</span>
  </div>

  <h2 class="p-text-xxl title-blog">
    Мой блог: <span class="p-fw-bold">{{ user?.blogName }}</span>
  </h2>

  <div v-if="posts">
    <div class="my-posts">
      <h3 class="p-text-md--bold">Мои записи</h3>

      <button class="btn">Добавить запись</button>
    </div>

    <div class="post-list">
      <PostCard v-for="post in posts" :key="post.id" :post="post" edit />
    </div>
  </div>

  <div v-else>no</div>
</template>

<style scoped lang="scss">
.avtor {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  width: 30px;
}

.title-blog {
  margin-bottom: 30px;
}

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

  &:hover {
    color: #ffffff;
    background-color: $primaryColor;
  }
}
</style>
