<script setup>
import Comment from '@/components/Comment.vue'
const prop = defineProps({
  comments: Array
})
</script>

<template>
    <div class="h-full w-full p-5 bg-gray-300 flex flex-col justify-end gap-2">
      <Comment v-for="(comment, key) in comments" :text="comment.text" :user="comment.user" :delay="(key * 500) + comment.delay"/>
    </div>
</template>

<style lang="css" scoped>
</style>