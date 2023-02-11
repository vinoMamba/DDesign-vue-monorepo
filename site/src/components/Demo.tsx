import type { PropType } from 'vue'
import { Transition, defineComponent, h } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import s from './demo.module.scss'

export interface DemoType {
  codeVisible: boolean
  title: string
  component: Object
}

const Prism = (window as any).Prism

export const Demo = defineComponent({
  name: 'Demo',
  props: {
    demoList: {
      type: Array as PropType<DemoType[]>,
      default: () => [],
    },
    title: {
      type: String,
      default: '功能操作',
    },
  },
  setup(props) {
    const getHtml = (component: any) => {
      return Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
    }
    return () => (
      <>
        <h6 class={s.title}>{props.title}</h6>
        {props.demoList.map(demo => (
          <div class={s.demo} key={demo.title}>
            <p>{demo.title}</p>
            <div class={s['demo-component']}>{h(demo.component)}</div>
            <div class={s['demo-actions']}>
              {demo.codeVisible
                ? (
                <div class={s['demo-actions-button']} onClick={() => (demo.codeVisible = false)}>
                  隐藏示例代码
                </div>
                  )
                : (
                <div
                  class={s['demo-actions-button-watch']}
                  onClick={() => (demo.codeVisible = true)}
                >
                  查看示例代码
                </div>
                  )}
            </div>
            <Transition name={s['code-source']}>
              {demo.codeVisible
                ? (
                <div class={s['demo-code']}>
                  <pre class={s['language-html']} v-html={getHtml(demo.component)}></pre>
                </div>
                  )
                : null}
            </Transition>
          </div>
        ))}
      </>
    )
  },
})
