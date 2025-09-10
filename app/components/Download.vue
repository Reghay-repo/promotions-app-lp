<!-- components/Download.vue -->
<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto px-4 flex flex-col items-center text-center">

      <UBadge variant="solid" size="lg" class="mb-6">
        <UIcon name="i-heroicons-sparkles-solid" class="mr-2" />
        Restaurant Discovery App
      </UBadge>

      <h2 class="text-6xl md:text-7xl font-extrabold tracking-tighter">
        <span class="text-primary">100+</span> restaurants.
        <br>
        Simply save.
      </h2>

      <p class="mt-6 max-w-md text-lg text-gray-300">
        There's no subscription, no registration, and no coupons to print. You only pay when you actually use a deal—transparent and risk-free.
      </p>

      <div class="mt-12">
        <p class="text-sm font-semibold tracking-widest mb-4">
          CHOOSE YOUR PLATFORM:
        </p>
        <DownloadButtons/>
      </div>

    </div>
  </section>
</template>