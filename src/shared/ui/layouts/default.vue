<script lang="ts" setup>
const isOpen = ref<boolean>(false)
const toggleDrawer = () => (isOpen.value = !isOpen.value)
const route = useRoute()

const routeName = computed(() => route?.meta.name || 'Unnamed Page')
</script>

<template>
  <VResponsive>
    <VApp theme="dark">
      <VAppBar class="border-b-2 border-solid border-white">
        <VAppBarNavIcon
          variant="text"
          @click.stop="toggleDrawer"
        />

        <VToolbarTitle
          :text="routeName"
          class="text-h5"
        />

        <VSpacer />

        <template v-if="$vuetify.display.mdAndUp">
          <VBtn
            icon="mdi-magnify"
            variant="text"
          />

          <VBtn
            icon="mdi-filter"
            variant="text"
          />
        </template>

        <v-btn
          icon="mdi-dots-vertical"
          variant="text"
        />
      </VAppBar>

      <VNavigationDrawer v-model="isOpen">
        <VList>
          <VListItem title="Navigation drawer" />
        </VList>
      </VNavigationDrawer>

      <VMain>
        <VContainer>
          <slot />
        </VContainer>
      </VMain>
    </VApp>
  </VResponsive>
</template>

<style scoped></style>
