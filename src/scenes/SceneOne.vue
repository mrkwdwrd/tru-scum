<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Viewers from '@/components/Viewers.vue'
import { onMounted } from 'vue';

  const props = defineProps({
    id: Number,
    time: Number,
    viewers: Number
  })

  const emits = defineEmits(['count', 'start'])

  onMounted(() => {
    emits('start')
  })
</script>

<template>
  <Scene :id="id" class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full w-3/4 mx-auto items-center">
      <div class="w-full p-5 flex items-center flex-col">
        <Camera :id="`s${id}c1`" :footer="true" :time="time">
          <div class="flex bg-gray-800 w-full justify-between p-4">
            <Viewers :start="viewers" @count="(val) => emits('count', val)"/>
          </div>
        </Camera>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>