<template>
  <WCard>
    <VRow>
      <WCol>
        <UserForm @on-filter="deleteItem" />
      </WCol>
      <WCol>
        <WBtn @click="getUsers">
          {{ users.length ? 'Clear all users' : 'Get all users' }}
        </WBtn>
      </WCol>
    </VRow>
    <VDivider class="my-4" />
    <VDataTable
      no-data-text="No users, press button"
      :headers="headers"
      :hide-default-footer="isUsersEmpty"
      :items="users"
    >
      <template #[`item.actions`]="{ item }">
        <VIcon
          v-tooltip="'Edit item'"
          class="me-2"
          size="20"
          icon="mdi-pencil"
          @click="editItem(item)"
        />
        <VIcon
          v-tooltip="'Delete item'"
          size="20"
          icon="mdi-delete"
          @click="deleteItem(item)"
        />
      </template>
    </VDataTable>
  </WCard>
</template>

<script lang="ts" setup>
import type { VDataTable } from 'vuetify/components'
import type { UsersResponse } from '~/shared/model'
import { useNuxtApp } from '#app'
import WCard from '~/shared/ui/components/WCard.vue'
import WCol from '~/shared/ui/components/WCol.vue'
import WBtn from '~/shared/ui/components/WBtn.vue'
import UserForm, { type Form } from '~/features/edit-users/UserForm.vue'

const { $client, $notifications } = useNuxtApp()

const emit = defineEmits<{
  (e: 'on-edit', value: Form): void
}>()

const users = ref<UsersResponse[]>([])
const isUsersEmpty = computed(() => !users.value.length)

const headers = [
  { title: 'Identifier', key: 'id' },
  { title: 'Username', key: 'username' },
  { title: 'When created', key: 'createdAt' },
  { title: 'When last updated', key: 'updatedAt' },
  { title: '', key: 'actions', sortable: false },
]

const fetchUsers = async () => {
  const result = await $client.users.getMany.query()

  if (result) {
    users.value = result
    $notifications.success({
      text: 'Users fetched successfully',
    })
  }
}
const clearUsers = () => {
  if (users.value.length) {
    users.value = []
    return
  }
}
const getUsers = computed(() => {
  return users.value.length ? clearUsers : fetchUsers
})

const editItem = (item: Form) => {
  emit('on-edit', item)
}

const deleteItem = async (item: Form) => {
  await $client.users.remove.useMutation().mutate({
    id: item.id,
  })
  await fetchUsers()
}

fetchUsers()
</script>
