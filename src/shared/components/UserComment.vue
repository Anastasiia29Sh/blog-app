<script setup lang="ts">
import { Comment } from "@/shared/types/common";

import CommentSender from "./CommentSender.vue";

defineProps<{
  comment: Comment;
}>();

function deleteComment() {}
</script>

<template>
  <div>
    <CommentSender
      :name="comment.userInfo"
      :date="comment.dateTime"
      class="comment-sender"
    />

    <div class="comment">
      <span>{{ comment.textComment }}</span>

      <img
        src="@/assets/icons/basket.svg"
        alt=""
        class="btn-delete"
        title="удалить"
        @click="deleteComment"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-sender {
  margin-bottom: 15px;
}

.comment {
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 10px;

  border: 1px solid $neutralColor-200;
  border-radius: 8px;
}

.btn-delete {
  width: 18px;

  margin-left: calc(100% - 20px);

  cursor: pointer;

  &:hover {
    border-radius: 25%;
    -webkit-box-shadow: 0px 0px 8px 3px rgba(255, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 8px 3px rgba(255, 0, 0, 0.2);
    box-shadow: 0px 0px 8px 3px rgba(255, 0, 0, 0.2);
  }
}
</style>
