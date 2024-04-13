<script setup lang="ts">
import { ref } from "vue";
import { Post } from "@/shared/types/common";
import { useUserStore } from "@/shared/store/userStore";

const props = defineProps<{
  post: Post;
}>();

const userStore = useUserStore();

userStore.getUserOnePost(props.post.id);

const userPost = ref(userStore.userOnePost);

console.log(userPost.value);
</script>

<template>
  <div class="post-card" @click.self="$router.push(`/post/${post.id}`)">
    <h3 class="p-text-xl-bold">{{ post.title }}</h3>

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
