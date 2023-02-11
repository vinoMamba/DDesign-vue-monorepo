import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import img from '../assets/logo.png'
import s from './nav.module.scss'

export const Nav = defineComponent({
  name: 'SiteNav',
  setup() {
    return () => (
      <header class={s.wrapper}>
        <RouterLink to={'/home'}>
          <div class={s.left}>
            <img src={img} alt="" />
            Ding Design-Vue3.0
          </div>
        </RouterLink>
        <div class={s.right}>
          <a href="https://standard.dingtalk.com" target="_blank">
            钉钉官方React版本
          </a>
        </div>
      </header>
    )
  },
})
