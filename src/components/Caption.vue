<script setup>
  import Viewers from '@/components/Viewers.vue'

  const emits = defineEmits(['count'])

  const props = defineProps({
    time: Number,
    viewers: Number
  })
</script>

<template>
  <div class="flex w-full justify-between py-4">
    <div class="text-white">
      <span class="font-bold text-2xl block">Aenean Tortor</span>
    </div>
    <Viewers :start="viewers" @count="(val) => emits('count', val)"/>
  </div>
</template>