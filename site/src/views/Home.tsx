import { defineComponent } from 'vue'
import s from './home.module.scss'
import { DButton } from '@vino/dt-design'
import { RouterLink } from 'vue-router'

export const Home = defineComponent({
  setup() {
    return () => (
      <>
        <div class={s['page-one']}>
          <div class={s.content}>
            <p class={s.slogan}>企业级产品设计系统</p>
            <DButton type="primary" size="large">
              <RouterLink to={'/doc'}>开始使用</RouterLink>
            </DButton>
          </div>
        </div>
      </>
    )
  },
})
