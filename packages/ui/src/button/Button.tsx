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
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return [
        'dtd-button',
        `dtd-button-${props.type}`,
        `dtd-button-${props.size}`,
        `${props.loading ? 'dtd-button-loading' : ''}`,
      ]
    })
    return () => (
      <button class={classes.value} disabled={props.disabled || props.loading}>
        {props.loading ? <i class="dtd-button-loading-icon"></i> : null}
        <span>{slots.default?.()}</span>
      </button>
    )
  },
})
