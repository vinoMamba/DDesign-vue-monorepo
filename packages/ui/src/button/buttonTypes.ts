import type { ExtractPropTypes, PropType } from 'vue'
export const buttonProps = {
  type: {
    type: String as PropType<'primary' | 'default' | 'danger'>,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'small' | 'middle' | 'large'>,
    default: 'middle',
  },
  loading: {
    type: Boolean,
    default: false,
  },
}
export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>
