<script setup lang="ts">
import { ref, computed } from "vue";

import { Post } from "@/shared/types/common";

import { useUserStore } from "@/shared/store/userStore";

const props = defineProps<{
  post: Post;
}>();

const userStore = useUserStore();

userStore.getUsersPosts();

userStore.getUserOnePost(props.post.id);

const userPost = ref(computed(() => userStore.userOnePost));
</script>

<template>
  <div>
    <h3 class="p-text-lg--bold title-post">{{ post.title }}</h3>

    <div class="p-text-sm date-avtor">
      <time :datetime="post.dateTime">
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

    <p class="p-text-md brief-description">
      <i>Краткое описание:</i> {{ post.briefDescription }}
    </p>

    <p class="p-text-md">{{ post.fullDescription }}</p>
  </div>
</template>

<style scoped lang="scss">
.title-post {
  margin-bottom: 10px;
}

.date-avtor {
  display: flex;
  flex-direction: column;
  gap: 7px;

  color: $neutralColor-700;
}

.link-avtor {
  color: rgba($primaryColor, 0.7);

  &:hover {
    color: $primaryColor;
  }
}

.brief-description {
  margin-top: 15px;
  margin-bottom: 20px;
}
</style>
