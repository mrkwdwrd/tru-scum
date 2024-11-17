<script setup>
import Comment from '@/components/Comment.vue'
import { ref, onBeforeUnmount, getCurrentInstance, onMounted } from 'vue'
const props = defineProps({
  existingComments: {
    type: Array,
    default: []
  },
  comments: Array
})

const instance = getCurrentInstance()

const emits = defineEmits(['comments'])

const comments = ref([])

const uuid = ref(instance.uid)

const interval = 1000

onBeforeUnmount(() => {
  promise = null
  clearTimeout(timeout)
  emits('comments', comments.value)
})

let promise = Promise.resolve()
let timeout
const showComments = (array) => {
  if (promise) {
    array.forEach(function (comment) {
      promise = promise.then(function () {
        comments.value.push(comment)
        return new Promise(function (resolve) {
          timeout = setTimeout(resolve, interval)
        })
      })
    })
    promise.then(function () {
      console.warn('repeating', uuid.value)
      showComments(props.comments)
    })
  }
}

onMounted(() => {
  showComments(props.comments)
})
</script>

<template>
  <div class="h-full w-full p-5 flex flex-col justify-end gap-2 border-l border-neutral-700">
    <Comment v-for="comment in existingComments" :text="comment.text" :user="comment.user" />
    <Comment v-for="comment in comments" :text="comment.text" :user="comment.user" :delay="comment.delay"/>
  </div>
</template>