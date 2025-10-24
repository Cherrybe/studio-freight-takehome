<template>
  <button
    :class="[baseClass, variantClass, sizeClass, className, props.disabled ? 'cursor-not-allowed opacity-50' : 'group']"
    :disabled="props.disabled"
    @click="$emit('click')"
  >
    <Headline 
      :label="label"
      size="base"
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
      return 'bg-text-secondary text-text-dark'
    case 'outline':
      return 'border border-border-success hover:bg-accent text-text'
    default:
      return 'bg-accent text-text-dark'
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

const baseClass = 'font-[var(--font-body)] rounded-lg transition-colors duration-200 py-1 px-2'
const className = props.className || ''
</script>
