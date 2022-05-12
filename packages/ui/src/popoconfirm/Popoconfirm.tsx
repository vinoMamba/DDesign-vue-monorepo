import { defineComponent } from 'vue'
import { DPopover, DButton } from '../../'

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
  },
  emits: ['confirm', 'cancel'],
  setup(props, { slots }) {
    return () => (
      <DPopover>
        {{
          title: () => props.title,
          content: () => (
            <div>
              <span>{props.content}</span>
              <DButton>{props.cancelText}</DButton>
              <DButton>{props.okText}</DButton>
            </div>
          ),
          default: () => <div>{slots.default?.()}</div>,
        }}
      </DPopover>
    )
  },
})
