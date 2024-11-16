<script setup>
  import Scene  from '@/components/Scene.vue'
  import Comments from '@/components/Comments.vue'

  import { sceneTwo } from '@/content.js'

  const props = defineProps({
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full justify-center items-center max-w-2xl mx-auto">
      <Comments :comments="sceneTwo.comments"/>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>