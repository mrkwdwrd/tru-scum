<script setup>
  import Scene from '@/components/Scene.vue'
  import cover from '@/assets/images/stpauls-fb-cover.jpg'
  import pic from '@/assets/images/stpauls-profile.jpg'
  import { InformationCircleIcon, FolderPlusIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full justify-center">
      <main class="w-full max-w-screen-lg flex flex-col gap-8 items-center justify-center text-white">
        <div class="w-full flex flex-col bg-zinc-900 px-4">
          <div class="overflow-hidden h-96 flex items-center rounded-b-2xl">
            <img :src="cover" class="w-full"/>
          </div>
          <div class="w-auto flex gap-4 mx-8 px-8 py-4 border-b border-zinc-600">
            <div class="h-48 w-48 rounded-full -mt-24 border-4 border-zinc-900 overflow-hidden">
              <img :src="pic" />
            </div>
            <div class="block px-2 py-3">
              <div class="font-semibold text-3xl">St Paul's Girls' School </div>
              <div class="text-zinc-400 text-md">983 followers • 10 following</div>
            </div>
            <div class="flex gap-2 flex-grow justify-end items-center text-sm font-semibold">
              <div class="flex rounded-md bg-blue-600 p-2 items-center gap-1">
                <InformationCircleIcon class="h-4"/>
                Learn More
              </div>
              <div class="flex rounded-md bg-zinc-600 p-2 items-center gap-1">
                <FolderPlusIcon class="h-4"/>
                Follow
              </div>
              <div class="flex rounded-md bg-zinc-600 p-2 items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-white">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
                Search
              </div>
            </div>
          </div>
          <div class="w-full flex px-12 h-12 pt-3 text-sm text-zinc-400 font-semibold items-stretch">
            <span class="px-4 text-blue-500 border-b-2 border-blue-500">Posts</span>
            <span class="px-4">About</span>
            <span class="px-4">Mentions</span>
            <span class="px-4">Reviews</span>
            <span class="px-4">Reels</span>
            <span class="px-4">Photos</span>
            <span class="px-4">More</span>
          </div>
        </div>

      </main>
    </div>
  </Scene>
</template>
