<script setup>
  import Scene from '@/components/Scene.vue'
  import Tweet from '@/components/Tweet.vue'
  import profileImage from '@/assets/images/openart-image_GjENJ-VC_1731748862428_raw.png'
  import { onMounted, ref } from 'vue'

  const props = defineProps({
    tweets: Array
  })

  const tweetsArray = ref([])

  const addTweets = (arr, i = 0) => {
    if (i < arr.length) {
      tweetsArray.value.push(arr[i])
      setTimeout(() => {
        addTweets(arr, i + 1)
      }, arr[i].delay)
    }
  }

  onMounted(() => {
    setTimeout (() => {
      addTweets(props.tweets.map((tweet, index) => {
        return {
          ...tweet,
          delay: index < 1 ? 1800 : parseInt(index > 6 ? Math.random() * 1000 : Math.random() * 500),
          position: index < 1 ? {
            x: 0, y: 0
          } : {
            x: parseInt((Math.random() * 2 - 1) * 400),
            y: parseInt((Math.random() * 2 - 1) * 225)
          }
        }
      }))
    }, 1000)
  })

</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <TransitionGroup name="list" tag="div" class="h-full w-full text-white">
      <div v-for="(tweet, key) in tweetsArray" :key="key" class="h-full w-full flex items-center absolute top-0 left-0 right-0 bottom-0 opacity-0">
        <Tweet
          :tweet="tweet"
          class="relative origin-center drop-shadow-[0_45px_45px_rgba(0,0,0,0.95)]"
          :style="`left: ${tweet.position.x}px; top: ${tweet.position.y}px;`"/>
      </div>
    </TransitionGroup>
  </Scene>
</template>

<style lang="css" scoped>
  .list-enter-active {
    opacity: 0;
    transform: scale(0%);
  }
  .list-leave-active {
    opacity: 1;
    transform: scale(100%);
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 1;
    transform: scale(100%);
  }
  .list-enter-active,
  .list-leave-active,
  .list-enter-from,
  .list-leave-to {
    transition: 1s all 0.5s ease-in-out;
  }
</style>