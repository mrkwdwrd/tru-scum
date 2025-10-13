<script setup>
  import { onMounted, ref } from 'vue'
  import Scene from '@/components/Scene.vue'
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
      field.value?.focus()
      simulateTyping(props.term.split(''))
    }, 500)
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center font-opensans">
        <div class="w-full max-w-screen-md pr-10 pl-14 py-8 rounded-xl mx-auto text-zinc-300 text-lg flex items-center  gap-6 bg-zinc-950">
          <svg viewBox="0 0 36 36" class="h-20" fill="currentColor">
            <path class="fill-blue-700" d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
            <path class="fill-white" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path>
          </svg>
          <div class="flex flex-grow items-center bg-zinc-800 rounded-full relative gap-2 overflow-hidden">
            <div class="h-20 pl-6 pr-2 gap-1 flex justify-center items-center text-zinc-600 text-xs font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-10 fill-zinc-300">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
            <input ref="field" :value="input" class="bg-transparent flex-grow h-10 w-full outline-none text-3xl" placeholder="Search Facebook"/>
          </div>
        </div>
      </main>
    </div>
  </Scene>
</template>
