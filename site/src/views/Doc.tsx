import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import s from './doc.module.scss'

export const Doc = defineComponent({
  setup() {
    const componentList = ref([
      { link: 'button', title: '按钮', enTitle: 'Button' },
      { link: 'input', title: '输入框', enTitle: 'Input' },
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
