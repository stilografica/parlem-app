<script setup>
import { useRouter } from 'vue-router'

  const props = defineProps({
    items: Array,
  });

  const router = useRouter()
</script>
<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

  