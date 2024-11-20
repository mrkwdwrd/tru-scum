<script setup>
import Camera from '@/components/Camera.vue'
import Logo from '@/scenes/Logo.vue'
import Livestream from '@/scenes/Livestream.vue'
import LivestreamWithComments from '@/scenes/LivestreamWithComments.vue'
import LivestreamComments from '@/scenes/LivestreamComments.vue'
import LivestreamOff from '@/scenes/LivestreamOff.vue'
import InstagramAccount from '@/scenes/InstagramAccount.vue'
import InstagramPost from '@/scenes/InstagramPost.vue'
import IgComment from '@/components/IgComment.vue'
import InstagramComments from '@/scenes/InstagramComments.vue'
import InstagramBio from '@/scenes/InstagramBio.vue'
import Scene from '@/components/Scene.vue'
import { onMounted, ref, watch } from 'vue'
import notesImage from '@/assets/images/IMG_F86A9C06889F-1.jpeg'
import catEarsImage from '@/assets/images/openart-image_jwDWGUjj_1731311309198_raw.png'
import dressImage from '@/assets/images/openart-image_8rlC-yOP_1731742127760_raw.jpg'
import { section1, section2, section3, section4  } from '@/comments'

const elem = document.documentElement

const reset = ref(false)

const fullScreen = ref(false)

const scene = ref(null)

const viewers = ref(1)

const time = ref(1)

const comments = ref([])

let timerInterval

let viewerInterval

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? Math.min(scene.value + 1, 26) : 1
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
  calcViewers()
  timerInterval = setInterval(() => {
    time.value++
  }, 1000)
}

const stopTime = () => {
  clearInterval(timerInterval)
}

const calcViewers = () => {
  viewerInterval = setInterval(() => {
    const factor = randomIntFromInterval(-24, 334)
    const max = randomIntFromInterval(59376, 61022)
    const inc = parseInt(Math.random() * factor)
    viewers.value = Math.min(viewers.value + inc, max)
  }, 500)
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const handleComments = array => {
  comments.value.push(...array)
  comments.value.splice(0, comments.value.length - 10)
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})

watch(scene, val => {
  console.warn('Scene', val, new Date(time.value * 1000).toISOString().slice(11, 19))
  if (val === null) {
    clearInterval(timerInterval)
    clearInterval(viewerInterval)
    time.value = 1
    viewers.value = 1
    comments.value = []
    reset.value = true
    setTimeout(() => {
      time.value = 1
      viewers.value = 1
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

    <div v-if="reset" class="absolute text-black top-0 right-0 left-0 p-2 text-center bg-green-600 font-extrabold">RESET!</div>

    <!-- Logic Trap Logo -->
    <Logo v-if="scene === 1" />

    <!-- Livestream with Comments (s. 1) -->
    <LivestreamWithComments v-if="scene === 2"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section1"
      @mount="startTime"
      @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. 2) -->
    <LivestreamComments v-if="scene === 3"
      :time="time"
      :existingComments="comments"
      :comments="section2"
      @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. 3) -->
    <LivestreamWithComments v-if="scene === 4"
      :viewers="viewers"
      :time="time"
      :comments="section3"
      :existingComments="comments"
      @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. 4) -->
    <LivestreamComments v-if="scene === 5"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Juniper's Instagram Profile -->
    <InstagramAccount v-if="scene === 6" />
    <InstagramPost v-if="scene === 7"
      :image="catEarsImage"
      :age="[ 18, 'days' ]"
      :likes="72"
      caption="🐱🐾💙✨">
      <IgComment user="RainbowsAndRizz" image="RainbowsAndRizz" :age="`${18} days`" :likes="16" :replies="2" :stories="true" comment="SWEET BABY BOI 🥺"/>
      <IgComment user="KawaiiKingX🌸🐾" image="KawaiiKingX" :age="`${18} days`" :likes="2" :replies="0" :stories="false" comment="Beautiful!!! ♥️"/>
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${18} days`" :likes="1" :replies="0" :stories="true" comment="Yasssssssssssssssss"/>
      <IgComment user="NekoVibes" image="NekoVibes" :age="`${18} days`" :likes="1" :stories="true" comment="Trans rights are catboi rights!!!"/>
      <IgComment user="Meowster🐾💙" image="Meowster" :age="`${18} days`" :likes="1" :stories="false" comment="I’m getting into it too! You look gorgeous! 😊♥️"/>
    </InstagramPost>
    <InstagramPost v-if="scene === 8"
      :image="dressImage"
      :age="[ 21, 'days' ]"
      :likes="92"
      caption="Felt cute, might just conquer the world later 😌✨ #StayShiny 🌈💖">
      <IgComment user="RainbowsAndRizz" image="RainbowsAndRizz" :age="`${21} days`" :likes="16" :replies="0" :stories="true" comment="Omg, you’re absolutely SLAYING this look! ✨🔥 Love the vibes, you’re glowing frfr!"/>
      <IgComment user="TheyShineBright 🌈🌈🌈" image="TheyShineBright" :age="`${21} days`" :likes="2" :replies="0" :stories="true" comment="ngl this fit is EVERYTHING 😍✨ ur looking soooo confident im obsessed! xxx"/>
      <IgComment user="M4sc+M4gic" image="M4sc+M4gic" :age="`${21} days`" :likes="6" :replies="0" :stories="false" comment="Ayo, who let you be this stunning?? 💅🏽 This whole vibe is chef’s kiss 🤌🏻"/>
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${21} days`" :likes="1" :replies="0" :stories="true" comment="Bro, you’re legit radiating positivity 🫶 keep shining joojoo ✨🌟"/>
    </InstagramPost>

    <!-- Juniper's Instagram Bio -->
    <InstagramBio v-if="scene === 9" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 10"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 11"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 12"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 13"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 14"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 15"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Fullscreen Livestream -->
    <Livestream v-if="scene === 16"
      :viewers="viewers"
      :time="time" />

    <!-- Juniper's Instagram Notes App Screenshot -->
    <InstagramPost v-if="scene === 17"
      :image="notesImage"
      :age="[ 10, 'minutes' ]"
      :likes="222">
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${10} minutes`" :likes="2" :stories="true" comment="I cannot imagine what you must be going through right now, Robin. Sending love, hugs, prayers…everything. 🫂♥️"/>
      <IgComment user="TheyShineBright 🌈🌈🌈" image="TheyShineBright" :age="`${9} minutes`" :likes="2" :replies="1" :stories="true" comment="Oh my god I can’t believe it please let him be safe!!! Take care of yourself 💟"/>
      <IgComment user="NekoVibes" image="NekoVibes" :age="`${8} minutes`" :likes="18" :replies="6" :stories="true" comment="Greg needs to delete his channel. I wouldn’t even believe it if he apologised at this point. He’s an absolute cancer to our community. More people need to see what happens when unhinged narcissistic trolls like him get a platform. They’re the ones who ACTUALLY make us look bad. Take a long hard look at yourself and log off. #ByeGreg"/>
      <IgComment user="ChillWithWill" image="ChillWithWill" :likes="4" :replies="2" :stories="false" comment="im crying…juni’s such a beacon of hope and positivity for me as a closeted enby i can’t even imagine…i hope he’s safe and i love you robin pls take care of yourself 🥺"/>
    </InstagramPost>

    <!-- Zoomed Instagram Comment(s) -->
    <InstagramComments v-if="scene === 18" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="scene === 19"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="scene === 20"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Livestream Switching Off -->
    <Livestream v-if="scene === 21"
      :viewers="viewers"
      :time="time" />

    <LivestreamOff v-if="scene === 22"
      :viewers="viewers"
      :time="time"
      @mount="stopTime" />

    <Scene  v-if="scene === 23"/>

    <Logo v-if="scene === 24" />
    <Logo v-if="scene === 25"
      :fadeOut="true" />

    <!-- Logo -->
    <Scene  v-if="scene === 26">
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
