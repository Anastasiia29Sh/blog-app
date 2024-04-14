<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import ListUserPosts from "@/shared/components/ListUserPosts.vue";

import { useUserStore } from "@/shared/store/userStore";
import { usePostStore } from "@/shared/store/postStore";

const userStore = useUserStore();
const postStore = usePostStore();

const route = useRoute();
const idUser = route.params.id;

userStore.getUserId(+idUser);

const user = ref(computed(() => userStore.user));

const posts = ref(computed(() => user.value?.post));

posts.value = postStore.sortPosts(posts.value || []);

function update() {
  userStore.getUserId(+idUser);
  posts.value = postStore.sortPosts(posts.value || []);
}
</script>

<template>
  <div v-if="user">
    <div class="avtor">
      <img src="../assets/icons/user.png" alt="" class="icon" />
      <span class="p-text-lg">{{ user?.fullName }}</span>
    </div>

    <h2 class="p-text-xxl title-blog">
      Мой блог: <span class="p-fw-bold">{{ user?.blogName }}</span>
    </h2>

    <ListUserPosts
      v-if="posts"
      :id-user="user.id"
      :posts="posts"
      @update="update"
    />
  </div>

  <div v-else>404</div>
</template>

<style scoped lang="scss">
.avtor {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  width: 30px;
}

.title-blog {
  margin-bottom: 30px;
}
</style>
