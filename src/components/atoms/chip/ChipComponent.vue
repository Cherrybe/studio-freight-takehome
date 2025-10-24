<template>
  <span
    :class="[
      'inline-flex items-center px-4 py-[0.938rem] rounded-3xl transition-colors duration-200',
      'font-heading font-bold leading-[110%] uppercase',
      borderClass,
      textClass,
      customClass
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ChipProps {
  selected?: boolean
  error?: boolean
  customClass?: string
}

const props = defineProps<ChipProps>()

const borderClass = computed(() => {
  if (props.error) return 'border border-border-error'
  if (props.selected) return 'border border-border-success'
  return 'border border-default'
})

const textClass = computed(() => {
  if (props.error) return 'text-border-default'
  if (props.selected) return 'text-border-success'
  return 'text-cream'
})

const customClass = props.customClass || ''
</script>
