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
import notesImage from '@/assets/images/IMG_12C199CFA5F9-1.jpg'
import catEarsImage from '@/assets/images/openart-image_jwDWGUjj_1731311309198_raw.png'
import dressImage from '@/assets/images/openart-image_8rlC-yOP_1731742127760_raw.jpg'
import Credits from './scenes/Credits.vue'
import {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10
} from '@/comments'

const elem = document.documentElement

const reset = ref(false)

const fullScreen = ref(false)

const showCue = ref(false)

const cue = ref(null)

const viewers = ref(1)

const time = ref(1)

const comments = ref([])

let timerInterval

let viewerInterval

const keyListener = (e) => {
  if (e.code === 'Space') {
    cue.value = cue.value ? Math.min(cue.value + 1, 29) : 1
  }
  if (e.code === 'Backspace') {
    cue.value = cue.value > 1 ? cue.value - 1 : null
  }
  if (e.code === 'KeyQ') {
    toggleShowCue()
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

const toggleShowCue = () => {
  showCue.value = !showCue.value
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

const getFactor = (val) => {
  if (val < 6000) {
    return randomIntFromInterval(16, 164)
  }
  if (val < 8000) {
    return randomIntFromInterval(4, 87)
  }
  if (val < 9000) {
    return randomIntFromInterval(1, 45)
  }
  return randomIntFromInterval(-4, 14)
}

const calcViewers = () => {
  viewerInterval = setInterval(() => {
    const factor = getFactor(viewers.value)
    const max = randomIntFromInterval(9376, 10022)
    const inc = parseInt(Math.random() * factor)
    viewers.value = Math.max(Math.min(viewers.value + inc, max), 1)
  }, 1000)
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

watch(cue, val => {
  console.warn('Cue', val, new Date(time.value * 1000).toISOString().slice(11, 19))
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

    <!-- Logic Trap Logo -->
    <Logo v-if="cue === 1" />

    <!-- Livestream with Comments (s. 1) -->
    <LivestreamWithComments v-if="cue === 2"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section1"
      @mount="startTime"
      @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. 2) -->
    <LivestreamComments v-if="cue === 3"
      :time="time"
      :existingComments="comments"
      :comments="section2"
      @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. 3) -->
    <LivestreamWithComments v-if="cue === 4"
      :viewers="viewers"
      :time="time"
      :comments="section3"
      :existingComments="comments"
      @comments="val => handleComments(val)"/>

    <Scene v-if="cue === 5"/>

    <LivestreamComments v-if="cue === 6"
      :time="time"
      :comments="section3"
      :existingComments="comments"
      @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. 4) -->
    <LivestreamComments v-if="cue === 7"
      :time="time"
      :existingComments="comments"
      :comments="section4"
      @comments="val => handleComments(val)"/>

    <!-- Juniper's Instagram Profile -->
    <InstagramAccount v-if="cue === 8" />

    <InstagramPost v-if="cue === 9"
      :image="catEarsImage"
      :age="[ 18, 'days' ]"
      :likes="72"
      caption="Getting kinda into this femboi astheic ngl 🐱🐾💙✨">
      <IgComment user="RainbowsAndRizz" image="RainbowsAndRizz" :age="`${18} days`" :likes="16" :replies="2" :stories="true" comment="SWEET BABY BOI 🥺"/>
      <IgComment user="KawaiiKingX🌸🐾" image="KawaiiKingX" :age="`${18} days`" :likes="2" :replies="0" :stories="false" comment="Beautiful!!! ♥️"/>
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${18} days`" :likes="1" :replies="0" :stories="true" comment="Yasssssssssssssssss"/>
      <IgComment user="NekoVibes" image="NekoVibes" :age="`${18} days`" :likes="1" :stories="true" comment="Trans rights are catboi rights!!!"/>
      <IgComment user="Meowster🐾💙" image="Meowster" :age="`${18} days`" :likes="1" :stories="false" comment="I’m getting into it too! You look gorgeous! 😊♥️"/>
    </InstagramPost>

      <!-- Juniper's Instagram Bio -->
    <InstagramBio v-if="cue === 10" />

    <InstagramPost v-if="cue === 11"
      :image="dressImage"
      :age="[ 21, 'days' ]"
      :likes="92"
      caption="Felt cute, might just conquer the world later 😌✨ #StayShiny 🌈💖">
      <IgComment user="RainbowsAndRizz" image="RainbowsAndRizz" :age="`${21} days`" :likes="16" :replies="0" :stories="true" comment="Omg, you’re absolutely SLAYING this look! ✨🔥 Love the vibes, you’re glowing frfr!"/>
      <IgComment user="TheyShineBright 🌈🌈🌈" image="TheyShineBright" :age="`${21} days`" :likes="2" :replies="0" :stories="true" comment="ngl this fit is EVERYTHING 😍✨ ur looking soooo confident im obsessed! xxx"/>
      <IgComment user="M4sc+M4gic" image="M4sc+M4gic" :age="`${21} days`" :likes="6" :replies="0" :stories="false" comment="Ayo, who let you be this stunning?? 💅🏽 This whole vibe is chef’s kiss 🤌🏻"/>
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${21} days`" :likes="1" :replies="0" :stories="true" comment="Bro, you’re legit radiating positivity 🫶 keep shining joojoo ✨🌟"/>
    </InstagramPost>

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="cue === 12"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section5"
      @comments="val => handleComments(val)"/>

    <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="cue === 13"
      :time="time"
      :existingComments="comments"
      :comments="section6"
      @comments="val => handleComments(val)"/>

    <Scene v-if="cue === 14"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="cue === 15"
      :time="time"
      :existingComments="comments"
      :comments="section7"
      @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="cue === 16"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section8"
      @comments="val => handleComments(val)"/>

      <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="cue === 17"
      :time="time"
      :existingComments="comments"
      :comments="section9"
      @comments="val => handleComments(val)"/>

    <Scene v-if="cue === 18"/>

    <!-- Fullscreen Livestream -->
    <Livestream v-if="cue === 19"
      :viewers="viewers"
      :time="time" />

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="cue === 20"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section9"
      @comments="val => handleComments(val)"/>

    <!-- Juniper's Instagram Notes App Screenshot -->
    <InstagramPost v-if="cue === 21"
      :image="notesImage"
      :age="[ 10, 'minutes' ]"
      :likes="222">
      <IgComment user="EnbyGlow✨" image="EnbyGlow" :age="`${10} minutes`" :likes="2" :stories="true" comment="I cannot imagine what you must be going through right now, Robin. Sending love, hugs, prayers…everything. 🫂♥️"/>
      <IgComment user="TheyShineBright 🌈🌈🌈" image="TheyShineBright" :age="`${9} minutes`" :likes="2" :replies="1" :stories="true" comment="Oh my god I can’t believe it please let him be safe!!! Take care of yourself 💟"/>
      <IgComment user="NekoVibes" image="NekoVibes" :age="`${8} minutes`" :likes="18" :replies="6" :stories="true" comment="Greg needs to delete his channel. I wouldn’t even believe it if he apologised at this point. He’s an absolute cancer to our community. More people need to see what happens when unhinged narcissistic trolls like him get a platform. They’re the ones who ACTUALLY make us look bad. Take a long hard look at yourself and log off. #ByeGreg"/>
      <IgComment user="ChillWithWill" image="ChillWithWill" :likes="4" :replies="2" :stories="false" comment="im crying…juni’s such a beacon of hope and positivity for me as a closeted enby i can’t even imagine…i hope he’s safe and i love you robin pls take care of yourself 🥺"/>
    </InstagramPost>

    <!-- Zoomed Instagram Comment(s) -->
    <InstagramComments v-if="cue === 22" />

    <!-- Fullscreen Comments (s. ?) -->
    <LivestreamComments v-if="cue === 23"
      :time="time"
      :existingComments="comments"
      :comments="section10"
      @comments="val => handleComments(val)"/>

    <!-- Livestream with Comments (s. ?) -->
    <LivestreamWithComments v-if="cue === 24"
      :viewers="viewers"
      :time="time"
      :existingComments="comments"
      :comments="section10"
      @comments="val => handleComments(val)"/>

    <Livestream v-if="cue === 25"
      :viewers="viewers"
      :time="time" />

    <LivestreamOff v-if="cue === 26"
      :viewers="viewers"
      :time="time"
      @mount="stopTime" />

    <Logo v-if="cue === 27" />
    <Logo v-if="cue === 28"
      :fadeOut="true" />

    <Credits v-if="cue === 29"/>

    <div v-if="showCue" class="absolute text-black top-0 right-0 left-0 p-2 text-center bg-neutral-200 font-extrabold">Cue {{ cue }}</div>
    <div v-if="reset" class="absolute text-black top-0 right-0 left-0 p-2 text-center bg-green-600 font-extrabold">RESET!</div>

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
