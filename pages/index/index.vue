<script setup lang="ts">
import IndexUserList from "~/pages/index/ui/IndexUserList.vue";
import IndexUserForm from "~/pages/index/ui/IndexUserForm.vue";
import IndexUserItem from "~/pages/index/ui/IndexUserItem.vue";
</script>

<template>
  <div>
    <div class="flex gap-4">
      <IndexUserList/>
      <IndexUserItem/>
      <IndexUserForm/>
    </div>
  </div>
</template>

