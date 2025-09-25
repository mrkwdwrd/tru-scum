`<script setup>
  import Scene from '@/components/Scene.vue'
  import profileImage from '@/assets/images/openart-image_GjENJ-VC_1731748862428_raw.png'

  const props = defineProps({
  })

</script>
<template>
  <Scene class="bg-black max-w-[1980px] mx-auto">
    <div class="flex h-full relative">
      <main class="w-full flex items-center">
        <div class="w-full max-w-screen-sm p-10 mx-auto text-white text-lg">
          <!-- Header -->
          <div class="w-full flex justify-between items-center mb-6">
            <!-- User -->
            <div class="flex gap-5">
                <!-- Avatar -->
                <div class="w-14 h-14 rounded-full">
                  <span class="block overflow-hidden rounded-full border-black ">
                    <img :src="profileImage"/>
                  </span>
                </div>
                <!-- User -->
                <div>
                  <div class="font-bold">Twitter/X User</div>
                  <div class="text-gray-500">@twitteruser</div>
                </div>
              </div>
            <!-- More -->
              <div>
                •••
              </div>
          </div>
          <!-- Content -->
          <div>
            Lorem ipsum dolor sit amet et morbi proin quisque fames in mauris proin porta lacinia. Fringilla quis tempus nisi malesuada pulvinar fusce augue lacus. Dapibus etiam diam semper facilisi egestas integer mauris porta sodales tempor quis massa. Odio facilisi lobortis interdum faucibus lobortis nec viverra sagittis mauris curabitur ut mauris do augue. Facilisi dui erat tortor lectus habitasse fusce aenean.
          </div>
          <!-- Meta -->
          <div class="text-gray-500 mt-8">
            10:16 AM · Sep 18, 2025 · <span class="text-white font-medium">34.5K</span> Views
          </div>
          <!-- Actions -->
          <div class="text-gray-500 mt-2 border-gray-500 border-t pt-2 flex justify-between">
            <span class="flex gap-2 text-sm items-center">
              <svg viewBox="0 0 24 24" class="fill-gray-500 h-6"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
            </span>
            <span class="flex gap-2 text-sm items-center">
              <svg viewBox="0 0 24 24" class="fill-gray-500 h-6"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
              15
            </span>
            <span class="flex gap-2 text-sm items-center">
              <svg viewBox="0 0 24 24" class="fill-gray-500 h-6"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
              78
            </span>
            <span class="flex gap-2 text-sm items-center">
              <svg viewBox="0 0 24 24" class="fill-gray-500 h-6"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
              16
            </span>
            <span class="flex gap-2 text-sm items-center">
              <svg viewBox="0 0 24 24" class="fill-gray-500 h-6"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
            </span>
          </div>
        </div>
      </main>
    </div>
  </Scene>
</template>
`