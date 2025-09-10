<!-- components/DealCard.vue -->
<template>
  <div class="bg-purple-900/80 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl max-w-xs border border-white/20">
    <div class="mb-3">
      <h3 class="text-2xl font-bold">
        NEW! 2-FOR-1 APEROL SPRITZ
      </h3>
      <p class="text-sm text-gray-300">
        Buy 2 Aperol Spritz and get one completely free.
      </p>
    </div>
    <div class="flex items-center gap-2 mb-4 text-xs">
      <div class="bg-soda-pink/80 rounded-full px-3 py-1 font-semibold">
        ~€8 Saved
      </div>
      <div class="bg-gray-700/80 rounded-full px-3 py-1 font-semibold">
        Only 10x left
      </div>
    </div>
    <UButton
      label="Redeem Now"

      block
      size="lg"
    />
  </div>
</template>