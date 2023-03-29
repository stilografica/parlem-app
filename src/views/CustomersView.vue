<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import customersTable from '@/components/customersTable.vue'
import { useCustomersStore } from '@/stores/customers'
import { storeToRefs } from 'pinia'

const customersStore = useCustomersStore()
const { customersData } = storeToRefs(customersStore)
</script>

<template>
  <default-layout :has-items="customersData.length > 0">
    <h2 class="mb-5">Customers</h2>
    <customers-table :customers="customersData" />
  </default-layout>
</template>
