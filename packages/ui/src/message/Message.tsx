import { defineComponent, onMounted, ref } from 'vue'
import './style'

export default defineComponent({
  name: 'DMessage',
  setup(props, { slots }) {
    const messageVisibleRef = ref(true)
    onMounted(() => {
      setTimeout(() => {
        messageVisibleRef.value = false
      }, 3000)
    })
    return () => (
      <div>{messageVisibleRef.value && <div class="dtd-message">{slots.default?.()}</div>}</div>
    )
  },
})
