import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from './ButtonComponent.vue'

describe('Button.vue', () => {
  it('renders default slot', () => {
    const wrapper = mount(Button, { slots: { default: 'Click' } })
    expect(wrapper.text()).toBe('Click')
  })

  it('emits click event', async () => {
    const wrapper = mount(Button, { slots: { default: 'Click' } })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
