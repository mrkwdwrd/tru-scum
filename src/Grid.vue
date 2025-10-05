<script setup>
  import Scene from './components/Scene.vue'

</script>

<template>
  <Scene class="bg-transparent max-w-[1980px] mx-auto top-0 right-0 left-0 !absolute">
    <div class="flex h-full justify-between border border-green-500">
      <div v-for="i in 12" class="border-r border-green-500" />
    </div>
  </Scene>
</template>