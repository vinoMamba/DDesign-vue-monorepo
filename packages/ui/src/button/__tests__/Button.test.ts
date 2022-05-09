import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DButton from '../'

describe('Button', () => {
  it('can set slot', () => {
    const wrapper = mount(DButton, {
      slots: {
        default: 'ok',
      },
    })
    expect(wrapper.text()).toBe('ok')
    wrapper.unmount()
  })
  it('can set primary type', () => {
    const wrapper = mount(DButton, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('dtd-button-primary')
    wrapper.unmount()
  })
  it('can set danger type', () => {
    const wrapper = mount(DButton, {
      props: {
        type: 'danger',
      },
    })
    expect(wrapper.classes()).toContain('dtd-button-danger')
    wrapper.unmount()
  })
})
