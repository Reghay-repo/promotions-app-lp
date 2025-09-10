<!-- components/Deals.vue -->
<template>
  <section id="restaurants" class="bg-black text-white py-24">
    <div class="container mx-auto px-4 flex flex-col items-center">

      <!-- Header Content -->
      <div class="text-center max-w-3xl">
        <h2 class="text-5xl md:text-6xl font-bold tracking-tighter">
          Discover deals. <br>
          <span class="text-primary">Redeem with the app.</span>
        </h2>
        <p class="mt-6 text-lg text-gray-300">
          Want to experience something more often without breaking the bank? SODA offers exclusive deals like 2-for-1 entrees, free drinks, or direct discounts. Discover over 100 of our restaurants here.
        </p>
      </div>

      <!-- Deals Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
        <div
          v-for="deal in deals"
          :key="deal.name"
          class="bg-[#1C1C1E] rounded-2xl overflow-hidden flex flex-col"
        >
          <NuxtImg :src="deal.image" :alt="`A photo of ${deal.name}`" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold">{{ deal.name }}</h3>
            <div class="flex items-center gap-2 mt-1 text-gray-400">
              <UIcon name="i-heroicons-map-pin" />
              <span>{{ deal.location }}</span>
            </div>

            <!-- Deal Banner -->
            <div class="bg-primary/20 text-primary-200 ring-1 ring-inset ring-primary/30 rounded-lg p-4 mt-4">
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-ticket" class="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 class="font-bold">{{ deal.dealTitle }}</h4>
                  <p class="text-sm">{{ deal.dealDescription }}</p>
                </div>
              </div>
            </div>

            <NuxtLink to="#" class="flex items-center gap-2 mt-auto pt-4 text-sm font-semibold hover:text-primary transition-colors">
              <UIcon name="i-heroicons-arrow-right" />
              <span>Discover more deals</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- "Show All" Button -->
      <UButton
        label="Show all restaurants"
        color="primary"
        size="xl"
        class="mt-16"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const deals = [
  {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047',
    name: 'MAGO Coffee',
    location: 'Frankfurt',
    dealTitle: '2 for 1 Matcha Latte',
    dealDescription: 'Buy 2 Matcha Lattes — the cheaper one is free.'
  },
  {
    image: 'https://images.unsplash.com/photo-1530799164-fe981d01a118?q=80&w=1170',
    name: 'JULIE\'S',
    location: 'Frankfurt',
    dealTitle: '2 for 1 bagel',
    dealDescription: 'Buy 2 bagels — the cheaper one is free.'
  },
  {
    image: 'https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1073',
    name: 'Ciao Amore',
    location: 'Mainz',
    dealTitle: '2 for 1 Spritz',
    dealDescription: 'Buy 2 Spritzes — the cheaper one is free.'
  },
  {
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070',
    name: 'Mali & Milo',
    location: 'Mainz',
    dealTitle: '2 for 1 Mac & Cheese',
    dealDescription: 'Buy 2 Mac & Cheese — the cheaper one is free.'
  },
  {
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981',
    name: 'Pinsa Pinsa',
    location: 'Frankfurt',
    dealTitle: '2 for 1 Aperol Spritz',
    dealDescription: 'Buy 2 Aperol Spritzes, get one free.'
  },
  {
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=685',
    name: 'WASHING MACHINE SALON',
    location: 'Mainz',
    dealTitle: '4 for 2 shots',
    dealDescription: 'Buy 4 shots — the two cheapest are free.'
  }
]
</script>