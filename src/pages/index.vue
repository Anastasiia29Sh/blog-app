<script setup lang="ts">
import { ref } from "vue";
import PostCard from "@/shared/components/PostCard.vue";

import { usePostStore } from "@/shared/store/postStore";
import { useUserStore } from "@/shared/store/userStore";

const postStore = usePostStore();
const userStore = useUserStore();

postStore.getPostsComments();
userStore.getUsersPosts();

const allPosts = ref(postStore.allPosts);

allPosts.value = postStore.sortPosts(allPosts.value);
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
