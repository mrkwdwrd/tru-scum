<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Viewers from '@/components/Viewers.vue'

  const props = defineProps({
    id: Number
  })

</script>

<template>
  <Scene :id="id" class="bg-gray-200 max-w-[1980px] mx-auto">
    <div class="flex h-full w-3/4 mx-auto items-center">
      <div class="w-full p-5 flex items-center flex-col">
        <Camera :id="`s${id}c1`"/>
        <div class="flex bg-gray-200 w-full justify-between p-4">
          <Viewers :start="88"/>
        </div>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>