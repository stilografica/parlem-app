<script setup>
import customerCover from "@/assets/images/customers_cover.png";
import { computed } from "vue";
const props = defineProps({
  customer: Object,
});
const coverImage = computed(() => {
  return customerCover;
});
</script>
<template>
  <v-card class="card-container">
    <v-img class="align-end text-white" height="200" :src="coverImage" cover />
    <v-card-item>
      <span class="d-flex flex-wrap align-center justify-space-between mt-2 mb-5">
        <h2>{{ customer.givenName }} {{ customer.familyName1 }}</h2>
        <v-chip :color="customer.customerType === 'Enterprise' ? 'primary' : 'success'">
          <v-icon start icon="mdi-account-circle-outline"></v-icon>
          {{ customer.customerType }}
        </v-chip>
      </span>
      <div class="d-flex flex-wrap justify-space-between align-start">
        <div>
          <h4 class="ml-1">{{ customer.customerId }}</h4>
          <v-card-subtitle class="text-uppercase font-weight-black">Customer Id</v-card-subtitle>
        </div>
        <div>
          <h4 class="font-size-15">{{ customer.billedMonth }}€</h4>
          <v-card-subtitle class="text-uppercase font-weight-black">Billed/month</v-card-subtitle>
        </div>
      </div>
    </v-card-item>
    <v-card-item class="bg-grey-lighten-4 rounded-lg mt-3">
      <h3 class="pt-3">Personal information</h3>
      <v-divider class="mb-5 mt-2"></v-divider>
      <div class="d-flex flex-wrap justify-space-between px-3 pb-3">
      <span>
        <h4 class="font-size-15">{{ customer.docNum }}</h4>
          <v-card-subtitle class="text-uppercase font-weight-black">{{ customer.docType }}</v-card-subtitle>
        </span>
        <span>
          <h4 class="font-size-15">{{ customer.email }}</h4>
          <v-card-subtitle class="text-uppercase font-weight-black">Email</v-card-subtitle>
        </span>
        <span>
        <h4 class="font-size-15">{{ customer.phone }}</h4>
        <v-card-subtitle class="text-uppercase font-weight-black">Phone</v-card-subtitle>
      </span>
    </div>
    </v-card-item>
  </v-card>
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