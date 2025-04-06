<script setup lang="ts"></script>

<template>
  <VBtn
    v-bind="$attrs"
    variant="flat"
    :rounded="false"
    class="border border-solid border-white"
  >
    <slot />
  </VBtn>
</template>

<style scoped></style>
