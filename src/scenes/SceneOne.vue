<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Caption from '@/components/Caption.vue'
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
          <Caption :time="time" :viewers="viewers" @count="(val) => emits('count', val)"/>
        </Camera>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>