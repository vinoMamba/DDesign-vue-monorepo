import { computed, defineComponent, onMounted, ref, Transition, type PropType } from 'vue'
import './style'

export default defineComponent({
  name: 'DMessage',
  props: {
    duration: {
      type: Number,
      default: 3000,
    },
    type: {
      type: String as PropType<'success' | 'warning' | 'error' | 'info'>,
      default: 'info',
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
    const classRef = computed(() => {
      const { type } = props
      return {
        'dtd-message': true,
        [`dtd-message-${type}`]: true,
      }
    })
    return () => (
      <Transition>
        {messageVisibleRef.value ? <div class={classRef.value}>{slots.default?.()}</div> : null}
      </Transition>
    )
  },
})
