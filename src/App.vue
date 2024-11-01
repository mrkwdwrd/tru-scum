<script setup>
import Camera from '@/components/Camera.vue'
import SceneOne from '@/scenes/SceneOne.vue'
import SceneTwo from '@/scenes/SceneTwo.vue'
import SceneThree from '@/scenes/SceneThree.vue'
import { onMounted, ref } from 'vue'

const elem = document.documentElement

const fullScreen = ref(false)

const scene = ref(null)

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? scene.value + 1 : 1
  }
  if (e.code === 'Backspace') {
    scene.value = scene.value ? scene.value - 1 : null
  }
}

const enterFullScreen = () => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen()
  }
  fullScreen.value = true
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})
</script>

<template>
  <Camera v-show="false" v-if="!scene"/>
  <main>
    <button v-if="!fullScreen"
      @click="enterFullScreen"
      class="absolute text-white top-0 right-0 left-0 bottom-0">
      Enter Full Screen
    </button>
    <SceneOne v-if="scene === 1" :id="1" />
    <SceneTwo v-if="scene === 2" :id="2" />
    <SceneThree v-if="scene === 3" :id="3" />
  </main>
</template>

<style lang="css" scoped>
  main {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
</style>
