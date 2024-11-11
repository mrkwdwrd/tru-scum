<script setup>
  const props = defineProps({
    image: String,
    stories: Boolean
  })
</script>
<template>
  <span class="rounded-full h-10 w-10 border-2 flex-shrink-0 border-gray-400" :class="[{ 'border-pink-500': stories }]">
    <i class="inline-block h-9 w-9 border border-black bg-white rounded-full overflow-hidden"><img :src="image" /></i>
  </span>
</template>