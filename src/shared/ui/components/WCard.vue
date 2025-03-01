<script setup lang="ts">
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
})
</script>

<template>
  <VCard
    :rounded="false"
    :title="title"
    class="border border-solid border-white bg-gray-50"
  >
    <VCardText>
      <slot />
    </VCardText>
  </VCard>
</template>

<style scoped></style>
