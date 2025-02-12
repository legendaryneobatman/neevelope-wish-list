<script setup lang="ts">
import {useNuxtApp} from "#app";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import IndexUserForm from "~/pages/index/ui/index-user-form.vue";


const {$client} = useNuxtApp();
const users = $client.users.getMany.useQuery().data
const oneUser = $client.users.getOne.useQuery({id: 1}).data
const editUser = async (id: number, firstName: string) => {
  const result = await $client.users.edit.useMutation().mutate({
    id: id,
    firstName: firstName
  });
}
</script>

<template>
  <Card class="border-none w-screen h-screen rounded-none scroll-auto">
    <CardHeader class="bg-black text-white sticky top-0 flex flex-row px-4 justify-between items-center">
      Shop
      <div>
        <Avatar>
          <AvatarFallback>{{ 21 }}</AvatarFallback>
        </Avatar>
      </div>
    </CardHeader>
    <CardContent class="bg-gray-600 w-full h-full text-white flex flex-col items-center justify-center">
      <IndexUserForm @on-submit="editUser"/>
    </CardContent>
  </Card>
</template>

<style>
</style>
