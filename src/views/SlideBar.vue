<template>
  <div class="sidebar-wrapper">
    <!-- Overlay -->
    <div
      class="overlay fixed inset-0 z-40"
      @click="$emit('close')"
    >
      <div
        class="absolute inset-0 bg-black/30 bg-[url('./assets/images/noise.png')] bg-repeat"
        style="backdrop-filter: blur(0px); image-rendering: pixelated;"
      />
    </div>

    <!-- Sidebar -->
    <div
      class="sidebar fixed top-0 right-0 h-full w-183 bg-(--color-black) shadow-lg z-50 p-6"
    >
      <div class="flex justify-end mt-4 mr-4">
        <Button variant="outline" :label="'Close'" @click="$emit('close')" />
      </div>

      <img :src="divider" alt="divider" class="w-full mt-4 mb-6" />

      <div>
        <ProjectDetails />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/atoms/button/ButtonComponent.vue'
import ProjectDetails from './ProjectDetails.vue'
import divider from '../assets/divider.svg'

defineEmits(['close'])
</script>
