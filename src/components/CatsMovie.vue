<script setup>
  import img1 from '@/assets/images/cats1.jpg'
  import img3 from '@/assets/images/cats3.jpg'
  import img4 from '@/assets/images/cats4.jpg'
  import img from '@/assets/images/cats.jpg'
</script>

<template>
  <div class="flex flex-col justify-between gap-10 font-sourcesans">
    <div class="flex justify-between">
      <div class="text-2xl">
        Cats
        <div class="text-sm text-zinc-400 flex gap-2 items-center">
          2019 • Musical/Fantasy • 1h 50m
          <svg class="h-4 w-4 fill-zinc-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>
      </div>
      <div class="flex gap-5 text-sm items-center">
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-white flex items-center">
          Overview
        </div>
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-zinc-700 flex items-center">
          Cast
        </div>
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-zinc-700 flex items-center">
          Reviews
        </div>
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-zinc-700 flex items-center">
          Watch movie
        </div>
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-zinc-700 flex items-center">
          Songs
        </div>
      </div>
    </div>
    <div class="flex w-full gap-5 text-sm items-stretch h-80">
      <div class="bg-zinc-700 w-2/3 rounded-xl overflow-hidden flex">
        <div class="w-1/2 aspect-square overflow-hidden">
          <img :src="img1" class="h-full w-full scale-150" />
        </div>
        <div class="w-1/2 border-l-4 flex flex-col border-black overflow-hidden">
          <div class="h-1/2 border-b-2 border-black flex overflow-hidden">
            <img :src="img3" class="w-1/2 border-r-2 border-black" />
            <img :src="img4" class="w-1/2 border-l-2 border-black" />
          </div>
          <img :src="img" class="h-1/2 w-full border-t-2 border-black" />
        </div>
      </div>
      <div class="bg-zinc-700 w-1/3 rounded-xl p-4">
          <div class="text-xl font-medium mb-4">About</div>
          An abandoned cat discovers a new life after stumbling into the world of the Jellicles.
          The tribe competes annually to determine the Jellicle Choice who would journey to Heaviside Layer
          and be reborn.
          <div class="mt-2"><span class="font-bold">Release date:</span> 26 December 2019</div>
          <div class="mt-2"><span class="font-bold">Director:</span> <span class="text-blue-300">Tom Hooper</span></div>
          <div class="mt-2"><span class="font-bold">Adapted from:</span> <span class="text-blue-300">Cats, Old Possum's Book of Practical Cats</span></div>
      </div>
    </div>
  </div>
</template>