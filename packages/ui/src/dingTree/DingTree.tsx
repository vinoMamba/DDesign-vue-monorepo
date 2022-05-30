import { defineComponent } from 'vue'
import { DModal } from '..'

export default defineComponent({
  name: 'DingTree',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <DModal v-model:visible={props.visible}>
        {{
          title: () => '选择人员',
          content: () => 'DingTree',
        }}
      </DModal>
    )
  },
})
