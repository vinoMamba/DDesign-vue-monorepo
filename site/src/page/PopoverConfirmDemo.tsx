import { defineComponent, ref, shallowRef } from 'vue'
import type { ApiType } from '../components/Api'
import { Api } from '../components/Api'
import type { DemoType } from '../components/Demo'
import { Demo } from '../components/Demo'
import PopoverConfirm1 from '../demo-code/PopoverConfirm1.vue'

export const PopoverConfirmDemo = defineComponent({
  name: 'PopoverConfirmDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '最简单的用法。',
        component: shallowRef(PopoverConfirm1),
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
