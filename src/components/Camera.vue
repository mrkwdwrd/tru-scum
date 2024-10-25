<script setup>
import { onMounted } from 'vue';
const props = defineProps({
  id: String
})
const startCamera = () => {
    const video = document.getElementById(`${props.id}-video`)
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
  <video :id="`${id}-video`" autoplay v-show="id"></video>
</template>

<style scoped>
</style>
