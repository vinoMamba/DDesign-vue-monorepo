import { defineComponent, type PropType } from 'vue'

export const UserTreeTitle = defineComponent({
  name: 'UserTreeTitle',
  props: {
    title: {
      type: String as PropType<String>,
      default: '选择人员',
    },
  },
  setup(props) {
    return () => <h1>{props.title}</h1>
  },
})
