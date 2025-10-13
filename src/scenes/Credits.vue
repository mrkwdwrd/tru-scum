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
      <div id="credits" :class="['text-left text-white w-full flex flex-col gap-1 max-w-3xl mx-auto', { 'fade-in': fade }]">
        <h1 class="uppercase text-6xl font-black">TruScum</h1>
        <h2 class="uppercase font-medium mt-4">Written By</h2>
        <p class="uppercase font-medium text-4xl">Oscar Bray</p>
        <h2 class="uppercase font-medium mt-4">Performer/producer</h2>
        <p class="uppercase font-medium text-4xl">Frankie Thorne</p>
        <h2 class="uppercase font-medium mt-4">Director</h2>
        <p class="uppercase font-medium text-4xl">Gabrielle Ward</p>
        <h2 class="uppercase font-medium mt-4">Tech & Tech Design</h2>
        <p class="uppercase font-medium text-4xl">Mark Woodward</p>
        <h2 class="uppercase font-medium mt-4">Special thanks to</h2>
        <p class="uppercase font-medium text-3xl">Anna Piper Scott, Bridget Morrison, <br />George Jefford, Abbey Hansen, <br />Ryan Hamilton, Keith Brockett</p>
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