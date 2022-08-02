import { defineComponent, ref, shallowRef } from 'vue'
import Api, { ApiType } from '../components/Api.vue'
import Demo, { DemoType } from '../components/Demo.vue'
import Button1 from '../demo-code/Button.vue'

export const ButtonDemo = defineComponent({
  name: 'ButtonDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '基础按钮，可以disabled属性',
        component: shallowRef(Button1),
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
        <Demo title="按钮 Button" demoList={demoList.value} />
        <Api apiList={apiList.value} />
      </>
    )
  },
})
