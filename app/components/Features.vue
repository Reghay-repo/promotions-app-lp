<!-- components/Features.vue -->
<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto px-4 text-center flex flex-col items-center">

      <!-- Top Badge -->
      <UBadge variant="solid" size="lg">
        <UIcon name="i-heroicons-sparkles-solid" class="mr-2" />
        Restaurant Discovery App
      </UBadge>

      <!-- Main Headline -->
      <h2 class="text-5xl md:text-6xl font-bold uppercase tracking-tighter mt-6">
        The App That
        <br>
        Invites You Out.
      </h2>

      <!-- Description -->
      <p class="mt-6 max-w-2xl text-lg text-gray-300">
        With SODA, you get exclusive access to deals at the best restaurants, bars, and cafes in your city. Discover new places without breaking the bank. All deals are ready to be used instantly—no sign-up required.
      </p>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-20 w-full">
        <div v-for="feature in features" :key="feature.title" class="flex flex-col items-center">
          <UIcon :name="feature.icon" size="20" class="text-primary " />
          <h3 class="text-xl font-bold mt-5">{{ feature.title }}</h3>
          <p class="mt-2 text-gray-400 max-w-xs">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Array to hold the feature data for clean rendering
const features = [
  {
    icon: 'i-heroicons-fire-solid',
    title: 'Over 300+ deals in your city',
    description: 'Find amazing offers at cafes, bars, and restaurants—from 2-for-1 cocktails to 50% off your meal.'
  },
  {
    icon: 'i-heroicons-no-symbol-solid',
    title: 'No subscription, no registration!',
    description: 'Every deal is available immediately. No sign-up needed. Just open the app, choose a deal, save, and enjoy.'
  },
  {
    icon: 'i-heroicons-map-pin-solid',
    title: 'Local & Independent',
    description: 'SODA champions local businesses. Discover your next favorite spot and help your city’s food scene thrive.'
  }
]
</script>