<script setup>
import Camera from '@/components/Camera.vue'
import SceneOne from '@/scenes/SceneOne.vue'
import SceneTwo from '@/scenes/SceneTwo.vue'
import SceneThree from '@/scenes/SceneThree.vue'
import SceneFour from '@/scenes/SceneFour.vue'
import SceneFive from '@/scenes/SceneFive.vue'
import SceneSix from '@/scenes/SceneSix.vue'
import SceneSeven from '@/scenes/SceneSeven.vue'
import SceneEight from '@/scenes/SceneEight.vue'
import SceneTen from '@/scenes/SceneTen.vue'
import Scene from '@/components/Scene.vue'
import { onMounted, ref } from 'vue'

const elem = document.documentElement

const fullScreen = ref(false)

const scene = ref(null)

const viewers = ref(88)

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? Math.min(scene.value + 1, 19) : 1
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
  <Camera v-show="false" v-if="!scene" :footer="false"/>
  <main>
    <button v-if="!fullScreen"
      @click="enterFullScreen"
      class="absolute text-white top-0 right-0 left-0 bottom-0">
      Enter Full Screen
    </button>
    <!-- 1. Livestream Fullscreen? -->
    <SceneOne v-if="scene === 1" :id="1" :viewers="viewers" @count="val => { viewers = val }"/>
    <Scene  v-if="scene === 2"/>
    <!-- 2. YouTube Search -->
    <SceneTwo v-if="scene === 3" :id="2" />
    <Scene  v-if="scene === 4"/>
    <!-- 3. Juniper's Instagram Profile -->
    <SceneThree v-if="scene === 5" :id="3" />
    <Scene  v-if="scene === 6"/>
    <!-- 4. Juniper's Instagram Cat Photo -->
    <SceneFour v-if="scene === 7" :id="4" />
    <Scene  v-if="scene === 8"/>
    <!-- 5. Juniper's Instagram Profile Description -->
    <SceneFive v-if="scene === 9" :id="5" />
    <Scene  v-if="scene === 10"/>
    <!-- 6. Livestream with Comments -->
    <SceneSix v-if="scene === 11" :id="6" :viewers="viewers + 72" @count="val => { viewers = val }"/>
    <Scene  v-if="scene === 12"/>
    <!-- 7. Juniper's Instagram Notes App Screenshot -->
    <SceneSeven v-if="scene === 13" :id="7" />
    <Scene  v-if="scene === 14"/>
    <!-- 8. Zoomed Instagram Comment(s) -->
    <SceneEight v-if="scene === 15" :id="8" />
    <Scene  v-if="scene === 16"/>
    <!-- 9. Greg's Twitter/Instagram DMs TBC-->
    <!-- 10. Livestream Switching Off -->
    <SceneTen v-if="scene === 17" :id="10" :viewers="viewers + 112" @count="val => { viewers = val }"/>
    <Scene  v-if="scene === 18"/>

    <Scene  v-if="scene === 19">
      <div class="flex h-full justify-center items-center">
        <span class="text-white font-semibold">Fin.</span>
      </div>
    </Scene>


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
