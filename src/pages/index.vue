<script setup lang="ts">
import { ref, computed } from "vue";
import PostCard from "@/shared/components/PostCard.vue";

import { usePostStore } from "@/shared/store/postStore";

const postStore = usePostStore();

postStore.getPosts();

const allPosts = ref(computed(() => postStore.allPosts));

// console.log(allPosts.value);
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
