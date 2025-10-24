<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-text-secondary font-(--font-body)">
      {{ label }}
    </label>
    <select
      :id="id"
      v-model="modelValue"
      class="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring--accent"
      @change="$emit('update:modelValue', modelValue)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SelectFieldProps } from '../Form.types';

const props = defineProps<SelectFieldProps>()
defineEmits(['update:modelValue'])

const modelValue = ref(props.modelValue || (props.options[0] && props.options[0].value))
</script>
