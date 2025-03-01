<template>
  <WCard>
    <VRow>
      <WCol>
        <WBtn @click="getOneUser('1')">
          Get user with id = 1
        </WBtn>
      </WCol>
      <WCol>
        <WBtn @click="getOneUser(userId)">
          Get one by id
        </WBtn>
        <VTextField v-model="userId" />
      </WCol>
    </VRow>
    <VRow>
      <VDataTable
        :items="[oneUser]"
        hide-default-footer
      />
    </VRow>
  </WCard>
</template>

<script lang="ts" setup>
import { useNuxtApp } from '#app'
import type { UsersResponse } from '~/shared/model'
import WCard from '~/shared/ui/components/WCard.vue'
import WCol from '~/shared/ui/components/WCol.vue'
import WBtn from '~/shared/ui/components/WBtn.vue'

const { $client, $notifications } = useNuxtApp()

const userId = ref<string>('0')
const oneUser = ref<UsersResponse | null>(null)

const getOneUser = async (id: string) => {
  if (!userId.value) {
    return
  }
  const result = await $client.users.getOne.query({ id: +id })

  if (result) {
    oneUser.value = result
    $notifications.success({
      text: 'User fetched successfully',
    })
  }
}
</script>
