<script setup>
  import Scene  from '@/components/Scene.vue'
  import Video from '@/components/Video.vue'
  import Caption from '@/components/VideoCaption.vue'
  import { getCurrentInstance, onMounted, ref } from 'vue'

  const instance = getCurrentInstance()

  const props = defineProps({
    video: Object
  })

  const uuid = ref(instance.uid)

  const scale = ref(1.0)

  const zoomIn = (curr) => {
    if (curr < 6.5) {
      scale.value = curr
      return setTimeout(() => {
        zoomIn(curr + 0.1)
      }, Math.random() * 100)
    }
  }
  onMounted(() => {
    setTimeout(() => {
      zoomIn(scale.value)
    }, 500)
  })

</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full w-3/4 mx-auto items-center">
      <div class="w-full p-5 flex items-center flex-col">
        <Video
          :style="`transform: scale(${scale}); transform-origin: 190px 360px;`"
          :id="uuid"
          :footer="true"
          :source="video?.source"
          :start="video?.start"
          :play-at="video?.playAt"
          :stop-at="video?.stopAt"
          :scrub-speed="video?.scrubSpeed">
          <Caption :video="video" />
        </Video>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>