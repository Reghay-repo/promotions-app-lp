<!-- components/StartupSpirit.vue -->
<template>
  <section id="career" class="bg-black py-24">
    <div class="container mx-auto px-4">
      <!-- Main container with relative positioning -->
      <div class="relative rounded-3xl overflow-hidden h-[500px]">

        <!-- Background Image -->
        <NuxtImg
          src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg"
          alt="Team members working together"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>

        <!-- Content -->
        <div class="relative h-full flex flex-col items-center justify-center text-center text-white p-8">
          <UBadge variant="subtle" size="lg" class="mb-6">
            <UIcon name="i-heroicons-briefcase" class="mr-2" />
            Your startup career at SODA
          </UBadge>

          <h2 class="text-5xl md:text-6xl font-bold tracking-tighter">
            Fancy some <br> startup spirit?
          </h2>

          <p class="mt-6 max-w-xl text-lg text-gray-300">
            Do you want to bring our app to Berlin, Munich, Hamburg, Stuttgart—and maybe even to the moon? Then become part of our team and actively shape SODA's growth.
          </p>

          <UButton
            label="Learn more about SODA"
            color="primary"
            size="xl"
            class="mt-10"
          />
        </div>
      </div>
    </div>
  </section>
</template>