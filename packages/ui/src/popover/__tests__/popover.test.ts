import { it, describe, expect } from 'vitest'
import { h } from 'vue'
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
        default: () => h('button', {}, 'Named Slot'),
      },
    })
    const div = document.createElement('div')
    div.appendChild(wrapper.element)
    document.body.appendChild(div)
    await wrapper.find('button').trigger('click')
    expect(document.body.innerHTML).toContain('content')
    await wrapper.find('button').trigger('click')
    expect(document.body.innerHTML).not.toContain('content')
  })
  it('cant set trigger prop', async () => {
    const wrapper = mount(DPopover, {
      slots: {
        content: () => '<p>content</p>',
        default: () => h('button', {}, 'Named Slot'),
      },
      props: {
        trigger: 'hover',
      },
    })
    const div = document.createElement('div')
    div.appendChild(wrapper.element)
    document.body.appendChild(div)
    await wrapper.trigger('mouseenter')
    expect(document.body.innerHTML).toContain('content')
    await wrapper.trigger('mouseleave')
    expect(document.body.innerHTML).not.toContain('content')
  })
  it('can set show prop', async () => {
    const wrapper = mount(DPopover, {
      slots: {
        content: () => 'content-test',
        default: () => h('button', { class: 'test-open' }, 'Named Slot'),
      },
    })
    const div = document.createElement('div')
    div.appendChild(wrapper.element)
    document.body.appendChild(div)
    await wrapper.find('.test-open').trigger('click')
    expect(document.body.innerHTML).toContain('content-test')
    expect(wrapper.emitted('update:show')).toBeTruthy()
  })
})
