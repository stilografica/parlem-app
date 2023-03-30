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
    <v-card class="card-container px-10">
    <h2 class="mt-3">Customers</h2>
    <customers-table :customers="customersData" />
  </v-card>
  </default-layout>
</template>
<style scoped>
.card-container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 12px;
  padding: 25px;
  border: 1px solid
    hsla(207.6923076923deg, 16.049382716%, 15.8823529412%, 0.125);
  -webkit-filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
}
</style>