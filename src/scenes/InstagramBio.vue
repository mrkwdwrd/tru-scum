<script setup>
  import Scene from '@/components/Scene.vue'
  import IgBio from '@/components/IgBio.vue'
  import { instagram } from '@/content/users'

  const props = defineProps({
    user: String
  })

</script>
<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
      <div class="flex h-full relative">
        <main class="w-full flex items-center scale-150">
          <IgBio class="scale-150" :user="instagram[user]"/>
        </main>
      </div>
  </Scene>
</template>
