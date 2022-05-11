import { computed, defineComponent, onMounted, ref, Transition } from 'vue'
import { MessageIcon } from './MessageIcon'
import { messageProps } from './messageProps'
import './style'

export default defineComponent({
  name: 'DMessage',
  props: messageProps,
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
        {messageVisibleRef.value ? (
          <div class={classRef.value}>
            {MessageIcon(props.type)}
            {slots.default?.()}
          </div>
        ) : null}
      </Transition>
    )
  },
})
