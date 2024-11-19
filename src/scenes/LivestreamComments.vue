<script setup>
import Scene  from '@/components/Scene.vue'
import Comments from '@/components/Comments.vue'

const props = defineProps({
  existingComments: Array,
  comments: Array,
})

const emits = defineEmits(['comments'])
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full justify-center items-end max-w-2xl mx-auto">
      <!-- <Comments class="scale-150 max-h-20" :existingComments="comments" :comments="sceneTwo.comments.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)" @comments="val => emits('comments', val)"/> -->
      <Comments class="scale-150 max-h-20" :existingComments="existingComments" :comments="comments" @comments="val => emits('comments', val)"/>
    </div>
  </Scene>
</template>