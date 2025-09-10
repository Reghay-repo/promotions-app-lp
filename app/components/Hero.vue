<!-- components/Hero.vue -->
<template>
  <section class="bg-black text-white relative overflow-hidden">
    <div class="container mx-auto px-4 py-24 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Left Column: Text Content -->
        <div class="text-center lg:text-left">
          <NuxtImg
              :src="sodaLogo"
              alt="SODA App Logo"
              class="h-25 w-auto mx-auto lg:mx-0 mb-8"
          />
          <h1 class="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">
            More <span class="text-soda-pink">Experience.</span>
            <br>
            Fewer <span class="text-soda-pink">Spend.</span>
          </h1>
          <p class="mt-6 text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
            Download the new SODA app, find your favorite products, and start saving instantly. It's that easy, and it's
            free.
          </p>
          <div class="mt-10">
            <p class="mb-4 text-sm font-medium tracking-widest">
              CHOOSE YOUR PLATFORM:
            </p>
            <div class="flex items-center justify-center lg:justify-start gap-4">
              <DownloadButtons/>
            </div>
          </div>
        </div>

        <!-- Right Column: Image & Deal Card -->
        <div class="relative hidden lg:block">
          <NuxtImg
              src="/images/hero-bg.jpg"
              alt="Friends enjoying cocktails"
              class="rounded-2xl shadow-lg w-full h-auto object-cover max-w-3xl mx-auto"
          />
          <DealCard class="absolute -bottom-12 -right-8 transform rotate-3"/>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
// This ensures our new component is registered and ready to use
import DealCard from '~/components/DealCard.vue';
import sodaLogo from "/images/logo.avif"
</script>