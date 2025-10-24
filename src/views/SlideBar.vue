<template>
  <div class="fixed inset-0 z-40" v-show="visible">
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black/40 bg-[url('./assets/images/noise.png')] bg-repeat transition-opacity duration-500"
      :class="{ 'opacity-100': props.isVisible, 'opacity-0': !props.isVisible }"
      @click="closeSidebar"
      style="backdrop-filter: blur(2px); image-rendering: pixelated"
    ></div>

    <!-- Sidebar -->
    <div
      class="absolute top-0 right-0 h-full max-w-183 w-full bg-(--color-black) shadow-2xl rounded-tl-3xl rounded-bl-3xl overflow-hidden"
      :class="sidebarClass"
    >
      <div class="h-full overflow-y-auto scroll-wrapper p-6">
        <div class="flex justify-end">
          <Button variant="outline" label="Close" @click="closeSidebar" />
        </div>

        <img :src="divider" alt="divider" class="w-full mt-6 mb-8" />

        <Transition name="fade" mode="out-in">
          <div v-if="!submitted" key="form-content" class="space-y-6">
            <ProjectDetails />
            <Contact @submitted="submitted = true" />
          </div>
          <FormSubmission v-else key="form-submitted" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Button from '../components/atoms/button/ButtonComponent.vue'
import ProjectDetails from './ProjectDetails.vue'
import divider from '../assets/divider.svg'
import Contact from '../components/organisms/contact/ContactForm.vue'
import FormSubmission from '@/components/molecules/submission/FormSubmission.vue'

const props = defineProps<{ isVisible: boolean }>()
const emit = defineEmits<{
  (event: 'update:isVisible', value: boolean): void
}>()

const submitted = ref(false)
const visible = ref(false)

const sidebarClass = computed(() =>
  props.isVisible ? 'animate-slideInSmooth' : 'animate-slideOutSmooth'
)

watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) visible.value = true
    else {
      setTimeout(() => {
        visible.value = false
      }, 900)
    }
  },
  { immediate: true }
)

const closeSidebar = () => {
  emit('update:isVisible', false)
}
</script>

<style scoped>
@keyframes slideInSmooth {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOutSmooth {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-slideInSmooth {
  animation: slideInSmooth 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animate-slideOutSmooth {
  animation: slideOutSmooth 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* form submission animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.scroll-wrapper {
  scrollbar-width: thin;
  scrollbar-color: var(--color-heading-secondary) var(--color-black);
}
.scroll-wrapper::-webkit-scrollbar {
  width: 9px;
}
.scroll-wrapper::-webkit-scrollbar-track {
  background: var(--color-black);
}
.scroll-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--color-heading-secondary);
}
</style>
