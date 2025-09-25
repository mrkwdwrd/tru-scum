<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import Caption from '@/components/Caption.vue'
  import StaticStream from '@/components/StaticStream.vue'

  import { onMounted, getCurrentInstance, ref } from 'vue'

  const instance = getCurrentInstance()

  const props = defineProps({
    live: Boolean,
    existingComments: Array,
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
        <Camera v-if="live" :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </Camera>
        <StaticStream v-else :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </StaticStream>
      </div>
      <div class="h-screen w-1/3 flex items-center">
        <Comments :existingComments="existingComments" :comments="comments" :time="time" @comments="val => emits('comments', val)"/>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>