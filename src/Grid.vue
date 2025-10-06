<script setup>
  import Scene from './components/Scene.vue'

</script>

<template>
  <Scene class="bg-transparent max-w-[1980px] mx-auto top-0 right-0 left-0 !absolute">
    <div class="flex h-full justify-between border border-green-500">
      <div v-for="i in 12" class="border-r border-green-500 flex flex-col justify-between h-full w-full items-stretch">
        <div v-for="i in 12" class="border-b border-green-500 w-full h-full" />
      </div>
    </div>
  </Scene>
</template>