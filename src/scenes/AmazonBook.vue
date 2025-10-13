<script setup>
  import Scene from '@/components/Scene.vue'
  import cover from '@/assets/images/book-cover.jpg'
  import { StarIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
  import profile from '@/assets/images/ameliacollins.png'
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
                Natal, Natural Womb-an. How to stand up when modern day feminism is under attack. <br /><span class="text-lg text-zinc-500 font-semibold">Paperback – 26 August 2025</span>
              </div>
              <div class="text-sm font-semibold mb-1">
                by <span class="text-blue-500">Amelia Collins</span> <span class="text-zinc-500">(Author)</span>
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
              The new left cannot define what a woman is. In the face of attacks from the far-right on the reproductive rights, labour protections and cultural standing of biological women, the response of too many activists has been to push for ‘gender fluidity’ and even more censorship of language and thought. How did we get here, and what can we do?
            </div>
            <div class="font-normal pt-2">
              <em>Natal, Natural, Womb-an</em> offers answers from the fresh, erudite voice of Amelia Collins. An accomplished doctor of feminist philosophy, Collins’ first essay collection celebrates natural womanhood and femininity using past and present scholarship to pave the way for a brighter feminist future. Her writing is both compassionate to the victims of modern transgender ideology, and unafraid to stand up to those who seek to undermine natural womanhood. Gripping, provocative, and delightfully snarky at times, <em>Natal, Natural, Womb-an</em> is the playbook for a new wave of feminism defined by natural, proud women.
            </div>
            <!-- <div class="font-extrabold pt-4">
              Follow the Author
            </div>
            <div class="flex items-center gap-4 mt-2">
              <img :src="profile" class="rounded-full h-14"/>
              <span class="text-blue-500 font-semibold">Amelia Collins</span>
              <span class="border-zinc-400 border rounded-full px-8 py-1 font-semibold text-sm">Follow</span>
            </div> -->
          </div>
        </div>
      </main>
    </div>
  </Scene>
</template>