<script setup>
import Comment from '@/components/Comment.vue'
const prop = defineProps({
  comments: Array
})
</script>

<template>
    <div class="h-full w-full p-5 flex flex-col justify-end gap-2 border-l border-neutral-700">
      <Comment v-for="(comment, key) in comments" :text="comment.text" :user="comment.user" :delay="(key * 500) + comment.delay"/>
    </div>
</template>

<style lang="css" scoped>
</style>