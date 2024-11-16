<script setup>
  import Viewers from '@/components/Viewers.vue'
  import logo from '@/assets/images/LogicTrap_logo.png'

  const props = defineProps({
    time: Number,
    viewers: Number
  })
</script>

<template>
  <div class="flex w-full justify-between py-4 items-start">
    <div class="text-white">
      <span class="font-bold text-2xl block">Aenean Tortor</span>
      <div class="flex items-center gap-3 my-2">
          <i class="block h-8 w-8 bg-gray-300 rounded-full overflow-hidden">
            <img :src="logo"/>
          </i>
          <span class="block font-bold text-md text-white">The Logic Trap</span>
      </div>
    </div>
    <Viewers :start="viewers" />
  </div>
</template>