<template>
  <button
    :class="[baseClass, variantClass, sizeClass, className, 'group']"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <Headline 
      :label="label"
      size="base"
      variant="tertiary"
      className="group-hover:text-(--color-text-dark)"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Headline from '../headline/HeadlineComponent.vue'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  label?: string
}

const props = defineProps<ButtonProps>()
defineEmits(['click'])

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-[var(--color-text-secondary)] text-[var(--color-background)]'
    case 'outline':
      return 'border border-[var(--color-border-success)] text-[var(--color-text)]'
    default:
      return 'bg-[var(--color-accent)] text-[var(--color-black)]'
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1 text-sm'
    case 'lg':
      return 'px-6 py-3 text-lg'
    default:
      return 'px-4 py-2 text-base'
  }
})

const baseClass = 'font-[var(--font-body)] rounded-lg transition-colors duration-200 py-1 px-2 hover:bg-[var(--color-accent)] hover:cursor-pointer'
const className = props.className || ''
</script>
