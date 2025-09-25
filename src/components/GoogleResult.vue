<script setup>
  import profileImage from '@/assets/images/openart-image_GjENJ-VC_1731748862428_raw.png'
</script>
<template>
  <div class="w-full max-w-screen-sm text-zinc-50 flex flex-col gap-1">
    <!-- Header -->
    <div class="w-full">
      <div class="flex gap-3 items-center">
        <!-- Icon -->
        <div class="w-8 h-8 rounded-full">
          <span class="block overflow-hidden rounded-full border-black ">
            <img :src="profileImage"/>
          </span>
        </div>
        <!-- Title -->
        <div>
          <div class="text-sm font-medium">Lorem ipsum dolor sit amet</div>
          <div class="text-xs flex">
            https://khkhdak.com › crosswords › game › mini
            <svg class="h-4 w-4 fill-zinc-50 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="text-sm text-zinc-200">
      <div class="text-xl text-blue-300">Lorem ipsum dolor</div>
      Lorem ipsum dolor sit amet et morbi proin quisque fames in mauris proin porta lacinia. Fringilla ipsum dolor sit amet et morbi proin...
    </div>
  </div>
</template>
