<script setup>
import Camera from '@/components/Camera.vue'
import Logo from '@/scenes/Logo.vue'
import Livestream from '@/scenes/Livestream.vue'
import LivestreamWithComments from '@/scenes/LivestreamWithComments.vue'
import LivestreamComments from '@/scenes/LivestreamComments.vue'
import InstagramAccount from '@/scenes/InstagramAccount.vue'
import InstagramPost from '@/scenes/InstagramPost.vue'
import InstagramComments from '@/scenes/InstagramComments.vue'
import InstagramBio from '@/scenes/InstagramBio.vue'
import Scene from '@/components/Scene.vue'
import { onMounted, ref, watch } from 'vue'
import notesImage from '@/assets/images/IMG_F86A9C06889F-1.jpeg'
import catEarsImage from '@/assets/images/openart-image_jwDWGUjj_1731311309198_raw.png'
import dressImage from '@/assets/images/openart-image_8rlC-yOP_1731742127760_raw.jpg'

const elem = document.documentElement

const reset = ref(false)

const fullScreen = ref(false)

const scene = ref(null)

const viewers = ref(0)

const time = ref(0)

const comments = ref([])

let timer

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? Math.min(scene.value + 1, 23) : 1
  }
  if (e.code === 'Backspace') {
    scene.value = scene.value > 1 ? scene.value - 1 : null
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
   timer = setInterval(() => {
    time.value++
    viewers.value = viewers.value + parseInt(Math.random() * 15)
  }, 1000)
}

const handleComments = array => {
  comments.value.push(...array)
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})

watch(scene, val => {
  if (val === null) {
    clearInterval(timer)
    time.value = 0
    viewers.value = 0
    comments.value = []
    reset.value = true
    setTimeout(() => {
      reset.value = false
    }, 2000)
  }
})
</script>

<template>
  <Camera v-show="false"  :footer="false"/>
  <main class="cursor-none">
    <button v-if="!fullScreen"
      @click="enterFullScreen"
      class="absolute text-white top-0 right-0 left-0 bottom-0 cursor-pointer">
      Enter Full Screen
    </button>

    <div v-if="reset" class="absolute text-black top-0 right-0 left-0 p-2 text-center bg-red-500 font-extrabold">RESET!</div>

    <!-- Logic Trap Logo -->
    <Logo v-if="scene === 1" />

    <!-- Livestream with Comments (s. 1) -->
    <LivestreamWithComments v-if="scene === 2" :viewers="viewers" :time="time" @start="startTime" :comments="comments" @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. 2) -->
    <LivestreamComments v-if="scene === 3" :comments="comments" @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. 3) -->
    <LivestreamWithComments v-if="scene === 4" :viewers="viewers" :time="time" :comments="comments" @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. 4) -->
    <LivestreamComments v-if="scene === 5" :comments="comments" @comments="val => handleComments(val)"/>

    <!-- Juniper's Instagram Profile -->
    <InstagramAccount v-if="scene === 6" />
    <InstagramPost v-if="scene === 7" :image="catEarsImage"/>
    <InstagramPost v-if="scene === 8" :image="dressImage"/>

    <!-- Juniper's Instagram Bio -->
    <InstagramBio v-if="scene === 9" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 10" :viewers="viewers" :time="time" :comments="comments" @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 11" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 12" :viewers="viewers" :time="time" :comments="comments" @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 13" :comments="comments" @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 14" :viewers="viewers" :time="time" :comments="comments" @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 15" />

    <!-- Fullscreen Livestream -->
    <Livestream v-if="scene === 16" :viewers="viewers" :time="time" />

    <!-- Juniper's Instagram Notes App Screenshot -->
    <InstagramPost v-if="scene === 17" :image="notesImage"/>

    <!-- Zoomed Instagram Comment(s) -->
    <InstagramComments v-if="scene === 18" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 19" :viewers="viewers" :time="time" :comments="comments" @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 20" />

    <!-- Livestream Switching Off -->
    <Livestream v-if="scene === 21" :viewers="viewers" :time="time" :comments="comments" @comments="val => handleComments(val)"/>
    <Scene  v-if="scene === 22"/>

    <Scene  v-if="scene === 23">
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
