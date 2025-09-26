`<script setup>
  import Scene from '@/components/Scene.vue'
  import profileImage from '@/assets/images/openart-image_GjENJ-VC_1731748862428_raw.png'
  import Tweet from '@/components/Tweet.vue';

  const props = defineProps({
  })

</script>
<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center">
        <Tweet :avatar="profileImage"/>
      </main>
    </div>
  </Scene>
</template>
`