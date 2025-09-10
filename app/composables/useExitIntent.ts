// composables/useExitIntent.ts
import { ref, onMounted, onUnmounted } from 'vue'



export function useExitIntent() {
  const isShowing = ref(false)

  const handleMouseLeave = (e: MouseEvent) => {
    // If the modal is already showing, do nothing
    if (isShowing.value) {
      return
    }

    // Check localStorage to see if we've already shown it
    const hasBeenShown = localStorage.getItem('soda_exit_intent_shown')

    // Trigger if mouse is near the top of the viewport and it hasn't been shown
    if (e.clientY <= 15 && !hasBeenShown) {
      isShowing.value = true

      localStorage.setItem('soda_exit_intent_shown', 'true')
    }
  }

  // onMounted ensures this code only runs in the browser, never on the server
  onMounted(() => {
    document.addEventListener('mouseleave', handleMouseLeave)
  })

  // onUnmounted cleans up the event listener to prevent memory leaks
  onUnmounted(() => {
    document.removeEventListener('mouseleave', handleMouseLeave)
  })

  // The composable exposes the reactive state to any component that uses it
  return {
    isShowing
  }
}