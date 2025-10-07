<script setup>
  import Scene from '@/components/Scene.vue'
  import Tweet from '@/components/Tweet.vue';

  const props = defineProps({
    tweet: Object
  })

</script>
<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center">
        <Tweet :tweet="tweet" />
      </main>
    </div>
  </Scene>
</template>
