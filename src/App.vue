<script setup>
import Camera from '@/components/Camera.vue'
import { onMounted, ref } from 'vue';

const showCamera = ref(false)

const keyListener = (e) => {
  showCamera.value = !showCamera.value
}

onMounted(() => {
  document.addEventListener('keydown', keyListener)
})
</script>

<template>
  <Camera id="cam-1" v-if="showCamera"/>
</template>

<style scoped>
</style>
