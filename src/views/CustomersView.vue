<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import { onMounted, ref } from 'vue'
import { useCustomersStore } from '@/stores/customers'
import { storeToRefs } from 'pinia'

const customersStore = useCustomersStore()

const { customersData } = storeToRefs(customersStore);


</script>

<template>
  <default-layout :has-items="customersData.length > 0">
{{ customersData }}
  </default-layout>
</template>
