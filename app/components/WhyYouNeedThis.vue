<!-- components/WhyYouNeedThis.vue -->
<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left Column: Image with Hover Effect -->
        <div class="group rounded-3xl overflow-hidden">
          <NuxtImg
            src="/images/why-you-need-this.jpg"
            alt="Person enjoying a large bowl of pasta"
            class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <!-- Right Column: Text Content -->
        <div class="flex flex-col">
          <UBadge variant="subtle" size="lg" class="self-start">
            <UIcon name="i-heroicons-light-bulb" class="mr-2" />
            Why you need this
          </UBadge>

          <h2 class="text-5xl md:text-6xl font-bold tracking-tighter mt-6">
            Your hunger
            <br>
            deserves it.
          </h2>

          <!-- Benefits List -->
          <div class="mt-12 space-y-6">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex items-start gap-4"
            >
              <!-- Icon Circle -->
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <UIcon :name="benefit.icon" class="text-black h-6 w-6" />
              </div>

              <!-- Benefit Text -->
              <div>
                <h3 class="text-lg font-bold uppercase tracking-wider">{{ benefit.title }}</h3>
                <p class="mt-1 text-gray-400">{{ benefit.description }}</p>
              </div>
            </div>
          </div>

          <UButton
            label="Download the app"
            color="primary"
            size="lg"
            class="mt-12 self-start"
            icon="i-heroicons-arrow-down-tray"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Array for the benefits list
const benefits = [
  {
    icon: 'i-heroicons-currency-euro-solid',
    title: 'Save ~10€ on every meal',
    description: 'Saving on your favorite food has never been so easy!'
  },
  {
    icon: 'i-heroicons-gift-solid',
    title: 'Over 200 deals included for free',
    description: 'Grab hundreds of amazing deals without ever needing a subscription.'
  },
  {
    icon: 'i-heroicons-bolt-solid',
    title: 'Super easy to use',
    description: 'Simply choose a deal, customize it, and pay. It\'s that simple!'
  }
]
</script>