<script setup>
import { computed } from 'vue'
import Logo from '@/assets/images/parlem_logo.svg'
import NavbarItem from '@/components/navbar/NavbarItem.vue'
import { menuItems } from '@/constants/menu-constants'
import { useMobile } from '@/composables/mobile'
import { useRouter } from 'vue-router'

const router = useRouter()

const { isSmall } = useMobile()

const brandLogo = computed(() => {
  return Logo
})
const homeLocation = () => {
  router.push('/')
}
</script>

<template>
  <v-navigation-drawer floating :rail="isSmall" class="my-10">
    <img :src="brandLogo" class="ml-10 mt-3 mb-4 brand" @click="homeLocation" />
    <v-list density="compact" nav :class="{ 'd-flex flex-space-between': isSmall }">
      <navbar-item v-for="(item, index) in menuItems" :key="index" :item="item" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.brand {
  cursor: pointer;
}
</style>
