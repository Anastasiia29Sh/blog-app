<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { usePostStore } from "@/shared/store/postStore";

import FullCardPost from "@/shared/components/FullCardPost.vue";
import UserComment from "@/shared/components/UserComment.vue";

const postStore = usePostStore();

const route = useRoute();
const idPost = route.params.id;

const post = ref(computed(() => postStore.getPostId(+idPost)));

const comments = ref(computed(() => post.value?.comments ?? []));
</script>

<template>
  <div v-if="post">
    <FullCardPost :post="post" class="full-carg-post" />

    <div class="comments" id="comments">
      <h3 class="p-text-md--bold">Комментарии</h3>

      <div v-if="post.comments?.length !== 0" class="list-comments">
        <UserComment
          v-for="comment in comments.reverse()"
          :key="comment.id"
          :comment="comment"
        />
      </div>

      <div v-else>Нет комментариев</div>
    </div>

    <br />
    <button>Написать коммнтарий</button>
  </div>

  <div v-else>404</div>
</template>

<style scoped lang="scss">
.full-carg-post {
  margin-bottom: 50px;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.list-comments {
  max-height: 300px;
  overflow: auto;

  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  border-bottom: 3px solid rgba($secondColor, 0.5);

  &::-webkit-scrollbar {
    width: 3px;
    background-color: rgba($secondColor, 0.5);
  }
}
</style>
