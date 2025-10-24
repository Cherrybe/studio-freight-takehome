<template>
  <div class="flex flex-col gap-1" v-bind="$attrs">
    <label v-if="label" :for="id" class="text-text-secondary uppercase font-mono text-xs">
      {{ label }}
    </label>

    <input
      :id="id"
      v-model="modelValue"
      :placeholder="placeholder"
      :type="type"
      :class="[
        'px-3 py-2 rounded-lg focus:outline-none h-12 uppercase',
        'font-heading font-bold leading-[110%]',
        'placeholder:uppercase placeholder:text-text-secondary',
        error
          ? 'border border-border-error text-text-secondary'
          : modelValue
            ? 'border border-border-success text-cream'
            : 'border border-cream text-text-secondary',
      ]"
      @input="$emit('update:modelValue', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { InputFieldProps } from '../Form.types'

const props = defineProps<InputFieldProps>()
defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue || '')

watch(
  () => props.modelValue,
  (val) => {
    modelValue.value = val || ''
  },
)
</script>
