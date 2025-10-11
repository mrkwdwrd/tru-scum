<script setup>
const props = defineProps({
  user: Object
})
</script>
<template>
  <!-- Bio Section -->
  <div class="flex border-gray-500 w-full max-w-screen-md p-10 mx-auto text-white">
    <div class="w-1/3 flex justify-center items-center">
      <div class="w-40 h-40 border-gray-500 border-4 rounded-full">
        <span class="block overflow-hidden rounded-full border-black border-4">
          <img :src="user.avatar"/>
        </span>
      </div>
    </div>
    <div class="w-2/3">
      <div class="flex gap-5 py-4 items-center">
        <span class="font-semibold text-lg">{{ user.handle }}</span>
        <div class="flex gap-2">
          <span class="bg-blue-500 px-5 py-2 rounded-lg font-bold text-sm">Follow</span>
          <span class="bg-gray-700 px-5 py-2 rounded-lg font-bold text-sm">Message</span>
          <span class="bg-gray-700 px-2 py-2 rounded-lg font-bold text-sm">
            <svg aria-label="Similar accounts" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Similar accounts</title><path d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path><path d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="5.001" x2="5.001" y1="7.998" y2="14.003"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="8.004" x2="2.003" y1="11" y2="11"></line></svg>
          </span>
          <span class="align-middle flex gap-2 items-center">
            <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="24">
              <circle cx="12" cy="12" r="2.25"/>
              <circle cx="21" cy="12" r="2.25"/>
              <circle cx="3" cy="12" r="2.25"/>
            </svg>
          </span>
        </div>
      </div>
      <div class="flex gap-4 py-4">
        <span>{{ user.posts }} Posts</span>
        <span>{{ user.followers }} Followers</span>
        <span>{{ user.following }} Following</span>
      </div>
      <div class="flex gap-2 py-2 items-center">
        <span class="font-semibold">{{ user.name }}</span>
        <span class="text-sm text-gray-400">{{ user.pronouns }}</span>
      </div>
      <div>
        <span v-html="user.bio" />
        <span v-if="user.link" class="font-semibold flex gap-2 items-center my-2">
          <svg aria-label="Link icon" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
            <path d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8.471" x2="15.529" y1="15.529" y2="8.471"></line>
          </svg>
          <span class="text-gray-300 block text-sm">{{ user.link }}</span>
        </span>
      </div>
    </div>
  </div>
</template>