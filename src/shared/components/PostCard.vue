<script setup lang="ts">
import { ref } from "vue";
import { Post } from "@/shared/types/common";
import { useUserStore } from "@/shared/store/userStore";

const props = withDefaults(
  defineProps<{
    post: Post;
    edit?: boolean;
  }>(),
  {
    edit: false,
  }
);

const userStore = useUserStore();

userStore.getUserOnePost(props.post.id);

const userPost = ref(userStore.userOnePost);

function editPost() {
  alert("eddit");
}

function deletePost() {
  alert("del");
}
</script>

<template>
  <div class="post-card" @click.self="$router.push(`/post/${post.id}`)">
    <div class="title-post">
      <h3 class="p-text-lg-bold">{{ post.title }}</h3>

      <div v-if="edit" class="action">
        <img
          src="@/assets/icons/pen.svg"
          alt=""
          class="icon"
          title="редактировать"
          @click="editPost"
        />
        <img
          src="@/assets/icons/basket.svg"
          alt=""
          class="icon"
          title="удалить"
          @click="deletePost"
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
  </div>
</template>

<style scoped lang="scss">
.post-card {
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 10px;

  border: 1px solid $secondColor;
  border-radius: 8px;
  cursor: pointer;

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
</style>
