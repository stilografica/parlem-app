<script setup>
import { toRefs, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  customers: Array,
});
const { customers } = toRefs(props)

const fullName = (customer) => {
  return `${customer.givenName} ${customer.familyName1}`
}
const customerDetailLocation = (id) => {
  return router.push({ name: 'customer-detail', params: { id: id}})
}
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
        <h3>Full Name</h3>
        </th>
        <th class="text-left">
          <h3>Document Number</h3>
        </th>
        <th class="text-left">
          <h3>Phone</h3>
        </th>
        <th class="text-left">
          <h3>Email</h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="customer in customers"
        :key="customer.id"
        class="customer-row"
        @click="customerDetailLocation(customer.id)"
      >
        <td><h3>{{ fullName(customer) }}</h3></td>
        <td>{{ customer.docNum }}</td>
        <td>{{ customer.phone }}</td>
        <td>{{ customer.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<style scoped>
.customer-row {
  cursor: pointer;
}
</style>