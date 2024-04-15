<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { usePostStore } from "@/shared/store/postStore";
import { useCommentStore } from "@/shared/store/commentStore";

import { Comment } from "@/shared/types/common";

import FullCardPost from "@/shared/components/FullCardPost.vue";
import UserComment from "@/shared/components/UserComment.vue";
import CommentForm from "@/features/CommentForm.vue";

const postStore = usePostStore();
const commentStore = useCommentStore();

const route = useRoute();
const idPost = route.params.id;

const post = ref(postStore.getPostId(+idPost));

const comments = ref(computed(() => post.value?.comments ?? []));
comments.value = comments.value.reverse();

const isCreateComment = ref(false);

function saveCreatedComment(values: Comment) {
  commentStore.createComment(values);
  update();
  isCreateComment.value = false;
}

function update() {
  post.value = postStore.getPostId(+idPost);
  comments.value = comments.value.reverse();
}
</script>

<template>
  <div v-if="post">
    <FullCardPost :post="post" class="full-carg-post" />

    <div class="comments" id="comments">
      <h3 class="p-text-md--bold">Комментарии</h3>

      <div v-if="post.comments?.length !== 0" class="list-comments">
        <UserComment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
          @update="update"
        />
      </div>

      <div v-else class="empty-comment">Нет комментариев</div>
    </div>

    <button
      v-if="!isCreateComment"
      class="btn-write-comment"
      :class="{ 'btn-empty-comment': post.comments?.length === 0 }"
      @click="isCreateComment = true"
    >
      Написать комментарий
    </button>

    <CommentForm
      v-else
      id="form"
      :id-post="+idPost"
      @submit="saveCreatedComment"
      class="comment-form"
    />
  </div>

  <div v-else>404</div>
</template>

<style scoped lang="scss">
.full-carg-post {
  margin-bottom: 40px;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.list-comments {
  max-height: 280px;
  overflow: auto;

  padding-bottom: 18px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  border-bottom: 3px solid rgba($secondColor, 0.5);

  &::-webkit-scrollbar {
    width: 3px;
    background-color: rgba($secondColor, 0.5);
  }
}

.btn-write-comment {
  float: right;
  padding: 10px;
  margin-top: 20px;

  background-color: #ffffff;
  border: 1px solid $primaryColor;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: $primaryColor;
  }
}

.empty-comment {
  text-align: center;
  margin-top: 20px;
}

.btn-empty-comment {
  float: none;
  margin: 20px auto;
  display: block;
}

.comment-form {
  clear: both;
  margin-top: 30px;
}
</style>
