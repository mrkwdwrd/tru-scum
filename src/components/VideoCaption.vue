<script setup>
  import Likes from '@/components/Likes.vue'
  import { HandThumbUpIcon, HandThumbDownIcon, ShareIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'
  import logo from '@/assets/images/LogicTrap_logo.png'

  const props = defineProps({
    viewers: Number
  })
</script>

<template>
  <div class="flex w-full justify-between py-4 items-start">
    <div class="text-white">
      <span class="font-bold text-2xl block">Trapped...</span>
      <div class="flex items-center gap-3 my-3">
          <i class="block h-8 w-8 bg-gray-300 rounded-full overflow-hidden">
            <img :src="logo"/>
          </i>
          <span class="block font-bold text-md text-white">The Logic Trap</span>
      </div>
    </div>
    <div class="flex gap-4">
      <!-- Likes -->
      <div class="bg-zinc-800 px-2 py-2 rounded-full flex text-white flex-nowrap gap-2 font-semibold ">
        <span class="border-zinc-300 border-r px-4 gap-4 flex font-semibold">
          <HandThumbUpIcon class="size-6"/>
          127.3k
        </span>
        <span class="px-4">
          <HandThumbDownIcon class="size-6 "/>
        </span>
      </div>
      <!-- Share -->
      <div class="bg-zinc-800 px-6 py-2 rounded-full flex text-white flex-nowrap gap-2 font-semibold ">
          <ShareIcon class="size-6 "/>
          Share
      </div>
      <!-- Save -->
      <div class="bg-zinc-800 px-6 py-2 rounded-full flex text-white flex-nowrap gap-2 font-semibold ">
          <EllipsisHorizontalIcon class="size-6 "/>
      </div>
    </div>
  </div>
</template>