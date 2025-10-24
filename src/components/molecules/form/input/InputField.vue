<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-text-secondary font-(--font-body)">
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="modelValue"
      :placeholder="placeholder"
      :type="type"
      :class="['border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring--accent', customClass]"
      @input="$emit('update:modelValue', modelValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { InputFieldProps } from '../Form.types';

const props = defineProps<InputFieldProps>()
defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue || '')
</script>
