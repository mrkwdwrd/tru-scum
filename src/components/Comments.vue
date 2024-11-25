<script setup>
import Comment from '@/components/Comment.vue'
import usernames from '@/usernames'
import { ref, onBeforeUnmount, onMounted } from 'vue'
const props = defineProps({
  existingComments: {
    type: Array,
    default: []
  },
  comments: Array,
  time: Number
})

const emits = defineEmits(['comments'])

const comments = ref([])

const interval = 1500

onBeforeUnmount(() => {
  promise = null
  clearTimeout(timeout)
  emits('comments', comments.value)
})

let promise = Promise.resolve()
let timeout

const images = ref([])

const findImage = () => {
  let int = parseInt(Math.random() * (482 - 1) + 1)
  while (images.value.indexOf(int) >= 0) int = parseInt(Math.random() * (283 - 1) + 1)
  images.value.push(int)
  if (images.value.length > 80) {
    images.value.shift()
  }
  return Math.floor(int).toString().padStart(4, 0)
}

const showComments = (array) => {
  if (promise) {
    array.forEach(function (comment) {
      promise = promise.then(function () {
        comments.value.push({
          image: findImage(),
          user: usernames[parseInt(Math.random() * (1099 - 1) + 1)],
          text: comment,
          delay: parseInt(Math.random() * 900)
        })
        return new Promise(function (resolve) {
          timeout = setTimeout(resolve, interval)
        })
      })
    })
    promise.then(function () {
      console.warn('--- Comments Repeat', new Date(props.time * 1000).toISOString().slice(11, 19))
      showComments(props.comments)
    })
  }
}

onMounted(() => {
  showComments(props.comments)
})
</script>

<template>
  <div class="h-full w-full p-5 flex flex-col justify-end gap-2">
    <Comment v-for="comment in existingComments" :text="comment.text" :user="comment.user" :image="comment.image"/>
    <Comment v-for="comment in comments" :text="comment.text" :user="comment.user" :image="comment.image" :delay="comment.delay"/>
  </div>
</template>