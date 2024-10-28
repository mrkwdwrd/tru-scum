<script setup>
import { onMounted, ref } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
  user: String,
  text: String,
  delay: {
    type: Number,
    default: 0
  }
})
const show = ref(false)

onMounted (() => {
  setTimeout(() => {
    show.value = true
  }, props.delay);
})

</script>

<template>
  <Transition>
    <div v-if="show" class="rounded-md p-5 w-full bg-gray-200 relative top-0">
      <div class="flex gap-5 transition-opacity delay-100">
        <span class="block bg-gray-500 w-12 h-12 rounded-full flex-shrink-0">
          <UserCircleIcon class="text-gray-200"/>
        </span>
        <div class="text-gray-500 font-medium flex-shrink text-sm">
          <p class="font-bold">{{ user }}</p>
          <p v-html="text" class="text-gray-800"/>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, top 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.5;
  top: 5%;
}
</style>