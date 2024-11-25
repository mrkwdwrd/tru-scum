<script setup>
  import Scene from '@/components/Scene.vue'
  import logo from '@/assets/images/LogicTrap_logo.png'
  import { ref } from 'vue'

  const props = defineProps({
    fadeOut: {
      type: Boolean,
      default: false
    }
  })

  const fade = ref(false)

  if (props.fadeOut) {
    setTimeout(() => {
      fade.value = true
    }, 500)
  }
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
      <div class="flex h-full justify-center items-center">
        <span id="logo" :class="['block rounded-full overflow-hidden h-[70vh] aspect-square bg-white p-10', { 'fade-out': fade }]">
          <img :src="logo"/>
        </span>
      </div>
  </Scene>
</template>

<style lang="css" scoped>
  #logo {
    opacity: 1;
    transition: opacity 8s ease-in-out;
  }
  #logo.fade-out {
    opacity: 0;
  }
</style>