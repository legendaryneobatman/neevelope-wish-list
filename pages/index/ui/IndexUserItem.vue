<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex gap-1">
      <Button @click="getOneUser('1')">Get user with id = 1</Button>
      <div class="flex flex-col gap-2">
        <Button @click="getOneUser(userId)">Get one by id</Button>
        <Input v-model="userId" class="text-black"/>
      </div>
    </div>
    {{ oneUser || 'nothing yet' }}
  </div>
</template>
<script setup lang="ts">
import type {UsersResponse} from "~/shared";
import {useNuxtApp} from "#app";
import {useToast} from "~/components/ui/toast";

const {$client} = useNuxtApp();
const {toast} = useToast();

const userId = ref<string>('0');
const oneUser = ref<UsersResponse | null>(null)
const getOneUser = async (id: string) => {
  if (!userId.value) {
    return
  }
  const result = await $client.users.getOne.query({id: +id})

  if (result) {
    oneUser.value = result
    toast({
      title: 'Success',
      description: 'User fetched successfully',
    })
  }
}
</script>
