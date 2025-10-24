<template>
  <div class="sidebar-wrapper">
    <div
      class="overlay fixed inset-0 z-40"
      @click="$emit('close')"
    >
      <div
        class="absolute inset-0 bg-black/30  bg-[url('./assets/images/noise.png')] bg-repeat"
        style="backdrop-filter: blur(0px); image-rendering: pixelated;"
      />
    </div>

    <div
      class="sidebar fixed top-0 right-0 h-full w-183 bg-(--color-black) overflow-hidden rounded-tl-3xl rounded-bl-3xl shadow-lg z-50 p-6 overflow-y-auto scroll-wrapper"
      style="height: 100vh"
    >
      <div class="flex justify-end mt-4 mr-4">
        <Button variant="outline" :label="'Close'" @click="$emit('close')" />
      </div>

      <img :src="divider" alt="divider" class="w-full mt-4 mb-6" />

      <div class="space-y-12">
        <ProjectDetails />
        <Contact />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/atoms/button/ButtonComponent.vue'
import ProjectDetails from './ProjectDetails.vue'
import divider from '../assets/divider.svg'
import Contact from '../components/organisms/contact/ContactForm.vue'

defineEmits(['close'])
</script>

<style scoped>
.scroll-wrapper {
  scrollbar-width: thin;
  scrollbar-color: var(--color-heading-secondary) var(--color-black);
}

/* For WebKit browsers */
.scroll-wrapper::-webkit-scrollbar {
  width: 9px;
  height: 248px;
}

.scroll-wrapper::-webkit-scrollbar-track {
  background: var(--color-black);
}

.scroll-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--color-heading-secondary);
  border-radius: 0;
  border: 0;
}

.scroll-wrapper::-webkit-scrollbar-button {
  display: none;
}

.scroll-wrapper::-webkit-scrollbar-corner {
  background: var(--color-black);
}
</style>