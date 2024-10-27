<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import { sceneTwo } from '@/content.js'

  const props = defineProps({
    id: Number
  })

</script>

<template>
  <Scene :id="id">
    <div class="flex h-full items-center">
      <div class="w-2/3 p-5 flex items-center">
        <Camera :id="`s${id}c1`"/>
      </div>
      <div class="h-screen w-1/3 flex items-center">
        <Comments :comments="sceneTwo.comments"/>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>