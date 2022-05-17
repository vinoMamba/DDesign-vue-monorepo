import { defineComponent } from 'vue'
import { DInput } from '../components'

export default defineComponent({
  name: 'DInputPassword',
  props: {},
  emits: ['change', 'input', 'blur', 'focus', 'update:value'],
  setup() {
    return () => <DInput type="password" />
  },
})
