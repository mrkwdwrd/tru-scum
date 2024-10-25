<script setup>
import { onMounted } from 'vue';

const startCamera = () => {
    const video = document.getElementById('video')
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
              video.srcObject = stream
          })
          .catch(function(error) {
              console.log("Something went wrong!")
          });
    }
}

onMounted(() => {
  startCamera()
})
</script>

<template>
  <video id="video" autoplay></video>
</template>

<style scoped>
</style>
