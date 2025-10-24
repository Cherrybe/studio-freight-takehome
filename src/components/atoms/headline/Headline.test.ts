import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Headline from './HeadlineComponent.vue'

describe('Headline.vue', () => {
  it('renders the default tag (h2) and slot content', () => {
    const wrapper = mount(Headline, {
      slots: { default: 'Hello World' }
    })
    expect(wrapper.element.tagName).toBe('H2')
    expect(wrapper.text()).toBe('Hello World')
  })

  it('renders the correct HTML tag when "tag" prop is set', () => {
    const wrapper = mount(Headline, {
      props: { tag: 'h1' },
      slots: { default: 'Heading 1' }
    })
    expect(wrapper.element.tagName).toBe('H1')
  })

  it('applies primary, secondary, and tertiary variants correctly', () => {
    const wrapperPrimary = mount(Headline, { props: { variant: 'primary' } })
    expect(wrapperPrimary.classes()).toContain('text-[var(--color-heading)]')

    const wrapperSecondary = mount(Headline, { props: { variant: 'secondary' } })
    expect(wrapperSecondary.classes()).toContain('text-[var(--color-heading-secondary)]')

    const wrapperTertiary = mount(Headline, { props: { variant: 'tertiary' } })
    expect(wrapperTertiary.classes()).toContain('text-[var(--color-heading-tertiary)]')
  })

  it('applies font sizes correctly', () => {
    const wrapperLg = mount(Headline, { props: { size: 'lg' } })
    expect(wrapperLg.classes()).toContain('text-2xl')
  })
})
