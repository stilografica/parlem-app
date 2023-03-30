<script setup>
import { ref, computed } from 'vue'
import { menuItems } from '@/constants/menu-constants'
import Logo from '@/assets/images/parlem_logo.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const homeLocation = () => {
  router.push("/")
}
const drawer = ref(false)
const brandLogo = computed(() => {
  return Logo
})
</script>

<template>
  <v-app-bar color="grey-lighten-4">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <img :src="brandLogo" class="ml-3 brand" @click="homeLocation" />

    <v-spacer></v-spacer>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary class="pt-5 pl-5">
    <v-list v-for="(item, index) in menuItems" :key="index">
      <span @click="router.push({ name: item.route })">
        <v-icon start :icon="item.icon" /> {{ item.title }}
      </span>
    </v-list>
  </v-navigation-drawer>
</template>
