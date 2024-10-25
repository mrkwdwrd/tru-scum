<script setup>
import Camera from '@/components/Camera.vue'
import Scene from '@/components/Scene.vue'
import { onMounted, ref } from 'vue';

const scene = ref(null)

const keyListener = (e) => {
  if (e.code === 'Space') {
    scene.value = scene.value ? scene.value + 1 : 1
  }
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})
</script>

<template>
  <Camera v-show="false" />
  <main>
    <Scene v-if="scene === 1" :id="1" />
    <Scene v-if="scene === 2" :id="2" />
  </main>
</template>

<style scoped>
  main {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
</style>
