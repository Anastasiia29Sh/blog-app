<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import { Post } from "@/shared/types/common";
import { useUserStore } from "@/shared/store/userStore";
import { usePostStore } from "@/shared/store/postStore";

const props = withDefaults(
  defineProps<{
    post: Post;
    edit?: boolean;
  }>(),
  {
    edit: false,
  }
);

const emit = defineEmits(["editPost", "update"]);

const userStore = useUserStore();
const postStore = usePostStore();

userStore.getUserOnePost(props.post.id);

const userPost = ref(userStore.userOnePost);

const isDelete = ref(false);

function deletePost() {
  postStore.deletePost(props.post.id);
  emit("update");
  isDelete.value = false;
}

const modal = ref(null);

onClickOutside(modal, () => (isDelete.value = false));
</script>

<template>
  <div class="post-card">
    <div class="title-post">
      <h3 class="p-text-lg--bold">{{ post.title }}</h3>

      <div v-if="edit" class="action">
        <img
          src="@/assets/icons/pen.svg"
          alt=""
          class="icon btn-edit"
          title="редактировать"
          @click="emit('editPost', post.id)"
        />
        <img
          src="@/assets/icons/basket.svg"
          alt=""
          class="icon btn-dellete"
          title="удалить"
          @click="isDelete = true"
        />
      </div>
    </div>

    <div class="p-text-sm date-avtor">
      <time :datetime="post.dateTime" class="date">
        {{ new Date(post.dateTime).toLocaleString() }}
      </time>
      <span>
        Автор:
        <router-link
          :to="{ name: 'user', params: { id: userPost?.id } }"
          class="link link-avtor"
          >{{ userPost?.fullName }}
        </router-link>
      </span>
    </div>

    <p class="p-text-md">{{ post.briefDescription }}</p>

    <div class="footer-card">
      <div class="comment">
        <img src="@/assets/icons/comment.svg" alt="" class="icon" />
        <span>{{ post.comments?.length }}</span>
      </div>

      <router-link
        :to="{ name: 'post', params: { id: post.id } }"
        class="link link-more"
        >Подробнее &rarr;
      </router-link>
    </div>

    <div v-if="isDelete" class="deletion" ref="modal">
      <h3 class="p-text-xs">Вы действительно хотите удалить этот пост?</h3>

      <div class="group-btn">
        <button @click="isDelete = false" class="btn btn-no">Нет</button>
        <button @click="deletePost" class="btn btn-yes">Да</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-card {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 10px;

  border: 1px solid $secondColor;
  border-radius: 8px;

  &:hover {
    border-color: $primaryColor;
  }
}

.title-post {
  display: flex;
  justify-content: space-between;
}

.action {
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.btn-edit:hover {
  border-radius: 25%;
  -webkit-box-shadow: 0px 0px 8px 3px rgba(218, 165, 32, 0.2);
  -moz-box-shadow: 0px 0px 8px 3px rgba(218, 165, 32, 0.2);
  box-shadow: 0px 0px 8px 3px rgba(218, 165, 32, 0.2);
}

.btn-dellete:hover {
  border-radius: 25%;
  -webkit-box-shadow: 0px 0px 8px 3px rgba(255, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 8px 3px rgba(255, 0, 0, 0.2);
  box-shadow: 0px 0px 8px 3px rgba(255, 0, 0, 0.2);
}

.date-avtor {
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: $neutralColor-700;
}

.link-avtor {
  color: rgba($primaryColor, 0.7);

  &:hover {
    color: $primaryColor;
  }
}

.footer-card {
  display: flex;
  justify-content: space-between;
}

.comment {
  display: flex;
  align-items: center;
  gap: 5px;
}

.icon {
  width: 20px;
}

.link-more {
  color: $secondColor;

  &:hover {
    color: $primaryColor;
  }
}

.deletion {
  position: absolute;
  top: 40px;
  right: 10px;

  max-width: 200px;

  padding: 10px;
  text-align: end;

  color: #ffffff;
  background-color: $primaryColor;
  border-radius: 8px;
}

.group-btn {
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  margin-top: 10px;
}

.btn {
  width: 60px;

  padding: 5px;
  border: 1px solid transparent;
  border-radius: 8px;

  background-color: transparent;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    border-color: #ffffff;
  }
}

.btn-no {
  border-color: rgb(255, 50, 14);
}

.btn-yes {
  border-color: $secondColor;
}
</style>
