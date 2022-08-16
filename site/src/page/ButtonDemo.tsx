import { defineComponent, ref, shallowRef } from 'vue'
import { Api, ApiType } from '../components/Api'
import { Demo, DemoType } from '../components/Demo'

import Button1 from '../demo-code/Button1.vue'
import Button2 from '../demo-code/Button2.vue'
import Button3 from '../demo-code/Button3.vue'
import Button4 from '../demo-code/Button4.vue'

export const ButtonDemo = defineComponent({
  name: 'ButtonDemo',
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: '基础按钮，可以disabled属性',
        component: shallowRef(Button1),
      },
      {
        codeVisible: false,
        title:
          '按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。',
        component: shallowRef(Button2),
      },
      {
        codeVisible: false,
        title: '添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。',
        component: shallowRef(Button3),
      },
      {
        codeVisible: false,
        title: '添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。',
        component: shallowRef(Button4),
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
