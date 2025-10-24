import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Text from './TextComponent.vue'

describe('Text.vue', () => {
  it('renders default p tag', () => {
    const wrapper = mount(Text, { slots: { default: 'Hello' } })
    expect(wrapper.element.tagName).toBe('P')
    expect(wrapper.text()).toBe('Hello')
  })

  it('renders span tag when prop set', () => {
    const wrapper = mount(Text, { props: { tag: 'span' }, slots: { default: 'Span' } })
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('applies variant classes', () => {
    const wrapper = mount(Text, { props: { variant: 'secondary' } })
    expect(wrapper.classes()).toContain('text-[var(--color-text-secondary)]')
  })
})
