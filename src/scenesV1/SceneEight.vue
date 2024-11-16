<script setup>
  import Scene  from '@/components/Scene.vue'
  import IgComment from '@/components/IgComment.vue'

  const props = defineProps({
    id: Number
  })
</script>

<template>
  <Scene :id="id" class="bg-black max-w-[1980px] mx-auto">
    <div class="max-w-lg mx-auto flex items-center h-full">
      <IgComment user="Condimentum" age="27d" :likes="2" :stories="true" class="scale-150" />
    </div>
  </Scene>
</template>