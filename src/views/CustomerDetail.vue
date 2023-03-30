<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import CustomerDetailsCard from '@/components/CustomerDetailsCard.vue'
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'
import CustomerProducts from '@/components/CustomerProducts.vue'
import { useCustomersStore } from '@/stores/customers'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  customer: Object,
});
const customersStore = useCustomersStore()
const router = useRoute()
const customer = computed(() => customersStore.getCustomer(router.params.id))

const breadcrumbItems = ref([
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Customers',
    href: '/' // When the application grows this route will be /customers and we will have home
  },
  {
    title: 'Customer detail',
  },
])
</script>
<template>
  <default-layout :has-items="true">
    <breadcrumb-bar :items="breadcrumbItems"/>
    <v-row>
      <v-col cols="12" lg="5">
      <customer-details-card :customer="customer" />
    </v-col>
    <v-col cols="12" lg="7">
      <customer-products :customer="customer" />
    </v-col>
  </v-row>
  </default-layout>
</template>

<style scoped>

</style>