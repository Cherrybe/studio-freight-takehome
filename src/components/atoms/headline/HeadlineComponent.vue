<template>
  <component
    :is="tag"
    :class="[baseClass, colorClass, fontClass, 'transition-colors duration-200', className]"
  >
    {{ label || $slots.default?.() }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface HeadlineProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'base' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  label?: string
}

const props = defineProps<HeadlineProps>()

const tag = computed(() => props.tag || 'h2')

const colorClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'text-heading-secondary'
    case 'tertiary':
      return 'text-heading-tertiary'
    default:
      return 'text-heading'
  }
})

const baseClass = computed(() => {
  switch (props.size) {
    case 'base': 
      return 'text-base'
    case 'sm':
      return 'text-lg'
    case 'md':
      return 'text-xl'
    case 'lg':
      return 'text-2xl'
    case 'xl':
      return 'text-3xl'
    default:
      return 'text-2xl'
  }
})

const fontClass = 'font-heading font-bold leading-[110%] uppercase'
</script>
