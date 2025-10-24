import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TextareaField from './TextareaField.vue'

describe('TextareaField.vue', () => {
  it('renders label', () => {
    const wrapper = mount(TextareaField, { props: { label: 'Message' } })
    expect(wrapper.text()).toContain('Message')
  })

  it('emits modelValue on input', async () => {
    const wrapper = mount(TextareaField, { props: { modelValue: '' } })
    const textarea = wrapper.find('textarea')
    await textarea.setValue('Hello')
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('Hello')
  })
})
