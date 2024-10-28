<script setup>
import { onMounted, ref } from 'vue'
import { EyeIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  start: {
    type: Number,
    default: 0
  }
})

const count = ref(props.start)

const updateCount = () => {
  setInterval(() => {
    count.value = count.value + parseInt(Math.random() * 10)
  }, 1500)
}


onMounted(() => {
  updateCount()
})

</script>

<template>
  <div class="bg-red-800 px-4 py-2 rounded-full flex text-white flex-nowrap gap-2 font-semibold ">
    <EyeIcon class="size-6 text-white animate-pulse"/>
    {{ count }} Viewers
  </div>
</template>