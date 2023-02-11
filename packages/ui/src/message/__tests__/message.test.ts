import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DMessage from '../Message'

describe('Message', () => {
  it('can set slot', async () => {
    const wrapper = mount(DMessage, {
      slots: {
        default: () => 'test message',
      },
    })
    expect(wrapper.html()).toContain('test message')
  })
})
