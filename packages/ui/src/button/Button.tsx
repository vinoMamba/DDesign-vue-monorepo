import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import './style'

export default defineComponent({
  name: 'DButton',
  props: {
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
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return ['dtd-button', `dtd-button-${props.type}`]
    })
    return () => (
      <button class={classes.value} disabled={props.disabled}>
        <span>{slots.default?.()}</span>
      </button>
    )
  },
})
