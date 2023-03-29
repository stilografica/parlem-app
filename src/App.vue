<template>
  <suspense>
  <template #default>
    <v-layout>
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
