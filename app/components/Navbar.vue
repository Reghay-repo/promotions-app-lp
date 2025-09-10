<!-- components/Navbar.vue -->
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'

const route = useRoute()

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Restaurants',
    to: '/#restaurants',
    icon: 'i-lucide-utensils',
    active: route.hash === '#restaurants'
  },
  {
    label: 'How it works',
    to: '/#how-it-works',
    icon: 'i-lucide-info',
    active: route.hash === '#how-it-works'
  },
  {
    label: 'Career',
    to: '/#career',
    icon: 'i-lucide-briefcase',
    active: route.hash === '#career'
  }
])
</script>

<template>
  <UHeader class="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
    <!-- Left: Logo -->
    <template #title>
      <NuxtLink to="/" aria-label="Go to Homepage">
        <NuxtImg src="/images/logo.avif" alt="SODA Logo" class="h-8 w-auto" />
      </NuxtLink>
    </template>

    <!-- Center: Navigation (Desktop) -->
    <UNavigationMenu :items="navItems" />

    <!-- Right: CTA + Color Mode -->
    <template #right>
      <UButton label="Download the app" color="primary" />
      <UColorModeButton />
    </template>

    <!-- Mobile Drawer Body -->
    <template #body>
      <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
      <UButton label="Download the app" color="primary" size="lg" block class="mt-4" />
    </template>
  </UHeader>
</template>
