<script setup>
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  viewers: {
    type: Number,
    default: 0
  }
})

</script>

<template>
  <div class="bg-zinc-800 px-2 py-2 rounded-full flex text-white flex-nowrap gap-2 font-semibold ">
    <span class="border-zinc-300 border-r px-4 gap-4 flex font-semibold">
      <HandThumbUpIcon class="size-6 text-white"/>
      127.3k
    </span>
    <span class="px-4">
      <HandThumbDownIcon class="size-6 text-white"/>
    </span>
  </div>
</template>