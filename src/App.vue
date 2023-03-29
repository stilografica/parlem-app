<script setup>
import VerticalNavbar from '@/components/VerticalNavbar.vue';
</script>
<template>
  <suspense>
  <template #default>
    <v-layout>
      <vertical-navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
	</template>
	<template #fallback>
		Loading...
  </template>
</suspense>
</template>
