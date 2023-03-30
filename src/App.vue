<script setup>
import { onMounted } from 'vue'
import VerticalNavbar from '@/components/navbar/VerticalNavbar.vue'
import HorizontalNavbar from '@/components/navbar/HorizontalNavbar.vue'
import { useCustomersStore } from '@/stores/customers'
import { useMobile } from '@/composables/mobile'

const customersStore = useCustomersStore()
const { isSmall } = useMobile()

onMounted(async() => {
  await customersStore.getCustomers()
})
</script>
<template>
  <suspense>
    <template #default>
      <v-layout>
        <horizontal-navbar v-if="isSmall" />
        <vertical-navbar v-else />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
    </template>
    <template #fallback>
      Loading...
    </template>
  </suspense>
</template>
