<script setup>
  import Scene from '@/components/Scene.vue'
  import logo from '@/assets/images/LogicTrap_logo.png'
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

  const props = defineProps({
    countdown: {
      type: Number,
      default: null
    }
  })

  const fade = ref(false)
  const remaining = ref(props.countdown)
  let timerInterval = null

  onMounted (() => {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        remaining.value = remaining.value - 10
      }, 10)
    }
  })
  onBeforeUnmount (() => {
    clearInterval(timerInterval)
  })

  watch (remaining, (val) => {
    if (val === 0 ) {
      clearInterval(timerInterval)
      fade.value = true
    }
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
      <div class="flex flex-col h-full justify-center items-center gap-10">
        <span id="logo" :class="['block rounded-full overflow-hidden h-[60vh] aspect-square bg-white p-10', { 'fade-out': fade }]">
          <img :src="logo"/>
        </span>
        <span v-if="countdown" id="countdown" :class="['text-white text-8xl font-semibold font-sourcesans uppercase text-center', { 'fade-out': fade }]">Livestream starting <br />in {{ new Date(remaining).toISOString().slice(11, 19) }}</span>
      </div>
  </Scene>
</template>

<style lang="css" scoped>
  #logo {
    opacity: 1;
    transition: 1s opacity 1s ease-in-out;
  }
  #countdown {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
  #logo.fade-out,
  #countdown.fade-out {
    opacity: 0;
  }
</style>