<script setup>
  import Scene  from '@/components/Scene.vue'
  import IgComment from '@/components/IgComment.vue'

  const props = defineProps({
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="max-w-lg mx-auto flex items-center h-full">
      <IgComment user="Condimentum" :age="[ 16, 'minutes' ]" :likes="2" :replies="2" :stories="true" comment="Aenean lacinia bibendum nulla sed consectetur." class="scale-150" />
    </div>
  </Scene>
</template>