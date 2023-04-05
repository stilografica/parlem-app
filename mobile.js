import { ref, onMounted, onUnmounted, watch } from 'vue'

export function useMobile() {
  const isSmall = ref(window.innerWidth < 1025)
  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize;
  })
  const handleResize = () => {
    isSmall.value = window.innerWidth < 1025
  }
  onUnmounted(() => window.removeEventListener('resize', handleResize))
  return { isSmall }
}
