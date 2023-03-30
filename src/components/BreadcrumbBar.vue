<script setup>
import { useRouter } from 'vue-router'
import { useMobile } from '@/composables/mobile'

  const props = defineProps({
    items: Array,
  });

  const router = useRouter()
  const { isSmall } = useMobile();
</script>
<template>
  <v-breadcrumbs :items="items" :class="{ 'text-caption' : isSmall }">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

  