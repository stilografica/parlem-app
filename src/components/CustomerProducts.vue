<script setup>
import customerCover from "@/assets/images/customers_cover.jpg";
import { computed } from "vue";
import CustomerProductCard from '@/components/CustomerProductCard.vue'

const props = defineProps({
  customer: Object,
});
const coverImage = computed(() => {
  return customerCover;
});
</script>
<template>
  <v-card class="card-container px-12 pt-9 pb-10">
    <h2 class="mb-3">Products</h2>
    <div class="d-flex flex-wrap justify-space-between">
      <customer-product-card v-for="(product, index) in customer.products" :product="product" :key="index" />
    </div>
  </v-card>
</template>
<style scoped>
.card-container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 12px;
  padding: 18px;
  border: 1px solid
    hsla(207.6923076923deg, 16.049382716%, 15.8823529412%, 0.125);
  -webkit-filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1));
}
</style>