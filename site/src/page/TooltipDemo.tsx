import { defineComponent, ref, shallowRef } from 'vue'
import { Api, ApiType } from '../components/Api'
import { Demo, DemoType } from '../components/Demo'
import Tooltip1 from '../demo-code/Tooltip1.vue'

export const TooltipDemo = defineComponent({
  name: 'TooltipDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '最简单的用法。',
        component: shallowRef(Tooltip1),
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
