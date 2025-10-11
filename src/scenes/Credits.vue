<script setup>
  import Scene from '@/components/Scene.vue'
  import { ref } from 'vue'

  const props = defineProps({
  })

  const fade = ref(false)

setTimeout(() => {
  fade.value = true
}, 500)
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto flex items-center content-center w-full">
      <div id="credits" :class="['text-center text-white w-full flex flex-col gap-1 max-w-3xl mx-auto scale-150', { 'fade-in': fade }]">
        <h1 class="uppercase text-5xl font-black">TruScum</h1>
        <h2 class="uppercase font-medium mt-4">Written By</h2>
        <p class="uppercase font-medium text-3xl">Oscar Bray</p>
        <h2 class="uppercase font-medium mt-4">Performer/producer</h2>
        <p class="uppercase font-medium text-3xl">Frankie Thorne</p>
        <h2 class="uppercase font-medium mt-4">Director</h2>
        <p class="uppercase font-medium text-3xl">Gabrielle Ward</p>
        <h2 class="uppercase font-medium mt-4">Tech & Tech Design</h2>
        <p class="uppercase font-medium text-3xl">Mark Woodward</p>
        <h2 class="uppercase font-medium mt-4">Special thanks to</h2>
        <p class="uppercase font-medium text-2xl">Anna Piper Scott, Anthony Kuiper, Blake Barnard, Chris Tomkins, George Jefford, James Hazelden, Julian Colman, Mads Lou and Sunny Mallard</p>
      </div>
  </Scene>
</template>

<style lang="css" scoped>
  #credits {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
  #credits.fade-in {
    opacity: 1;
  }
</style>