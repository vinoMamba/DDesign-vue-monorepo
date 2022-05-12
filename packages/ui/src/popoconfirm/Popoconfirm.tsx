import { defineComponent, type PropType } from 'vue'
import { DPopover, DButton } from '../../'
import './style'

export default defineComponent({
  name: 'DPopocomfirm',
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okType: {
      type: String as PropType<'primary' | 'danger'>,
      default: 'primary',
    },
  },
  emits: ['confirm', 'cancel'],
  setup(props, { slots }) {
    return () => (
      <DPopover>
        {{
          title: () => <p class="dtd-popoconfirm-title">{props.title}</p>,
          content: () => (
            <div class="dtd-popoconfirm-content-wrapper">
              <p class="dtd-popoconfirm-content">{props.content}</p>
              <div class="dtd-popoconfirm-content-button-wrapper">
                <DButton>{props.cancelText}</DButton>
                <DButton type={props.okType}>{props.okText}</DButton>
              </div>
            </div>
          ),
          default: () => <div>{slots.default?.()}</div>,
        }}
      </DPopover>
    )
  },
})
