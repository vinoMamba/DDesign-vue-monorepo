import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DMessage',
  setup(props, { slots }) {
    return () => <div>{slots.default?.()}</div>
  },
})
