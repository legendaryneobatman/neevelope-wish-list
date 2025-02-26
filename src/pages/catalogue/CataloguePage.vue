<script setup lang="ts">
const {$client} = useNuxtApp();

const categories = $client.catalogue.categories.getMany.useQuery();
</script>

<template>
<div>
  {{JSON.stringify(categories.data.value, null, 2)}}
</div>
</template>

<style scoped>

</style>
