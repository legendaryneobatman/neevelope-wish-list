<script lang="ts" setup>
import UserForm, { type Form } from '~/features/edit-users/UserForm.vue'
import WCol from '~/shared/ui/components/WCol.vue'
import WCard from '~/shared/ui/components/WCard.vue'
import UserList from '~/features/user-list/UserList.vue'
import UserBrowser from '~/features/user-list/UserBrowser.vue'

const { $client } = useNuxtApp()

const editUser = async (form: Form) => {
  return await $client.users.edit.useMutation().mutate({
    id: form.id,
    username: form.username,
  })
}
</script>

<template>
  <VRow>
    <WCol>
      <WCard>
        <h2 class="text-h6">
          User Control
        </h2>
      </WCard>
    </WCol>
  </VRow>
  <VRow>
    <WCol cols="5">
      <UserList />
    </WCol>
    <WCol>
      <UserBrowser />
    </WCol>
    <WCol>
      <WCard>
        <UserForm @on-filter="editUser" />
      </WCard>
    </WCol>
  </VRow>
</template>

<style scoped></style>
