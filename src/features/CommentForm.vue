<script setup lang="ts">
import { useForm, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { COMMENT_CREATE_SCHEMA } from "@/shared/types/schemas";

const props = defineProps<{
  idPost: number;
}>();

const emit = defineEmits(["submit", "cancel"]);

const validationSchema = toTypedSchema(COMMENT_CREATE_SCHEMA);

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    id: new Date().getTime() + Math.floor(Math.random() * 1000),
    idPost: props.idPost,
    dateTime: new Date().toISOString(),
  },
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<template>
  <form class="form" @submit="onSubmit">
    <div class="group-input">
      <div class="wrapper-input">
        <label for="userInfo">Имя</label>

        <Field type="text" name="userInfo" id="userInfo" class="input" />

        <ErrorMessage name="userInfo" class="p-error-2" />
      </div>

      <div class="wrapper-input">
        <label for="email">Email</label>

        <Field type="email" name="email" id="email" class="input" />

        <ErrorMessage name="email" class="p-error-2" />
      </div>
    </div>

    <div class="wrapper-input">
      <Field v-slot="{ field }" name="textComment">
        <textarea
          v-bind="field"
          class="input"
          placeholder="Написать комментарий"
        />
      </Field>

      <ErrorMessage name="textComment" class="p-error-2" />
    </div>

    <button type="submit" class="btn">Отправить</button>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.group-input {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.wrapper-input {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-grow: 1;
}

.input {
  border: 1px solid $neutralColor-300;

  &[name="textComment"] {
    height: 95px;
  }

  &:focus {
    border-color: $primaryColor;
  }
}

.btn {
  float: right;

  padding: 8px;
  border: 1px solid transparent;
  border-radius: 8px;

  background-color: $primaryColor;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    border-color: #ffffff;
  }
}
</style>
