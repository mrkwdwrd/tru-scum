<script setup>
  import Scene from '@/components/Scene.vue'
  import IgUI from '@/components/IgUI.vue'
  import { instagram } from '@/content/users'

  const props = defineProps({
    user: String
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="h-screen flex justify-center items-center">
      <IgUI :user="instagram[user]"/>
    </div>
  </Scene>
</template>
