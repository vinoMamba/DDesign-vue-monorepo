import type { PropType } from 'vue'

export const messageProps = {
  duration: {
    type: Number,
    default: 3000,
  },
  type: {
    type: String as PropType<'success' | 'warning' | 'error' | 'info'>,
    default: 'info',
  },
}
