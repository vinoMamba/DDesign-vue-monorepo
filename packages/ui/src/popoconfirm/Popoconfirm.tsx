import type { ButtonProps } from '@/button/buttonTypes'
import { defineComponent, ref, type HTMLAttributes, type PropType } from 'vue'
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
    okButtonProps: {
      type: Object as PropType<ButtonProps & HTMLAttributes>,
    },
  },
  emits: ['confirm', 'cancel'],
  setup(props, { slots, emit }) {
    const showRef = ref(false)
    function close() {
      showRef.value = false
      emit('cancel')
    }
    function confirm() {
      showRef.value = false
      emit('confirm')
    }

    return () => (
      <DPopover v-model:show={showRef.value}>
        {{
          title: () => <p class="dtd-popoconfirm-title">{props.title}</p>,
          content: () => (
            <div class="dtd-popoconfirm-content-wrapper">
              <p class="dtd-popoconfirm-content">{props.content}</p>
              <div class="dtd-popoconfirm-content-button-wrapper">
                <DButton onClick={() => close()}>{props.cancelText}</DButton>
                <DButton onClick={() => confirm()} type={props.okType} {...props.okButtonProps}>
                  {props.okText}
                </DButton>
              </div>
            </div>
          ),
          default: () => <div>{slots.default?.()}</div>,
        }}
      </DPopover>
    )
  },
})
