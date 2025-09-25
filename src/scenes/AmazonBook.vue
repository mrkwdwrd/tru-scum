<script setup>
  import Scene from '@/components/Scene.vue'
  import cover from '@/assets/images/cover.jpg'
  import { StarIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
  import profile from '@/assets/profile-images/0088.jpg'
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center font-opensans">
        <div class="w-full max-w-screen-lg mx-auto p-5 bg-white flex gap-5">
          <div class="w-1/3">
            <img :src="cover" />
          </div>
          <div class="w-2/3 px-5">
            <div class="border-zinc-300 border-b pb-4">
              <div class=" text-black text-xl font-bold pr-28 pb-4">
                The Quiet Damage: QAnon and the Destruction of the American Family <span class="text-lg text-zinc-500 font-semibold">Paperback – 26 August 2025</span>
              </div>
              <div class="text-sm font-semibold mb-1">
                by <span class="text-blue-500">Jesselyn Cook</span> <span class="text-zinc-500">(Author)</span>
              </div>
              <div class="flex w-full text-sm font-semibold items-center gap-2">
                4.5
                <span class="flex">
                  <StarIcon class="size-4 text-orange-500"/>
                  <StarIcon class="size-4 text-orange-500"/>
                  <StarIcon class="size-4 text-orange-500"/>
                  <StarIcon class="size-4 text-orange-500"/>
                  <span class="block overflow-clip w-2">
                    <StarIcon class="size-4 text-orange-500"/>
                  </span>
                </span>
                <ChevronDownIcon class="size-4"/>
                <span class="text-blue-500 text-sm">(346)</span>
              </div>
            </div>
            <div class="font-bold pt-4">
              "The book shines. . . By delving into the ways people become susceptible to QAnon, Cook uncovers a deeper truth- Many of us go through life with a gaping hole caused by trauma, isolation or shame, and we find healthy and unhealthy ways to fill it."-The New York Times
            </div>
            <div class="font-normal pt-2">
              "SHED MY DNA"- three excruciating words uttered by a QAnon-obsessed mother, once a highly respected lawyer, to her only son, once the closest person in her life. QAnon beliefs and adjacent conspiracy theories have had devastating political consequences as they've exploded in popularity. What's often overlooked is the lasting havoc they wreak on our society at its most basic and intimate level-the family.
            </div>

            <div class="font-extrabold pt-4">
              Follow the Author
            </div>
            <div class="flex items-center gap-4 mt-2">
              <img :src="profile" class="rounded-full h-14"/>
              <span class="text-blue-500 font-semibold">Jesselyn Cook</span>
              <span class="border-zinc-400 border rounded-full px-8 py-1 font-semibold text-sm">Follow</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </Scene>
</template>