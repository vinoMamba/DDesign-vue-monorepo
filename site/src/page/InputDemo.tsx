import { defineComponent, ref, shallowRef } from 'vue'
import type { ApiType } from '../components/Api'
import { Api } from '../components/Api'
import type { DemoType } from '../components/Demo'
import { Demo } from '../components/Demo'
import Input1 from '../demo-code/Input1.vue'
import Input2 from '../demo-code/Input2.vue'
import Input3 from '../demo-code/Input3.vue'

export const InputDemo = defineComponent({
  name: 'InputDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '基本使用。',
        component: shallowRef(Input1),
      },
      {
        codeVisible: false,
        title: '前置/后置标签',
        component: shallowRef(Input2),
      },
      {
        codeVisible: false,
        title: '带移除图标的输入框，点击图标删除所有内容。',
        component: shallowRef(Input3),
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
        <Demo title="输入框 Input" demoList={demoList.value} />
        <Api apiList={apiList.value} />
      </>
    )
  },
})
