<template>
  <div>
    <Button @click="getUsers">{{ users.length ? 'Clear all users' : 'Get all users' }}</Button>
    <div v-if="users" class="flex flex-col gap-2 max-h-64 overflow-y-auto">
      <div v-for="user in users" :key="user.id">
        {{ user }}
      </div>
    </div>
    <div v-else>
      no users
    </div>
  </div>
</template>
<script setup lang="ts">
import type {UsersResponse} from "~/shared";
import {useNuxtApp} from "#app";
import {useToast} from "~/components/ui/toast";

const {$client} = useNuxtApp();
const {toast} = useToast();

const users = ref<UsersResponse[]>([]);
const fetchUsers = async () => {
  const result = await $client.users.getMany.query()

  if (result) {
    users.value = result
    toast({
      title: 'Success',
      description: 'Users fetched successfully',
    })
  }
}
const clearUsers = () => {
  if (users.value.length) {
    users.value = [];
    return
  }
}
const getUsers = computed(() => {
  return users.value.length ? clearUsers : fetchUsers
})
</script>
