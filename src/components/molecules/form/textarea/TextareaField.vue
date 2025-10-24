<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-text-secondary font-(--font-body)">
      {{ label }}
    </label>
    <textarea
      :id="id"
      v-model="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring--accent"
      @input="$emit('update:modelValue', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TextareaFieldProps } from '../Form.types';

const props = defineProps<TextareaFieldProps>()
defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue || '')
</script>
