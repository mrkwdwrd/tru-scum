<script setup>
import { onMounted } from 'vue';
const props = defineProps({
  id: String,
  footer: Boolean
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
  <div class="flex flex-col w-full">
    <div :class="['w-full h-full overflow-hidden', { 'max-h-[80vh]': footer }]">
      <video v-show="id" :id="`${id}-video`" autoplay class="w-full"></video>
    </div>
    <slot/>
  </div>
</template>

<style lang="css" scoped>
</style>
