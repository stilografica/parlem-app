<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import Logo from '@/assets/images/parlem_logo.svg'
import { useRouter } from 'vue-router';

const router = useRouter();

const isSmall = ref(false)

const brandLogo = computed(() => {
  return Logo;
})
onMounted(async () => {
  window.addEventListener('resize', handleResize);
  handleResize;
})

const handleResize = () => {
  isSmall.value = window.innerWidth < 1025;
}
onUnmounted(() => window.removeEventListener('resize', handleResize))

const homeLocation = () => {
  router.push('/')
}
</script>

<template>
  <v-navigation-drawer floating permanent :rail="isSmall" class="my-10">
    <img :src="brandLogo" class="ml-10 mt-3 mb-4 d-none d-lg-block brand" @click="homeLocation" />

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard-outline" value="archived" class="mb-3" disabled
        :class="{ 'pl-8 list-item': !isSmall }" :style="!isSmall ? 'border-radius: 1.2rem' : ''">Dashboard</v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" value="inbox" active-class="navbar-item-active"
        class="text-black mb-3" active :class="{ 'pl-8 list-item': !isSmall }"
        :style="!isSmall ? 'border-radius: 1.2rem' : ''" :to="{ name: 'customers' }">Customers</v-list-item>
      <v-list-item prepend-icon="mdi-tag-outline" value="archived" :class="{ 'pl-8 list-item': !isSmall }" disabled
        :style="!isSmall ? 'border-radius: 1.2rem' : ''">Products</v-list-item>
      <v-list-item prepend-icon="mdi-calendar-month" value="archived" :class="{ 'pl-8 list-item': !isSmall }" disabled
        :style="!isSmall ? 'border-radius: 1.2rem' : ''">Calendar</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.navbar-item-active {
  background-color: #FEC23D;
  color: #000000 !important;
}

.brand {
  cursor: pointer;
}
</style>
