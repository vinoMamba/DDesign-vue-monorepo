import { defineComponent, ref } from 'vue'
import './style'

export default defineComponent({
  name: 'DPopover',
  setup(props, { slots }) {
    const visible = ref(false)
    const toggleVisibility = () => {
      visible.value = !visible.value
    }
    return () => (
      <div class="dtd-popover" onClick={() => toggleVisibility()}>
        {visible.value ? <div class="dtd-popover-content-wrapper">{slots.content?.()}</div> : null}
        {slots.default?.()}
      </div>
    )
  },
})
