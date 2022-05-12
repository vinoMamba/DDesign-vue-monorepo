import { computed, defineComponent } from 'vue'
import { buttonProps } from './buttonTypes'
import './style'

export default defineComponent({
  name: 'DButton',
  props: buttonProps,
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
