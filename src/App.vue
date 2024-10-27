<script setup>
import Camera from '@/components/Camera.vue'
import SceneOne from './scenes/SceneOne.vue';
import SceneTwo from './scenes/SceneTwo.vue';
import { onMounted, ref } from 'vue';

const scene = ref(null)

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? scene.value + 1 : 1
  }
  if (e.code === 'Backspace') {
    scene.value = scene.value ? scene.value - 1 : null
  }
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})
</script>

<template>
  <Camera v-show="false" />
  <main>
    <SceneOne v-if="scene === 1" :id="1" />
    <SceneTwo v-if="scene === 2" :id="2" />
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
