<script setup>
  import Viewers from '@/components/Viewers.vue'

  const emits = defineEmits(['count'])

  const props = defineProps({
    time: Number,
    viewers: Number
  })
</script>

<template>
  <div class="flex w-full justify-between py-4 items-start">
    <div class="text-white">
      <span class="font-bold text-2xl block">Aenean Tortor</span>
      <div class="flex items-center gap-2 my-2">
          <i class="block h-6 w-6 bg-gray-300 rounded-full"></i>
          <span class="block font-bold text-sm text-gray-300">Ligula Adipiscing</span>
      </div>
    </div>
    <Viewers :start="viewers" @count="(val) => emits('count', val)"/>
  </div>
</template>