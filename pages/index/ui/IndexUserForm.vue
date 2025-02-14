<script setup lang="ts">
import {useForm} from 'vee-validate'
import {toTypedSchema} from '@vee-validate/zod'
import * as z from 'zod'

import {Button} from '@/components/ui/button'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

import {useNuxtApp} from "#app";

const {$client} = useNuxtApp();

const formSchema = toTypedSchema(z.object({
  id: z.number().min(0),
  firstName: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = async () => {
  const {valid, values} = await form.validate();

  if (valid && values?.id !== undefined && values?.firstName !== undefined) {
    editUser(values?.id, values?.firstName)
  }
}

const editUser = async (id: number, firstName: string) => {
  return await $client.users.edit.useMutation().mutate({
    id: id,
    firstName: firstName
  })
}
</script>

<template>
  <Card>
    <CardHeader>Edit user</CardHeader>
    <CardContent>
      <form @submit.prevent>
        <div class="flex gap-4">
          <FormField v-slot="{ componentField }" name="id">
            <FormItem class="flex flex-col gap-2">
              <FormLabel>Id</FormLabel>
              <FormControl>
                <Input type="number" placeholder="user id" v-bind="componentField"/>
              </FormControl>
              <FormDescription>
                Id of user to edit
              </FormDescription>
              <FormMessage/>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="firstName">
            <FormItem class="flex flex-col gap-2">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="new username" v-bind="componentField"/>
              </FormControl>
              <FormDescription>
                New firstName
              </FormDescription>
              <FormMessage/>
            </FormItem>
          </FormField>
        </div>
        <Button class="mt-4 w-full" @click="onSubmit">
          Submit
        </Button>
      </form>
    </CardContent>
  </Card>
</template>
