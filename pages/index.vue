<script setup lang="ts">

const { $client } = useNuxtApp()

const hello = await $client.hello.useQuery({ text: 'client' })
const users = await $client.user.getUsers.useQuery()
</script>

<template>
  <div>
    <div v-for="user in users.data.value" :key="user.id">{{user.name}}</div>
    {{hello.data.value}}
  </div>
</template>
