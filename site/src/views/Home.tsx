import { defineComponent } from 'vue'
import { DButton } from '@vino/dt-design'
import { RouterLink } from 'vue-router'
import s from './home.module.scss'

export const Home = defineComponent({
  setup() {
    return () => (
      <>
        <div class={s['page-one']}>
          <div class={s.content}>
            <p class={s.slogan}>钉钉风格的UI组件库</p>
            <DButton type="primary" size="large">
              <RouterLink to={'/doc'}>开始使用</RouterLink>
            </DButton>
          </div>
        </div>
      </>
    )
  },
})
