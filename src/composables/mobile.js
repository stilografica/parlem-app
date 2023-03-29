import { ref, onMounted, onUnmounted } from 'vue'

export function useMobile() {
  const isSmall = ref(false)
  onMounted(async () => {
    window.addEventListener('resize', handleResize)
    handleResize;
  })
  const handleResize = () => {
    isSmall.value = window.innerWidth < 1025
  }
  onUnmounted(() => window.removeEventListener('resize', handleResize))
  return { isSmall }
}