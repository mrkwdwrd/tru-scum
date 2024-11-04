<script setup>
import Camera from '@/components/Camera.vue'
import SceneOne from '@/scenes/SceneOne.vue'
import SceneTwo from '@/scenes/SceneTwo.vue'
import SceneThree from '@/scenes/SceneThree.vue'
import SceneFour from '@/scenes/SceneFour.vue'
import SceneFive from '@/scenes/SceneFive.vue'
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
    <!-- 1. Livestream Fullscreen? -->
    <!-- 2. YouTube Search -->
    <!-- 3. Avery's Instagram Profile -->
    <!-- 4. Avery's Instagram Cat Photo -->
    <!-- 5. Avery's Instagram Profile Description -->
    <!-- 6. Livestream with Comments -->
    <!-- 7. Avery's Instagram Notes App Screenshot -->
    <!-- 8. Zoomed Instagram Comment(s) -->
    <!-- 9. Greg's Twitter/Instagram DMs -->
    <!-- 10. Livestream Switching Off -->
    <SceneOne v-if="scene === 1" :id="1" />
    <SceneTwo v-if="scene === 2" :id="2" />
    <SceneThree v-if="scene === 3" :id="3" />
    <SceneFour v-if="scene === 4" :id="4" />
    <SceneFive v-if="scene === 5" :id="5" />

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
