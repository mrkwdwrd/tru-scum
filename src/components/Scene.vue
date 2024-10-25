<script setup>
import Camera from '@/components/Camera.vue'
const props = defineProps({
  id: Number
})
</script>

<template>
  <section>
    <div class="debug">Scene: {{ id }}</div>
    <Camera :id="`s${id}c1`"/>
  </section>
</template>

<style scoped>
  section {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .debug {
    position: absolute;
    background: #000;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #666;
    padding: 5px 10px;
    font-size: 11px;
  }
</style>