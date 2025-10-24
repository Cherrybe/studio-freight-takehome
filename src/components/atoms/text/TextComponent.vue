<template>
  <component
    :is="tag"
    :class="[baseClass, colorClass, customClass]"
  >
    {{ label || $slots.default?.() }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface TextProps {
  tag?: 'p' | 'span' | 'blockquote' | 'b' | 'em' | 'strong' | 'i'
  variant?: 'primary' | 'secondary' | 'tertiary'
  customClass?: string
  label?: string
}

const props = defineProps<TextProps>()

const tag = computed(() => props.tag || 'p')

const colorClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'text-[var(--color-text-secondary)]'
    case 'tertiary':
      return 'text-[var(--color-text-tertiary)]'
    default:
      return 'text-[var(--color-text)]'
  }
})

const baseClass = 'text-base leading-relaxed font-[var(--font-body)]'
const customClass = props.customClass || ''
</script>
