<template>
  <div class="flex flex-col gap-1" v-bind="$attrs">
    <label v-if="label" :for="id" class="text-text-secondary uppercase font-mono text-xs">
      {{ label }}
    </label>
    <textarea
      :id="id"
      v-model="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :class="[
        'h-[11.063rem] px-4 py-[0.938rem] rounded-lg focus:outline-none transition-colors duration-200',
        'placeholder:normal-case placeholder:text-text-secondary',
        error
          ? 'border border-border-error focus:ring-border-error text-text-secondary'
          : modelValue
          ? 'border border-border-success focus:ring-border-success text-cream'
          : 'border border-cream focus:ring-cream text-text-secondary',
        className
      ]"
      @input="$emit('update:modelValue', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { TextareaFieldProps } from '../Form.types'

const props = defineProps<TextareaFieldProps & { error?: boolean; className?: string }>()
defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue || '')

watch(() => props.modelValue, (val) => {
  modelValue.value = val || ''
})
</script>
