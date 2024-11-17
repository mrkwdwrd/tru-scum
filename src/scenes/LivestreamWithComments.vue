<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import Caption from '@/components/Caption.vue'
  import { onMounted, getCurrentInstance, ref } from 'vue'
  import { sceneTwo } from '@/content.js'

  const instance = getCurrentInstance()

  const props = defineProps({
    comments: Array,
    viewers: Number,
    time: Number
  })

  const emits = defineEmits(['count', 'start', 'comments'])

  const uuid = ref(instance.uid)

  onMounted(() => {
    emits('start')
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full items-center">
      <div class="w-2/3 p-5 flex items-center flex-col">
        <Camera :id="uuid" :footer="true" :time="time">
          <Caption :time="time" :viewers="viewers" />
        </Camera>
      </div>
      <div class="h-screen w-1/3 flex items-center">
        <Comments :existingComments="comments" :comments="sceneTwo.comments" @comments="val => emits('comments', val)"/>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>