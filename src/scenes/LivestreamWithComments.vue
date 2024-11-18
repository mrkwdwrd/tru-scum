<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import Caption from '@/components/Caption.vue'
  import { onMounted, getCurrentInstance, ref } from 'vue'
  import { section1 } from '@/comments'

  const instance = getCurrentInstance()

  const props = defineProps({
    comments: Array,
    viewers: Number,
    time: Number
  })

  const emits = defineEmits(['count', 'mount', 'comments'])

  const uuid = ref(instance.uid)

  onMounted(() => {
    emits('mount')
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full items-center">
      <div class="w-2/3 p-5 flex items-center flex-col">
        <Camera :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </Camera>
      </div>
      <div class="h-screen w-1/3 flex items-center">
        <!-- <Comments :existingComments="comments" :comments="section1.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)" @comments="val => emits('comments', val)"/> -->
        <Comments :existingComments="comments" :comments="section1" @comments="val => emits('comments', val)"/>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>