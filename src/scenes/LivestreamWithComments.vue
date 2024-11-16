<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import Caption from '@/components/Caption.vue'
  import { onMounted, getCurrentInstance, ref } from 'vue'
  import { sceneTwo } from '@/content.js'

  const instance = getCurrentInstance()

  const props = defineProps({
    viewers: Number,
    time: Number
  })

  const emits = defineEmits(['count', 'start'])

  const uuid = ref(instance.uid)

  onMounted(() => {
    emits('start')
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full items-center">
      <div class="w-2/3 p-5 flex items-center flex-col">
        <Camera :id="`s${uuid}c1`" :footer="true" :time="time">
          <Caption :time="time" :viewers="viewers" @count="(val) => emits('count', val)"/>
        </Camera>
      </div>
      <div class="h-screen w-1/3 flex items-center">
        <Comments :comments="sceneTwo.comments"/>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>