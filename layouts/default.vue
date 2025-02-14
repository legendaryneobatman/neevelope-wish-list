<script setup lang="ts">

import {Avatar, AvatarFallback} from "~/components/ui/avatar";
import {Toaster} from "~/components/ui/toast";
</script>

<template>
  <Card class="border-none rounded-none h-full">
    <CardHeader class="bg-black text-white fixed w-full top-0 flex flex-row px-4 justify-between items-center">
      Shop
      <div>
        <Avatar>
          <AvatarFallback>{{ 21 }}</AvatarFallback>
        </Avatar>
      </div>
    </CardHeader>
    <CardContent
        class="bg-gray-600 h-full min-h-screen text-white flex flex-col items-center justify-center px-8 py-24">
      <slot/>
    </CardContent>
    <Toaster />
  </Card>
</template>

<style scoped>

</style>
