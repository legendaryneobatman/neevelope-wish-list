<template>
  <SquareCard>
    <div class="flex flex-col items-center gap-2">
      <div class="flex gap-1">
        <VBtn @click="getOneUser('1')">Get user with id = 1</VBtn>
        <div class="flex flex-col gap-2">
          <VBtn @click="getOneUser(userId)">Get one by id</VBtn>
          <VTextField v-model="userId" class="text-black"/>
        </div>
      </div>
      {{ oneUser || 'nothing yet' }}
    </div>
  </SquareCard>
</template>
<script setup lang="ts">
import {useNuxtApp} from "#app";
import type {UsersResponse} from '~/shared/model';
import SquareCard from '~/shared/ui/components/SquareCard.vue';

const {$client, $notifications} = useNuxtApp();

const userId = ref<string>('0');
const oneUser = ref<UsersResponse | null>(null)
const getOneUser = async (id: string) => {
  if (!userId.value) {
    return
  }
  const result = await $client.users.getOne.query({id: +id})

  if (result) {
    oneUser.value = result
    $notifications.success({
      text: 'User fetched successfully',
    })
  }
}
</script>
