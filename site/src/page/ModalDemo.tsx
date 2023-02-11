import { defineComponent, ref, shallowRef } from 'vue'
import type { ApiType } from '../components/Api'
import { Api } from '../components/Api'
import type { DemoType } from '../components/Demo'
import { Demo } from '../components/Demo'
import Modal1 from '../demo-code/Modal1.vue'
import Modal2 from '../demo-code/Modal2.vue'

export const ModalDemo = defineComponent({
  name: 'ModalDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '基本使用。',
        component: shallowRef(Modal1),
      },
      {
        codeVisible: false,
        title: '基本使用。',
        component: shallowRef(Modal2),
      },
    ])
    const apiList = ref<ApiType[]>([
      {
        attr: 'theme',
        type: 'String',
        notes: '主题',
        optionalValue: 'button / link / text',
        default: 'button',
      },
      {
        attr: 'size',
        type: 'String',
        notes: '大小',
        optionalValue: 'normal / larger / small',
        default: 'normal',
      },
      {
        attr: 'level',
        type: 'String',
        notes: '状态',
        optionalValue: 'normal / success/ warning / error',
        default: 'normal',
      },
      {
        attr: 'loading',
        type: 'boolean',
        notes: '加载中',
        optionalValue: 'false / true',
        default: 'false',
      },
      {
        attr: 'disabled',
        type: 'boolean',
        notes: '禁用',
        optionalValue: 'false / true',
        default: 'false',
      },
    ])
    return () => (
      <>
        <Demo title="对话框 Modal" demoList={demoList.value} />
        <Api apiList={apiList.value} />
      </>
    )
  },
})
