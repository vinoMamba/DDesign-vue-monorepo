import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import s from './doc.module.scss'

export const Doc = defineComponent({
  setup() {
    const componentList = ref([
      { link: 'button', title: '按钮', enTitle: 'Button' },
      { link: 'input', title: '输入框', enTitle: 'Input' },
      { link: 'message', title: '消息', enTitle: 'Message' },
      { link: 'modal', title: '对话框', enTitle: 'Modal' },
      { link: 'tooltip', title: '文字提示', enTitle: 'Tooltip' },
    ])
    return () => (
      <div class={s.wrapper}>
        <aside>
          <ul>
            {componentList.value.map((component) => (
              <li key={component.enTitle}>
                <RouterLink to={`/doc/${component.link}`} activeClass={s['router-link-active']}>
                  {component.title}
                </RouterLink>
              </li>
            ))}
          </ul>
        </aside>
        <main>
          <RouterView />
        </main>
      </div>
    )
  },
})
