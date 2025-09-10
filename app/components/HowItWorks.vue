<!-- components/HowItWorks.vue -->
<template>
  <section id="how-it-works" class="bg-black text-white py-24">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left Column: Text & Steps (Unchanged) -->
        <div class="flex flex-col">
          <UBadge variant="subtle" size="lg" class="self-start">
            <UIcon name="i-heroicons-question-mark-circle" class="mr-2" />
            How the app works
          </UBadge>
          <h2 class="text-5xl md:text-6xl font-bold tracking-tighter mt-6">
            Super easy. <br>
            <span class="text-primary">Free.</span>
          </h2>
          <div class="mt-12 space-y-8 relative">
            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="flex items-start gap-4"
            >
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-black flex-shrink-0">
                  {{ index + 1 }}
                </div>
                <div v-if="index < steps.length - 1" class="w-px h-full bg-gray-700 mt-2"></div>
              </div>
              <div>
                <h3 class="text-lg font-bold uppercase tracking-wider">{{ step.title }}</h3>
                <p class="mt-1 text-gray-400">{{ step.description }}</p>
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

        <!-- Right Column: INTERACTIVE Video Player -->
        <div
          class="relative rounded-3xl overflow-hidden cursor-pointer h-[400px] transition-all duration-500 ease-in-out"
          :class="{ '!h-[850px]': isPlaying }"
          @click="togglePlay"
        >
          <video
            ref="videoRef"
            src="/videos/soda-promo.mp4"
            muted
            playsinline
            :controls="isPlaying"
            poster="/images/video-thumbnail.avif"
            class="w-full h-full object-cover"
          ></video>

          <!-- Overlays: Only show when video is PAUSED -->
          <template v-if="!isPlaying">
            <div class="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
              <div class="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <UIcon name="i-heroicons-play-solid" class="text-black h-12 w-12" />
              </div>
            </div>
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <div class="bg-primary text-black py-2 px-6 rounded-lg">
                <h4 class="text-3xl font-extrabold">THIS IS SODA!</h4>
                <p class="font-semibold tracking-widest">WATCH THE VIDEO</p>
              </div>
            </div>
          </template>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State to track if the video is playing
const isPlaying = ref(false)
// Ref to get direct access to the <video> DOM element
const videoRef = ref<HTMLVideoElement | null>(null)

const togglePlay = () => {
  // Ensure the video element is available
  if (!videoRef.value) return;

  if (isPlaying.value) {
    // If it's playing, pause it
    videoRef.value.pause();
  } else {
    // If it's paused, play it and unmute
    videoRef.value.play();
    videoRef.value.muted = false; // Enable sound on user interaction
  }

  // Toggle the state
  isPlaying.value = !isPlaying.value;
}

const steps = [
  { title: 'Download the App', description: 'Get the app for free and discover hundreds of restaurants near you. Easy & no registration required!' },
  { title: 'Select & Customize Deals', description: 'Each restaurant offers exclusive SODA deals. Simply select a deal and customize it to your liking.' },
  { title: 'Show Confirmation', description: 'Now all you have to do is show the confirmation screen at the restaurant. Just show it to the staff!' }
]
</script>