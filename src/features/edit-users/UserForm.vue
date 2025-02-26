<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { useNuxtApp } from '#app';
import SquareCard from '~/shared/ui/components/SquareCard.vue';

const { $client } = useNuxtApp();

const validationSchema = toTypedSchema(
  z.object({
    id: z.number().min(0),
    firstName: z.string().min(2).max(50),
  })
);

const form = useForm({ validationSchema });
const [id, idProps] = form.defineField('id');
const [firstName, firstNameProps] = form.defineField('firstName');

const onSubmit = async () => {
  const { valid, values } = await form.validate();

  if (valid && values?.id !== undefined && values?.firstName !== undefined) {
    await editUser(values?.id, values?.firstName);
  }
};

const editUser = async (id: number, firstName: string) => {
  return await $client.users.edit.useMutation().mutate({
    id: id,
    firstName: firstName,
  });
};
</script>

<template>
  <SquareCard>
    <VForm @submit.prevent="onSubmit">
      <VTextField v-model="id" v-bind="idProps" placeholder="enter user id" label="User id" />
      <VTextField
        v-model="firstName"
        v-bind="firstNameProps"
        label="Firstname"
        placeholder="enter first Name"
      />
      <VBtn>Submit</VBtn>
    </VForm>
  </SquareCard>
</template>
