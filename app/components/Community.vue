<!-- components/Community.vue -->
<template>
  <section class="bg-[#1E002B] text-white py-24 overflow-hidden">
    <!-- Header Content -->
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
        Become part of the <br> Soda Community.
        <span class="text-primary">#TeamSoda</span>
      </h2>
      <div class="flex justify-center items-center gap-6 mt-6">
        <NuxtLink to="#" aria-label="Instagram">
          <UIcon name="i-mdi-instagram" class=" hover:text-primary transition-colors" />
        </NuxtLink>
        <NuxtLink to="#" aria-label="TikTok">
          <UIcon name="iconoir:tiktok" size="20" class=" hover:text-primary transition-colors" />
        </NuxtLink>
        <NuxtLink to="#" aria-label="LinkedIn">
          <UIcon name="i-mdi-linkedin"size="20"  class=" hover:text-primary transition-colors" />
        </NuxtLink>
      </div>
    </div>

    <!-- Scrolling Marquee Container -->
    <!-- Note: We added a custom 'group' class for the hover effect in the style block -->
    <div class="mt-16 group flex gap-8 whitespace-nowrap">
      <!-- We now use our custom 'marquee-animation' class instead of Tailwind's 'animate-marquee' -->
      <div class="flex-shrink-0 flex gap-8 marquee-animation">
        <!-- Render the first set of event cards -->
        <div
          v-for="event in events"
          :key="event.title"
          class="relative rounded-2xl overflow-hidden w-[300px] h-[400px] flex-shrink-0"
        >
          <NuxtImg :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-left">
            <p class="text-xs uppercase tracking-widest">SODA EVENT</p>
            <h3 class="text-3xl font-bold mt-1">{{ event.title }}</h3>
            <p class="text-xl font-light">{{ event.location }}</p>
          </div>
          <div v-if="event.special" class="absolute top-0 w-full bg-primary text-black p-2 text-sm font-semibold text-center">
            {{ event.bannerText }}
          </div>
        </div>
      </div>

      <!-- Render the DUPLICATE set of event cards for a seamless loop -->
      <div class="flex-shrink-0 flex gap-8 marquee-animation">
        <div
          v-for="event in events"
          :key="event.title + '-clone'"
          class="relative rounded-2xl overflow-hidden w-[300px] h-[400px] flex-shrink-0"
        >
          <NuxtImg :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-left">
            <p class="text-xs uppercase tracking-widest">SODA EVENT</p>
            <h3 class="text-3xl font-bold mt-1">{{ event.title }}</h3>
            <p class="text-xl font-light">{{ event.location }}</p>
          </div>
          <div v-if="event.special" class="absolute top-0 w-full bg-primary text-black p-2 text-sm font-semibold text-center">
            {{ event.bannerText }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const events = [
  { image: 'https://images.unsplash.com/photo-1756995260112-0960d3744f72?q=80&w=764', title: 'Sundowner Spritz Bar', location: '@HafenEden', special: false },
  { image: 'https://images.unsplash.com/photo-1597310026633-31f90e388964?q=80&w=687', title: 'After Work Drink & Dance', location: '@OffMainz', special: false },
  { image: 'https://plus.unsplash.com/premium_photo-1681503974121-b9387f3aea69?q=80&w=687', title: 'Running Club Frankfurt', location: '@Aledo', special: true, bannerText: 'Join us: Sep 18 | 6 p.m.' },
  { image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070', title: 'Summer Rooftop Party', location: '@TheLoft', special: false },
  { image: 'https://plus.unsplash.com/premium_photo-1664303684636-77e29786329b?q=80&w=660', title: 'After Work Drink & Dance', location: '@OffMainz', special: false },
]
</script>

<style>
/*
  We define the animation keyframes globally but within the component file.
  This means we are not polluting the tailwind.config.ts file.
*/
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

/* Apply the animation to our custom class */
.marquee-animation {
  animation: marquee 40s linear infinite;
}

/*
  This CSS rule targets any element with '.marquee-animation' that is a child of
  an element with the '.group' class, but only when the '.group' is being hovered.
  This pauses the animation.
*/
.group:hover .marquee-animation {
  animation-play-state: paused;
}
</style>