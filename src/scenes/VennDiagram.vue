<script setup>
  import Scene from '@/components/Scene.vue'
  import image from '@/assets/images/venn.png'
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center ">
        <div class="w-full max-w-screen-md mx-auto flex flex-col justify-center" >
          <img :src="image" />
        </div>
      </main>
    </div>
  </Scene>
</template>
