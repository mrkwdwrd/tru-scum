<script setup>
  import Scene  from '@/components/Scene.vue';
  import Camera from '@/components/Camera.vue'

  const props = defineProps({
    id: Number
  })
</script>

<template>
  <Scene :id="id">
      <Camera :id="`s${id}c1`"/>
  </Scene>
</template>

<style lang="css" scoped>
</style>