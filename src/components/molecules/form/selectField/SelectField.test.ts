import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SelectField from './SelectField.vue'

describe('SelectField.vue', () => {
  const options = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' }
  ]

  it('renders options', () => {
    const wrapper = mount(SelectField, { props: { options } })
    expect(wrapper.findAll('option').length).toBe(2)
  })

  it('emits modelValue on change', async () => {
    const wrapper = mount(SelectField, { props: { options, modelValue: '1' } })
    const select = wrapper.find('select')
    await select.setValue('2')
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe('2')
  })
})
