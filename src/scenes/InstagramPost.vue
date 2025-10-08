<script setup>
  import Scene  from '@/components/Scene.vue'
  import IgComment from '@/components/IgComment.vue'
  import IgAvatar from '@/components/IgAvatar.vue'
  import { instagram } from '@/content/users'

  const props = defineProps({
    image: String,
    caption: String,
    likes: Number,
    age: Array,
    user: String
  })

  const ageString = `${props.age[0]} ${props.age[1]} ago`
  const captionAgeString = `${props.age[0]} ${props.age[1][0]}`

</script>

<template>
  <Scene class="bg-black max-w-[1980px] mx-auto flex items-center justify-center">
    <!-- Image Container -->
      <div class="flex justify-center">
        <!-- Image -->
        <img :src="image" class="w-[1200px] h-[1200px] max-h-[70vh] max-w-[70vh]"/>

        <!-- Sidebar -->
        <div class="max-w-[500px] min-w-[405px] max-h-[80vh] flex flex-col bg-black justify-between">
          <!-- Account -->
          <div class="p-4 border-b border-gray-700 text-white flex justify-between leading-8 font-bold text-md">
            <span class="align-middle flex gap-6 items-center">
              <IgAvatar :image="instagram[user].avatar"/>
                <span class="inline-flex items-center">
                <span class="font-black">{{ instagram[user].handle }}</span>
                <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="24">
                  <circle cx="12" cy="12" r="2.25"/>
                </svg>
                <span class="text-blue-500">Follow</span>
              </span>
            </span>

            <span class="align-middle flex gap-2 items-center">
              <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="24">
                <circle cx="12" cy="12" r="2.25"/>
                <circle cx="21" cy="12" r="2.25"/>
                <circle cx="3" cy="12" r="2.25"/>
              </svg>
            </span>
          </div>

          <!-- Comments -->
          <div class="overflow-hidden flex-grow w-full">
            <IgComment v-if="caption" :caption="true" user="Juniper_in_bloom" :age="captionAgeString" :comment="caption" />
            <slot/>
          </div>

          <!-- Actions -->
          <div class="border-t border-gray-700 text-white pb-5">
            <div class="flex justify-between p-5">
              <div class="flex gap-5">
                <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                <svg aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>
              <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </div>
            <div class="font-semibold text-sm px-5">
              {{ likes }} Likes
            </div>
            <div class="text-gray-300 text-xs px-5">
                {{ ageString }}
            </div>
          </div>
          <div class="border-t border-gray-700 text-white">
            <div class="flex justify-between p-5">
              <span class="flex gap-4">
                <svg aria-label="Emoji" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                <span class="text-neutral-400 text-sm">Add a comment...</span>
              </span>
              <span class="font-bold text-sm text-gray-500">
                Post
              </span>
            </div>
          </div>
        </div>
      </div>
  </Scene>
</template>
