<!-- components/HowSodaWorks.vue -->
<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto px-4">

      <!-- Section Title -->
      <div class="text-center">
        <h2 class="text-4xl font-bold">How SODA works</h2>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-x-12 gap-y-12 mt-16">
        <div
          v-for="point in points"
          :key="point.title"
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <UIcon :name="point.icon" class="text-primary " size="20" />
          <h3 class="text-xl font-bold mt-5">{{ point.title }}</h3>
          <p class="mt-2 text-gray-400">{{ point.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  {
    icon: 'i-heroicons-device-phone-mobile',
    title: 'Simply redeem deals.',
    description: 'Simply open the app, select an offer, and show the deal on-site. No subscription, registration, or voucher required. You only pay a small service fee per redeemed deal—often just one or two euros. Fast, easy, and fair.'
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'More guests for the catering industry.',
    description: 'With SODA, restaurants can fill even slower times—without the need for a discount war. The app brings new guests specifically to quieter times. This way, both sides benefit: users save, and restaurateurs gain. A true win-win situation.'
  },
  {
    icon: 'i-heroicons-check-badge',
    title: 'No subscription. No obligation.',
    description: 'SODA is the fair alternative to traditional discount models. No subscription or coupon book are required. You only pay when you actually use a deal—transparent and risk-free. If you go out more often, you can even skip the service fee entirely with SODA Premium.'
  }
]
</script>