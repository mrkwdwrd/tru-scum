<script setup>
import Scene  from '@/components/Scene.vue'
import Comments from '@/components/Comments.vue'

const props = defineProps({
  existingComments: Array,
  comments: Array,
  time: Number
})

const emits = defineEmits(['comments'])
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full justify-center max-w-xl mx-auto items-stretch">
      <div class="flex items-end relative w-full h-[100vh] pb-8">
        <div class="w-full h-full relative">
          <div class="scale-150 h-full absolute bottom-0 left-0 right-0 max-h-20">
            <Comments class="scale-150" :existingComments="existingComments" :comments="comments" :time="time" @comments="val => emits('comments', val)"/>
          </div>
        </div>
      </div>
    </div>
  </Scene>
</template>