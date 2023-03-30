<script setup>
import customerCover from "@/assets/images/customers_cover.jpg";
import { productsChips } from '@/utils/products-utils.js'
import { computed, onMounted } from "vue";

const props = defineProps({
  product: Object,
});
const coverImage = computed(() => {
  return customerCover
});
onMounted(() => {
  return productsChips
})
</script>
<template>
  <v-card class="product-card  pt-6 mt-5" width="374">
    <v-card-item>
      <span class="d-flex flex-wrap align-center mt-2 mb-5">
        <v-chip
          :color="productsChips(product.productTypeName).color"
          class="mr-3"
          label
        >
        <v-icon start :icon="productsChips(product.productTypeName).icon" class="pl-3" />
      </v-chip>
        <h2>{{ product.productName }}</h2>
      </span>
      <template class="d-flex flex-wrap align-center">
      <div>
          <h4 class="font-size-15 mr-10">{{ new Date(product.soldAt).toLocaleDateString() }}</h4>
          <v-card-subtitle class="text-uppercase font-weight-black font-weight-black">Sale date</v-card-subtitle>
        </div>
        <div v-if="product.numeracioTerminal">
          <h4 class="font-size-15">{{ product.numeracioTerminal }}</h4>
          <v-card-subtitle class="text-uppercase font-weight-black font-weight-black">Terminal number</v-card-subtitle>
        </div>
      </template>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.product-card {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 12px;
  padding: 18px;
  border: 1px solid #BDBDBD;
  box-shadow: none !important;
}
</style>
