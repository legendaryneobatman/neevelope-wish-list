<template>
  <VCol
    class="w-col"
    v-bind="$attrs"
  >
    <slot />
  </VCol>
</template>

<style scoped>
.w-col {
  @apply p-1;
}
</style>
