<script setup>
import { EyeIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  viewers: {
    type: Number,
    default: 0
  }
})

</script>

<template>
  <div class="bg-red-800 px-4 py-2 rounded-full flex text-white flex-nowrap gap-2 font-semibold ">
    <EyeIcon class="size-6 text-white animate-pulse"/>
    {{ Intl.NumberFormat().format(viewers) }} Viewers
  </div>
</template>