<script setup>
import Camera from '@/components/Camera.vue'
import Logo from './scenes/Logo.vue'
import Livestream from './scenes/Livestream.vue'
import LivestreamWithComments from './scenes/LivestreamWithComments.vue'
import LivestreamComments from './scenes/LivestreamComments.vue'
import InstagramAccount from './scenes/InstagramAccount.vue'
import InstagramPost from '@/scenes/InstagramPost.vue'
import InstagramComments from './scenes/InstagramComments.vue'
import Scene from '@/components/Scene.vue'
import { onMounted, ref } from 'vue'

const elem = document.documentElement

const fullScreen = ref(false)

const scene = ref(null)

const viewers = ref(88)

const time = ref(0)

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? Math.min(scene.value + 1, 20) : 1
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

const startTime = () => {
  setInterval(() => {
    time.value++
    viewers.value = viewers.value + parseInt(Math.random() * 15)
  }, 1000)
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})
</script>

<template>
  <Camera v-show="false"  :footer="false"/>
  <main>
    <button v-if="!fullScreen"
      @click="enterFullScreen"
      class="absolute text-white top-0 right-0 left-0 bottom-0">
      Enter Full Screen
    </button>

    <!-- Logic Trap Logo -->
    <Logo v-if="scene === 1" />

    <!-- Livestream with Comments (s. 1) -->
    <LivestreamWithComments v-if="scene === 2" :viewers="viewers" :time="time" @start="startTime"/>

      <!-- Fullscreen Comments (s. 2) -->
    <LivestreamComments v-if="scene === 3" />

    <!-- Livestream with Comments (s. 3) -->
    <LivestreamWithComments v-if="scene === 4" :viewers="viewers" :time="time" />

    <!-- Fullscreen Comments (s. 4) -->
    <LivestreamComments v-if="scene === 5" />

    <!-- Juniper's Instagram Profile -->
    <InstagramAccount v-if="scene === 6" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 7" :viewers="viewers" :time="time" />

    <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 8" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 9" :viewers="viewers" :time="time" />

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 10" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 11" :viewers="viewers" :time="time" />

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 12" />

    <!-- Fullscreen Livestream -->
    <Livestream v-if="scene === 13" :viewers="viewers" :time="time" />

    <!-- Juniper's Instagram Notes App Screenshot -->
    <InstagramPost  v-if="scene === 14" />

    <!-- Zoomed Instagram Comment(s) -->
    <InstagramComments v-if="scene === 15" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 16" :viewers="viewers" :time="time" />

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 17" />

    <!-- Livestream Switching Off -->
    <Livestream v-if="scene === 18" :viewers="viewers" :time="time" />
    <Scene  v-if="scene === 19"/>

    <Scene  v-if="scene === 20">
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
