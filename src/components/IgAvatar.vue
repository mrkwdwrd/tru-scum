<script setup>
  const props = defineProps({
    stories: Boolean
  })
</script>
<template>
  <span class="rounded-full h-10 w-10 p-[0.2em] border flex-shrink-0 border-gray-400" :class="[{ 'border-pink-500': stories }]">
    <i class="inline-block h-8 w-8 bg-white rounded-full "></i>
  </span>
</template>