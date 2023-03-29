<script setup>
import { useMobile } from '@/composables/mobile'
import { toRefs } from 'vue'

const props = defineProps({
  item: Object,
});
const { item } = toRefs(props);

const { isSmall } = useMobile();
</script>
<template>
  <v-list-item
    :prepend-icon="item.icon"
    class="mb-3"
    :disabled="item.disabled"
    :active="item.active"
    :class="{ 'pl-8 list-item': !isSmall }"
    active-class="navbar-item-active"
    :to="{ name: item.route }">
    {{ item.title }}
    </v-list-item>
</template>
<style scoped>
.navbar-item-active {
  background-color: #fec23d;
  color: #000000 !important;
}
.list-item {
  border-radius: 1.2rem;
}
</style>
