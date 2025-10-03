<script setup>
  import Scene from '@/components/Scene.vue'
  import gsap from 'gsap'
  import { onMounted, ref } from 'vue'

  const show = ref(false)

  onMounted(() => {
    setTimeout(() => {
      show.value = true
    }, 500)
  })

  function onBeforeEnter(el) {
    el.style.opacity = 0
    el.style.maxHeight = 0
  }

  function onEnter(el, done) {
    gsap.to(el, {
      opacity: 1,
      maxHeight: 1000,
      delay: 0.5 + (el.dataset.index * 0.25),
      onComplete: done
    })
  }
</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center text-white">
        <div class="w-full max-w-screen-sm mx-auto flex flex-col gap-5 justify-center" >
          <div class="text-5xl font-abril" v-if="show">DSM-5 Criteria for Gender Dysphoria</div>
          <div class="text-xl font-sourcesans" v-if="show">A marked incongruence between one’s experienced/expressed gender and natal gender of at least 6 months in duration, as manifested by at least two of the following:</div>
          <TransitionGroup
            name="list"
            :css="false"
            @before-enter="onBeforeEnter"
            @enter="onEnter">
            <div
              v-if="show"
              class="border border-white rounded-lg px-8 py-4 font-bold"
              :data-index="1">
              A marked incongruence between one’s experienced/expressed gender and primary and/or secondary sex characteristics
              <span class="text-sm italic font-normal">(or in young adolescents, the anticipated secondary sex characteristics)</span>
            </div>
            <div
              v-if="show"
              class="border border-white rounded-lg px-8 py-4 font-bold"
              :data-index="2">
              A strong desire to be rid of one’s primary and/or secondary sex characteristics because of a marked incongruence with one’s experienced/expressed gender
              <span class="text-sm italic font-normal">(or in young adolescents, a desire to prevent the development of the anticipated secondary sex characteristics)</span>
            </div>
            <div
              v-if="show"
              class="border border-white rounded-lg px-8 py-4 font-bold"
              :data-index="3">
              A strong desire for the primary and/or secondary sex characteristics of the other gender
            </div>
            <div
              v-if="show"
              class="border border-white rounded-lg px-8 py-4 font-bold"
              :data-index="4">
              A strong desire to be of the other gender
              <span class="text-sm italic font-normal">(or some alternative gender different from one’s designated gender)</span>
            </div>
            <div
              v-if="show"
              class="border border-white rounded-lg px-8 py-4 font-bold"
              :data-index="5">
              A strong desire to be treated as the other gender
              <span class="text-sm italic font-normal">(or some alternative gender different from one’s designated gender)</span>
            </div>
            <div
              v-if="show"
              class="border border-white rounded-lg px-8 py-4 font-bold"
              :data-index="6">
              A strong conviction that one has the typical feelings and reactions of the other gender
              <span class="text-sm italic font-normal">(or some alternative gender different from one’s designated gender)</span>
            </div>
          </TransitionGroup>
        </div>
      </main>
    </div>
  </Scene>
</template>
