<script setup>
const props = defineProps({
  id: Number,
  blank: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="relative h-full w-full bg-black">
    <slot />
  </section>
</template>