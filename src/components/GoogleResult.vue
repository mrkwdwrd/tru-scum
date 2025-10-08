<script setup>
  const props = defineProps({
    image: String,
    site: String,
    url: String,
    title: String,
    content: String
  })
</script>

<template>
  <div class="w-full max-w-screen-sm text-zinc-50 flex flex-col gap-1">
    <!-- Header -->
    <div class="w-full">
      <div class="flex gap-3 items-center">
        <!-- Icon -->
        <div v-if-"image" class="w-8 h-8 rounded-full bg-white">
          <span class="block overflow-hidden rounded-full border-black ">
            <img :src="image" class="h-full w-full"/>
          </span>
        </div>
        <!-- Title -->
        <div>
          <div class="text-sm font-medium">{{ site }}</div>
          <div class="text-xs flex">
            {{ url }}
            <!-- https://khkhdak.com › crosswords › game › mini -->
            <svg class="h-4 w-4 fill-zinc-50 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="text-sm text-zinc-200">
      <div class="text-xl text-blue-300">{{ title }}</div>
      {{ content }}
    </div>
  </div>
</template>
