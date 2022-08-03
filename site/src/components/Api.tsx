import { defineComponent, PropType } from 'vue'
import s from './api.module.scss'

export interface ApiType {
  attr: string
  notes: string
  type: string
  optionalValue: string
  default: string
}

const ApiProps = {
  apiList: {
    type: Array as PropType<ApiType[]>,
    default: () => [],
  },
} as const
export const Api = defineComponent({
  props: ApiProps,
  setup(props) {
    return () => (
      <div class={s.wrapper}>
        <h4>Attributes</h4>
        <div class={s.api}>
          <ul>
            <li class={s['api-title']}>
              <span>属性</span>
              <span>说明</span>
              <span>类型</span>
              <span>可选值</span>
              <span>默认值</span>
            </li>
            {props.apiList.map((item) => (
              <li class={s['api-item']} key={item.attr}>
                <span>{item.attr}</span>
                <span>{item.notes}</span>
                <span>{item.type}</span>
                <span>{item.optionalValue}</span>
                <span>{item.default}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
})
