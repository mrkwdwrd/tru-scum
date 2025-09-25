<script setup>
  import Scene  from '@/components/Scene.vue'
  import Camera from '@/components/Camera.vue'
  import Caption from '@/components/Caption.vue'
  import StaticStream from '@/components/StaticStream.vue'
  import { getCurrentInstance, onMounted, ref } from 'vue'

  const instance = getCurrentInstance()

  const props = defineProps({
    live:  Boolean,
    time: Number,
    viewers: Number
  })

  const emits = defineEmits(['count', 'mount'])

  const uuid = ref(instance.uid)

  onMounted(() => {
    emits('mount')
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full w-3/4 mx-auto items-center">
      <div class="w-full p-5 flex items-center flex-col">
        <Camera v-if="live" :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </Camera>
        <StaticStream v-else :id="uuid" :footer="true" :time="time">
          <Caption :viewers="viewers" />
        </StaticStream>
      </div>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>