<script setup>
import Scene  from '@/components/Scene.vue'
import Comments from '@/components/Comments.vue'
import { sceneTwo } from '@/content.js'

const props = defineProps({
  comments: Array
})

const emits = defineEmits(['comments'])
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full justify-center items-end max-w-2xl mx-auto">
      <Comments class="scale-150 max-h-20" :existingComments="comments" :comments="sceneTwo.comments" @comments="val => emits('comments', val)"/>
    </div>
  </Scene>
</template>

<style lang="css" scoped>
</style>