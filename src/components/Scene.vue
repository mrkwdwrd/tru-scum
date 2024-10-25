<script setup>
const props = defineProps({
  id: Number
})
</script>

<template>
  <section>
    <div class="debug">Scene: {{ id }}</div>
    <slot />
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