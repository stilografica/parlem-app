<script setup>
import { onMounted } from 'vue'
import VerticalNavbar from '@/components/navbar/VerticalNavbar.vue'
import { useCustomersStore } from '@/stores/customers'

const customersStore = useCustomersStore()

onMounted(async() => {
  await customersStore.getCustomers()
})
</script>
<template>
  <suspense>
  <template #default>
    <v-layout>
      <vertical-navbar />
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
