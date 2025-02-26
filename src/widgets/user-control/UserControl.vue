<script setup lang="ts">
import UserBrowser from '~/features/browse-users/UserBrowser.vue';
import UserForm from '~/features/edit-users/UserForm.vue';
import UserList from '~/features/browse-users/UserList.vue';
</script>

<template>
  <VRow>
    <VCol>
      <UserList />
    </VCol>
    <VCol>
      <UserBrowser />
    </VCol>
    <VCol>
      <UserForm />
    </VCol>
  </VRow>
</template>

<style scoped></style>
