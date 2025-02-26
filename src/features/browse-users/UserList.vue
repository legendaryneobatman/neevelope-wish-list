<template>
  <SquareCard>
    <VBtn @click="getUsers">{{ users.length ? 'Clear all users' : 'Get all users' }}</VBtn>
    <VList density="compact" class="border-y-green-50 max-h-screen overflow-y-auto">
      <VListItem v-for="user in users" :key="user.id" variant="plain" class="first:mt-0 mt-1">
        {{ user.id }} - {{ user.firstName }}
      </VListItem>
    </VList>
  </SquareCard>
</template>

<script lang="ts" setup>
import type { UsersResponse } from '~/shared/model';
import { useNuxtApp } from '#app';
import SquareCard from '~/shared/ui/components/SquareCard.vue';

const { $client, $notifications } = useNuxtApp();

const users = ref<UsersResponse[]>([]);
const fetchUsers = async () => {
  const result = await $client.users.getMany.query();

  if (result) {
    users.value = result;
    $notifications.success({
      text: 'Users fetched successfully',
    });
  }
};
const clearUsers = () => {
  if (users.value.length) {
    users.value = [];
    return;
  }
};
const getUsers = computed(() => {
  return users.value.length ? clearUsers : fetchUsers;
});
</script>
