<template>
  <div class="relative overflow-hidden">
    <Button
      variant="outline"
      label="Contact"
      class="float-right mr-4 mt-8"
      @click="isSidebarOpen = true"
    />

    <Transition name="slide-fade">
      <Sidebar v-model:isVisible="isSidebarOpen" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../components/atoms/button/ButtonComponent.vue'
import Sidebar from './SlideBar.vue'

const isSidebarOpen = ref(false)
</script>
