<!-- components/Footer.vue -->
<template>
  <footer class="bg-black text-white pt-12" ref="footerRef" >
    <div class="container mx-auto px-4">
      <div class="bg-[#111] rounded-2xl p-8 md:p-12">
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <!-- Column 1: Brand & Socials -->
          <div class="lg:col-span-2">
            <NuxtLink to="/" aria-label="Go to Homepage">
              <NuxtImg src="/images/logo.png" alt="SODA Logo" class="h-10 w-auto filter " />
            </NuxtLink>
            <p class="mt-4 text-gray-400 max-w-sm">
              The best deals from your city's favorite local restaurants, right in your pocket. Experience more, spend less.
            </p>
            <div class="flex items-center gap-5 mt-6">
              <NuxtLink to="#" aria-label="Instagram">
                <UIcon name="i-mdi-instagram" class="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
              </NuxtLink>
              <NuxtLink to="#" aria-label="TikTok">
                <UIcon name="i-mdi-tiktok" class="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
              </NuxtLink>
              <NuxtLink to="#" aria-label="LinkedIn">
                <UIcon name="i-mdi-linkedin" class="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
              </NuxtLink>
            </div>
          </div>

          <!-- Column 2: Navigation -->
          <div>
            <h3 class="font-semibold text-lg">Navigate</h3>
            <ul class="mt-4 space-y-3">
              <li><NuxtLink to="#restaurants" class="text-gray-400 hover:text-primary transition-colors">Restaurants</NuxtLink></li>
              <li><NuxtLink to="#how-it-works" class="text-gray-400 hover:text-primary transition-colors">How It Works</NuxtLink></li>
              <li><NuxtLink to="#career" class="text-gray-400 hover:text-primary transition-colors">Careers</NuxtLink></li>
            </ul>
          </div>

          <!-- Column 3: "Get Notified" CTA -->
          <div>
            <h3 class="font-semibold text-lg">Be the First to Know</h3>
            <p class="mt-4 text-gray-400">Join our wishlist to get notified the moment the app is released!</p>
            <form @submit.prevent="handleNotify" class="mt-4 flex items-center gap-2">
              <UInput
                v-model="email"
                icon="i-heroicons-envelope"
                placeholder="your@email.com"
                :ui="{ 'icon': { color: 'text-gray-500' } }"
                required
                class="flex-grow"
              />
              <UButton type="submit" label="Notify Me" color="primary" />
            </form>
          </div>
        </div>

        <!-- Divider and Bottom Bar -->
        <hr class="my-10 border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {{ new Date().getFullYear() }} SODA App GmbH. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <NuxtLink to="#" class="hover:text-white">Terms & Conditions</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const email = ref('')
const footerRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver;

const {isShowing} = useExitIntent()

const handleNotify = () => {
  if (!email.value) return;
  console.log(`Email submitted for notification: ${email.value}`);
  // Here you would typically send the email to your backend service (e.g., Mailchimp, ConvertKit)

  // Fake loading and clear input for good UX
  setTimeout(() => {
    email.value = ''
    alert('Thank you for joining the wishlist!');
  }, 500);
}


onMounted(() => {
  // Check if the footer element exists
  if (!footerRef.value) return;

  // 3. Create the Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      // The callback receives a list of entries. We only care about the first one.
      const entry = entries[0];

      // 4. Check if the element is now intersecting (visible)
      if (entry.isIntersecting) {

        // 5. Wait for 2 seconds (2000 milliseconds) then show the alert
        setTimeout(() => {
          // alert('Footer is visible! The modal would open now.');
          isShowing.value = true;
        }, 2000);

        // 6. Stop observing the footer so the alert doesn't fire again
        observer.unobserve(footerRef.value);
      }
    },
    {
      // This means the trigger fires when the element is 10% visible
      threshold: 0.1
    }
  );

  // 7. Tell the observer to start watching the footer element
  observer.observe(footerRef.value);
});

// 8. Clean up the observer when the component is removed
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>