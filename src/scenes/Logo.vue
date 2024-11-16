<script setup>
  import Scene from '@/components/Scene.vue'
  import logo from '@/assets/images/LogicTrap_logo.png'

  const props = defineProps({
  })

</script>
<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
      <div class="flex h-full justify-center items-center">
        <span class="block rounded-full overflow-hidden h-[70vh] aspect-square bg-white p-10">
          <img :src="logo"/>
        </span>
      </div>
  </Scene>
</template>
