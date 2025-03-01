<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import WBtn from '~/shared/ui/components/WBtn.vue'

export interface Form {
  id: number
  username: string
}

const emit = defineEmits<{
  (e: 'on-filter', value: Form): void
}>()

const validationSchema = toTypedSchema(
  z
    .object({
      id: z.number().min(0),
      username: z.string().min(0).max(255),
    }),
)

const form = useForm({ validationSchema })
const id = useField('id')
const username = useField('username')

const onSubmit = form.handleSubmit((submitted) => {
  emit('on-filter', submitted)
})
</script>

<template>
  <VForm @submit="onSubmit">
    <VTextField
      v-model.lazy.number="id.value.value"
      :error-messages="id.errorMessage.value"
      type="number"
      hide-spin-buttons
      placeholder="enter user id"
      label="User id"
    />
    <VTextField
      v-model.lazy="username.value.value"
      :error-messages="username.errorMessage.value"
      placeholder="enter username"
      label="username"
    />
    <WBtn
      class="mt-2"
      type="submit"
    >
      Apply filters
    </WBtn>
  </VForm>
</template>

<style scoped>

</style>
