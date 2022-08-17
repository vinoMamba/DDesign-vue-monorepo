import { defineComponent, ref, shallowRef } from 'vue'
import { Api, ApiType } from '../components/Api'
import { Demo, DemoType } from '../components/Demo'
import Message1 from '../demo-code/Message1.vue'

export const MessageDemo = defineComponent({
  name: 'InputDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '基本使用。',
        component: shallowRef(Message1),
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
        <Demo title="消息提示 useMessage" demoList={demoList.value} />
        <Api apiList={apiList.value} />
      </>
    )
  },
})
