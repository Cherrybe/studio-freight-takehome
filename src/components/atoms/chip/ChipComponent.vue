<template>
  <span :class="['inline-flex items-center px-3 py-1 rounded-full text-sm', bgClass, textClass, customClass]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ChipProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error'
  customClass?: string
}

const props = defineProps<ChipProps>()

const bgClass = computed(() => {
  switch (props.variant) {
    case 'secondary': return 'bg-[var(--color-text-secondary)]'
    case 'success': return 'bg-[var(--color-border-success)]'
    case 'error': return 'bg-[var(--color-error)]'
    default: return 'bg-[var(--color-accent)]'
  }
})

const textClass = 'text-[var(--color-black)] font-[var(--font-body)]'
const customClass = props.customClass || ''
</script>
