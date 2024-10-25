<script setup>
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
  <Scene v-if="scene === 1" :id="1" />
  <Scene v-if="scene === 2" :id="2" />
</template>

<style scoped>
</style>
