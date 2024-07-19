<template>
  <div>
    {{user}}
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp()

const hello = await $client.hello.useQuery({ text: 'client' })
const user = await $client.user.getUsers.useQuery()
console.log(user)
</script>
