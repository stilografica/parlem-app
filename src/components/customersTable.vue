<script setup>
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMobile } from '@/composables/mobile'

const router = useRouter();
const props = defineProps({
  customers: Array,
});
const { customers } = toRefs(props);

const fullName = (customer) => {
  return `${customer.givenName} ${customer.familyName1}`;
};
const customerDetailLocation = (id) => {
  return router.push({ name: "customer-detail", params: { id: id } });
};
const { isSmall } = useMobile();
</script>
<template>
  <v-table class="mt-5">
    <thead>
      <tr>
        <th class="text-left">
          <h3>Full Name</h3>
        </th>
        <th v-if="!isSmall" class="text-left">
          <h3>Document Number</h3>
        </th>
        <th v-if="!isSmall" class="text-left">
          <h3>Phone</h3>
        </th>
        <th v-if="!isSmall" class="text-left">
          <h3>Email</h3>
        </th>
        <th class="text-left">
          <h3>Actions</h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers" :key="customer.id">
        <td>
          <h3>{{ fullName(customer) }}</h3>
        </td>
        <td v-if="!isSmall">{{ customer.docNum }}</td>
        <td v-if="!isSmall">{{ customer.phone }}</td>
        <td v-if="!isSmall">{{ customer.email }}</td>
        <td>
          <v-icon
            icon="mdi-eye-arrow-right-outline"
            class="ml-5 customer-view-icon"
            color="yellow-darken-3"
            @click="customerDetailLocation(customer.id)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<style scoped>
.customer-view-icon {
  cursor: pointer;
}
</style>
