<script setup>
  import { onMounted, ref } from 'vue'
  import Scene from '@/components/Scene.vue'
  import GoogleResult from '@/components/GoogleResult.vue'

  const props = defineProps({
    term: {
      type: String,
      default: 'Lorem ipsum dolor sit amet'
    }
  })

  const field = ref(null)
  const input = ref('')

  onMounted(() => {
    input.value = props.term
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
      <div class="flex h-full relative">
        <main class="w-full flex flex-col items-center justify-center">
          <div class="w-full max-w-screen-lg mx-auto text-white text-lg flex gap-6 items-center py-8 pl-12 pr-64">
            <svg class="h-8" role="img" viewBox="0 0 272 92"  xmlns="http://www.w3.org/2000/svg">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44zm57.74 0c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44zm55.74-20.84v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36zM225 3v65h-9.5V3h9.5zm37.02 51.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93zM35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#FFF"></path>
            </svg>
            <div class="flex flex-grow items-center bg-zinc-700 rounded-full px-4 relative">
              <input ref="field" :value="input" class="bg-transparent flex-grow h-10 w-full outline-none pl-4"/>
              <div v-if="input" class="h-8 w-14 flex justify-center items-center border-r border-zinc-500 ">
                <svg class="h-6 w-6 fill-zinc-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </div>
              <div class="h-14 w-12 flex justify-center items-center">
                <svg class="h-6 w-6 fill-zinc-300" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"></path>
                </svg>
              </div>
              <div class="h-14 w-12 flex justify-center items-center">
                <svg class="h-6 w-6 fill-zinc-300" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M480-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 160q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160Zm-440 40q-66 0-113-47t-47-113v-80h80v80q0 33 23.5 56.5T280-200h200v80H280Zm480-320v-160q0-33-23.5-56.5T680-680H280q-33 0-56.5 23.5T200-600v120h-80v-120q0-66 47-113t113-47h80l40-80h160l40 80h80q66 0 113 47t47 113v160h-80Z"></path>
                </svg>
              </div>
              <div class="h-14 w-12 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-zinc-300">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full max-w-screen-lg mx-auto border-b border-zinc-600 text-zinc-500 font-semibold text-sm flex px-24 h-8">
            <div class="flex gap-5">
              <span class="text-white border-b-4 border-white">All</span>
              <span>Images</span>
              <span>News</span>
              <span>Videos</span>
              <span>Short Videos</span>
              <span>Shopping</span>
              <span>Forums</span>
              <span>More</span>
              <span>Tools</span>
            </div>
          </div>
          <div class="w-full max-w-screen-lg text-white text-lg px-24 py-8">
            <slot />
          </div>
        </main>
      </div>
  </Scene>
</template>
