<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Comments from '@/components/Comments.vue'
  import Caption from '@/components/LivestreamCaption.vue'
  import StaticStream from '@/components/StaticStream.vue'

  import { onMounted, getCurrentInstance, ref } from 'vue'

  const instance = getCurrentInstance()

  const props = defineProps({
    live: Boolean,
    existingComments: Array,
    comments: Array,
    viewers: Number,
    time: Number,
    hideComments: Boolean
  })

  const emits = defineEmits(['count', 'mount', 'comments'])

  const uuid = ref(instance.uid)

  onMounted(() => {
    emits('mount')
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full items-center ">
      <div class="w-2/3 p-5 flex items-center flex-col"
        style="transform: translate(100px, 140px)">
        <Camera v-if="live" :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </Camera>
        <StaticStream v-else :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </StaticStream>
      </div>
      <div v-if="!hideComments" class="h-3/4 w-1/3 flex items-center justify-center pl-36 relative overflow-hidden">
        <Comments :existingComments="existingComments" :comments="comments" :time="time" @comments="val => emits('comments', val)"/>
        <div class="absolute top-0 left-36 right-0 h-1/3 bg-gradient-to-t from-transparent to-black" />
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>