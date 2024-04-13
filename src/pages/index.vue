<script setup lang="ts">
import { ref, computed } from "vue";
import PostCard from "@/shared/components/PostCard.vue";

import { usePostStore } from "@/shared/store/postStore";
import { useUserStore } from "@/shared/store/userStore";

const postStore = usePostStore();
const userStore = useUserStore();

postStore.getPostsComments();
userStore.getUsersPosts();

const allPosts = ref(computed(() => postStore.allPosts));

allPosts.value.sort((a, b) => {
  return Date.parse(b.dateTime) - Date.parse(a.dateTime);
});
</script>

<template>
  <div class="post-list">
    <PostCard v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
