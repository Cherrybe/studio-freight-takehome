import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import InputField from './InputField.vue'

describe('InputField.vue', () => {
  it('renders label', () => {
    const wrapper = mount(InputField, { props: { label: 'Name' } })
    expect(wrapper.text()).toContain('Name')
  })

  it('emits modelValue on input', async () => {
    const wrapper = mount(InputField, { props: { modelValue: '' } })
    const input = wrapper.find('input')
    await input.setValue('John')
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('John')
  })
})
