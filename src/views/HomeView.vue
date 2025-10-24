<template>
  <Button 
  variant="outline" 
  :label="'Contact'" 
  class="float-right mr-4 mt-8"
  @click="isSidebarOpen = true"
  />
  
  <Transition name='slide'>
    <Sidebar v-if="isSidebarOpen" :isVisible="isSidebarOpen"   @close="isSidebarOpen = false" />
  </Transition>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/atoms/button/ButtonComponent.vue'
import Sidebar from './SlideBar.vue'


const isSidebarOpen = ref(false)
console.log(isSidebarOpen.value)
</script>

<style>
/* 
  Transition classes for the enter animation.
  This targets the .sidebar and .overlay elements inside the Transition component.
*/
.slide-enter-from .sidebar {
  transform: translateX(100%);
}

.slide-enter-from .overlay {
  opacity: 0;
}

.slide-enter-active .sidebar,
.slide-enter-active .overlay {
  transition-property: transform, opacity;
  transition-duration: 1000ms; /* Slower 1-second transition */
  transition-timing-function: ease-in-out;
}

.slide-enter-to .sidebar {
  transform: translateX(0);
}

.slide-enter-to .overlay {
  opacity: 1;
}

/* 
  Transition classes for the leave animation.
*/
.slide-leave-active .sidebar,
.slide-leave-active .overlay {
  transition-property: transform, opacity;
  transition-duration: 1000ms; /* Slower 1-second transition */
  transition-timing-function: ease-in-out;
}

.slide-leave-to .sidebar {
  transform: translateX(100%);
}

.slide-leave-to .overlay {
  opacity: 0;
}

/* 
  To ensure a smooth transition on leave, you may need to handle the display
  of the wrapper.
*/
.slide-leave-to .sidebar-wrapper {
  display: none;
}
</style>
