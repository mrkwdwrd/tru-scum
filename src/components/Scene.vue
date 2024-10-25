<script setup>
import Camera from '@/components/Camera.vue'
const props = defineProps({
  id: Number
})
</script>
<template>
 <p>Scene: {{ id }}</p>
 <Camera />
</template>