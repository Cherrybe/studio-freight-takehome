import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Chip from './ChipComponent.vue'

describe('Chip.vue', () => {
  it('renders default slot', () => {
    const wrapper = mount(Chip, { slots: { default: 'Chip' } })
    expect(wrapper.text()).toBe('Chip')
  })

  it('applies variant class', () => {
    const wrapper = mount(Chip, { props: { variant: 'success' } })
    expect(wrapper.classes()).toContain('bg-[var(--color-border-success)]')
  })
})
