<!-- components/ScrollTriggerModal.vue -->
<template>
  <UModal
    v-model="isOpen"
    prevent-close
    :ui="{
      container: 'flex min-h-full items-center justify-center text-center',
      overlay: { background: 'bg-black/75' },
      base: 'relative text-left overflow-hidden w-full max-w-lg bg-[#24263a] rounded-xl shadow-xl',
      ring: '',
      divide: ''
    }"
  >
   <template #content>
      <!-- By placing content directly here, we use the default slot for full control -->
    <div class="relative p-8 text-center text-white">
      <!-- Custom Close Button -->
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-x-mark-20-solid"
        class="absolute top-4 right-4"
        @click="isOpen = false"
      />

      <h3 class="text-3xl font-bold tracking-tight text-soda-green">
        Wait! Don’t Go!
      </h3>
      <p class="mt-2 text-gray-300">
        Get a free launch-day deal by joining our exclusive Founders Club. It's free!
      </p>

      <!-- Signup Form -->
      <form @submit.prevent="handleSubmit" class="mt-6">
        <UInput
          v-model="email"
          color="white"
          variant="outline"
          size="lg"
          type="email"
          placeholder="your@email.com"
          required
          icon="i-heroicons-envelope"
          :ui="{ icon: { color: 'text-gray-400' } }"
        />
        <UButton
          type="submit"
          label="Claim My Deal"
          color="soda-green"
          size="lg"
          block
          class="mt-3"
        />
      </form>
    </div>
   </template>
  </UModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// This setup allows the component to be controlled by v-model from its parent
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const email = ref('')

const handleSubmit = () => {
  if (!email.value) return;
  console.log('Scroll-Trigger Email Submitted:', email.value);
  alert('Thanks! Your deal is locked in!');
  isOpen.value = false; // Close the modal
}
</script>