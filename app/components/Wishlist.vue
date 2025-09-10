<!-- components/Wishlist.vue -->
<template>
  <section class="bg-black py-24">
    <div class="container mx-auto px-4">
      <!-- Main container with relative positioning for the glow effect -->
      <div class="relative rounded-3xl overflow-hidden">

        <!-- 1. Background Image (The new bottom layer) -->
        <NuxtImg
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974"
            alt="A vibrant restaurant atmosphere"
            class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- 2. Background Gradient (Darkens the image and adds color) -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-primary/60"></div>

        <!-- 3. Background Glow Effect -->
        <div
            class="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl opacity-50"></div>

        <!-- 4. Content (The top layer) -->
        <div class="relative flex flex-col items-center text-center text-white p-12 md:p-20">
          <UIcon name="i-heroicons-star-solid" class="h-12 w-12 text-primary"/>
          <h2 class="text-5xl md:text-6xl font-extrabold tracking-tighter mt-4">
            Get a Free Deal on Launch Day.
          </h2>
          <p class="mt-4 max-w-xl text-lg text-gray-300">
            Join the exclusive SODA Founders Club. Enter your email to lock in a
            <span class="text-primary font-bold">free 2-for-1 meal deal</span>
            that will be waiting for you on launch day. Be the first, and eat for free.
          </p>

          <!-- Prominent Email Form -->
          <form @submit.prevent="handleWishlistSubmit" class="mt-10 w-full max-w-lg">
            <div
                class="flex flex-col sm:flex-row items-center gap-3 bg-black/20 backdrop-blur-sm p-2 rounded-xl border border-white/10">
              <UInput
                  v-model="email"
                  icon="i-heroicons-envelope"
                  size="xl"
                  placeholder="Enter your email to get notified"
                  required
                  class="flex-grow"

              />
              <UButton
                  type="submit"
                  label="Join Wishlist"
                  color="primary"
                  size="xl"
                  class="w-full sm:w-auto flex-shrink-0"
              />
            </div>
            <p v-if="submitted" class="mt-3 text-sm text-green-400">
              Awesome! You're on the list. We'll be in touch!
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const email = ref('')
const submitted = ref(false)

const handleWishlistSubmit = () => {
  if (!email.value) return;
  console.log(`New wishlist submission: ${email.value}`);
  // ** TODO: Add your actual API call here to send the email to your service **

  submitted.value = true
  email.value = '' // Clear the input after successful submission

  // Optional: Reset the success message after a few seconds
  setTimeout(() => {
    submitted.value = false
  }, 5000);
}
</script>