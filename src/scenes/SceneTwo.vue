<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import Viewers from '@/components/Viewers.vue'

  import { sceneTwo } from '@/content.js'

  const props = defineProps({
    id: Number
  })

</script>

<template>
  <Scene :id="id" class="bg-gray-200 max-w-[1980px] mx-auto">
    <div class="flex h-full items-center">
      <div class="w-2/3 p-5 flex items-center flex-col">
        <Camera :id="`s${id}c1`"/>
        <div class="flex bg-gray-200 w-full justify-between p-4">
          <Viewers :start="88"/>
        </div>
      </div>
      <div class="h-screen w-1/3 flex items-center">
        <Comments :comments="sceneTwo.comments"/>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>