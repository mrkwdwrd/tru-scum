<script setup>
import Comment from '@/components/Comment.vue'
import usernames from '@/content/usernames'
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { chat } from '@/content/users.js'

const props = defineProps({
  existingComments: {
    type: Array,
    default: []
  },
  comments: Array,
  injectComments: {
    type: Array,
    default: null
  },
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
  while (images.value.indexOf(int) >= 0) int = parseInt(Math.random() * (482 - 1) + 1)
  images.value.push(int)
  if (images.value.length > 80) {
    images.value.shift()
  }
  return `/assets/profile-images/${Math.floor(int).toString().padStart(4, 0)}.jpg`
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

const injectComments = (array) => {
  return new Promise(function (resolve) {
    array.forEach(function (comment) {
      comments.value.push({
        image: comment.user ? chat[comment.user].avatar : findImage(),
        user: comment.user ? chat[comment.user].name : usernames[parseInt(Math.random() * (1099 - 1) + 1)],
        text: comment.text,
        delay: parseInt(Math.random() * 900)
      })
    })
    return resolve()
  })
}

onMounted(() => {
  if (props.injectComments) {
    injectComments(props.injectComments).then(() => {
      setTimeout(() => {
        showComments(props.comments)
      }, 2500)
    })
  } else {
    showComments(props.comments)
  }

})
</script>

<template>
  <div class="h-full w-full p-5 flex flex-col justify-end gap-2">
    <Comment v-for="comment in existingComments" :text="comment.text" :user="comment.user" :image="comment.image"/>
    <Comment v-for="comment in comments" :text="comment.text" :user="comment.user" :image="comment.image" :delay="comment.delay"/>
  </div>
</template>