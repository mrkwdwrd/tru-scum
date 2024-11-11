<script setup>
  import Scene  from '@/components/Scene.vue';
  import IgBio  from '@/components/IgBio.vue';
  import profileImg from '@/assets/images/openart-image_NGXUjRea_1731311569725_raw.png'

  const props = defineProps({
    id: Number
  })
</script>

<template>
  <Scene :id="id" class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center">
        <IgBio class="scale-150" :image="profileImg"/>
      </main>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>