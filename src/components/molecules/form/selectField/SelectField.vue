<template>
  <div class="flex flex-col gap-1 relative" v-bind="$attrs">
    <label v-if="label" :for="id" class="text-text-secondary uppercase font-mono text-xs">
      {{ label }}
    </label>

    <div class="relative">
      <button
        type="button"
        class="w-full h-12 px-3 py-2 rounded-lg border font-heading font-bold uppercase flex justify-between items-center transition-colors duration-200 focus:outline-none"
        :class="
          error
            ? 'border-border-error text-text-secondary'
            : modelValue
              ? 'border-border-success text-cream'
              : 'border-cream text-text-secondary'
        "
        @click="toggleDropdown"
      >
        <span>{{ selectedLabel }}</span>
        <span>
          <img v-if="open" :src="arrowup" alt="arrowOpen" />
          <img v-else :src="arrowdown" alt="arrowClose" />
        </span>
      </button>

      <ul
        v-if="open"
        :class="[
          'absolute w-full max-h-60 overflow-auto bg-black border border-border-secondary rounded-lg z-50 font-heading font-bold uppercase transition-all duration-150',
          dropdownPosition,
        ]"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option.value)"
          class="px-3 py-2 cursor-pointer transition-colors duration-150 text-cream hover:bg-cream hover:text-black"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import type { SelectFieldProps } from '../Form.types'
import arrowup from '../../../../assets/arrowup.svg'
import arrowdown from '../../../../assets/arrowdown.svg'

const props = defineProps<SelectFieldProps>()
const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const selectedValue = ref(props.modelValue || props.options[0]?.value || '')
const dropdownPosition = ref('top-full mt-1') // default below
const wrapperRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)

const selectedLabel = computed(() => {
  const selected = props.options.find((o) => o.value === selectedValue.value)
  return selected ? selected.label : ''
})

const toggleDropdown = async () => {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    adjustDropdownPosition()
  }
}

const selectOption = (value: string) => {
  selectedValue.value = value
  open.value = false
  emit('update:modelValue', value)
}

// Sync with parent changes
watch(
  () => props.modelValue,
  (val) => {
    selectedValue.value = val || ''
  },
)

function adjustDropdownPosition() {
  if (!wrapperRef.value || !buttonRef.value) return

  const rect = buttonRef.value.getBoundingClientRect()
  const spaceBelow = window.innerHeight - rect.bottom
  const dropdownHeight = Math.min(props.options.length * 40, 240) // approx 40px per item, max 240px

  if (spaceBelow < dropdownHeight && rect.top > dropdownHeight) {
    dropdownPosition.value = 'bottom-full mb-1'
  } else {
    dropdownPosition.value = 'top-full mt-1'
  }
}
</script>

<style scoped>
/* Optional: custom scrollbar for dropdown */
ul::-webkit-scrollbar {
  width: 6px;
}
ul::-webkit-scrollbar-thumb {
  background-color: var(--color-heading-secondary);
  border-radius: 3px;
}
</style>
