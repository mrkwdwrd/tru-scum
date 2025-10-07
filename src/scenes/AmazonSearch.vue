<script setup>
  import { onMounted, ref } from 'vue'
  import Scene from '@/components/Scene.vue'
  import logo from '@/assets/images/amazon-logo.png'
  const props = defineProps({
    term: {
      type: String,
      default: 'Lorem ipsum dolor sit amet'
    }
  })

  const field = ref()
  const input = ref('')

  const simulateTyping = (arr, i = 0) => {
    if (i < arr.length) {
      input.value += arr[i]
      setTimeout(() => {
        simulateTyping(arr, i + 1)
      }, Math.random() * 100)
    }
  }

  onMounted(() => {
    setTimeout(() => {
      field.value.focus()
      simulateTyping(props.term.split(''))
    }, 1200)
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
      <div class="flex h-full relative">
        <main class="w-full flex items-center font-opensans">
          <div class="w-full max-w-screen-md pr-10 pl-8 py-8 rounded-md mx-auto text-zinc-900 text-lg flex items-center  gap-6 bg-sky-950">
            <img :src="logo" class="h-10 mt-3"/>
            <div class="flex flex-grow items-center bg-white rounded-md relative gap-2 overflow-hidden">
              <div class="h-12 px-3 gap-1 flex justify-center items-center bg-zinc-200 border-zinc-400 border-r text-zinc-600 text-xs font-semibold">
                Books
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" class="fill-zinc-600 h-3 w-3">
                  <path d="M7.18,7.62L3.03,2.79c-.6-.7-.1-1.79,.82-1.79H12.14c.93,0,1.42,1.09,.82,1.79l-4.14,4.83c-.43,.5-1.21,.5-1.64,0Z"></path>
                </svg>
              </div>
              <input ref="field" :value="input" class="bg-transparent flex-grow h-10 w-full outline-none"/>
              <div class="h-12 px-3 flex justify-center items-center bg-orange-300 text-zinc-600 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 fill-zinc-900">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </div>
  </Scene>
</template>
