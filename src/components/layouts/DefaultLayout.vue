<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  hasItems: Boolean
})
const { hasItems } = toRefs(props);
</script>

<template>
  <main class="pa-10">
    <div v-if="hasItems" class="no-data-container">
      <slot />
    </div>
    <div v-else class="no-data-container d-flex flex-column justify-center">
      <v-icon icon="mdi-note-off-outline" size="x-large" color="grey-darken-1" class="d-block mx-auto mb-4" />
      <p class="text-center text-grey-darken-1">There is nothing yet</p>
    </div>
  </main>
</template>

<style scoped>
.no-data-container {
  border-radius: 1.2rem;
  min-height: 90vh;
  background-color: #f5f6f9;
  padding: 4rem;
}
</style>
