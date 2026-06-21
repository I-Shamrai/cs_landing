<template>
  <v-container
    ref="mainContainer"
    class="mainContainer w-100 boundlessWidth pa-0 ma-0 d-flex flex-column"
  >
    <v-container

      class="mainContent position-relative pa-0 flex-grow-1"
    >
      <slot />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { VContainer } from 'vuetify/components';

const mainContainer = ref<InstanceType<typeof VContainer> | null>(null);
const route = useRoute();
watch(() => route.path, () => {
  if (mainContainer.value) { // scroll to top of the page
    setTimeout(() => {
      mainContainer.value?.$el?.scrollTo(0, 0);
    }, 300);
  }
});
</script>

<style>

</style>
