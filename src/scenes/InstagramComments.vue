<script setup>
  import Scene  from '@/components/Scene.vue'
  import IgComment from '@/components/IgComment.vue'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const props = defineProps({
  })

  let age = ref(9)
  const likes = ref(23)
  const replies = ref(6)

  const randomInt = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
  }

  let interval

  onMounted(() => {
    let i = 0
    interval = setInterval(() => {
      i++
      likes.value = likes.value + randomInt(0, 4)
      if (i%10 === 2) {
        replies.value = replies.value + randomInt(1, 2)
      }
      if (i%10 === 0) {
        age.value = age.value + 1
      }
    }, 1000)
  })

  onBeforeUnmount(() => {
    clearInterval(interval)
  })
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto scale-150">
    <div class="max-w-lg mx-auto flex items-center h-full scale-150">
      <IgComment class="scale-150"
        user="NekoVibes"
        image="NekoVibes"
        :age="`${age}m`"
        :likes="likes"
        :replies="replies"
        :stories="true"
        comment="Greg needs to delete his channel. I wouldn’t even believe it if he apologised at this point. He’s an absolute cancer to our community. More people need to see what happens when unhinged narcissistic trolls like him get a platform. They’re the ones who ACTUALLY make us look bad. Take a long hard look at yourself and log off. #ByeGreg"/>
    </div>
  </Scene>
</template>