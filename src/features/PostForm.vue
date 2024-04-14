<script setup lang="ts">
// import { ref, computed } from "vue";
import { useForm, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { POST_CREATE_SCHEMA } from "@/shared/types/schemas";

import { Post } from "@/shared/types/common";

import { usePostStore } from "@/shared/store/postStore";

const props = defineProps<{
  idUser: number;
  post?: Post;
}>();

const emit = defineEmits(["submit", "cancel"]);

const postStore = usePostStore();

const validationSchema = toTypedSchema(POST_CREATE_SCHEMA);

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    id: props.post?.id ?? postStore.getIdLastPost() + 1,
    title: props.post?.title,
    briefDescription: props.post?.briefDescription,
    fullDescription: props.post?.fullDescription ?? "",
    userInfoId: props.idUser,
    dateTime: new Date().toISOString(),
  },
});

const fieldsForm = [
  {
    name: "title",
    label: "Заголовок* (максимальная длина 50 символов)",
  },
  {
    name: "briefDescription",
    label: "Краткое описание* (максимальная длина 100 символов)",
  },
  {
    name: "fullDescription",
    label: "Полное описание (максимальная длина 255 символов)",
  },
];

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<template>
  <form class="form" @submit="onSubmit">
    <div class="wrapper-input" v-for="input in fieldsForm" :key="input.name">
      <label :for="input.name">{{ input.label }}</label>

      <!-- <Field type="text" :name="input.name" :id="input.name" class="input" /> -->
      <Field v-slot="{ field }" :name="input.name">
        <textarea v-bind="field" :id="input.name" class="input" />
      </Field>

      <ErrorMessage :name="input.name" class="p-error-1" />
    </div>

    <div class="group-btn">
      <button class="btn" @click="emit('cancel')">Отменить</button>
      <button type="submit" class="btn btn-save">Сохранить</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wrapper-input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input {
  border: 2px solid transparent;

  &[name="title"] {
    height: 40px;
  }

  &[name="briefDescription"] {
    height: 50px;
  }

  &[name="fullDescription"] {
    height: 95px;
  }

  &:focus {
    border-color: $secondColor;
  }
}

.group-btn {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn {
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 8px;

  background-color: transparent;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    border-color: #ffffff;
  }
}

.btn-save {
  background-color: $secondColor;
}
</style>
