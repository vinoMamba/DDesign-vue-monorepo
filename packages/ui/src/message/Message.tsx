import { defineComponent, onMounted, ref, Transition } from 'vue'
import './style'

export default defineComponent({
  name: 'DMessage',
  props: {
    duration: {
      type: Number,
      default: 3000,
    },
  },
  setup(props, { slots }) {
    const messageVisibleRef = ref(true)
    onMounted(() => {
      props.duration &&
        setTimeout(() => {
          messageVisibleRef.value = false
        }, props.duration)
    })
    return () => (
      <Transition>
        {messageVisibleRef.value ? <div class="dtd-message">{slots.default?.()}</div> : null}
      </Transition>
    )
  },
})
