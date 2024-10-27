<script setup>
const props = defineProps({
  id: Number
})
</script>

<template>
  <section class="relative h-full w-full">
    <div class="debug">Scene: {{ id }}</div>
    <slot />
  </section>
</template>

<style lang="css" scoped>
  .debug {
    position: absolute;
    background: #333;
    bottom: 0;
    left: 0;
    color: #666;
    padding: 5px 10px;
    font-size: 11px;
  }
</style>