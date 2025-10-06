<script setup>
  import img from '@/assets/images/Daniel-Day-Lewis.jpg'
</script>

<template>
  <div class="flex flex-col justify-between gap-10 font-sourcesans">
    <div class="flex justify-between">
      <div class="text-2xl">
        Daniel Day-Lewis
        <div class="text-sm text-zinc-400 flex gap-2 items-center">
          Actor
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
          Movies
        </div>
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-zinc-700 flex items-center">
          Awards
        </div>
        <div class="bg-zinc-700 px-4 py-2 rounded-full border border-zinc-700 flex items-center">
          TV Shows
        </div>
      </div>
    </div>
    <div class="flex w-full gap-5 text-sm items-center">
      <div class="bg-zinc-700 w-full rounded-xl overflow-hidden flex">
        <img :src="img" class="w-1/2" />
        <div class="w-1/2 border-l-4 border-black p-4">
          <div class="text-xl font-medium mb-4">About</div>
          Sir Daniel Michael Blake Day-Lewis is an English actor. Often described as one of the
          greatest actors in the history of cinema, he is the recipient of numerous accolades,
          including three Academy Awards, four BAFTA Awards, three Screen Actors Guild Awards
          and two Golden Globe Awards. <span class="text-blue-300">Wikipedia</span>

          <div class="mt-2"><span class="font-bold">Born:</span> 29 April 1957 (age 68 years), Kensington, London, United Kingdom</div>
          <div class="mt-2"><span class="font-bold">Awards:</span> Academy Award for Best Actor in a Leading Role</div>
          <span class="text-blue-300">See more</span>
        </div>
      </div>
    </div>
  </div>
</template>