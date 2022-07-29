import { defineComponent } from 'vue'
import s from './nav.module.scss'
import img from '../assets/logo.png'

export const Nav = defineComponent({
  name: 'Nav',
  setup() {
    return () => (
      <header class={s.wrapper}>
        <div class={s.left}>
          <img src={img} alt="" />
          Ding Design-Vue3.0
        </div>
        <div class={s.right}>
          <a href="https://standard.dingtalk.com" target="_blank">
            钉钉官方React版本
          </a>
        </div>
      </header>
    )
  },
})
