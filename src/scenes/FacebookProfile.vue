<script setup>
  import Scene from '@/components/Scene.vue'
  import cover from '@/assets/images/amelia-fb-cover.jpg'
  import pic from '@/assets/users/facebook/amelia.jpg'
  import placeholder from '@/assets/images/fb-placeholder.png'
  import oxford from '@/assets/images/oxford.jpg'
  import stpauls from '@/assets/images/stpauls.jpg'
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full justify-center">
      <main class="w-full max-w-screen-lg flex flex-col gap-8 items-center justify-center text-white">
        <div class="w-full flex flex-col bg-zinc-900 px-4">
          <div class="overflow-hidden h-48 flex items-center rounded-b-2xl">
            <img :src="cover" class="w-full"/>
          </div>
          <div class="w-auto flex gap-4 mx-8 px-8 py-4 border-b border-zinc-600">
            <div class="h-48 w-48 rounded-full -mt-24 border-4 border-zinc-900 overflow-hidden">
              <img :src="pic" />
            </div>
            <div class="block px-2 py-3">
              <div class="font-semibold text-3xl">Amelia Collins</div>
              <div class="text-zinc-400 text-lg">@RealWomenOnly</div>
            </div>
          </div>
          <div class="w-full flex px-12 h-12 pt-3 text-sm text-zinc-400 font-semibold items-stretch">
            <span class="px-4">Posts</span>
            <span class="px-4 text-blue-500 border-b-2 border-blue-500">About</span>
            <span class="px-4">Friends</span>
            <span class="px-4">Photos</span>
            <span class="px-4">Videos</span>
            <span class="px-4">Check-ins</span>
            <span class="px-4">More</span>
          </div>
        </div>

        <div class="w-full px-10 text-zinc-400">
          <div class="bg-zinc-900 w-full rounded-lg flex">
            <div class="w-1/3 p-4 border-r border-zinc-600 flex flex-col gap-2">
              <div class="px-2 py-1 font-bold text-lg text-white">About</div>
              <div class="px-2 py-1 rounded-md">Overview</div>
              <div class="px-2 py-1 rounded-md text-blue-500 bg-blue-500/10">Work and education</div>
              <div class="px-2 py-1 rounded-md">Places lived</div>
              <div class="px-2 py-1 rounded-md">Contact and basic info</div>
              <div class="px-2 py-1 rounded-md">Family and relationships</div>
              <div class="px-2 py-1 rounded-md">Details about Amelia Collins</div>
              <div class="px-2 py-1 rounded-md">Life events</div>
            </div>
            <div class="w-2/3 p-4">
              <div class="text-zinc-300">
                <div class="text-white font-semibold mb-4">
                  Work
                </div>
                <div class="flex gap-4 text-sm mb-4 align-middle">
                  <img :src="placeholder" class="w-10 h-10 rounded-full"/>
                  <div>
                    <div class="font-bold">CEO - Real Women Only at I Know My Rights</div>
                    October 2025 - Present
                  </div>
                </div>
                <div class="text-white font-semibold mb-4">
                  University
                </div>
                <div class="flex gap-4 font-medium text-sm mb-4 items-center">
                  <img :src="oxford" class="w-10 h-10 rounded-full"/>
                  <div>
                    Studied at <span class="font-bold">University of Oxford</span>
                  </div>
                </div>
                <div class="text-white font-semibold mb-4">
                  High School
                </div>
                <div class="flex gap-4 font-medium text-sm mb-4 items-center">
                  <img :src="stpauls" class="w-10 h-10 rounded-full"/>
                  <div>
                    Went to <span class="font-bold">St Paul's Girls' School</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </Scene>
</template>
