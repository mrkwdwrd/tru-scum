<script setup>
  import Scene  from '@/components/Scene.vue'
  import IgUI  from '@/components/IgUI.vue'

  const props = defineProps({
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="h-screen flex justify-center items-center">
      <IgUI />
    </div>
  </Scene>
</template>
