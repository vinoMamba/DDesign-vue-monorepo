import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DPopover from '../Popover'

describe('DPopover', () => {
  it('can set default slot', () => {
    const wrapper = mount(DPopover, {
      slots: {
        default: () => '<button>按钮</button>',
      },
    })
    expect(wrapper.html()).toContain('按钮')
  })
  it('can set content slot', () => {
    const wrapper = mount(DPopover, {
      slots: {
        content: () => '<p>content</p>',
      },
    })
    expect(wrapper.html()).not.toContain('content')
  })
  it('can toggle content slot when click trigger', async () => {
    const wrapper = mount(DPopover, {
      slots: {
        content: () => '<p>content</p>',
        default: () => '<button>按钮</button>',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.html()).toContain('content')
  })
})
