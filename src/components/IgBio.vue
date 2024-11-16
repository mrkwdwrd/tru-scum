<script setup>
const props = defineProps({
  image: String
})
</script>
<template>
  <!-- Bio Section -->
  <div class="flex  border-gray-500 w-full max-w-screen-lg p-10 mx-auto text-white">
    <div class="w-1/3 flex justify-center items-center">
      <div class="w-40 h-40 border-gray-500 border-4 rounded-full">
        <span class="block overflow-hidden rounded-full border-black border-4">
          <img :src="image"/>
        </span>
      </div>
    </div>
    <div class="w-2/3">
      <div class="flex gap-3 py-4">
        <span class="font-semibold text-lg">Commodo Justo</span>
        <span class="bg-gray-700 px-4 py-1 rounded font-semibold text-sm">Following</span>
        <span class="bg-gray-700 px-4 py-1 rounded font-semibold text-sm">Message</span>
        <span class="bg-gray-700 px-2 py-2 rounded font-semibold text-sm">
          <svg aria-label="Similar accounts" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Similar accounts</title><path d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="5.001" x2="5.001" y1="7.998" y2="14.003"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="8.004" x2="2.003" y1="11" y2="11"></line></svg>
        </span>
      </div>
      <div class="flex gap-4 py-4">
        <span>529 Posts</span>
        <span>71.4k Followers</span>
        <span>778 Following</span>
      </div>
      <div class="flex gap-2 py-2 items-center">
        <span>Ligula Nibh</span>
        <!-- <span class="text-sm text-gray-400">He/Him</span> -->
      </div>
      <div>
        Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </div>
    </div>
  </div>
</template>